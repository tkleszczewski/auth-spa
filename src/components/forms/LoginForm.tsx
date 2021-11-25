import { darken } from "polished";
import styled from "styled-components";
import COLORS from "../../utils/colors";
import { Link } from "react-router-dom";

const FormContainer = styled.section``;

const LoginForm = styled.form`
  border: 1px solid var(--text-color);
  padding: 16px;
  border-radius: 8px;
`;

const LoginFormTitle = styled.h2`
  font-size: 1.8rem;
  padding-bottom: 16px;
  text-align: center;
`;

const LoginButton = styled.button`
  background-color: ${darken(0.1, COLORS.green)};
  color: var(--text-color);
  border: 1px solid var(--text-color);
  padding: 8px;
  width: 100%;
  margin-top: 16px;
  font-weight: 600;
  border-radius: 4px;
  font-size: 1.3rem;
  cursor: pointer;
`;

const LoginFormLink = styled(Link)`
  color: ${darken(0.1, COLORS.green)};
`;

const LoginFormInfo = styled.p`
  text-align: center;
  padding: 8px 0;
  font-size: 1.4rem;
`;

export {
  FormContainer,
  LoginForm,
  LoginFormTitle,
  LoginButton,
  LoginFormInfo,
  LoginFormLink,
};
