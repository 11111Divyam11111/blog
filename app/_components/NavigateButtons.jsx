"use client"
import React from 'react'
import Link from "next/link";

export default function NavigateButtons() {
  function getCookie(name) {
    if (typeof document !== "undefined") {
      let value = `; ${document.cookie}`;
      let parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
  }
  let naam = getCookie("user_Long");
  let naam2 = getCookie("user_Session");
  return (
       <div className="flex justify-center my-3 flex-row gap-10">
          <Link href="/blog">
            <button className="btn btn-md btn-warning">
              View Blogs
            </button>
          </Link>
          <Link href="/blog/create">
            <button className="btn btn-md btn-warning">
              Create Blog
            </button>
          </Link>
          {
            !naam && !naam2 ? 
            <Link href="/user">
            <button className="btn btn-md btn-warning">
              Sign up
            </button>
          </Link>
          : 
          ""
          }
          
        </div>
  )
}
