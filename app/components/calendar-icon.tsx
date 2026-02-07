import * as React from "react";
const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#111"
      strokeWidth={0.833}
      d="M6.25 5V.833M14.583 5V.833m3.334 13.334v3.75h-15v-2.5m14.885-8.334H2.793M.417 15.208v.209h14.916l.125-.209.195-.409a23.334 23.334 0 0 0 2.264-10.025V2.917h-15V4.69c0 3.495-.786 6.946-2.298 10.097l-.202.421Z"
    />
  </svg>
);
export default CalendarIcon;
