import React from 'react';

export default function SearchIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.8571 26.7143C20.9579 26.7143 26.7143 20.9579 26.7143 13.8571C26.7143 6.75634 20.9579 1 13.8571 1C6.75634 1 1 6.75634 1 13.8571C1 20.9579 6.75634 26.7143 13.8571 26.7143Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 23.5L31 31"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
