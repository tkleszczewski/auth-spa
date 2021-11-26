import axios from "axios";
const baseUserUrl = "/api/user";

const signInUser = async (values: { email: string; password: string }) => {
  const response = await axios.post(`${baseUserUrl}/sign-in`, values);
  const { data } = response;
  return data;
};

const signUpUser = async (values: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const response = await axios.post(`${baseUserUrl}/sign-up`, values);
  const { data } = response;
  return data;
};

const isUserUnique = async (email: string | undefined) => {
  const response = await axios.post(`${baseUserUrl}/is-unique`, { email });
  const { data } = response;
  return !data.user;
};

export { signInUser, signUpUser, isUserUnique };
