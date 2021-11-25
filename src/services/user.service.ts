import axios from "axios";
const baseUserUrl = "/api/user";

const signUpUser = async (values: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const response = await axios.post(`${baseUserUrl}/sign-up`, values);
  const { data } = response;
  return data;
};

export { signUpUser };
