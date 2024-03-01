import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import UrbanistTTF from "fonts/Urbanist.ttf";

export const GlobalStyle = createGlobalStyle`
	${reset}
	@font-face {
		font-family: "Urbanist";
		font-weight: normal;
		src: url(${UrbanistTTF}) format("truetype");
	}
	* {
		box-sizing: border-box;
		font-family: "Urbanist";
	}
	body {
		font-family: "Urbanist";
		background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.secondary};
	}

`;
