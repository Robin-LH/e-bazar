"use client";

import { FC, Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CartIcon from "@/assets/icons/cartIcon";
import Typography from "@/components/typography";
import { CartContext } from "@/context/cart.context";
import Image from "next/image";
import apiClient from "@/app/apiClient";
import LoadingSpinner from "@/components/loadingSpinner";
import { TrashIcon } from "@heroicons/react/20/solid";

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartItems, userIP, setCartItems } = useContext(CartContext);

  const subTotal = cartItems.reduce((pre: number, acc: any) => {
    const itemTotal = acc.quantity * acc.product.price;
    return pre + itemTotal;
  }, 0);

  return (
    <>
      <button
        type="button"
        className="py-1 lg:py-2 px-3 lg:px-4 border rounded-md flex items-center gap-2"
        onClick={() => setSidebarOpen(true)}
      >
        <CartIcon />
        <span className="only">Cart({cartItems.length})</span>
      </button>

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 " onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex lg:max-w-3xl flex-1 bg-white py-8 px-6 lg:p-16 ">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 relative">
                  <div className="flex sticky top-0 bg-white shrink-0 items-center justify-between">
                    <Typography variant="H1">Shopping Cart</Typography>
                    <span
                      className="lg:text-4xl text-xl text-gray-400 cursor-pointer"
                      onClick={() => setSidebarOpen(false)}
                    >
                      X
                    </span>
                  </div>

                  <div className="flex-1">
                    {cartItems.map((item: any, idx: number) => (
                      <Product
                        key={idx}
                        product={item.product}
                        qty={item.quantity}
                        userIP={userIP}
                        updateCart={setCartItems}
                      />
                    ))}
                  </div>

                  <div className="flex sticky bottom-0 bg-white items-center justify-between">
                    <Typography
                      variant="H2"
                      className="text-darkGray font-normal text-base lg:text-inherit"
                    >
                      Subtotal
                    </Typography>
                    <Typography
                      variant="H2"
                      className="text-dark font-semibold text-base lg:text-inherit"
                    >
                      ${subTotal}
                    </Typography>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

const Product: FC<{ product: any; qty: number; userIP: string; updateCart: (pre: []) => void }> = ({
  product,
  qty,
  userIP,
  updateCart,
}) => {
  const [quantity, setQuantity] = useState(qty);
  const [loading, setLoading] = useState(false);

  const handleQtyChange = async (e: any) => {
    setLoading(true);
    try {
      const inputValue = +e.target.value;
      if (inputValue > 0) {
        await apiClient.patch(`/cart/${userIP}`, {
          productID: product._id,
          quantity: inputValue,
        });

        setQuantity(inputValue);
      }
    } catch (error) {
      console.log("quantity update failed for ==> ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async () => {
    setLoading(true);
    try {
      await apiClient.delete(`/cart/${userIP}?product=${product._id}`);
      // @ts-ignore
      updateCart((pre: []) => pre.filter((item) => item.product._id !== product._id));
    } catch (error) {
      console.log("product deleting failed for ==> ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex lg:gap-5 gap-3 py-6 border-b-2 border-dashed relative">
      <Image
        src={product.image}
        height={80}
        width={80}
        alt={product.title}
        className="border rounded-lg h-12 w-12 lg:h-20 lg:w-20"
      />

      <div className="flex-1 flex flex-col justify-between gap-2 ">
        <Typography variant="H3" className="text-sm lg:text-inherit">
          {product.title}
        </Typography>
        <TrashIcon
          className="lg:h-4 lg:w-4 h-4 w-4 cursor-pointer text-red-500"
          onClick={handleRemove}
        />
        <Typography className="w-fit">
          Qty:{" "}
          <input
            type="number"
            value={quantity}
            onChange={handleQtyChange}
            className="w-12 border pl-2 rounded outline-none [&::-webkit-inner-spin-button]:opacity-100"
          />
        </Typography>
      </div>
      <Typography variant="H3" className="text-sm lg:text-inherit">
        ${product.price * quantity}
      </Typography>

      <div
        className={`absolute top-0 rounded-md left-0 h-full w-full bg-dark bg-opacity-60 transition-all ${
          loading ? "flex items-center justify-center" : "hidden"
        }`}
      >
        <LoadingSpinner dimention={[50, 50]} />
      </div>
    </div>
  );
};

export default Cart;
