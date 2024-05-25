"use client"
import React, { useState, useEffect } from "react";
import blogImg9 from "@/public/blog9.jpg";
import blogImg2 from "@/public/blog2.jpg";
import blogImg3 from "@/public/blog.jpg";
import blogImg4 from "@/public/blog4.jpg";
import blogImg5 from "@/public/blog5.jpg";

import Image from "next/image";
import NavigateButtons from "./NavigateButtons";
import RecentBlog from "./RecentBlog";
import Footer from "./Footer";
import Contact from "./contact";

const ImageFront = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1080);
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isWideScreen ? (
        <div className="img grid grid-cols-2 md:h-64 h-8 md:mb-32">
          <div className="grid grid-rows-2">
            <div className="grid grid-cols-2">
              <Image
                src={blogImg2}
                width={1000}
                height={100}
                alt="blog"
                quality={100}
                loading="lazy"
                className="img2"
              />
              <Image
                src={blogImg4}
                width={1000}
                height={100}
                alt="blog"
                quality={100}
                loading="lazy"
                className="img2"
              />
            </div>
            <div className="grid grid-cols-2">
              <Image
                src={blogImg5}
                width={1000}
                height={100}
                alt="blog"
                quality={100}
                loading="lazy"
                className="img2"
              />
              <Image
                src={blogImg3}
                width={1000}
                height={100}
                alt="blog"
                quality={100}
                loading="lazy"
                className="img2"
              />
            </div>
          </div>
          <div>
            <Image
              src={blogImg9}
              width={1000}
              height={100}
              alt="blog"
              quality={100}
              loading="lazy"
              className="img"
            />
          </div>
        </div>
      ) : (
        <div>
          <Image
            src={blogImg5}
            width={1000}
            height={100}
            alt="blog"
            quality={100}
            loading="lazy"
            className="img"
          />
        </div>
      )}
      <div className="absolute">
        <NavigateButtons />
      </div>
      <div className="md:mt-96">
        <RecentBlog />
      </div>
      <div>
        <Contact/>
        <Footer />
      </div>
    </>
  );
};

export default ImageFront;
