import { LikeDislike } from "./workFunction";
import Link from "next/link";
// import notFound from "@/public/notFound2.webp"
import Image from "next/image";

async function getTickets() {
  try {
    const res = await fetch("http://localhost:3000/api/blog", {
      next: {
        revalidate: 0,
      },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 grow md:m-10 md:p-3 m-3">
          {blogs.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow-md p-6 fancy_radius">
              <div>
                <Link href={`/blog/${post._id}`}>
                  <p className="md:text-xl font-bold mb-2">{post.title}</p>
                  <p className="text-gray-700 text-sm md:text-md">{post.blog}..</p>
                </Link>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4">
                    <LikeDislike />
                  </div>
                  <p className="text-sm text-gray-500 absolute -mb-3 ml-20">
                    {post.createdAt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {blogs.length === 0 && (
          <div className="flex justify-center items-center">
            <div className="flex flex-col text-center text-gray-500">
              <Image src={notFound} width={300} height={300} alt="not found" className="mx-auto" />
              {/* <p className="mt-4">There are no blogs, sorry!</p> */}
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error rendering ticket list:", error);
    return <div>Error fetching ticket list. Please try again later.</div>;
  }
}
