
import { useState } from "react";

const useHover = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(true);
    };

    const notOnHover = () => {
        setHover(false);
    }

    return [hover, onHover, notOnHover];
};

export default useHover;