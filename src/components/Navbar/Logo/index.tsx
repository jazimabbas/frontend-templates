import Image from "next/image";
import logo from "@/assets/logo.svg";
import { LogoWrapper, LogoName } from "../Desktop/Client";

export function Logo() {
  return (
    <LogoWrapper href="#">
      <Image src={logo} width={32} height={32} alt="App Logo" />
      <LogoName>Abstractly</LogoName>
    </LogoWrapper>
  );
}
