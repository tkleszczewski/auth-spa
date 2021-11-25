import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Switch from "react-switch";

import COLORS from "../../utils/colors";

import {
  MainContainer,
  MainHeader,
  MainHeading,
  SwitchContainer,
  SwitchLabelText,
  SwitchLabel,
  MainHeaderWidthLimiter,
  MainOutletContainer,
  MainNav,
  MainNavLinkContainer,
  MainNavLinksContainer,
  MainNavLink,
} from "./Main.styles";

const Main: React.FC = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkModeOn) {
      document.documentElement.style.setProperty(
        "--background-color",
        COLORS.secondaryBackgroundColor
      );
      document.documentElement.style.setProperty(
        "--text-color",
        COLORS.secondaryFontColor
      );
    } else {
      document.documentElement.style.setProperty(
        "--background-color",
        COLORS.primaryBackgroundColor
      );
      document.documentElement.style.setProperty(
        "--text-color",
        COLORS.primaryFontColor
      );
    }
  }, [isDarkModeOn]);

  const onDarkModeToggle = (checked: boolean) => {
    setIsDarkModeOn(checked);
  };

  return (
    <MainContainer>
      <MainHeader>
        <MainHeaderWidthLimiter>
          <MainHeading>Authapp</MainHeading>
          <SwitchContainer>
            <SwitchLabel>
              <SwitchLabelText>Toggle dark-mode</SwitchLabelText>
              <Switch
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#888"
                activeBoxShadow="none"
                checked={isDarkModeOn}
                onChange={onDarkModeToggle}
                height={16}
                width={44}
                handleDiameter={20}
                boxShadow="0 0 2px 1px rgba(0, 0, 0, 0.4)"
              />
            </SwitchLabel>
          </SwitchContainer>
        </MainHeaderWidthLimiter>
      </MainHeader>
      <MainNav>
        <MainNavLinksContainer>
          <MainNavLinkContainer>
            <MainNavLink to="/">Home</MainNavLink>
          </MainNavLinkContainer>
          <MainNavLinkContainer>
            <MainNavLink to="/auth">Login</MainNavLink>
          </MainNavLinkContainer>
          <MainNavLinkContainer>
            <MainNavLink to="/protected">Protected route</MainNavLink>
          </MainNavLinkContainer>
        </MainNavLinksContainer>
      </MainNav>
      <MainOutletContainer>
        <Outlet></Outlet>
      </MainOutletContainer>
    </MainContainer>
  );
};

export default Main;
