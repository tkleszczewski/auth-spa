import { useMemo } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
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

import { isUserUnique } from "../../../services/user.service";

import passwordRegex from "../../../utils/password";

import { signUpUser } from "../../../store/auth/auth.slice";
import { AppDispatch } from "../../../store/store";

// const createDebouncedIsUserUniqueTestFunction = () => {
//   const timeoutTime = 400;
//   let id: ReturnType<typeof setTimeout> | null = null;
//   return async (email: string | undefined) => {
//     if (id) {
//       clearTimeout(id);
//     }
//     const isUnique = await new Promise<boolean>(async (resolve, reject) => {
//       id = setTimeout(async () => {
//         try {
//           const isUniqueResponse = await isUserUnique(email);
//           resolve(isUniqueResponse);
//         } catch (error) {
//           resolve(true);
//         }
//       }, timeoutTime);
//     });
//     return isUnique;
//   };
// };

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      email: Yup.string()
        .email("invalid format of email")
        .required("email is required")
        .test(
          "unique-email",
          "this email already exists",
          async (value: string | undefined) => {
            try {
              const isUniqueResponse = await isUserUnique(value);
              return isUniqueResponse;
            } catch (error) {
              return true;
            }
          }
        ),
      password: Yup.string()
        .matches(
          passwordRegex,
          "password should be at least 8 characters long and include at least one uppercase one lowercase one number and one special character"
        )
        .required("password is required"),
      confirmPassword: Yup.string()
        .required("password confirmation is required")
        .test("passwords-match", "passwords must match", function (value) {
          return this.parent.password === value;
        }),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      await dispatch(signUpUser(values));
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
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
          {formik.errors.email ? (
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
          {formik.errors.password ? (
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
          {formik.errors.confirmPassword ? (
            <FormError>{formik.errors.confirmPassword}</FormError>
          ) : null}
        </FormControlContainer>
        <LoginButton disabled={formik.isSubmitting} type="submit">
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
