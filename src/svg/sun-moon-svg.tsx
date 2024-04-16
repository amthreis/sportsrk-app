import * as React from "react";
import { SVGProps } from "react";
const SunMoonSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="1em"
        height="1em"
        fill="#fff"
        viewBox="0 0 32 32"
        {...props}
    >
        <path d="M13 7c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1s1 .4 1 1v1c0 .6-.4 1-1 1zM5.9 9.9c-.3 0-.5-.1-.7-.3L3.1 7.5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.1 2.1c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3zM3 17H2c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1zM3.8 26.2c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.1c-.2.2-.4.3-.7.3zM13 28c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1s1 .4 1 1v1c0 .6-.4 1-1 1zM22 25c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" />
        <path d="M11 16c0-3.1 1.3-5.9 3.3-7.9-.4-.1-.8-.1-1.3-.1-4.4 0-8 3.6-8 8s3.6 8 8 8c.5 0 .9 0 1.3-.1-2-2-3.3-4.8-3.3-7.9z" />
    </svg>
);
export default SunMoonSvg;
