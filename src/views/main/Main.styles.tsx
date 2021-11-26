import styled from "styled-components";
import { NavLink } from "react-router-dom";
import COLORS from "../../utils/colors";
import { darken } from "polished";

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
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
`;

const MainHeaderWidthLimiter = styled.div`
  flex-basis: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainHeading = styled.h1`
  font-size: 2.4rem;
  color: var(--text-color);
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

const MainOutletContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const MainNav = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 50px;
  padding: 0 24px;
  border-bottom: 1px solid #aaa;
`;

const MainNavLinksContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
`;

const MainNavLinkContainer = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 16px;
  &:first-of-type {
    padding-left: 0px;
  }
`;

const MainNavLink = styled(NavLink)`
  color: var(--text-color);
  font-size: 1.3rem;

  &.active {
    color: ${darken(0.1, COLORS.green)};
    font-weight: 700;
  }
`;

const MainNavLogoutButtonContainer = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
`;

const MainNavLogoutButton = styled.button`
  border: 1px solid var(--text-color);
  color: var(--text-color);
  background-color: #ccc;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    color: crimson;
    border: 1px solid crimson;
  }
`;

export {
  MainContainer,
  MainHeader,
  MainHeaderWidthLimiter,
  MainHeading,
  SwitchContainer,
  SwitchLabelText,
  SwitchLabel,
  MainOutletContainer,
  MainNav,
  MainNavLinksContainer,
  MainNavLinkContainer,
  MainNavLink,
  MainNavLogoutButtonContainer,
  MainNavLogoutButton,
};
