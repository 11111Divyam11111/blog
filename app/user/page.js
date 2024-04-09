
import Link from "next/link.js"
import CreateUser from "./CreateUser.jsx"
import Footer from "../_components/Footer.jsx"


export default function page() {
  return (
    <div className='text-center flex flex-col justify-center'>
      <p>Create user</p>
      <CreateUser />
      <div className="mt-5">
      <Link href="/user/login">
            Do have an account ? Click to <button className="text-blue-400">Login</button>
      </Link>
      </div>
    <Footer/>
      
      
    </div >
  )
}
