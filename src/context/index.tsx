import { FC, PropsWithChildren } from "react";
import CartProvider from "./cart.context";

interface AppContextProps extends PropsWithChildren {}

const AppContext: FC<AppContextProps> = ({ children }) => {
  return (
    <>
      <CartProvider>{children}</CartProvider>
    </>
  );
};

export default AppContext;
