"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Link } from "next/link";
import DeleteUser from "@/app/user/all/[id]/DeleteUser";

export default function GetUser() {
  const [users, setUsers] = useState([]); // Corrected state variable name
  const [index, setIndex] = useState(1);

  const router = useRouter();

  // const handleRoute = (id) => {
  //   router.push(`/user/all/${id}`);
  // };

  function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  let naam = getCookie("user_Long");
  naam = JSON.parse(naam);
  const u = naam.email;

  useEffect(() => {
    const handleSubmit = async () => {
      if (users.length === 0) {
        try {
          const res = await fetch("http://localhost:3000/api/user");

          if (!res.ok) {
            throw new Error("Failed to fetch");
          }

          const data = await res.json(); // Parse response as JSON
          setUsers(data); // Update the users state with fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    setIndex(index + 1);
    handleSubmit();
  }, [users]);

  return (
    <>
      {users.length === 0 ? (
        <div>
          <h3>No users left!😶</h3>
        </div>
      ) : (
        <div className="flex flex-col justify-center mt-6 gap-5 p-20 text-white ">
          <div className="overflow-x-auto text-white">
            <table className="table text-white">
              {/* head */}
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  {u == "divyamraj110@mail.com" ? <th>Password</th> : ""}
                  <th>Action</th>
                </tr>
              </thead>
              {/* body */}
              <tbody>
                {
                 users.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    {u == "divyamraj110@mail.com" ? (
                      <td>{user.password}</td>
                    ) : (
                      ""
                    )}
                    <td><DeleteUser id={user._id}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
