import React from 'react';

export default function SearchIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 28.9831L19.9378 18.7167C21.6472 16.7282 22.6764 14.1466 22.6764 11.3382C22.6764 5.07602 17.6004 0 11.3382 0C5.07602 0 0 5.07602 0 11.3382C0 17.6004 5.07602 22.6764 11.3382 22.6764C14.1466 22.6764 16.7282 21.6472 18.7167 19.9378L19.1877 20.4262L28.9831 30L30 28.9831ZM11.3382 20.4262C6.9948 20.4262 2.0339 15.6816 2.0339 11.3382C2.0339 6.9948 6.9948 2.0339 11.3382 2.0339C15.6816 2.0339 20.4262 6.9948 20.4262 11.3382C20.4262 15.6816 15.6816 20.4262 11.3382 20.4262Z"
        fill="inherit"
      />
    </svg>
  );
}
