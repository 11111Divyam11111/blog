
import Link from "next/link.js"
import CreateUser from "../_components/CreateUser.jsx"
import Footer from "../_components/Footer.jsx"


export default function page() {
  return (
    <div className='text-center flex flex-col justify-center'>
      <CreateUser />
      <div className="mt-5">
      </div>  
    </div >
  )
}
