import { createGlobalStyle } from "styled-components";
import COLORS from "./utils/colors";

const GlobalStyles = createGlobalStyle`
    html {
        --text-color: ${COLORS.primaryFontColor};
        --background-color: ${COLORS.primaryBackgroundColor};
    }
`;

export { GlobalStyles };
