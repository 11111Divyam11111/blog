"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateUser() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [check, setPasswordCheck] = useState(false);

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
      localStorage.setItem("user", JSON.stringify(data));
      router.refresh();
      router.push("/user/profile");
      router.refresh();
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Failed to create user");
    }
    router.refresh();
    router.push("/user/profile");
    router.refresh();
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="md:w-1/2 justify-center flex flex-col gap-10 m-7"
      >
        <label className="flex justify-start gap-6 indicator">
        <span className="indicator-item badge">*</span>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            required
            type="text"
            placeholder="Username"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>
        <label className="flex justify-start gap-12 indicator">
        <span className="indicator-item badge">*</span>

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
        <label className="flex justify-start gap-12 indicator">
        <span className="indicator-item badge">*</span>
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
     
    </>
  );
}

