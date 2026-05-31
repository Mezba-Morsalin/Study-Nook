"use client"
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CancelBookings = ({booking}) => {
    const router = useRouter()

    const handleDelete = async() =>{

      const {data : tokenData} = await authClient.token()

        try {
             const id = booking?._id;

      if (!id) {
        console.log("No booking id found", booking);
        return;
      }

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`, {
                method : "DELETE",
                headers : {
                  authorization : `Bearer ${tokenData?.token}`
                }
            });

            const data = await res.json();

            if(data?.deletedCount > 0) {
                toast.success(`${booking.roomName} Booking Cancel Successfully`)
                router.refresh()
            }
            else{
                toast.error("Booking Cancel Failed")
            }
            
        } catch (error) {
            console.log(error)
            toast.error("Something Went Wrong")
        }
    }
    return (
        <div>
            <AlertDialog>
      <Button className={'border-2 border-red-500 text-red-500 p-5 rounded-full hover:border-red-400 hover:text-red-400 hover:scale-105 transition-transform duration-300  bg-[#061a3a] flex items-center gap-2'}><RiDeleteBin6Line /> Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] border border-[#335483] rounded-2xl text-white bg-[#061a3a]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className='text-white'>Cancel Your Booking {booking?.roomName} permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className='text-white/80'>
                This will permanently Cancel <strong>{booking?.roomName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button className={"text-gray-700"} slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onPress={handleDelete} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    <Toaster/>
        </div>
    );
};

export default CancelBookings;