import { useFormik } from "formik";
import * as Yup from "yup";
import passwordRegex from "../../../utils/password";

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
  FormError,
} from "../../../components/forms/Forms";

const SignInForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("invalid format of email")
        .required("email is required"),
      password: Yup.string()
        .matches(
          passwordRegex,
          "password should be at least 8 characters long and include at least one uppercase one lowercase one number and one special character"
        )
        .required("password is required"),
    }),
    onSubmit(values) {
      alert(JSON.stringify(values));
    },
  });

  return (
    <FormContainer>
      <LoginForm onSubmit={formik.handleSubmit} autoComplete="off">
        <LoginFormTitle>Sign in</LoginFormTitle>
        <FormControlContainer>
          <FormLabel htmlFor="email">email</FormLabel>
          <FormInput
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <FormError>{formik.errors.email}</FormError>
          ) : null}
        </FormControlContainer>
        <FormControlContainer>
          <FormLabel htmlFor="password">password</FormLabel>
          <FormInput
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <FormError>{formik.errors.password}</FormError>
          ) : null}
        </FormControlContainer>
        <LoginButton disabled={!(formik.isValid && formik.dirty)} type="submit">
          submit
        </LoginButton>
        <LoginFormInfo>
          Do not have an account?{" "}
          <LoginFormLink to="../sign-up">sign up</LoginFormLink>
        </LoginFormInfo>
      </LoginForm>
    </FormContainer>
  );
};

export default SignInForm;
