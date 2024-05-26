
"use client"
import React, { useState } from "react";


const search = () => {
  const [search,setSearch] = useState("");


  return (
    <form className="flex justify-center">
        <input
          value={search}
          onChange={(e)=>{setSearch(e.target.value); console.log(search)}}
          type="text"
          placeholder="Search"
          className="input input-bordered input-accent w-full pl-3 md:ml-52 md:mr-52"
        />
    </form>
  );
};

export default search;
