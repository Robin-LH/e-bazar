import { FC } from "react";

interface VendorIconProps {}

const VendorIcon: FC<VendorIconProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="8" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7291 8C20.8845 8 23.4462 10.5618 23.4462 13.7172C23.4462 16.8726 20.8845 19.4344 17.7291 19.4344C14.5736 19.4344 12.0119 16.8726 12.0119 13.7172C12.0119 10.5618 14.5736 8 17.7291 8ZM25.7899 24.1299C27.33 22.8735 29.2969 22.1189 31.4379 22.1189C36.3719 22.1189 40.3784 26.1255 40.3784 31.0595C40.3784 35.9934 36.3719 40 31.4379 40C26.5039 40 22.4973 35.9934 22.4973 31.0595C22.4973 27.9374 24.1055 25.5044 25.7899 24.1299ZM30.2482 35.4379C30.2864 36.0614 30.8049 36.5561 31.4379 36.5561C32.059 36.5561 32.5704 36.0793 32.6252 35.4713C32.7146 35.4487 32.8016 35.4224 32.8851 35.3926C33.9865 35.0028 34.7828 34.1553 34.7828 32.6807C34.7828 31.2371 33.7946 30.4944 32.4082 30.0903C31.9278 29.9496 31.3986 29.8471 30.936 29.6921C30.8013 29.6469 30.6738 29.5992 30.5629 29.5348C30.526 29.5133 30.4771 29.5014 30.4771 29.4525C30.4771 29.089 30.762 28.9543 31.0648 28.9125C31.6787 28.8267 32.4166 29.0103 32.9077 29.3536C33.4465 29.7303 34.1904 29.598 34.5671 29.0592C34.9438 28.5191 34.8127 27.7753 34.2726 27.3986C33.8101 27.0755 33.2332 26.8252 32.6276 26.675C32.5859 26.0539 32.0685 25.5628 31.4379 25.5628C30.8156 25.5628 30.303 26.0408 30.2506 26.65C29.5866 26.8324 29.0239 27.1888 28.6389 27.7073C28.3075 28.152 28.0929 28.7242 28.0929 29.4525C28.0929 30.8961 29.0812 31.6388 30.4675 32.0429C30.948 32.1836 31.4772 32.2861 31.9398 32.4411C32.0745 32.4864 32.202 32.5352 32.3129 32.5984C32.3498 32.6199 32.3987 32.6318 32.3987 32.6807C32.3987 33.0407 32.1162 33.167 31.817 33.2076C31.1947 33.2922 30.4497 33.1039 29.9526 32.7689C29.4066 32.4005 28.6651 32.5448 28.2968 33.0907C27.9296 33.6355 28.0739 34.377 28.6186 34.7453C29.0776 35.0553 29.6474 35.2925 30.2482 35.4379ZM22.6559 38.2071C18.7983 38.2119 13.5353 38.2119 10.585 38.2119C8.67645 38.2119 7.10411 36.7146 7.01113 34.8085C7.01113 34.7978 7.01113 34.7859 7.00994 34.7751C6.96941 32.7808 7.03139 29.6862 7.60597 26.1982C7.90995 24.3552 9.48706 22.0378 11.094 21.0592C11.1595 21.0198 11.2239 20.9805 11.2883 20.9423C11.6972 20.698 12.2133 20.7206 12.5996 21.0019C14.0825 22.0796 15.9076 22.7149 17.8793 22.7149C19.8509 22.7149 21.676 22.0796 23.1589 21.0019C23.5428 20.723 24.0542 20.6992 24.4631 20.9388C24.5298 20.9781 24.5966 21.0186 24.6645 21.0592C24.8851 21.1927 25.1044 21.3512 25.3202 21.5288C24.9602 21.7613 24.6133 22.0128 24.2831 22.2834C22.1493 24.0238 20.1132 27.1065 20.1132 31.0595C20.1132 33.769 21.0669 36.2569 22.6559 38.2071Z"
        fill="#2F80ED"
      />
    </svg>
  );
};

export default VendorIcon;