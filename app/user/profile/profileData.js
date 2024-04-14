"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function profileData() {
  function getCookie(name) {
    if (typeof document !== "undefined") {
      let value = `; ${document.cookie}`;
      let parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
  }

  let naam = getCookie("user_Long");
  let username;
  let mail;
  let password;
  if (naam) {
    naam = JSON.parse(naam);
    username = naam.username;
    mail = naam.email;
    password = naam.password;
  } else {
    // fetch data from the backend and check if the data is correctly entered by the user if yes then continue
  }

  return (
    <>
      {username && mail && password ? (
        <>
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                alt="profile icon"
                width={50}
                height={50}
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <h3>
            Hello 👋👋{" "}
            <span className="text-yellow-600 font-bold ">{username}</span>{" "}
          </h3>
          <h3>your email is : {mail}</h3>
          <h3>your password is : {password}</h3>
        </>
      ) : (
        <div className="text-sm">
          <p>Please <Link href="/user/login" className="text-blue-500"> Login</Link> if you have already made your account</p>
          <p className="text-red-300">OR</p>
          <p>Please <Link href="/user" className="text-blue-500">Signup</Link> if you havent made your account</p>
        </div>
      )}
    </>
  );
}
