import { Metadata } from "next";
import { ProfileCard } from "@/components/ProfileCard";

export const metadata: Metadata = {
  title: "Playground",
};

export default function ButtonPage() {
  return (
    <>
      <div style={{ margin: "50px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <ProfileCard />
        </div>
      </div>
    </>
  );
}
