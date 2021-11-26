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
    userLoggedOut: (state) => {
      state.accessToken = "";
      state.user = null;
      state.isUserLoggedIn = false;
    },
    tokenChecked: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
    },
  },
});

export const { userSignedIn, userSignedUp, userLoggedOut, tokenChecked } =
  authSlice.actions;

export default authSlice.reducer;
