"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "@/app/_components/Navbar";
import { dataContext } from "@/app/user/context/context";
import Link from "next/link"

export default function CreateUser() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [check, setPasswordCheck] = useState(false);
  const notshow = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password.length < 8) {
      setPasswordCheck(true);
    }

    const newUser = { username, password, email };

    try {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        throw new Error("Failed to create user");
      }

      const data = await res.json();

      // local storage
      // localStorage.setItem("user", JSON.stringify(data)); 
      // storing data in local Storage

      //cookies
      document.cookie = `user_Long=${JSON.stringify(data)}; path=/; max-age=${60 * 60 * 24 * 300};`;
      document.cookie = `user_Session=${JSON.stringify(data)}; path=/; max-age=${60 * 60 * 24 * 14};`;

      // storing data in cookies
      router.refresh();
      router.push("/user/profile");
      router.refresh();
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Failed to create user");
    }
    finally{

    }
    router.refresh();
    router.refresh();
  };

  return (
    <>
      <dataContext.Provider value={{ username, email, password }}>
        {
          notshow == true &&<Navbar />
        }
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="md:w-1/2 flex flex-col gap-4 md:gap-8 m-7 justify-center text-center"
        >
          <label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              required
              type="text"
              placeholder="Username"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </label>
          <label>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs"
            />{
              check ? <span>Password should be more than 8 letters</span> : ""
            }
          </label>
          <label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </label>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <button
              className="bg-blue-400 p-2 text-white rounded-md"
              disabled={isLoading}
            >
              {isLoading ? <span>Adding...</span> : <span>Add user</span>}
            </button>
          </div>
        </form>
        <div>
        <p className="text-center">Do you have an account ? Click to 
        <Link href="/user/login" className="text-blue-400 text-center"> Login</Link></p>
      </div>
      </dataContext.Provider>
    </>
  );
}

