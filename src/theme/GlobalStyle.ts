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
	}
	body{
		font-family: "Urbanist";
		background: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.textColorColor};
	}

`;
