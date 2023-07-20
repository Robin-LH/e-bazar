"use client";

import apiClient from "@/app/apiClient";
import axios from "axios";
import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

export const CartContext = createContext<any>([]);

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userIP, setUserIP] = useState("");

  useEffect(() => {
    (async () => {
      const { data: ip } = await axios.get("https://api.ipify.org");
      setUserIP(ip);
      const { data } = await apiClient.get(`/cart?agent=${ip}`);
      setCartItems(data);
    })();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, userIP }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
