
import React from "react";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className="flex justify-center">
      <div className=" p-4 bg-black w-full text-center mb-0 absolute" >
        <div>
          <p className="text-xs md:text-md">Copyright © {year} - All right reserved by Divyam 😤</p>
          <p className="text-xs md:text-md">Made with 😎 by Divyam</p>
        </div>
      </div>
    </div>
  );
}
