"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, blog }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      // Assuming MongoDB Atlas API endpoint for saving blog data
      const data = await res.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    router.refresh();
    router.push("/blog");
    router.refresh();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 flex flex-col gap-10 m-7 text-white"
      >
        <h2 className="text-center">Add a new blog</h2>
        <label>
          <input
            type="text"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="input input-bordered input-success w-full max-w-xs"
          />
        </label>
        <label>
          <textarea
            className="textarea textarea-success textarea-lg w-full max-w-xs"
            placeholder="Blog"
            required
            onChange={(e) => setBlog(e.target.value)}
            value={blog}
          ></textarea>
        </label>
        <div>
          <button className="btn btn-md bg-white sm:btn-sm md:btn-md lg:btn-lg" disabled={isLoading}>
            {isLoading ? <span>Adding...</span> : <span>Add Blog</span>}
          </button>
        </div>
      </form>
    </>
  );
}
