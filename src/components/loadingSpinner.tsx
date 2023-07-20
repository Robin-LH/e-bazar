"use client";

import { FC } from "react";

interface LoadingSpinnerProps {
  containerHeight?: number;
  dimention: [number, number];
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ containerHeight, dimention }) => (
  <div
    className={`flex items-center justify-center ${
      containerHeight && `min-h-[${containerHeight}px]`
    } `}
  >
    <div
      className={`border-t-transparent border-solid animate-spin rounded-full border-primary border-8 h-[${dimention[0]}px] w-[${dimention[1]}px]`}
    ></div>
  </div>
);

export default LoadingSpinner;
