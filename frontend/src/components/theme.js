import { extendTheme } from "@chakra-ui/react";

require("typeface-josefin-sans");

export const theme = extendTheme({
	colors: {
		mc_black: "#012C31",
		mc_bg: "#F5FEFF",
		mc_medium: "#24B4BC",
		mc_dark: "#00707C",
		mc_errorRed: "#ED7474",
	},
	fonts: {
		heading: "josefin sans, sans-serif",
		body: "josefin sans, sans-serif",
	},
	fontSizes: {
		Heading: {
			h1: "36px",
			h2: "28px",
			h3: "18px",
		},
	},
	breakpoints: ["30em", "48em", "62em", "80em", "96em"],
	components: {
		Button: {
			variants: {
				medium: (props) => ({
					bg: "mc_medium",
					color: "mc_bg",
					_hover: {
						bg: "mc_medium",
						opacity: ".8",
					},
				}),
				dark: (props) => ({
					bg: "mc_dark",
					color: "mc_bg",
					_hover: {
						bg: "mc_dark",
						opacity: ".8",
					},
				}),
				red: (props) => ({
					bg: "mc_errorRed",
					color: "mc_bg",
					_hover: {
						bg: "mc_errorRed",
						opacity: ".8",
					},
				}),
				sideBar: (props) => ({
					bg: "mc_bg",
					color: "mc_dark",
					_hover: {
						bg: "mc_medium",
						color: "mc_bg",
						opacity: ".8",
					},
				}),
			},
		},
	},
});
