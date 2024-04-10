"use client"
import  React from "react";

export default function profileData() {
  const insaan = localStorage.getItem('user');
  const person = JSON.parse(insaan);
  const username = person.username;
  const mail = person.email;
  const password = person.password;

  const item = {username,mail,password};

  return (
    <>
      {
        item ? <>
        <h3>Hello 👋👋 <span className="text-yellow-600 font-bold ">{username }</span> </h3>
      <h3>your email is : {mail}</h3>
      <h3>your password is : {password}</h3></> : "Please Signup"
      }
    </>
  );
}
