import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}
	* {
		box-sizing: border-box;
	}
	body{
		background: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.textColorColor};
	}

`;
