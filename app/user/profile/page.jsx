  import React from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/app/_components/Navbar'

const Profile = dynamic(() => import("./profileData"),{
  ssr: false,
})

export default function page() {
  return (
    <>
    <Navbar/>
    <div className='lg:mt-10 text-center'>
      <Profile/>
    </div>
    </>
  )
}
