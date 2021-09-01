import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/modal"
import React from "react"

const CustomModal = ({ children, isOpen, onClose, size, overlayClick }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={size}
            closeOnOverlayClick={overlayClick}
            closeOnEsc={false}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalBody bg="mc_bg" p={8} borderRadius="md">
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal