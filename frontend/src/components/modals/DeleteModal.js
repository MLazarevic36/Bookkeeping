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

const DeleteModal = ({ remove, text, fetch }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

	const handleDelete = () => {
		remove().then((res) => {
			if(res !== undefined && res.status === 200) {
				fetch()
				onClose()
			}
		})
	}

    return (
        <>
            <Button onClick={onOpen} w="120px" h="38px" variant="red" rounded="xl">
                {text}
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
                        <Button variant="red" ml={3} onClick={() => handleDelete()}>
                            Da
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default DeleteModal