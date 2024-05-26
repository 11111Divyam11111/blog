"use client";
import React from "react";
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
    <div className="flex flex-col items-center justify-center h-full">
      <div className="p-10">
        <div>
          <h1 className="md:text-6xl text-md font-bold text-yellow-400 font-mono md:pb-32 pb-8">
            Deep dive into world of thoughts
          </h1>
        </div>
        <div
          className={
            !naam && !naam2
              ? "grid grid-cols-3 md:gap-36 gap-2 items-center"
              : "grid grid-cols-2 md:gap-36 gap-2"
          }
        >
          <div>
            <Link href="/blog">
              <button className="btn md:btn-lg btn-sm btn-info text-white">
                View Blogs
              </button>
            </Link>
          </div>
          <div>
            <Link href="/blog/create">
              <button className="btn md:btn-lg btn-info btn-sm text-white">
                Create Blog
              </button>
            </Link>
          </div>
          {!naam && !naam2 ? (
            <div>
              <Link href="/user">
                <button className="btn md:btn-lg btn-info btn-sm text-white">
                  Sign up
                </button>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
