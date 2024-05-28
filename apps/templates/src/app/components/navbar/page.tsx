import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navbar Component",
};

export default function NavbarPage() {
  return <Navbar />;
}
