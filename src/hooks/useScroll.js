import { useState, useEffect } from "react";

let hasScroll = false;

export const useScroll = () => {
    const [scrollPos, setScrollPos] = useState(false);
    useEffect(() => {
        const handleScrollEffect = () => {
            if (window.scrollY > 250 && !hasScroll) {
                hasScroll = true;
                setScrollPos(window.scrollY);
            } else if (window.scrollY < 250 && hasScroll) {
                hasScroll = false;
                setScrollPos(window.scrollY);
            }
        };
        window.addEventListener("scroll", handleScrollEffect);

        return () => {
            window.removeEventListener("scroll", handleScrollEffect);
        };
    }, []);

    return {scrollPos};
};
