import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  url : "http://localhost:8001"
}

export const counterSlice = createSlice({
  name: 'portal',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const {incrementByAmount } = counterSlice.actions

export default counterSlice.reducer