import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
  name: "coins",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.value - action.payload >= 0) {
        state.value -= action.payload;
      }
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  coinSlice.actions;

export default coinSlice.reducer;
