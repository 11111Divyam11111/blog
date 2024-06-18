import Navbar from "@/app/_components/Navbar";
import DeleteBlogs from "./DeleteBlogs";
import SingleBlog from "./SingleBlog";
import UpdateBlog from "./UpdateBlog";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/user");
  const users = await res.json();

  return users.map((user) => ({
    id: user._id.toString(),
  }));
}

async function getUser(id) {
  const res = await fetch(`http://localhost:3000/api/user/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  const data = await res.json();
  return data;
}

export default async function UserDetails({ params }) {
  const { id } = params;
  let user;
  try {
    user = await getUser(id);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return <div>Error fetching user</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center align-middle text-center mt-20 gap-10">
      <h3>What do you want to do?</h3>
      <div className="flex flex-col gap-10 justify-center">
        {ticket.title}
        <DeleteBlogs id={id} />
        <UpdateBlog id={id} />
        <SingleBlog id={id}/>
      </div>
    </div>
    </>
  );
}
