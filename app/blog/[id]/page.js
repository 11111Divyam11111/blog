import DeleteBlogs from "./DeleteBlogs";
import UpdateBlog from "./UpdateBlog";

export async function generateStaticParams({ id }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("http://localhost:3000/api/blog").then((res) =>
    res.json()
  );

  return res.map((ticket) => ({
    _id: ticket._id.toString(),
  }));
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch ticket");
  }
  const data = await res.json();
  return data;
}

export default async function TicketDetails({ params }) {
  const { id } = params;
  let ticket;
  try {
    ticket = await getTicket(id);
  } catch (error) {
    console.error("Error fetching ticket:", error.message);
    return <div>Error fetching ticket</div>;
  }

  return (
    <div className="flex flex-col justify-center align-middle text-center mt-20 gap-10">
      <h3>What do you want to do?</h3>
      <div className="flex flex-col gap-10 justify-center">
        <DeleteBlogs id={id} />
        <UpdateBlog id={id} />
      </div>
    </div>
  );
}
