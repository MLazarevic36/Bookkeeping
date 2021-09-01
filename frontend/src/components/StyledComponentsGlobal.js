import { createGlobalStyle } from "styled-components"

export const GlobalStyles= createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
:root {
--mc_black:#012C31;
--mc_bg: #F5FEFF;
--mc_medium:#24B4BC;
--mc_dark: #00707C;
--mc_errorRed: #ED7474;
--mc_dropdownOutline: rgb(66, 153, 225);
}
`



export const Colors = () => {
  
    const colors = {
        mc_black: "#012C31",
		mc_bg: "#F5FEFF",
		mc_medium: "#24B4BC",
		mc_dark: "#00707C",
		mc_errorRed: "#ED7474",
		dropdownOutline: "rgb(66, 153, 225)" 
	}
           
    return { colors }
}