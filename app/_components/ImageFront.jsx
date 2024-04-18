import React from "react";
import blogImg8 from "@/public/blog8.jpg";
import blogImg2 from "@/public/blog2.jpg";
import Image from "next/image";
import NavigateButtons from "./NavigateButtons";
import RecentBlog from "./RecentBlog";
import Footer from "./Footer";

const ImageFront = () => {

  return (
    <>
      <div className="img grid grid-cols-2 md:h-64 h-8 mb-32">
        <div>
          <Image
            src={blogImg8}
            width={1000}
            height={100}
            alt="blog"
            quality={100}
            loading="lazy"
            className="img"
          />
        </div>

        <Image
          src={blogImg2}
          width={1000}
          height={100}

          alt="blog"
          quality={100}
          loading="lazy"
          className="img"
        />
      </div>
      <div className="absolute">
        <NavigateButtons />
      </div>
      <br></br>
      <RecentBlog />
      <div>
        <Footer />
      </div>

    </>
  );
};

export default ImageFront;