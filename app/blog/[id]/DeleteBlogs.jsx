"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

export default function DeleteBlogs({ id }) {
  const router = useRouter();
  const handleDelete = async () => {
    const data = await fetch(`http://localhost:3000/api/blog/${id}`,{
      method:"DELETE"
    });
    try{
      if(data.ok){
        const res = await data.json();
        router.push('/blog');
    router.refresh();
        return res.json();
      }
    }
    catch(err){
      return err;
    }
    router.refresh();
  }
  return (
    <button className="" onClick={()=>handleDelete(id)}>
      <div className="btn btn-lg btn-warning mt-5">
        <MdDelete />
        <p>Delete</p>
      </div>
    </button>
  );
}
