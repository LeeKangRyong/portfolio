import { useState } from "react";

interface UseHoverType {
    hover: boolean;
    onHover: () => void;
    notOnHover: () => void;
}

const useHover = (): UseHoverType => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(true);
    };

    const notOnHover = () => {
        setHover(false);
    };

    return { hover, onHover, notOnHover };
};

export default useHover;