import Loading from "../Loading";
import { Link } from "next/link";
import Workouts from "./Workouts";
import { Suspense } from "react";
import Footer from "../_components/Footer";
export default function page() {
  return (
    <div className="flex flex-col gap-10 text-left">
      <div className="flex justify-center mt-3">
        <h1 className="text-2xl">Blogs</h1>
      </div>
      <div>
        <Suspense fallback={<Loading />}>
        <div className="flex gap-y-10 flex-col justify-center align-center">
        <Workouts />
        </div>
        </Suspense>
      </div>
      <Footer/>
    </div>
  );
}
