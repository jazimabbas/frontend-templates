import { RiGithubFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterXFill } from "@remixicon/react";
import { Button } from "../Button";
import { Avatar, Bio, IconsWrapper, Name, Role, Wrapper } from "./Client";

export function ProfileCard() {
  return (
    <Wrapper>
      <Avatar src="/images/girl.jpeg" alt="Small Girl" width={64} height={64} />
      <Name>Sarah Dole</Name>
      <Role>Front End Engineer @ Microsoft</Role>
      <Bio>
        I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and
        ChatGPT developer.
      </Bio>
      <Button size="lg" variant="primary" sx={{ width: "100%" }}>
        Contact me
      </Button>
      <IconsWrapper>
        {profiles.map((profile) => (
          <Button
            key={profile.label}
            as="a"
            href={profile.href}
            aria-label={profile.label}
            iconOnly
            size="md"
            variant="tertiary"
            icon={profile.icon}
          />
        ))}
      </IconsWrapper>
    </Wrapper>
  );
}

const profiles: { icon: React.ComponentType<any>; label: string; href: string }[] = [
  { icon: RiGithubFill, label: "Link to GitHub Profile", href: "/" },
  { icon: RiLinkedinBoxFill, label: "Link to LinkedIn Profile", href: "/" },
  { icon: RiInstagramFill, label: "Link to Instagram Profile", href: "/" },
  { icon: RiTwitterXFill, label: "Link to Twitter/X Profile", href: "/" },
];
