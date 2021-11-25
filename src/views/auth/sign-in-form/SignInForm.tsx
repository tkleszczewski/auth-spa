import {
  FormContainer,
  LoginButton,
  LoginForm,
  LoginFormInfo,
  LoginFormTitle,
  LoginFormLink,
} from "../../../components/forms/LoginForm";

import {
  FormControlContainer,
  FormLabel,
  FormInput,
} from "../../../components/forms/Forms";

const SignInForm: React.FC = () => {
  return (
    <FormContainer>
      <LoginForm autoComplete="off">
        <LoginFormTitle>Sign in</LoginFormTitle>
        <FormControlContainer>
          <FormLabel>email</FormLabel>
          <FormInput type="text" />
        </FormControlContainer>
        <FormControlContainer>
          <FormLabel>password</FormLabel>
          <FormInput type="password" />
        </FormControlContainer>
        <LoginButton type="submit">submit</LoginButton>
        <LoginFormInfo>
          Do not have an account?{" "}
          <LoginFormLink to="../sign-up">sign up</LoginFormLink>
        </LoginFormInfo>
      </LoginForm>
    </FormContainer>
  );
};

export default SignInForm;
