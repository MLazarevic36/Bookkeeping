import { Button } from "@chakra-ui/react"

const CustomButton = ({ type }) => {

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
				Potvrdi
			</Button>
		)
	}else{
		return null
	}	
}

export default CustomButton