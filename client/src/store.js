import { configureStore } from '@reduxjs/toolkit'
import portalSlice from "../../client/src/feature/slice"
import authSlice from "../../client/src/feature/authSlice"
import userSlice from "../../client/src/feature/userSlice"
export const store = configureStore({
  reducer: {
    portal:portalSlice,
    auth:authSlice,
    user:userSlice
  },
})


