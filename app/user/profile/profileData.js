"use client";
import React from "react";
import Image from "next/image"

export default function profileData() {
  function getCookie(name) {
    if (typeof document !== 'undefined') {
      let value = `; ${document.cookie}`;
      let parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
  }

  let naam = getCookie("user");
  if (naam) {
    naam = JSON.parse(naam);
  } else {
    console.error("Cookie not found or invalid JSON format");
  }
  const username = naam.username;
  const mail = naam.email;
  const password = naam.password;

  const item = { username, mail, password };

  return (
    <>
      {item ? (
        <>
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image alt="profile icon"  width={50} height={50} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
        "Please Signup"
      )}
    </>
  );
}
