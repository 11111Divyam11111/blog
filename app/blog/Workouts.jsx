
import { Like, DisLike } from "./workFunction";
import Link from "next/link";

async function getTickets() {
  try {
    const res = await fetch("http://localhost:3000/api/blog", {
      next: {
        revalidate: 0,
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch tickets");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return []; // Return an empty array or handle the error accordingly
  }
}

export default async function TicketList() {
  try {
    const blogs = await getTickets();

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto m-3">
          {blogs.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow-md p-6">
              <Link href={`/blog/${post._id}`}>
                <div>
                  <p className="text-xl font-bold mb-2">{post.title}</p>
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
              </Link>
            </div>
          ))}
        </div>
        {blogs.length === 0 && (
            <div className="text-center text-gray-500 flex justify-center">
            <p>There are no blogs, sorry!</p>
            </div>
          )}
      </div>
    );
  } catch (error) {
    console.error("Error rendering ticket list:", error);
    return <div>Error fetching ticket list. Please try again later.</div>;
  }
}