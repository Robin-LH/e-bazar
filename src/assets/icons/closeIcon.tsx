import { FC } from "react";

interface CloseIconProps {
  className?: string;
  onClick?: () => void;
}

const CloseIcon: FC<CloseIconProps> = ({ className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_31_1288)">
        <path
          d="M13.9962 12.5005L23.586 2.91065C24.138 2.35867 24.138 1.46648 23.586 0.914491C23.034 0.362508 22.1418 0.362508 21.5899 0.914491L12 10.5043L2.41015 0.914491C1.85816 0.362508 0.965972 0.362508 0.413988 0.914491C-0.137996 1.46648 -0.137996 2.35867 0.413988 2.91065L10.0038 12.5005L0.413988 22.0903C-0.137996 22.6423 -0.137996 23.5345 0.413988 24.0865C0.689277 24.3618 1.05067 24.5001 1.41207 24.5001C1.77346 24.5001 2.13486 24.3617 2.41015 24.0865L12 14.4966L21.5898 24.0865C21.8651 24.3618 22.2265 24.5001 22.5879 24.5001C22.9493 24.5001 23.3107 24.3617 23.586 24.0865C24.1379 23.5345 24.1379 22.6423 23.586 22.0903L13.9962 12.5005Z"
          fill="#777777"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_1288">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseIcon;
