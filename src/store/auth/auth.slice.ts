import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    user: null,
    isUserLoggedIn: false,
  },
  reducers: {
    userSignedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
    },
    userSignedUp: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
    },
  },
});

export const { userSignedIn, userSignedUp } = authSlice.actions;

export default authSlice.reducer;
