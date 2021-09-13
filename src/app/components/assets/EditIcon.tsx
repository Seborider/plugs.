import React from 'react';

export default function EditIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.11704 11.8504L12.3715 1.59532C12.7767 1.20765 13.3175 0.994001 13.8782 1.00013C14.4389 1.00626 14.9749 1.23167 15.3715 1.6281C15.768 2.02454 15.9936 2.56048 15.9999 3.12116C16.0061 3.68185 15.7926 4.22271 15.4051 4.62793L5.1489 14.883C4.91493 15.117 4.61693 15.2765 4.29247 15.3414L1 16L1.65866 12.7068C1.72356 12.3823 1.88306 12.0843 2.11704 11.8504V11.8504Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
