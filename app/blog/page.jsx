import Loading from "../Loading";
import Workouts from "./Workouts";
import { Suspense } from "react";
import Footer from "../_components/Footer";
export default function page() {
  return (
    <div className="flex flex-col text-left justify-evenly gap-5">
      <div>
        <h1 className="text-2xl text-center">Blogs</h1>
      </div>
      <div>
        <Suspense fallback={<Loading />}>
          <div className="flex gap-y-10 flex-col justify-center align-center">
            <Workouts />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
