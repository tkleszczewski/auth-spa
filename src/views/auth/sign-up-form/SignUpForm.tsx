import {
  FormControlContainer,
  FormInput,
  FormLabel,
} from "../../../components/forms/Forms";
import {
  FormContainer,
  LoginButton,
  LoginForm,
  LoginFormInfo,
  LoginFormLink,
  LoginFormTitle,
} from "../../../components/forms/LoginForm";

const SignUpForm: React.FC = () => {
  return (
    <FormContainer>
      <LoginForm autoComplete="off">
        <LoginFormTitle>Sign up</LoginFormTitle>
        <FormControlContainer>
          <FormLabel>email</FormLabel>
          <FormInput type="text" />
        </FormControlContainer>
        <FormControlContainer>
          <FormLabel>password</FormLabel>
          <FormInput type="password" />
        </FormControlContainer>
        <FormControlContainer>
          <FormLabel>confirm password</FormLabel>
          <FormInput type="password" />
        </FormControlContainer>
        <LoginButton type="submit">submit</LoginButton>
        <LoginFormInfo>
          Already registered?{" "}
          <LoginFormLink to="../sign-in">sign in</LoginFormLink>
        </LoginFormInfo>
      </LoginForm>
    </FormContainer>
  );
};

export default SignUpForm;
