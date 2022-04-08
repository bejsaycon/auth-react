import { useRef } from "react";

export const useCountRenders = (components) => {
    const renders = useRef(0);
    console.log(`${components} renders: ${renders.current++}`);
}