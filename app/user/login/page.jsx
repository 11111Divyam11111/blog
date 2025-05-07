"use client";

import Link from "next/link";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { dataContext } from "@/app/user/context/context";

export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [museebat, setMuseebat] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  let naam = getCookie("user_Long");
// //   const naam1 = JSON.parse(naam);
//   const u = naam1.username;
//   const m = naam1.email;
//   const p = naam1.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (m == email && p == password && u == username) {
      document.cookie = `user_Session=${JSON.stringify(naam1)};path=/;max-age=${
        60 * 60 * 24 * 14
      }}`;
      router.refresh();
      router.push("/user/profile");
      router.refresh();
    } else {
      alert("Invalid details");
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="md:w-1/2 flex flex-col gap-4 md:gap-8 m-7 justify-center text-center"
      >
        <h2 className="text-center">Login user</h2>
        <label>
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          {museebat && !username && (
            <span className="text-red">Please enter username</span>
          )}
        </label>
        <label>
          <input
            type="mail"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          {museebat && !email && (
            <span className="text-red">Please enter email</span>
          )}
        </label>
        <label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          {museebat && !password && (
            <span className="text-red">Please enter password</span>
          )}
        </label>
        <div>
          <button
            className="bg-blue-400 p-2 text-white rounded-md"
            disabled={isLoading}
          >
            {isLoading ? <span>Loggin...</span> : <span>Login</span>}
          </button>
        </div>
      </form>
      <div>
        <p className="text-center">Dont have an account ? Click to 
        <Link href="/user" className="text-blue-400 text-center"> Signup</Link></p>
      </div>
    </>
  );
}
