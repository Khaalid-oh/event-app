import * as React from "react";
const Line = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={39}
    fill="none"
    {...props}
  >
    <path
      stroke="#D4D4D8"
      d="m.277 10.416 15-10M.277 17.416l15-10M.277 24.416l15-10M.277 31.416l15-10M.277 38.416l15-10"
    />
  </svg>
);
export default Line;
