export const generateToast = (message, id) => {
    const toastObject = {
        id,
        description: message.text,
        status: message.type,
        duration: 5000,
        isClosable: true,
        position: "top-right",
    }

    return toastObject
}

export default generateToast