import axios from "axios";

const authApiUrl = "/api/auth";

export const checkAuthToken = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    const response = await axios.post(
      `${authApiUrl}/check-token`,
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    return response.data;
  } else {
    return null;
  }
};
