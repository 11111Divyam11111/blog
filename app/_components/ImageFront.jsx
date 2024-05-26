"use client";
import React, { useState, useEffect } from "react";
import blogImg10 from "@/public/blog9.jpg";

import Image from "next/image";
import NavigateButtons from "./NavigateButtons";
import RecentBlog from "./RecentBlog";
import Footer from "./Footer";
import Contact from "./contact";
import Navbar from "./Navbar";

const ImageFront = () => {
  return (
    <>
      <Navbar/>
      <NavigateButtons />
      <RecentBlog />
      <Contact />
      <Footer />
    </>
  );
};

export default ImageFront;
