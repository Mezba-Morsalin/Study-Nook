"use client"

import { Button, Checkbox, CheckboxGroup, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BiEdit } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';

const EditRoom = ({room}) => {
    const router = useRouter();
    const updateRoom = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData.entries());

        let facilities = formData.getAll("facilities");

        if (!Array.isArray(facilities) || facilities.length === 0) {
        const raw = formData.get("facilities");

        if (typeof raw === "string") {
        facilities = raw
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean);
        } else {
      facilities = [];
        }
    }

    const finalData = {
        ...data,
        facilities,
    };


    try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${room._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(finalData),
      }
    );

    const updateRoomData = await res.json();

    if (updateRoomData.modifiedCount > 0) {
      toast.success("Room Updated Successfully");
      router.refresh();
    } else {
      toast.error("Failed to update room");
    }
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong");
  }
};
    return (
        <div>
            <Modal>
      <Button className=' bg-[#071228] border border-[#1f3b63] text-white hover:bg-[#0c1d3a] transition-all duration-300 rounded-full px-5'>
            <FiEdit className='text-xl' />
            Edit
          </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog  className="max-w-5xl bg-[#071228] border border-[#1f3b63] text-white">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-white">
                <BiEdit/>
              </Modal.Icon>
              <Modal.Heading className='text-3xl md:text-4xl font-bold bg-linear-to-r from-white via-yellow-300 to-amber-500 bg-clip-text text-transparent text-center'>Update Room Details</Modal.Heading>
              <p className="mt-1.5 text-sm text-white/80 leading-5 text-center">
                Modify room information, facilities, pricing, and availability settings.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={updateRoom} className="space-y-8 bg-[#071228]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <Select name="category" defaultSelectedKeys={[room?.category]} isRequired className="w-full ">
              <div className="mb-2">
                <Label className="text-white">Room Category</Label>
              </div>

              <Select.Trigger className="rounded-2xl text-white bg-white/5 border border-white/10">
                <Select.Value placeholder="Select category" />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover className={'bg-[#071228] border border-[#1f3b63] text-white '}>
                <ListBox>
                  <ListBox.Item className='hover:text-black' id="quiet" textValue="Quiet Study Room">
                    Quiet Study Room
                  </ListBox.Item>

                  <ListBox.Item className='hover:text-black' id="group" textValue="Group Study Room">
                    Group Study Room
                  </ListBox.Item>

                  <ListBox.Item className='hover:text-black' id="computer" textValue="Computer Lab">
                    Computer Lab
                  </ListBox.Item>

                  <ListBox.Item className='hover:text-black' id="library" textValue="Library Zone">
                    Library Zone
                  </ListBox.Item>

                  <ListBox.Item className='hover:text-black' id="collaboration" textValue="Collaboration Zone">
                    Collaboration Zone
                  </ListBox.Item>

                  <ListBox.Item className='hover:text-black' id="research" textValue="Research Room">
                    Research Room
                  </ListBox.Item>

                  <ListBox.Item className='hover:text-black' id="soloStudy" textValue="Solo Study Room">
                    Solo Study Room
                  </ListBox.Item>

                  <ListBox.Item className='hover:text-black' id="discussion" textValue="Discussion Room">
                    Discussion Room
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <TextField name="buildingName" defaultValue={room?.buildingName} isRequired>
            <Label className="text-white mb-2">Building Name</Label>
            <Input placeholder="Engineering Building" className="rounded-2xl text-white bg-white/5 border border-white/10"/>
                <FieldError />
            </TextField>

            <TextField defaultValue={room?.capacity} name="capacity" type="number" isRequired>
              <Label className="text-white mb-2">Capacity</Label>
              <Input type="number" placeholder="16" className="rounded-2xl text-white bg-white/5 border border-white/10" />
              <FieldError />
            </TextField>

            <TextField defaultValue={room?.SelectFloor} name="SelectFloor" type="number" isRequired>
              <Label className="text-white mb-2">Select Floor Number</Label>
              <Input type="number" placeholder="8" className="rounded-2xl text-white bg-white/5 border border-white/10" />
              <FieldError />
            </TextField>

            <TextField defaultValue={room?.price} name="price" type="number">
              <Label className="text-white mb-2">Booking Price</Label>
              <Input type="number" placeholder="10" className="rounded-2xl text-white bg-white/5 border border-white/10" />
              <FieldError />
            </TextField>

            <div className="md:col-span-2">
              <TextField name="imageUrl" defaultValue={room?.imageUrl} isRequired>
                <Label className="text-white mb-2">Room Image URL</Label>
                <Input type="url" placeholder="https://..." className="rounded-2xl text-white bg-white/5 border border-white/10" />
                <FieldError />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <Label className="text-white mb-3 block">Facilities</Label>

              <CheckboxGroup
                name="facilities" defaultValue={room?.facilities || []} className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Checkbox value="wifi">
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content className="text-white">Free WiFi</Checkbox.Content>
                </Checkbox>

                <Checkbox value="ac">
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content className="text-white">Air Conditioning</Checkbox.Content>
                </Checkbox>

                <Checkbox value="projector">
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content className="text-white">Projector</Checkbox.Content>
                </Checkbox>

                <Checkbox value="whiteboard">
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content className="text-white">Whiteboard</Checkbox.Content>
                </Checkbox>

                <Checkbox value="charging">
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content className="text-white">Charging Ports</Checkbox.Content>
                </Checkbox>

                <Checkbox value="soundproof">
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content className="text-white">Soundproof Room</Checkbox.Content>
                </Checkbox>

                <Checkbox value="group">
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content className="text-white">Group Study Allowed</Checkbox.Content>
                </Checkbox>
              </CheckboxGroup>
            </div>

            <div className="md:col-span-2">
              <TextField  name="description" defaultValue={room?.description} isRequired>
                <Label className="text-white mb-2">Description</Label>
                <TextArea
                  placeholder="Describe room facilities and environment..."
                  className="rounded-3xl w-full h-34 text-white bg-white/5 border border-white/10"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full rounded-full bg-linear-to-r from-yellow-400 to-amber-500 text-[#071228] font-semibold py-7"
          >
            Update Room
          </Button>
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

export default EditRoom;