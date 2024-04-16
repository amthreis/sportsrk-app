import * as React from "react";
import { SVGProps } from "react";
const SunSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        fill="none"
        stroke="#fff"
        viewBox="0 0 24 24"
        {...props}
    >
        <g strokeLinecap="round" strokeWidth={1.8}>
            <path d="M7.285 10.333a5 5 0 1 0 3.049-3.049M12 2v2M12 20v2M4 12H2M22 12h-2M19.778 4.223l-2.222 2.031M4.222 4.223l2.222 2.031M6.444 17.556l-2.222 2.222M19.778 19.777l-2.222-2.222" />
        </g>
    </svg>
);
export default SunSvg;
