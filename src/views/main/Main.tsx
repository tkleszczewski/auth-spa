import { useState, useEffect, useCallback, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";

import COLORS from "../../utils/colors";

import { checkToken } from "../../store/auth/auth.slice";

import { AppDispatch, RootState } from "../../store/store";
import { userLoggedOut } from "../../store/auth/auth.slice";

import PuffLoader from "react-spinners/PuffLoader";

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
  MainNavLogoutButtonContainer,
  MainNavLogoutButton,
} from "./Main.styles";

const Main: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);
  const [checkTokenRequestPending, setCheckTokenRequestPending] =
    useState<boolean>(true);
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.auth.isUserLoggedIn
  );

  const handleLogout = useCallback(() => {
    localStorage.removeItem("accessToken");
    dispatch(userLoggedOut());
  }, [dispatch]);

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

  useEffect(() => {
    async function checkTokenRequest() {
      setCheckTokenRequestPending(true);
      await dispatch(checkToken());
      setCheckTokenRequestPending(false);
    }

    checkTokenRequest();
  }, [dispatch]);

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
      {!checkTokenRequestPending ? (
        <Fragment>
          <MainNav>
            <MainNavLinksContainer>
              <MainNavLinkContainer>
                <MainNavLink to="/">Home</MainNavLink>
              </MainNavLinkContainer>
              {!isUserLoggedIn ? (
                <MainNavLinkContainer>
                  <MainNavLink to="/auth">Login</MainNavLink>
                </MainNavLinkContainer>
              ) : null}
              {isUserLoggedIn ? (
                <MainNavLinkContainer>
                  <MainNavLink to="/protected">Protected route</MainNavLink>
                </MainNavLinkContainer>
              ) : null}
              {isUserLoggedIn ? (
                <MainNavLogoutButtonContainer>
                  <MainNavLogoutButton onClick={handleLogout}>
                    Logout
                  </MainNavLogoutButton>
                </MainNavLogoutButtonContainer>
              ) : null}
            </MainNavLinksContainer>
          </MainNav>
          <MainOutletContainer>
            <Outlet></Outlet>
          </MainOutletContainer>
        </Fragment>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100% - 60px)",
          }}
        >
          <PuffLoader />
        </div>
      )}
    </MainContainer>
  );
};

export default Main;
