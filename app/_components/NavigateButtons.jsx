import React from 'react'
import Link from "next/link";

export default function NavigateButtons() {
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
          <Link href="/user">
            <button className="btn btn-md btn-warning">
              Sign up
            </button>
          </Link>
        </div>
  )
}
