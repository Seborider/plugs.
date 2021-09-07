import React from 'react';

export default function BurgerButtonIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="43"
      height="18"
      viewBox="0 0 43 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="8" width="43" height="2" rx="1" />
      <path d="M0 17C0 16.4477 0.447715 16 1 16H42C42.5523 16 43 16.4477 43 17C43 17.5523 42.5523 18 42 18H1C0.447716 18 0 17.5523 0 17Z" />
      <rect width="43" height="2" rx="1" />
    </svg>
  );
}
