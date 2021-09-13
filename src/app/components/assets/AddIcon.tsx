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
      <path d="M16 14.5H29.5V15.5H16.0714H15.5714V16V29.5H14.4286V16V15.5H13.9286H0.5V14.5H13.9286H14.4286V14V0.5H15.5689L15.5 13.9974L15.4974 14.5H16Z" />
    </svg>
  );
}
