import Loading from "../Loading";
import Workouts from "../_components/Workouts";
import { Suspense } from "react";

import Navbar from "../_components/Navbar";

export default function page() {
  return (
    <div> 
    <Navbar/>
    <div className="flex flex-col text-left justify-evenly gap-5">
      <div>
        <Suspense fallback={<Loading />}>
          <div className="flex gap-y-10 flex-col justify-center align-center">
            <Workouts />
          </div>
        </Suspense>
      </div>
    </div>
    </div>
  );
}
