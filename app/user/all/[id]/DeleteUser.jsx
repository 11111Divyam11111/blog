"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdDelete } from 'react-icons/md'

export default function DeleteUser({id}) {
  const i = id;
  const router = useRouter();
    const handleDelete = async (i) => {
      const data = await fetch(`http://localhost:3000/api/user/${i}`,{
        method:"DELETE"
      });
      try{
        if(data.ok){
          const res = await data.json();
          return res.json();
        }
      }
      catch(err){
        return err;
      }  
      finally{
        router.refresh();
      }   
    }

  return (
    <div>
    <button className="btn btn-sm btn-warning " onClick={()=>handleDelete(i)}>
    <MdDelete/>
    </button>
</div>
  )
}
