"use client"
import Footer from "./_components/Footer";
import RecentBlog from "@/app/_components/RecentBlog";
import CarouselCard from "@/app/_components/CarouselCard";
import NavigateButtons from "./_components/NavigateButtons";


export default function Home() {
  return (<>
      <div className="flex flex-col mt-5 p-3">
      {/* <CarouselCard/> */}
       <NavigateButtons/>
        <RecentBlog/>
        <Footer />
      </div>
  </>

  );
}
