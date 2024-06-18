"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function DeleteBlogs({ id }) {
  const [valid, setValid] = useState(false);
  function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  let data = getCookie("user_Session");

  if(data){
    data = JSON.parse(data);
  }


  // yahan par valid_id user ki id hai aur id blog ki id hai.....to hame actually ye karna hai ki jo blog ki id hai wo user wale data main
  // present blog ki id main se match kare
  // if(valid_id==id) {
  //   setValid(true);
  // }
  
  const router = useRouter();
  const handleDelete = async () => {
    const data = await fetch(`http://localhost:3000/api/blog/${id}`, {
      method: "DELETE",
    });
    try {
      if (data.ok) {
        setValid(true);
        const res = await data.json();
        router.push("/blog");
        router.refresh();
        return res.json();
      } else{
        setValid(false);
      }
    } catch (err) {
      return err;
    }
    router.refresh();
  };
  return (
    <div className="flex justify-center align-top">
      {!valid==true && data && data.email == "divyamraj110@gmail.com" ? (
        <button className="" onClick={() => handleDelete(id)}>
          <div className="btn btn-lg btn-warning mt-5">
            <MdDelete />
            <p>Delete</p>
          </div>
        </button>
      ) : (
        <>
          <div className="rating flex flex-row gap-3 ">
          <p>Rate :  </p>
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
            />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
        </>
      )}
    </div>
  );
}
