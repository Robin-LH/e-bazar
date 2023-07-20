import { FC } from "react";

interface CartIconProps {}

const CartIcon: FC<CartIconProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M6.66671 4C6.31309 4 5.97395 4.14048 5.7239 4.39052C5.47385 4.64057 5.33337 4.97971 5.33337 5.33333C5.33337 5.68696 5.47385 6.02609 5.7239 6.27614C5.97395 6.52619 6.31309 6.66667 6.66671 6.66667H8.29337L8.70004 8.296C8.70408 8.31476 8.70853 8.33343 8.71337 8.352L10.524 15.592L9.33337 16.7813C7.65337 18.4613 8.84271 21.3333 11.2187 21.3333H22.6667C23.0203 21.3333 23.3595 21.1929 23.6095 20.9428C23.8596 20.6928 24 20.3536 24 20C24 19.6464 23.8596 19.3072 23.6095 19.0572C23.3595 18.8071 23.0203 18.6667 22.6667 18.6667H11.2187L12.552 17.3333H21.3334C21.5809 17.3332 21.8235 17.2642 22.0341 17.1339C22.2446 17.0037 22.4147 16.8174 22.5254 16.596L26.5254 8.596C26.6269 8.39277 26.6749 8.16697 26.6646 7.94001C26.6544 7.71305 26.5864 7.49247 26.467 7.29919C26.3476 7.10592 26.1807 6.94636 25.9823 6.83566C25.784 6.72496 25.5606 6.66679 25.3334 6.66667H11.04L10.6267 5.00933C10.5545 4.721 10.388 4.46508 10.1537 4.28221C9.91932 4.09934 9.63061 4.00001 9.33337 4H6.66671ZM24 24.6667C24 25.1971 23.7893 25.7058 23.4143 26.0809C23.0392 26.4559 22.5305 26.6667 22 26.6667C21.4696 26.6667 20.9609 26.4559 20.5858 26.0809C20.2108 25.7058 20 25.1971 20 24.6667C20 24.1362 20.2108 23.6275 20.5858 23.2525C20.9609 22.8774 21.4696 22.6667 22 22.6667C22.5305 22.6667 23.0392 22.8774 23.4143 23.2525C23.7893 23.6275 24 24.1362 24 24.6667ZM11.3334 26.6667C11.8638 26.6667 12.3725 26.4559 12.7476 26.0809C13.1227 25.7058 13.3334 25.1971 13.3334 24.6667C13.3334 24.1362 13.1227 23.6275 12.7476 23.2525C12.3725 22.8774 11.8638 22.6667 11.3334 22.6667C10.8029 22.6667 10.2942 22.8774 9.91916 23.2525C9.54409 23.6275 9.33337 24.1362 9.33337 24.6667C9.33337 25.1971 9.54409 25.7058 9.91916 26.0809C10.2942 26.4559 10.8029 26.6667 11.3334 26.6667Z"
        fill="#2F80ED"
      />
    </svg>
  );
};

export default CartIcon;