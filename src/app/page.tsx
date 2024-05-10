import { Metadata } from "next";
import { Navbar } from "./ui/Navbar";

export const metadata: Metadata = {
  title: "GreatFrontend Templates - Jazim Abbas",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <p>Homepage</p>
    </>
  );
}
