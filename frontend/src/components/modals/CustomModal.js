import { Button } from "@chakra-ui/button"
import { Flex } from "@chakra-ui/layout"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/modal"
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
			scrollBehavior={"inside"}
			
			
        >
            <ModalOverlay />
            <ModalContent>
                <ModalBody bg="mc_bg" p={8} borderRadius="md">
                    {children}
                </ModalBody>
				<ModalFooter>

				</ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal