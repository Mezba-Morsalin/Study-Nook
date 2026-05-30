"use client";

import React from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import CancelBookings from "@/app/components/CancelBookings";

const AddRoomPage = () => {

  const router = useRouter()

  const categories = [
    { id: "quiet", name: "Quiet Study Room" },
    { id: "group", name: "Group Study Room" },
    { id: "computer", name: "Computer Lab" },
    { id: "library", name: "Library Zone" },
    { id: "collaboration", name: "Collaboration Zone" },
    { id: "research", name: "Research Room" },
    { id: "soloStudy", name: "Solo Study Room" },
    { id: "discussion", name: "Discussion Room" },
  ];

  const onSubmitForm =async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const facilities = formData.getAll("facilities");

    const selectedCategory = categories.find(
      (c) => c.id === data.category
    );

    const finalData = {
      ...data,
      facilities,
      categoryName: selectedCategory?.name,
    };

    console.log(finalData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
      method : 'POST',
      headers :{
        "Content-type" : "application/json"
      },
      body : JSON.stringify(finalData)
    })

    const room = await res.json();

    console.log(room)

    if(room) {
      toast.success("Room Added Successfully");
      setTimeout(()=> {
        router.push('/rooms')
      }, 1000)
    }
  };

  return (
    <div className="min-h-screen bg-[#071228] py-16 px-5">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(251,191,36,0.08)]">

        <div className="mb-10 text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-white via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            Add New Study Room
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Create and manage modern study spaces for students.
          </p>
        </div>

        <form onSubmit={onSubmitForm} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <Select name="category" isRequired className="w-full ">
              <div className="mb-2">
                <Label className="text-white">Room Category</Label>
              </div>

              <Select.Trigger className="rounded-2xl text-white bg-white/5 border border-white/10">
                <Select.Value placeholder="Select category" />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="quiet" textValue="Quiet Study Room">
                    Quiet Study Room
                  </ListBox.Item>

                  <ListBox.Item id="group" textValue="Group Study Room">
                    Group Study Room
                  </ListBox.Item>

                  <ListBox.Item id="computer" textValue="Computer Lab">
                    Computer Lab
                  </ListBox.Item>

                  <ListBox.Item id="library" textValue="Library Zone">
                    Library Zone
                  </ListBox.Item>

                  <ListBox.Item id="collaboration" textValue="Collaboration Zone">
                    Collaboration Zone
                  </ListBox.Item>

                  <ListBox.Item id="research" textValue="Research Room">
                    Research Room
                  </ListBox.Item>

                  <ListBox.Item id="soloStudy" textValue="Solo Study Room">
                    Solo Study Room
                  </ListBox.Item>

                  <ListBox.Item id="discussion" textValue="Discussion Room">
                    Discussion Room
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <TextField name="buildingName" isRequired>
              <Label className="text-white mb-2">Building Name</Label>
              <Input placeholder="Engineering Building" className="rounded-2xl text-white bg-white/5 border border-white/10" />
              <FieldError />
            </TextField>

            <TextField name="capacity" type="number" isRequired>
              <Label className="text-white mb-2">Capacity</Label>
              <Input type="number" placeholder="16" className="rounded-2xl text-white bg-white/5 border border-white/10" />
              <FieldError />
            </TextField>

            <TextField name="SelectFloor" type="number" isRequired>
              <Label className="text-white mb-2">Select Floor Number</Label>
              <Input type="number" placeholder="8" className="rounded-2xl text-white bg-white/5 border border-white/10" />
              <FieldError />
            </TextField>

            <TextField name="price" type="number">
              <Label className="text-white mb-2">Booking Price</Label>
              <Input type="number" placeholder="10" className="rounded-2xl text-white bg-white/5 border border-white/10" />
              <FieldError />
            </TextField>

            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label className="text-white mb-2">Room Image URL</Label>
                <Input type="url" placeholder="https://..." className="rounded-2xl text-white bg-white/5 border border-white/10" />
                <FieldError />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <Label className="text-white mb-3 block">Facilities</Label>

              <CheckboxGroup
                name="facilities"
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
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
              <TextField name="description" isRequired>
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
            Add Room
          </Button>
        </form>
      </div>
      <Toaster/>
    </div>
  );
};

export default AddRoomPage;