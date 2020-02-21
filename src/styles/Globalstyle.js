import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	
	body {
		margin: 0;
		font-family: sans-serif;
		width: 100vw;
		overflow-x: hidden;
	}
`

export default GlobalStyle