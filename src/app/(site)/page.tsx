import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electromerce | Home",
  description: "This is Home for an ecommerce web app",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
