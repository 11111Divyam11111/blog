"use client"
// import { decrypt } from "dotenv";
// import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function profileData() {
  const router = useRouter();


  const user = sessionStorage.getItem("user");
  const pass = sessionStorage.getItem("pass");
  const mail = sessionStorage.getItem("mail");

  const item = {user , pass , mail};


  return (
    <>
      {
        item ? <><h3>Hello user : {user}</h3>
      <h3>your email is : {mail}</h3>
      <h3>your password is : {pass}</h3></> : "Please Signup"
      }
      
    </>
  );
}

// export default function profileData()
// {
//   const data = cookies.get('session')?.value
//   return data ? JSON.parse(decrypt(data)) : null;
// }
