"use client"

import { Button, Input, Label, Modal, Surface, TextField, Select, TextArea, FieldError } from '@heroui/react';
import { format } from 'date-fns';
import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { LuClock3 } from 'react-icons/lu';

const BookRoom = ({room}) => {
     const today = format(new Date(), "MMMM do, yyyy");
    return (
        <div>
            <Modal>
      <Button className=' w-full bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black font-semibold py-7 rounded-xl hover:scale-[1.02] transition-all duration-300 '>
              Book Now
            </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="bg-[#071228]
            border
            border-[#1d3557]
            rounded-3xl
            shadow-2xl
            sm:max-w-xl
            w-full
            overflow-hidden">
            <Modal.CloseTrigger />
            <Modal.Header className="px-7 pt-7 pb-3">
              <div>
                <Modal.Heading className="text-3xl font-bold text-white">
                  Book {room?.categoryName}
                </Modal.Heading>

                <p className="mt-2 text-sm text-white/60 leading-6">
                  Pick a date and time slot. Bookings run on the hour.
                </p>
              </div>
            </Modal.Header>
                      <Modal.Body className="px-7 pb-7">
              <Surface className="bg-transparent border-none shadow-none">
                
                <form className="space-y-5">
                  
                  {/* Date */}
                  <div className="md:col-span-2">
                <TextField  name="bookingDate" type="date" isRequired>
                  <Label className="text-white mb-2 block">Booking Date</Label>
                  <Input type="date" className="text-white bg-[#0c1b33]
                        border
                        border-[#26456e]
                        rounded-xl
                        px-4
                        py-3" />
                  <FieldError />
                </TextField>
              </div>

                  {/* Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Start */}
                    <div>
                      <Label className="text-white mb-2 block">
                        Start
                      </Label>

                      <div
                        className="
                        flex
                        items-center
                        gap-3
                        bg-[#0c1b33]
                        border
                        border-[#FFB300]
                        rounded-xl
                        px-4
                        py-3
                        "
                      >
                        <LuClock3 className="text-white/70 text-lg" />

                        <select
                          className="
                          bg-transparent
                          text-white
                          outline-none
                          w-full
                          "
                        >
                          <option
                            className="bg-[#071228]"
                          >
                            09:00
                          </option>

                          <option
                            className="bg-[#071228]"
                          >
                            10:00
                          </option>

                          <option
                            className="bg-[#071228]"
                          >
                            11:00
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* End */}
                    <div>
                      <Label className="text-white mb-2 block">
                        End
                      </Label>

                      <div
                        className="
                        flex
                        items-center
                        gap-3
                        bg-[#0c1b33]
                        border
                        border-[#26456e]
                        rounded-xl
                        px-4
                        py-3
                        "
                      >
                        <LuClock3 className="text-white/70 text-lg" />

                        <select
                          className="
                          bg-transparent
                          text-white
                          outline-none
                          w-full
                          "
                        >
                          <option
                            className="bg-[#071228]"
                          >
                            11:00
                          </option>

                          <option
                            className="bg-[#071228]"
                          >
                            12:00
                          </option>

                          <option
                            className="bg-[#071228]"
                          >
                            01:00
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Note */}
                  <div>
                    <Label className="text-white mb-2 block">
                      Special note (optional)
                    </Label>

                    <TextArea
                      placeholder="Any setup needed?"
                      className="
                      bg-[#0c1b33]
                      border
                      border-[#26456e]
                      rounded-xl
                      text-white
                      w-full
                      "
                    />
                  </div>

                  {/* Total */}
                  <div
                    className="
                    bg-[#0c1b33]
                    rounded-2xl
                    px-5
                    py-4
                    flex
                    items-center
                    justify-between
                    "
                  >
                    <p className="text-white/70 font-medium">
                      Total cost
                    </p>

                    <h3
                      className="
                      text-3xl
                      font-bold
                      bg-linear-to-r
                      from-[#FFD700]
                      via-[#FFC107]
                      to-[#FFB300]
                      bg-clip-text
                      text-transparent
                      "
                    >
                      $24
                    </h3>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default BookRoom;