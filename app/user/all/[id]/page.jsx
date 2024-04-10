"use client"
import DeleteUser from "./DeleteUser";


export default function page({params}) {
    const {id} = params;
  return (
    <div className="text-center">
     {id}
     <DeleteUser id={id}/>
    </div>
  )
}
