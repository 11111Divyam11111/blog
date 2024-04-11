"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = () => {
    setDetails();
    localStorage.removeItem("user");
    router.push("/blog");
  };

  function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  useEffect(() => {
    let data = getCookie("user");
    if (!data && pathName == "/user/profile") {
      router.push("/user");
    } else if (data && pathName == "user") {
      router.push("/user/profile");
    } else {
      setDetails(JSON.parse(data));
    }
  }, []);


  return (
    <div className="flex bg-black h-20 justify-center w-full">
      <div className="flex p-8 justify-center gap-5 md:gap-32 w-full ">
        <Link href="/" className={` ${pathName === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          href="/blog"
          className={` ${pathName === "/blog" ? "active" : ""}`}
        >
          Blogs
        </Link>
        {  details && details.username== "divyamraj110@gmail.com" && details.password == "12345678" ? (
          <Link
            href="/user/all"
            className={` ${pathName === "/user/all" ? "active" : ""}`}
          >
            Users
          </Link>
        ) : (
          ""
        )}
        {details && details.username && details.password && details.email ? (
          <>
            <Link
              href="/user/profile"
              className={` ${pathName === "/user/profile" ? "active" : ""}`}
            >
              Profile
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link
            href="/user"
            className={` ${pathName === "/user" ? "active" : ""}`}
          >
            Signup
          </Link>
        )}
      </div>
    </div>
  );
}
