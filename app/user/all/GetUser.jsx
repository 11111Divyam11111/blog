"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {Link} from "next/link"
export default function GetUser() {
    const [users, setUsers] = useState([]); // Corrected state variable name

    const router = useRouter();

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
        handleSubmit();
    }, [users]);

    const handleRoute=(id)=>{
        router.push(`/user/all/${id}`);
    }

    return (
        <div className='flex flex-col justify-center mt-6 gap-5 p-20 '>
            {users.map(user => (
                <div key={user._id} onClick={handleRoute(user._id)} className='flex flex-col  text-white gap-3 text-left p-3 w-auto rounded-md border border-white'>
                    <p>name : {user.username}</p>
                    <p>email : {user.email}</p>
                    <p className='text-clip text-balance'>password : {user.password}</p>
                </div>
            ))}
            {
                users.length === 0 ? 
                <div>
                    <h3>No users left!😶</h3>
                </div>
                :
                <></>
            }
        </div>
    );
}
