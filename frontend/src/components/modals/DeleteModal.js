import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
} from "@chakra-ui/modal"
import React, { useRef } from "react"

const DeleteModal = ({ remove }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    return (
        <>
            <Button onClick={onOpen} w="120px" h="38px" variant="red" rounded="xl">
                OBRIŠI
            </Button>
            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Da li ste sigurni?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Ovu stavku necete moci da povratite nakon brisanja
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose} variant="medium">
                            Ne
                        </Button>
                        <Button variant="red" ml={3} onClick={() => remove()}>
                            Da
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default DeleteModal