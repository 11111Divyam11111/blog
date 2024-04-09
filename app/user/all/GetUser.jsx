"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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


    return (
        <div className='flex flex-col justify-center mt-6 gap-5'>
            {users.map(user => (
                <div key={user._id} className='flex flex-col rounded-md border border-white text-white gap-3 md:w-1/4 flex-grow text-left p-3 w-full'>
                    <p>name : {user.username}</p>
                    <p>email : {user.email}</p>
                    <p>password : {user.password}</p>
                </div>
            ))}
        </div>
    );
}
