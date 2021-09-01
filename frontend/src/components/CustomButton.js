import { Button } from "@chakra-ui/react"

const CustomButton = ({ type, onClick }) => {

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
				IZMENI
        	</Button>
		)
	}	
}

export default CustomButton