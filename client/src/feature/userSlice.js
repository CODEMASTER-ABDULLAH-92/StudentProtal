import { createSlice } from '@reduxjs/toolkit';
import Cookies from "js-cookie"
const storedUser = localStorage.getItem('user'); // Retrieve from localStorage

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null, // Load user if available
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // Save to localStorage
    },
    logoutUser: (state) => {
      state.user = null;
      // Cookies.remove("accessToken");
      localStorage.removeItem('user'); // Remove from localStorage
    },
  //   logoutUser: (state) => {
  //     state.user = null;
  //     Cookies.remove("accessToken", { path: "/" }); // Ensure correct path
  //     localStorage.removeItem("user"); // Remove from localStorage
  //     document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Force remove
  // },  
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

  // const token = Cookies.get("accessToken"); 