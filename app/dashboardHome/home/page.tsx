import Carousel from "@/components/Carousel";
import HomeCard from "@/components/HomeCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Pictolife",
};
export default function Page() {
  return (
    <div className="my-10 grid grid-cols-8">
      <div className="col-span-5">
        <Carousel />
        <div className="grid px-20 mt-6 grid-cols-1 gap-6">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </div>
      <div className="col-span-3 mt-6 pl-16">
        <div className="h-24 w-36 border border-blue-400"></div>
        <div className="h-24 w-36 border border-blue-400"></div>
        <div className="h-24 w-36 border border-blue-400"></div>
        <div className="h-24 w-36 border border-blue-400"></div>
        <div className="h-24 w-36 border border-blue-400"></div>
      </div>
    </div>
  );
}
