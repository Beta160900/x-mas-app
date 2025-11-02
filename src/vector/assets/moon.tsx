import { FC } from "react";
import { CSSProperties } from "react";
const Moon: FC<{ className?: string; style: CSSProperties }> = ({
  className,
  style,
}) => {
  return (
    <svg
      width="315"
      height="315"
      viewBox="0 0 315 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g opacity="0.73" filter="url(#filter0_f_712_296)">
        <circle
          cx="157.367"
          cy="157.367"
          r="83.3669"
          fill="url(#paint0_linear_712_296)"
        />
      </g>
      <mask
        id="mask0_712_296"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="78"
        y="86"
        width="168"
        height="167"
      >
        <circle
          cx="162.265"
          cy="169.367"
          r="83.3669"
          fill="url(#paint1_linear_712_296)"
        />
      </mask>
      <g mask="url(#mask0_712_296)">
        <circle
          cx="162.265"
          cy="169.367"
          r="83.3669"
          fill="url(#paint2_linear_712_296)"
        />
        <path
          d="M95.9035 186.727L79.0904 158.855L55.0059 210.674L118.624 256.604L170.88 230.694L174.971 200.859L139.98 191.83L144.98 177.698L133.165 168.669L118.624 173.38L95.9035 186.727Z"
          fill="#FFF3B5"
        />
        <path
          d="M237.163 141.062L228.511 109.682L282.682 127.868L272.227 205.634L217.467 225.718L193.005 208.155L210.534 176.554L196.839 170.456L198.419 155.67L211.844 148.361L237.163 141.062Z"
          fill="#FFF3B5"
        />
        <path
          d="M114.543 115.894L94.1959 130.419L70.1113 78.5998L133.729 32.6694L185.986 58.5788L190.076 88.4139L155.086 97.443L160.085 111.575L148.271 120.604L133.729 115.894H114.543Z"
          fill="#FFF3B5"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_712_296"
          x="0.130577"
          y="0.130577"
          width="314.473"
          height="314.473"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="36.9347"
            result="effect1_foregroundBlur_712_296"
          />
        </filter>
        <linearGradient
          id="paint0_linear_712_296"
          x1="157.367"
          y1="82.9699"
          x2="157.367"
          y2="254.189"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.710846" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_712_296"
          x1="162.265"
          y1="94.9699"
          x2="162.265"
          y2="266.189"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#FFF5C3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_712_296"
          x1="162.265"
          y1="94.9699"
          x2="162.265"
          y2="266.189"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#FFF5C3" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Moon;
