import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersInfo: localStorage.getItem("usersInfo")
    ? JSON.parse(localStorage.getItem("usersInfo"))
    : null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.usersInfo = action.payload;
      localStorage.setItem("usersInfo", JSON.stringify(action.payload));
    },
    logoutUser: (state, action) => {
      state.usersInfo = null;
      localStorage.clear();
    },

  },
});

export const { setCredentials, logoutUser } = userSlice.actions;

export default userSlice.reducer;
