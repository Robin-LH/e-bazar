"use client";

import { FC, FormEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PlusIcon from "@/assets/icons/plusIcon";
import Typography from "@/components/typography";
import CloseIcon from "@/assets/icons/closeIcon";
import Input from "@/components/input";
import apiClient from "@/app/apiClient";
import FileUpload from "@/components/fileUpload";
import axios from "axios";

interface AddProductProps {
  setProducts: (payload: any) => void;
}

const AddProductModal: FC<AddProductProps> = ({ setProducts }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    price: "0",
    discount: { start: "", end: "" },
    image: "",
  });

  const updateFormData = (name: string, value: string) => {
    if (name === "title") {
      setFormData({ ...formData, [name]: value, slug: value.toLowerCase().replaceAll(" ", "-") });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await apiClient.post("/products", formData);

      setProducts((pre: any) => ({
        ...pre,
        products: [data, ...pre.products.slice(0, pre.products.length - 1)],
        total: pre.total + 1,
      }));
    } catch (error) {
      console.log("product add failed for ==> ", error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border border-primary px-11 py-3 rounded-md text-sm w-full lg:w-max flex justify-center items-center gap-2 bg-[#F8FBFF]"
      >
        <PlusIcon /> Add Product
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl w-[1153px] transition-all p-16">
                  <div className="flex justify-between items-center">
                    <Typography variant="H1">Add new product</Typography>
                    <CloseIcon className="cursor-pointer" onClick={() => setOpen(false)} />
                  </div>

                  <Typography variant="H3" className="text-start">
                    Add description of your new product.
                  </Typography>

                  <form action="" className="mt-12 space-y-6" onSubmit={handleAddProduct}>
                    <Input
                      label="Product Name"
                      name="title"
                      placeholder="Product Name"
                      required
                      onChange={(e) => updateFormData(e.target.name, e.target.value)}
                    />
                    <div className="grid grid-cols-2 gap-6">
                      <Input
                        label="Slug"
                        value={formData.slug}
                        name="slug"
                        required
                        onChange={(e) => updateFormData(e.target.name, e.target.value)}
                        placeholder="product-name"
                      />
                      <Input
                        label="Price"
                        name="price"
                        placeholder="00"
                        type="number"
                        required
                        onChange={(e) => updateFormData(e.target.name, e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <Input
                        label="Discount Start"
                        name="discount_start"
                        type="date"
                        onChange={(e) => updateFormData("discount.start", e.target.value)}
                      />
                      <Input
                        label="Discount End"
                        name="discount_end"
                        type="date"
                        onChange={(e) => updateFormData("discount.end", e.target.value)}
                      />
                    </div>
                    <FileUpload
                      onChange={async (img) => {
                        try {
                          const form = new FormData();
                          form.append("image", img);
                          const {
                            data: { data },
                          } = await axios.post(
                            "https://api.imgbb.com/1/upload?key=66369eaf0feab7efa457f209b9ddcdcd",
                            form
                          );
                          updateFormData("image", data.display_url);
                        } catch (error) {
                          console.log("image upload failed for ==> ", error);
                        }
                      }}
                    />
                    <button
                      type="submit"
                      className="w-full rounded-md bg-primary px-5 py-3 font-medium text-white shadow-sm"
                    >
                      {loading ? "Loading..." : "Add"}
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AddProductModal;
