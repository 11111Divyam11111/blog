  import React from 'react'
import dynamic from 'next/dynamic'

const Profile = dynamic(() => import("./profileData"),{
  ssr: false,
})

export default function page() {
  return (
    <div className='lg:mt-10 text-center'>
      <Profile/>
    </div>
  )
}
