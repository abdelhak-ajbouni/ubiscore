import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormProvider, useForm, SubmitHandler, FieldValues } from "react-hook-form";

import TextField from "components/common/TextField";
import Button from "components/common/Button";
import Checkbox from "components/common/Checkbox";
import Select from "components/common/Select";

export default function SignUpForm({ }: Props) {
  const [checked, setChecked] = useState<boolean>(false)
  const router = useRouter()
  const methods = useForm<FormValues>();
  const { handleSubmit, watch } = methods;

  const email = watch("email");
  // get last part of email
  const emailLastPart = email?.split("@")[1];
  const options = [
    {
      label: "Google Ad",
      value: "google-ad",
    },
    {
      label: "LinkedIn",
      value: "linkedin",
    },
  ];

  const onSubmit = (data: SubmitHandler<FormValues>) => { 
    console.log('data =========================', data)
    router.push('/success') 
  }

  return (
    <FormProvider {...methods}>
      <h1 className='text-4xl font-bold my-2'>Signup</h1>
      <p className='text-gray-500 my-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
      <TextField className="my-4" label={'Organization Website URL'} name={'website'} />
      <TextField
        className="my-4"
        label={'Work Email'}
        name={'email'}
        rules={{
          pattern: {
            value: /\b[\w\.-]+@((?!gmail|yahoo|hotmail).)[\w\.-]+\.\w{2,4}\b/gm,
            message: emailLastPart 
            ? "please enter your business email address. this form does not accept addresses from " + emailLastPart
            : "please enter a valid email address",
          }
        }}
      />
      <TextField className="my-4" label={'Name'} name={'name'} />
      <Select className="my-4" label={'How did you hear about us?'} name={'about'} options={options} />
      <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} />

      <Button className='mt-8 py-4 px-24 font-bold capitalize' label='Get started now' onClick={handleSubmit(onSubmit)} disabled={!checked} />
      <p className='text-gray-500 my-2'>Already have an account?<Link href="/login" passHref><span className='text-blue-500 font-bold mx-2'>Login</span></Link></p>
    </FormProvider>
  )
}

type Props = {}

type FormValues = {
  website: string
  email: string
  name: string
  about: string
}