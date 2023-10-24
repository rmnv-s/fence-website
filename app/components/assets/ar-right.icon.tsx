import * as React from 'react';
const SvgArRight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <rect width={49} height={49} x={0.5} y={0.5} stroke="#000" rx={24.5} />
    <path stroke="#151515" strokeWidth={2} d="m23 33 7-8-7-8" opacity={0.75} />
  </svg>
);
export default SvgArRight;
