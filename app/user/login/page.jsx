"use client";

import Link from "next/link";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [museebat, setMuseebat] = useState(false);
  const [isLoading , setisLoading] = useState(false);
  
  const handleSubmit = () => {
    
  }
  

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="md:w-1/2 flex flex-col gap-10 m-7 justify-center text-center"
      >
        <h2 className="text-center">Login user</h2>
        <label>
          <input
            type="mail"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          {
            museebat && !email && <span className="text-red">Please enter email</span>
          }
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
          {
            museebat && !password && <span className="text-red">Please enter password</span>
          }
        </label>
        <div>
          <button
            className="bg-blue-400 p-2 text-white rounded-md"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? <span>Loggin...</span> : <span>Login</span>}
          </button>
        </div>
      </form>
      <Link href="/user">
        <button>
          <p className="text-center">Dont have an account ? Click to </p>
          <p className="text-blue-400 text-center">Signup</p>
        </button>
      </Link>
    </>
  );
}
