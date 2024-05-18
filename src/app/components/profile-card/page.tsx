import { Metadata } from "next";
import { Wrapper } from "./Client";
import { MaxWidth } from "@/components/MaxWidth";
import { ProfileCard } from "@/components/ProfileCard";

export const metadata: Metadata = {
  title: "Profile Card Component",
};

export default function ProfileCardPage() {
  return (
    <MaxWidth>
      <Wrapper>
        <ProfileCard />
      </Wrapper>
    </MaxWidth>
  );
}
