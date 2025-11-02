import { CSSProperties, FC } from "react";
const Tuball: FC<{
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}> = ({ className, onClick, style }) => {
  return (
    <svg
      width="181"
      height="277"
      viewBox="0 0 181 277"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={style}
    >
      <path
        d="M86.3885 67.94C86.3885 85.5397 72.2262 107.518 89.8211 104.765C107.416 102.011 93.1189 87.3926 95.5998 67.94C98.0808 48.4875 113.193 0.999826 95.5997 1C78.0066 1.00017 86.3885 50.3404 86.3885 67.94Z"
        stroke="url(#paint0_linear_1218_691)"
        stroke-width="2"
      />
      <rect
        x="62"
        y="63"
        width="57"
        height="83"
        rx="19"
        fill="url(#paint1_linear_1218_691)"
      />
      <ellipse
        cx="90.5"
        cy="185"
        rx="90.5"
        ry="92"
        fill="url(#paint2_radial_1218_691)"
      />
      <g style={{ mixBlendMode: "overlay" }} filter="url(#filter0_d_1218_691)">
        <path
          d="M56.7636 218.357C60.6496 217.077 64.0597 212.365 64.0387 208.358L63.8648 175.156L63.8444 171.264C63.8186 166.341 62.7744 163.713 60.8269 163.494C59.9104 163.384 60.0201 162.468 60.7076 162.579C65.5203 163.355 70.6669 162.297 73.7389 158.618C62.9608 155.583 48.7168 146.613 38.3223 151.247C34.6671 152.869 32.0488 155.745 32.4151 160.094C33.0139 165.128 38.0718 168.994 42.9846 167.022C47.3262 165.282 47.6361 158.869 44.6522 157.511C43.8484 157.057 43.7315 156.6 44.7619 156.594C54.8339 155.969 57.189 168.436 50.4588 173.166C44.7547 177.088 35.2402 174.848 31.8858 168.34C29.9185 164.343 28.8545 157.937 30.4352 153.692C35.8557 139.353 49.231 135.504 62.4243 140.587C69.1929 143.185 82.1673 150.216 88.8131 151.211C101.074 153.093 95.1543 137.782 88.8892 143.883C87.978 144.804 87.7389 142.859 88.6512 142.167C91.6165 139.976 94.7113 140.647 96.5605 143.958C98.0633 146.698 98.0771 149.331 97.293 152.655C96.1733 157.47 91.2653 160.358 86.5731 160.726C83.941 160.969 80.2744 160.415 75.2297 159.068L75.5426 175.095L75.7154 208.068C75.737 212.189 78.9679 216.981 83.096 218.219L56.7636 218.357Z"
          fill="#FFF7CF"
        />
        <path
          d="M128.774 241.117C118.675 236.705 117.257 228.125 116.94 211.411C116.822 210.725 116.818 210.038 116.7 209.352C113.984 215.32 110.109 218.66 105.189 219.258C94.4344 220.803 84.6704 214.672 84.6098 203.108L84.4467 171.967C84.4251 167.846 82.9247 165.564 80.1758 165.349C79.0303 165.241 78.6773 163.411 80.165 163.288C86.0027 163.029 90.243 163.808 92.772 165.741C94.9557 167.333 95.6522 169.161 96.0101 171.907L96.1744 203.277C96.2896 225.259 114.686 218.293 116.441 203.628L116.275 171.801C116.253 167.679 114.867 165.396 112.004 165.182C110.858 165.074 110.505 163.244 111.994 163.236C117.945 162.861 122.071 163.641 124.6 165.574C126.784 167.166 127.48 168.994 127.952 171.739C127.995 179.868 125.973 230.942 132.536 238.121C141.516 247.462 151.179 234.474 144.416 232.792C142.81 232.342 141.329 233.609 140.879 235.215C140.543 236.705 139.508 235.794 139.16 234.88C135.809 229.059 140.934 223.88 146.899 226.024C157.222 229.519 148.626 249.715 128.774 241.117Z"
          fill="#FFF7CF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1218_691"
          x="19.4229"
          y="127.527"
          width="147.219"
          height="133.475"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.60879" />
          <feGaussianBlur stdDeviation="4.65731" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.564706 0 0 0 0 0.117647 0 0 0 0 0.145098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1218_691"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1218_691"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1218_691"
          x1="92.5"
          y1="1"
          x2="93"
          y2="77"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#C3C3C3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1218_691"
          x1="90.5"
          y1="63"
          x2="91"
          y2="117.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFF3B5" />
          <stop offset="1" stop-color="#FFB863" />
        </linearGradient>
        <radialGradient
          id="paint2_radial_1218_691"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(90.5 185) rotate(89.6886) scale(92.0014 90.5013)"
        >
          <stop stop-color="#FF878E" />
          <stop offset="1" stop-color="#901E25" />
        </radialGradient>
      </defs>
    </svg>
  );
};
export default Tuball;
