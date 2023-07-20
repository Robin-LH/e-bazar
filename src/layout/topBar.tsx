import Container from "@/components/container";
import { FC } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Cart from "./cart";

interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  return (
    <header className="py-4 lg:9 border">
      <Container className="flex items-center justify-between">
        <Image src={logo} alt="logo" className="h-6 lg:h-10 w-[102px] lg:w-[170px]" />
        <Cart />
      </Container>
    </header>
  );
};

export default TopBar;
