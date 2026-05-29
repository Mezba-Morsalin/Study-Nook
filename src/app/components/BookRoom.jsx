"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  TextArea,
  FieldError,
} from "@heroui/react";

import React, { useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LuClock3 } from "react-icons/lu";

const startTimeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
];

const endTimeSlots = [
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const BookRoom = ({ room }) => {
  const [bookingDate, setBookingDate] = useState("");
  const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
  const [startTime, setStartTime] = useState("11:00");
  const [endTime, setEndTime] = useState("12:00");


  const totalPrice = useMemo(() => {
    const start = Number(startTime.split(":")[0]);
    const end = Number(endTime.split(":")[0]);

    const duration = end - start;

    if (duration <= 0) return room?.price;

    return duration * room?.price;
  }, [startTime, endTime, room?.price]);
    
  const handleSubmit = async (e)=> {
    e.preventDefault();

    const bookingData = {
      userId : user?.id,
      userName : user?.name,
      userImage : user?.image,

      roomId : room?._id,
      roomName : room?.categoryName,
      roomImage : room?.imageUrl,

      bookingDate,
      startTime,
      endTime,
      totalPrice,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify(bookingData)
      });
      const data = await res.json()
      console.log(data)

      if(data?.acknowledged) {
        toast.success(`${room.categoryName} Booking Successful`)
      }
      else {
                toast.error(data?.message || "Booking Failed")
            }
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error)
    }
  }
   
  if(isPending) {
    return (
            <div className=" shadow p-4">
                <p className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent">
                    Just a moment, setting things up...
                </p>
            </div>
        );
  }

  return (
    <div>
      <Modal>
        <Button className=" w-full bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black font-semibold py-7 rounded-2xl">
          Book Now
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className=" bg-[#071228] border border-[#1d3557] rounded-3xl sm:max-w-2xl w-full">
              <Modal.CloseTrigger />

              <Modal.Header className="px-7 pt-7 pb-3">
                <div>
                  <Modal.Heading className="text-3xl font-bold text-white">
                    Book {room?.categoryName}
                  </Modal.Heading>

                  <p className="mt-2 text-sm text-white/60">
                    Select your booking time.
                  </p>
                </div>
              </Modal.Header>

              <Modal.Body className="px-7 pb-7">
                <Surface className="bg-transparent border-none shadow-none">
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <TextField name="bookingDate" type="date" isRequired>
                      <Label className="text-white mb-2 block">
                        Booking Date
                      </Label>

                      <Input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} className="text-white bg-[#0c1b33] border border-[#26456e] rounded-xl"/>

                      <FieldError />
                    </TextField>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div>
                        <Label className="text-white mb-2 block">
                          Start Time
                        </Label>

                        <div className=" flex items-center gap-3 bg-[#0c1b33] border border-[#26456e] rounded-xl px-4 py-3">
                          <LuClock3 className="text-white/70 text-lg" />

                          <select value={startTime}  onChange={(e) => setStartTime(e.target.value)}  className=" bg-transparent text-white outline-none w-full">{startTimeSlots.map((time) => (<option key={time} value={time} className="bg-[#071228]">{time}</option>))}</select>
                        </div>
                      </div>

                      <div>
                        <Label className="text-white mb-2 block">
                          End Time
                        </Label>

                        <div className=" flex items-center gap-3 bg-[#0c1b33] border border-[#26456e] rounded-xl px-4 py-3">
                          <LuClock3 className="text-white/70 text-lg" />

                          <select value={endTime} onChange={(e) => setEndTime(e.target.value)} className="   bg-transparent   text-white   outline-none   w-full ">{endTimeSlots.map((time) => (<option key={time} value={time} className="bg-[#071228]">{time}</option>))}
                        </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-white mb-2 block">
                        Special Note
                      </Label>

                      <TextArea placeholder="Any setup needed?" className=" bg-[#0c1b33] border border-[#26456e] rounded-xl text-white w-full h-32"/>
                    </div>
                    <div className=" bg-[#0c1b33] rounded-2xl px-5 py-4 flex items-center justify-between" >
                      <div>
                        <p className="text-white/60 text-sm">
                          Total Cost
                        </p>
                        <p className="text-white/40 text-xs mt-1">
                          {room?.price}$/hour
                        </p>
                      </div>

                      <h3 className=" text-3xl font-bold bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent">
                        ${totalPrice}
                      </h3>
                    </div>
                    <div  className="pt-7 flex flex-wrap gap-5">
                      <Button className={'px-4 py-2'} slot="close" variant="secondary">
                  Cancel
                </Button>

                <Button slot="close"  type="submit" className="px-4 py-2 bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black font-semibold">
                  Confirm Booking
                </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>

              <Modal.Footer>
                
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
      <Toaster/>
    </div>
  );
};

export default BookRoom;