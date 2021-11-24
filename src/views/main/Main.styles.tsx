import styled from "styled-components";
import COLORS from "../../utils/colors";

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
`;

const MainHeader = styled.header`
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
`;

const MainHeading = styled.h1`
  font-size: 2.4rem;
  color: ${COLORS.green};
  margin-left: 24px;
`;

const SwitchContainer = styled.div`
  padding-right: 24px;
`;

const SwitchLabelText = styled.span`
  font-size: 1.4rem;
  padding-right: 8px;
  font-weight: 700;
  color: var(--text-color);
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
`;

export {
  MainContainer,
  MainHeader,
  MainHeading,
  SwitchContainer,
  SwitchLabelText,
  SwitchLabel,
};
