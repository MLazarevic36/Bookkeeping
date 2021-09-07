import { Button } from "@chakra-ui/react"
import { ReactComponent as PlusIcon } from "../assets/plus-icon.svg"

const CustomButton = ({ type, onClick, text }) => {

	if(type === "submit") {
		return (
			<Button
				display="block"
				mx="auto"
				type="submit"
				bg="mc_medium"
				color="#fff"
				variant="solid"
				my="30px"
				w="200px"
				_hover={{
				bg: "mc_dark",
				}}	
			>
				POTVRDI
			</Button>
		)
	}else if(type === "update"){
		return (
			<Button
				w="120px"
				h="38px"
				variant="medium"
				rounded="xl"
				onClick={() => onClick()}
        	>
				{text}
        	</Button>
		)
	}else if(type === "add") {
		return (
			<Button
				variant="medium"
				w="44px"
				h="44px"
				onClick={() => onClick()}
			>
				<PlusIcon style={{ width: "22px", height: "22px" }} />
			</Button>
		)
	}else if(type === "delete") {
		return (
			<Button
				w="140px"
				h="38px"
				variant="red"
				rounded="xl"
				onClick={() => onClick()}
        	>
				OBRIŠI STAVKU
        	</Button>
		)
	}	
}

export default CustomButton