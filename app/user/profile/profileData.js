"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import prof2 from "@/public/prof2.jpg"

const Local = () => {
  let saveUser = "";
  useEffect(() => {
    saveUser = localStorage.getItem("user2");
    setUser2(saveUser ?? "");
  }, []);
  const [user2, setUser2] = useState(saveUser ?? "");

}

async function profileData() {
  const [user, setUser] = useState({});
  const data = await fetch("http://localhost:3000/api/user");
  const res = await data.json();
  console.log(user);

  function getCookie(name) {
    if (typeof document !== "undefined") {
      let value = `; ${document.cookie}`;
      let parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
  }
  let naam = getCookie("user_Long");
  let naam2 = getCookie("user_Session");

  let username;
  let mail;
  let password;
  if (naam == null && naam2 == null) {
    setUser(res);
    username = res.username;
    mail = naam.email;
    password = naam.password;
  } else {
    naam = JSON.parse(naam);
    username = naam.username;
    mail = naam.email;
    password = naam.password;
  }

  return (
    <>
      {username && mail && password ? (
        <>
          <div className="grid md:grid-cols-2 m-20 gap-20">
            <div className="avatar grid justify-end">
              <div className="rounded-sm ring ring-amber-600">
                <Image
                  alt="profile icon"
                  width={200}
                  height={200}
                  src={prof2}
                  className="profile-img"
                />
              </div>
            </div>
            <div className=" grid justify-start align-middle">
            <div className="text-3xl justify-items-center align-items-center">
              <h3 >
                Hello
                <span className="text-yellow-600 font-bold "> {username}</span>{" "}
                {
                  mail == "divyamraj110@gmail.com" ? <p>Status : Admin</p> : <p>Status: User</p>
                }
              </h3>
              <h3>Email :  {mail}</h3>
              <h3>password :  {password}</h3>
            </div>
            </div>
          </div>


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


export default profileData;