"use client";

import apiClient from "@/app/apiClient";
import LoadingSpinner from "@/components/loadingSpinner";
import Typography from "@/components/typography";
import { CartContext } from "@/context/cart.context";
import discountCheck from "@/utils/discountCheck";
import axios from "axios";
import Image from "next/image";
import { FC, useContext, useState } from "react";

interface SingleProductProps {
  product: any;
}

const SingleProduct: FC<SingleProductProps> = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const { hasDiscount, currentPrice } = discountCheck(product.discount, +product.price);

  const isDisable = cartItems.some((item: any) => item.product?._id === product._id) || loading;

  const addToCart = async () => {
    setLoading(true);
    try {
      const { data: userIP } = await axios.get("https://api.ipify.org");
      const apiBody = { userIP, product: product._id };
      await apiClient.post("/cart", apiBody);
      const stateData = { product: product, quantity: 1 };
      setCartItems((pre: []) => [stateData, ...pre]);
    } catch (error) {
      console.log("failed to add cart", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div key={product._id} className="border p-6 relative overflow-hidden">
      {hasDiscount && (
        <div className="absolute left-0 top-0 h-12 w-12">
          <div className="absolute transform -rotate-45 bg-primary text-center text-sm text-white font-semibold py-1 left-[-34px] top-[20px] w-[140px]">
            25% OFF
          </div>
        </div>
      )}

      <Image
        src={product.image}
        alt={product.title}
        height={220}
        width={220}
        className="h-[220px] w-[220px] mx-auto mb-[30px]"
      />
      <Typography className="font-semibold">{product.title}</Typography>
      <Typography variant="H4" className="font-semibold">
        ${hasDiscount ? currentPrice : product.price}{" "}
        {hasDiscount && <del className="text-xs">${product.price}</del>}
      </Typography>

      <button
        disabled={isDisable}
        onClick={addToCart}
        className={`border py-2 px-4 rounded mt-2.5 text-sm  transition-all ${
          isDisable ? "bg-lightGray cursor-not-allowed" : "hover:bg-primary hover:text-white"
        }`}
      >
        Add to Cart
      </button>

      <div
        className={`absolute top-0 left-0 h-full w-full bg-dark bg-opacity-70 transition-all ${
          loading ? "flex items-center justify-center" : "hidden"
        }`}
      >
        <LoadingSpinner dimention={[50, 50]} />
      </div>
    </div>
  );
};

export default SingleProduct;
