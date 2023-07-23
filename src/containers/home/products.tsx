"use client";

import SearchIcon from "@/assets/icons/searchIcon";
import Container from "@/components/container";
import Typography from "@/components/typography";
import { ChangeEventHandler, FC, useEffect, useState } from "react";
import AddProductModal from "./addProductModal";
import apiClient from "@/app/apiClient";
import ReactPaginate from "react-paginate";
import Select from "@/components/select";
import debounce from "lodash/debounce";
import SingleProduct from "./singleProduct";
import LoadingSpinner from "@/components/loadingSpinner";

const Products: FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({ total: 0, products: [], slice: "" });
  const [pagination, setPagination] = useState({ pageNo: 1, perPage: 8 });
  const [searchQuery, setSearchQuery] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setSearchQuery(e.target.value);

  const debouncedOnChange = debounce(onChange, 1000);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await apiClient.get(
          `/products?perPage=${pagination.perPage}&pageNo=${pagination.pageNo}&query=${searchQuery}`
        );

        setProducts(data);
      } catch (error) {
        console.log("product fetching failed for ==> ", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [pagination, searchQuery]);

  return (
    <Container>
      <div className="flex items-center  flex-col-reverse lg:flex-row gap-5">
        <div className="border border-lightGray bg-light w-full lg:flex-1 flex items-center rounded-md overflow-hidden py-2.5 pl-4 pr-2.5">
          <input
            type="text"
            className="w-full outline-none bg-inherit"
            onChange={debouncedOnChange}
          />
          <SearchIcon className="cursor-pointer" />
        </div>

        <AddProductModal setProducts={setProducts} />
      </div>

      <Typography variant="H2" className="my-5">
        Showing {products.slice} of {products.total} results
      </Typography>

      <div className="space-y-6 mb-10">
        {loading ? (
          <LoadingSpinner containerHeight={200} dimention={[80, 80]} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {products.products.map((product: any) => (
              <SingleProduct key={product._id} product={product} />
            ))}
          </div>
        )}

        <div className="flex items-center flex-col lg:flex-row justify-end gap-5">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={({ selected }) => setPagination({ ...pagination, pageNo: selected + 1 })}
            pageRangeDisplayed={3}
            pageCount={Math.ceil(products.total / pagination.perPage)}
            previousLabel="< Prev"
            renderOnZeroPageCount={null}
            className="flex items-center gap-3 lg:gap-7"
            activeClassName="bg-primary px-3 flex items-center justify-center py-1 rounded text-white"
          />

          <Select
            options={[
              { label: "8 Per Page", value: 8 },
              { label: "12 Per Page", value: 12 },
              { label: "16 Per Page", value: 16 },
              { label: "20 Per Page", value: 20 },
            ]}
            onChange={(sel) => {
              setPagination({ ...pagination, perPage: +sel.value });
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Products;
