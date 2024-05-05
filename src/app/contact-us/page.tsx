import { type Metadata } from "next/types";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
    </>
  );
}
