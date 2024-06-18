"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import prof2 from "@/public/prof2.jpg";

const Local = () => {
  const [user2, setUser2] = useState("");

  useEffect(() => {
    const saveUser = localStorage.getItem("user2");
    setUser2(saveUser ?? "");
  }, []);

  return <div>{user2}</div>;
};

const ProfileData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://blog-iota-ruddy.vercel.app/user`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  const getCookie = (name) => {
    if (typeof document !== "undefined") {
      let value = `; ${document.cookie}`;
      let parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
  };

  let naam = getCookie("user_Long");
  let naam2 = getCookie("user_Session");

  let username = "";
  let email = "";
  let password = "";

  if (naam == null && naam2 == null) {
    if (user) {
      username = user.username;
      email = user.email;
      password = user.password;
    }
  } else {
    naam = JSON.parse(naam || naam2);
    username = naam.username;
    email = naam.email;
    password = naam.password;
  }

  return (
    <div className="container mx-auto p-4">
      {username && email && password ? (
        <div className="grid md:grid-cols-2 lg:m-10 gap-10">
          <div className="avatar grid justify-end">
            <div className="rounded-full ring ring-amber-600 items-center">
              <Image
                alt="profile icon"
                width={150}
                height={150}
                src={prof2}
                className="profile-img"
              />
            </div>
          </div>
          <div className="grid justify-start align-middle">
            <div className="text-lg">
              <h3>
                Hello
                <span className="text-yellow-600 font-bold"> {username}</span>
                {email === "divyamraj110@gmail.com" ? (
                  <p>Status: Admin</p>
                ) : (
                  <p>Status: User</p>
                )}
              </h3>
              <h3>Email: {email}</h3>
              <h3>Password: {password}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-xs text-center">
          <p>
            Please{" "}
            <Link href="/user/login" className="text-blue-500">
              Login
            </Link>{" "}
            if you have already made your account.
          </p>
          <p className="text-red-300">OR</p>
          <p>
            Please{" "}
            <Link href="/user" className="text-blue-500">
              Signup
            </Link>{" "}
            if you haven`&apos;`t made your account.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileData;
