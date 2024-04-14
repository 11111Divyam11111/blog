"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { dataContext } from "@/app/user/context/context";

export default function Navbar() {
  const data1 = useContext(dataContext);
  const [details, setDetails] = useState();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const pathName = usePathname();

  // logout
  const handleLogout = () => {
    router.push("/blog");
    setDetails(null);
    document.cookie = `user_Session=; path=/; max-age=0;`;
    setIsLogged(false);
  };

  function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  useEffect(() => {
    let data = getCookie("user_Session");
    if (data) {
      const d = JSON.parse(data);
      setDetails(d);
      setIsLogged(true);
    } else {
      setDetails(null);
      setIsLogged(false);
    }
  }, [pathName]);

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
        {details && details.email == "divyamraj110@mail.com"  ? (
          <Link
            href="/user/all"
            className={` ${pathName === "/user/all" ? "active" : ""}`}
          >
            Users
          </Link>
        ) : null}
        {isLogged ? (
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