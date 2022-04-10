import React from 'react'
import { useRouter } from 'next/router'


import Button from "components/common/Button";

export default function AfterSignUp({ }: Props) {
  const router = useRouter()
  return (
    <div>
      <h1 className='text-4xl font-bold my-2'>Thank you...</h1>
      <p className='text-gray-500 my-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>

      <Button className='mt-8 py-4 px-24 font-bold capitalize' label='Back to home' onClick={() => { router.push('/#') }} />
      <p className='text-gray-500 my-4'>Question? Email us<a className='text-blue-500 font-bold mx-2' href="#">help@ubiscore.com</a></p>
    </div>
  )
}

type Props = {}