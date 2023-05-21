import { Metadata } from "next";
import Home from "./home/page";

export const metadata: Metadata = {
  title: "Home | Pictolife",
};
export default function Page() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}
