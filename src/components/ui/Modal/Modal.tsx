import ModalProvider from "context/ModalContext";
import ModalTrigger from "./ModalTrigger";
import ModalBackdrop from "./ModalBackdrop";
import ModalContent from "./ModalContent";
import ModalClose from "./ModalClose";
import { useState } from "react";
import ModalSideContent from "./ModalSideContent";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalProvider value={{ isOpen, handleOpenModal, handleCloseModal }}>
      {children}
    </ModalProvider>
  );
};
export default Modal;

Modal.Trigger = ModalTrigger;
Modal.Backdrop = ModalBackdrop;
Modal.Close = ModalClose;
Modal.Content = ModalContent;
Modal.SideContent = ModalSideContent;
