import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
  name: "coins",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = coinSlice.actions;

export default coinSlice.reducer;
