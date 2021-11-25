import { useFormik } from "formik";
import { signUpUser } from "../../../services/user.service";
import * as Yup from "yup";

import {
  FormControlContainer,
  FormInput,
  FormLabel,
  FormError,
} from "../../../components/forms/Forms";
import {
  FormContainer,
  LoginButton,
  LoginForm,
  LoginFormInfo,
  LoginFormLink,
  LoginFormTitle,
} from "../../../components/forms/LoginForm";
import passwordRegex from "../../../utils/password";

const SignUpForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      try {
        const data = await signUpUser(values);
        alert(JSON.stringify(data));
      } catch (error: any) {
        alert(error.response.data.message);
      }
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
      confirmPassword: Yup.string()
        .test("passwords-match", "passwords must match", function (value) {
          return this.parent.password === value;
        })
        .required("password confirmation is required"),
    }),
  });

  return (
    <FormContainer>
      <LoginForm onSubmit={formik.handleSubmit} autoComplete="off">
        <LoginFormTitle>Sign up</LoginFormTitle>
        <FormControlContainer>
          <FormLabel htmlFor="email">email</FormLabel>
          <FormInput
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            id="email"
            name="email"
            type="text"
          />
          {formik.touched.email && formik.errors.email ? (
            <FormError>{formik.errors.email}</FormError>
          ) : null}
        </FormControlContainer>
        <FormControlContainer>
          <FormLabel htmlFor="password">password</FormLabel>
          <FormInput
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            id="password"
            name="password"
            type="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <FormError>{formik.errors.password}</FormError>
          ) : null}
        </FormControlContainer>
        <FormControlContainer>
          <FormLabel htmlFor="confirmPassword">confirm password</FormLabel>
          <FormInput
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <FormError>{formik.errors.confirmPassword}</FormError>
          ) : null}
        </FormControlContainer>
        <LoginButton disabled={!(formik.isValid && formik.dirty)} type="submit">
          submit
        </LoginButton>
        <LoginFormInfo>
          Already registered?{" "}
          <LoginFormLink to="../sign-in">sign in</LoginFormLink>
        </LoginFormInfo>
      </LoginForm>
    </FormContainer>
  );
};

export default SignUpForm;
