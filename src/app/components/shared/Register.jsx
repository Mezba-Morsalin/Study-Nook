"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
  const onSubmitForm = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries());
    console.log(user)

    const {data, error} = await authClient.signUp.email({
      name : user.name,
      email : user.email,
      password : user.password,
      image : user.image
    });
    if(error) {
      toast.error("User Already Exists")
      return
    }
    if(data) {
      toast.success("Your Registration Successful");
      redirect("/")
  }
};
const handleGoogleLogin = async () => {
   const user = await authClient.signIn.social({
    provider: "google",
    callbackURL : "/"
  });
  if(user) {
    toast.success("Registration Successfully With Your Google Account")
  }
}
    return (
         <div className='max-w-7xl mx-auto py-16 px-5 md:px-0'>
           
           <div className='space-y-3 mb-8 text-center'>
             
             <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(251,191,36,0.25)]'>
               Create Your Account
             </h2>

            <p className='text-white/60 text-lg'>
              Join StudyNook and start booking your perfect study space
            </p>
           </div>

            <div className='max-w-xl mx-auto text-white bg-white/5 backdrop-blur-md border border-yellow-400/10 shadow-[0_0_40px_rgba(251,191,36,0.08)] p-12 rounded-3xl'>
                
                <Form onSubmit={onSubmitForm} className="flex flex-col gap-5">

        <TextField isRequired name="name" type='text'>
          
          <Label className='text-white/90'>Full Name</Label>

          <Input
            placeholder="Enter Your Username"
            className="rounded-2xl text-white bg-white/5 border border-white/10"
          />

          <FieldError />
        </TextField>

        <TextField name="image" type='url'>
          
          <Label className='text-white/90'>Image Link</Label>

          <Input
            placeholder="Image URL"
            className="rounded-2xl text-white bg-white/5 border border-white/10"
          />
        </TextField>

      <TextField 
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label className='text-white/90'>Email Address</Label>

        <Input
          placeholder="john@example.com"
          className="rounded-2xl text-white bg-white/5 border border-white/10"
        />

        <FieldError />
      </TextField>

      <TextField
        className={'relative'}
        isRequired
        minLength={8}
        name="password"
        type={showPassword ? "text" : "password"}
        validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label className='text-white/90'>Password</Label>

        <Input
          placeholder="Enter your password"
          className="rounded-2xl text-white bg-white/5 border border-white/10"
        />

        <span onClick={()=> setShowPassword(!showPassword)} className='absolute top-8.5 right-3 cursor-pointer text-white'>
          {
            showPassword ? <FaEye/> : <FaEyeSlash />
          }
        </span>

        <Description className='text-white/40'>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>

        <FieldError />
      </TextField>

      <div className="flex gap-2 w-full">
        
        <Button
          className='w-full bg-linear-to-r from-yellow-400 to-amber-500 text-[#071228] font-semibold hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.35)] rounded-2xl py-6'
          type="submit"
        >
          Create Account
        </Button>
      </div>

      <div className="flex items-center gap-4 w-full">
        
        <div className="flex-1 border-t border-white/10"></div>

        <p className="text-white/50 text-sm">
          Or Register with
        </p>

        <div className="flex-1 border-t border-white/10"></div>
      </div>

    </Form>

    <div className='flex justify-center items-center my-5'>
      
      <Button onClick={()=> handleGoogleLogin()}
        className='bg-white/5 border border-white/10 text-white hover:border-yellow-400/30 hover:-translate-y-1 transition-all duration-300 rounded-2xl px-6 py-6'
        variant='ghost'
      >
        <FcGoogle/>
        Register With Google
      </Button>
    </div>

        <div className='flex flex-col md:flex-row gap-1.5 justify-center items-center'>
            
            <p className="text-white/50">
              Already Have an Account?
            </p>

            <Link
              className='text-yellow-400 hover:text-yellow-300 transition'
              href={'/login'}
            >
              Login
            </Link>
        </div>
            </div>

            <Toaster/>
        </div>
    );
};

export default Register;