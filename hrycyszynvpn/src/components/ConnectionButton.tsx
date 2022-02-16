import React from 'react';
import { ConnectionStatusKind } from '../types';

export const ConnectionButton: React.FC<{
  status: ConnectionStatusKind;
  onStatusChanged?: (status: ConnectionStatusKind) => void;
}> = ({ status }) => {
  const statusText = status[0].toUpperCase() + status.slice(1);
  const fontColor = '#21D072';
  return (
    <svg width="198" height="198" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_89_61)">
        <circle cx="99" cy="99" r="49" fill="#21D072" fillOpacity="0.5" />
      </g>
      <g filter="url(#filter1_d_89_61)">
        <circle cx="99" cy="99" r="65" fill="url(#paint0_radial_89_61)" />
        <circle cx="99" cy="99" r="61.5" stroke="#21D072" strokeWidth="7" />
      </g>
      <circle cx="99" cy="99" r="73.5" stroke="white" strokeOpacity="0.2" />
      <text
        x="50%"
        y={110}
        fill={fontColor}
        dominantBaseline="middle"
        textAnchor="middle"
        fontWeight="700"
        fontSize="14px"
      >
        {statusText}
      </text>
      <g clipPath="url(#clip0_89_61)">
        <path
          d="M92.1168 88.4812C90.7061 87.0705 90.7061 84.7771 92.1168 83.3664L95.4166 80.0666L93.8492 78.4992L90.5494 81.799C88.2725 84.0759 88.2725 87.7717 90.5493 90.0486C92.8262 92.3255 96.522 92.3255 98.7989 90.0486L102.099 86.7488L100.531 85.1813L97.2315 88.4812C95.8208 89.8918 93.5274 89.8918 92.1168 88.4812ZM96.3241 85.9238L102.924 79.3241L101.274 77.6742L94.6741 84.2739L96.3241 85.9238ZM98.7989 73.5494L95.4991 76.8493L97.0665 78.4167L100.366 75.1168C101.777 73.7062 104.07 73.7062 105.481 75.1168C106.892 76.5275 106.892 78.8209 105.481 80.2316L102.181 83.5314L103.749 85.0988L107.049 81.799C109.325 79.5221 109.325 75.8263 107.049 73.5494C104.772 71.2725 101.076 71.2725 98.7989 73.5494Z"
          fill="#21D072"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_89_61"
          x="0"
          y="0"
          width="198"
          height="198"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_89_61" />
        </filter>
        <filter
          id="filter1_d_89_61"
          x="19"
          y="25"
          width="160"
          height="160"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_89_61" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_89_61" result="shape" />
        </filter>
        <radialGradient
          id="paint0_radial_89_61"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(99 99) rotate(90) scale(65)"
        >
          <stop stopColor="#283046" />
          <stop offset="1" stopColor="#121727" />
        </radialGradient>
        <clipPath id="clip0_89_61">
          <rect width="28" height="28" fill="white" transform="translate(79 81.799) rotate(-45)" />
        </clipPath>
      </defs>
    </svg>
  );
};
