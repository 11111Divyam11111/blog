import React from 'react'
import GetUser from './GetUser'

export default function profile() {
  return (
    <div className='flex flex-col text-center justify-center cursor-pointer' >
      <h1 className='text-3xl text-center font-semibold'>All users</h1>
      <GetUser />
    </div>
  )
}
