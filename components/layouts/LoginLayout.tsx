
import Image from 'next/image'

import Carousel from 'components/common/Carousel'

import logo from 'public/logo.png'

export default function LoginLayout({ children }: Props) {
  return (
    <main className='container-fluid flex m-auto min-h-screen'>

      <div className='w-1/2 bg-[#141933]'>
        <div className='w-2/3 m-auto my-24'>
          <Carousel items={items} />
        </div>
      </div>
      <div className='w-1/2 bg-gray-100'>
        <div className='bg-white mx-8 mb-8 p-8 rounded-b-2xl'>
          <div className='mt-8 mb-16'>
            <Image src={logo} alt='logo' />
          </div>
          {children}
        </div>
      </div>
    </main>
  )
}

type Props = {
  children: React.ReactNode
}

const items = [
  {
    name: "Jerrome Bell",
    title: "product designer",
    content: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  },
  {
    name: "Mike Smith",
    title: "web developer",
    content: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  },
  {
    name: "John Doe",
    title: "frontend developer",
    content: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
  }
]