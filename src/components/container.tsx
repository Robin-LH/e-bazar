import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <section className={`max-w-[1344px] mx-auto px-6 ${className}`}>{children}</section>;
};

export default Container;
