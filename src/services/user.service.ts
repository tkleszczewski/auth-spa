import axios, { AxiosResponse } from "axios";
const baseUserUrl = "/api/user";

interface BasicDTO {
  success: boolean;
  message?: string;
}

interface User {
  email: string;
}

interface SignInUserDTO extends BasicDTO {
  user: User;
  accessToken: string;
}

interface SignUpUserDTO extends SignInUserDTO {}

interface IsUserUniqueDTO extends BasicDTO {
  user: User;
}

const signInUser = async (values: {
  email: string;
  password: string;
}): Promise<SignInUserDTO> => {
  const response = await axios.post(`${baseUserUrl}/sign-in`, values);
  const { data } = response;
  return data;
};

const signUpUser = async (values: {
  email: string;
  password: string;
  confirmPassword: string;
}): Promise<SignUpUserDTO> => {
  const response = await axios.post(`${baseUserUrl}/sign-up`, values);
  const { data } = response;
  return data;
};

const isUserUnique = async (email: string | undefined): Promise<boolean> => {
  const response = await axios.post<
    { email: string },
    AxiosResponse<IsUserUniqueDTO>
  >(`${baseUserUrl}/is-unique`, { email });
  const { data } = response;
  return !data.user;
};

export { signInUser, signUpUser, isUserUnique };
