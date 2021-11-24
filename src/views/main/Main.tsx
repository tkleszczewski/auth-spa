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
        <MainHeading>Auth with protected routes</MainHeading>
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
            />
          </SwitchLabel>
        </SwitchContainer>
      </MainHeader>
      <Outlet></Outlet>
    </MainContainer>
  );
};

export default Main;
