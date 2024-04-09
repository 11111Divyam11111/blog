"use client"
import { useEffect, useState } from "react";
import DeleteBlogs from "../DeleteBlogs";
import { Like, DisLike } from "../workFunction";
import { useRouter } from "next/navigation";

export default function TicketList({params}) {
  const [blogs, setBlogs] = useState([]); // Corrected state variable name
  const {id} = params;
    const router = useRouter();

    useEffect((id) => {
        const handleSubmit = async () => {
            if (blogs.length === 0) {
                try {
                    const res = await fetch(`http://localhost:3000/api/blog/${id}`);

                    if (!res.ok) {
                        throw new Error("Failed to fetch");
                    }
              
                    const data = await res.json(); // Parse response as JSON
                    setBlogs(data); // Update the users state with fetched data
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };
        handleSubmit();
    },[blogs]);
  try {

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto m-3">
          {blogs.map((post) => (
            <button key={post._id} className="bg-white rounded-lg shadow-md p-6" onClick={()=>router.push(`/blog/${post._id}`)}>
                <div>
                  <p className="text-xl font-bold mb-2">Creator: {post.title}</p>
                  <p className="text-gray-700">{post.blog.slice(0, 250)}..</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4">
                      <Like />
                      <DisLike />
                    </div>
                    <p className="text-sm text-gray-500 absolute -mb-3 ml-20">
                      Posted: {post.createdAt.slice(0, 10)} at {post.createdAt.slice(11, 16)} IST
                    </p>
                  </div>
                </div>
              <div className="mt-10">
                  <DeleteBlogs id={post._id} />
              </div>
            </button>
          ))}
          {blogs.length === 0 && (
            <p className="text-center text-gray-500">There are no blogs, sorry!</p>
          )}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error rendering ticket list:", error);
    return <div>Error fetching ticket list. Please try again later.</div>;
  }
}