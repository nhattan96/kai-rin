import React, { useRef, useState, useEffect } from "react";


function useElementOnScreen(ref, rootMargin) {
    if (rootMargin === void 0) { rootMargin = "0px"; }
    var _a = useState(true), isIntersecting = _a[0], setIsIntersecting = _a[1];
    useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            setIsIntersecting(entry.isIntersecting);
        }, { rootMargin: rootMargin });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return function () {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return isIntersecting;
}

const AnimateIn = ({ from, to, children }) => {
    const ref = useRef(null);
    const onScreen = useElementOnScreen(ref);
    const defaultStyles = {
        transition: "600ms ease-in-out"
    };
    return (
        <div
            ref={ref}
            style={
                onScreen
                    ? {
                        ...defaultStyles,
                        ...to
                    }
                    : {
                        ...defaultStyles,
                        ...from
                    }
            }
        >
            {children}
        </div>
    );
};

const FadeIn = ({ children }) => (
    <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {children}
    </AnimateIn>
);

const Animate = {
    FadeIn,
};

export default Animate