"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {useState, useEffect ,} from "react";

export default function Navbar() {
  const [details,setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  const handleLogout =()=>{
    setDetails();
    localStorage.removeItem('user');
    router.push('/blog');
  }

  useEffect(()=>{
    let data = localStorage.getItem('user');
    if(!data && pathName=="/user/profile"){
      router.push('/user');
    }else if(data && pathName=="user"){
      router.push("/user/profile")
    }
    else{
      setDetails(JSON.parse(data));
    }
  },[details])
  return (
    <div className="flex bg-black h-20 justify-center w-full text-amber-400">
      <div className="flex p-8 justify-center gap-5 md:gap-32 w-full " >
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blogs</Link>
        <Link href='/user/all'>Users</Link>
        {
          details && details.username  && details.password && details.email? 
          <>
          <Link href='/user/profile'>Profile</Link>
          <button onClick={handleLogout}>Logout</button>
          </>
           : 
          <Link href='/user'>Signup</Link>
        }        
      </div>
    </div>    
  )
}
