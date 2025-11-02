import { FC } from "react";
const LinkIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.833 4.99992L12.4997 3.33325C13.333 2.49992 14.9997 2.49992 15.833 3.33325L16.6663 4.16659C17.4997 4.99992 17.4997 6.66659 16.6663 7.49992L12.4997 11.6666C11.6663 12.4999 9.99967 12.4999 9.16634 11.6666M9.16634 14.9999L7.49967 16.6666C6.66634 17.4999 4.99967 17.4999 4.16634 16.6666L3.33301 15.8333C2.49967 14.9999 2.49967 13.3333 3.33301 12.4999L7.49967 8.33325C8.33301 7.49992 9.99967 7.49992 10.833 8.33325"
        stroke="white"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default LinkIcon;
