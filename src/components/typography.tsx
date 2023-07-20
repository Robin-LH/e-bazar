import { FC, ReactNode } from "react";

interface TypographyProps {
  children: string | ReactNode;
  variant?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  className?: string;
}

const Typography: FC<TypographyProps> = ({ children, variant, className }) => {
  switch (variant) {
    case "H1":
      return (
        <h1 className={`lg:text-[40px] text-2xl font-bold text-[#0A142F] ${className}`}>
          {children}
        </h1>
      );

    case "H2":
      return <h2 className={`text-2xl font-normal text-black ${className}`}>{children}</h2>;

    case "H3":
      return (
        <h3 className={`text-base lg:text-xl font-normal text-black ${className}`}>{children}</h3>
      );

    case "H4":
      return <h4 className={`text-lg font-normal text-black ${className}`}>{children}</h4>;

    default:
      return <p className={`text-xs lg:text-base ${className}`}>{children}</p>;
  }
};

export default Typography;
