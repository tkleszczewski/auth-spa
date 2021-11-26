import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthService from "../../services/auth.service";
import * as UserService from "../../services/user.service";

interface User {
  email: string;
}

interface AuthState {
  accessToken: string;
  user: User | null;
  isUserLoggedIn: boolean;
}

const initialState: AuthState = {
  accessToken: "",
  user: null,
  isUserLoggedIn: false,
};

export const checkToken = createAsyncThunk("auth/checkToken", async () => {
  try {
    const data = await AuthService.checkAuthToken();
    const { accessToken, user } = data;
    return {
      accessToken,
      user,
      isUserLoggedIn: !!user,
    };
  } catch (err) {
    return initialState;
  }
});

interface SignUpUserData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (userData: SignUpUserData) => {
    try {
      const data = await UserService.signUpUser(userData);
      const { accessToken, user } = data;
      localStorage.setItem("accessToken", accessToken);
      return {
        accessToken,
        user,
        isUserLoggedIn: !!user,
      };
    } catch (err) {
      return initialState;
    }
  }
);

type SignInUserData = Omit<SignUpUserData, "confirmPassword">;

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (userData: SignInUserData) => {
    try {
      const data = await UserService.signInUser(userData);
      const { accessToken, user } = data;
      localStorage.setItem("accessToken", accessToken);
      return {
        accessToken,
        user,
        isUserLoggedIn: !!user,
      };
    } catch (err) {
      return initialState;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedOut: (state) => {
      state.accessToken = "";
      state.user = null;
      state.isUserLoggedIn = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkToken.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
