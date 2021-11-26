import axios from "axios";

const authApiUrl = "/api/auth";

interface CheckTokenDTO {
  user: { email: string } | null;
  accessToken: string;
  success: boolean;
  message?: string;
}

export const checkAuthToken = async (): Promise<CheckTokenDTO> => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    const response = await axios.post(
      `${authApiUrl}/check-token`,
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    return response.data;
  } else {
    return { user: null, accessToken: "", success: false };
  }
};
