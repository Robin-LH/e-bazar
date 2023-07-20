import { FC } from "react";

interface PaginationProps {
  pageCount: number;
}

const Pagination: FC<PaginationProps> = ({ pageCount }) => {
  //   console.log(pageCount);

  const test = 20;

  console.log(new Array(test).fill(""));

  return (
    <nav className="flex items-center justify-between border">
      <div className="flex items-center">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Prev
        </a>

        {new Array(test).fill("").map((_, idx) => (
          <a
            href="#"
            key={idx}
            className="inline-flex items-center border-t-2 border-transparent px-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            {idx + 1}
          </a>
        ))}
        {/* <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          1
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 text-sm font-medium"
          aria-current="page"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          3
        </a>
        <span className="inline-flex items-center border-t-2 border-transparent px-4 text-sm font-medium text-gray-500">
          ...
        </span>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          10
        </a> */}

        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
        </a>
      </div>
    </nav>
  );
};

export default Pagination;
