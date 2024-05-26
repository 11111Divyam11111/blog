import React from 'react'
import GetUser from './GetUser'
import Navbar from '@/app/_components/Navbar'

export default function profile() {
  return (
    <>
    <div className='flex flex-col text-center justify-center cursor-pointer' >
      <GetUser />
    </div>
    </>
  )
}
