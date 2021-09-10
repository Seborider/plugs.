import React from 'react';

export default function HomeIcon(
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
        d="M31 28.0368V16.442C31.0001 15.6353 30.8334 14.8371 30.5103 14.0963C30.1871 13.3554 29.7142 12.6876 29.1205 12.1336L18.061 1.80996C17.504 1.28982 16.7665 1 16 1C15.2335 1 14.496 1.28982 13.939 1.80996L2.8795 12.1336C2.28584 12.6876 1.81293 13.3554 1.48975 14.0963C1.16656 14.8371 0.999913 15.6353 1 16.442V28.0368C1 28.8227 1.31607 29.5764 1.87868 30.1321C2.44129 30.6878 3.20435 31 4 31H28C28.7956 31 29.5587 30.6878 30.1213 30.1321C30.6839 29.5764 31 28.8227 31 28.0368Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
