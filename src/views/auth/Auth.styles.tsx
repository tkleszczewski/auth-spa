import styled from "styled-components";
import { darken } from "polished";
import COLORS from "../../utils/colors";

const AuthContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
`;

const AuthHeader = styled.header`
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
`;

const AuthHeading = styled.h1`
  font-size: 2.4rem;
  color: ${COLORS.green};
  margin-left: 24px;
`;

export { AuthContainer, AuthHeader, AuthHeading };
