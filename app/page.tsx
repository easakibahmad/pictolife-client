import { Metadata } from "next";
import Login from "../app/login/page";

export const metadata: Metadata = {
  title: "Login | Pictolife",
};

export default function Page() {
  return <Login />;
}
