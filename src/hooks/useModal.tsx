
import { useState } from "react";

interface UseModalType {
    modal: boolean;
    handleModal: () => void;
}

const useModal = (): UseModalType => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    };

    return { modal, handleModal };
};

export default useModal;