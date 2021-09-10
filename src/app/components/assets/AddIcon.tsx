import React from 'react';

export default function AddIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0)">
        <path
          d="M15 15H0M15 30V15V30ZM15 15V0V15ZM15 15H30H15Z"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="30" height="30" />
        </clipPath>
      </defs>
    </svg>
  );
}
