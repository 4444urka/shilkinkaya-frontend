import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMessage } from "./../types/TMessage";

const initialState = {
  messages: [] as TMessage[],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<TMessage>) => {
      if (action.payload.text !== "") {
        state.messages.push(action.payload);
      }
    },

    removeMessage: (state, action: PayloadAction<number>) => {
      state.messages = state.messages.filter(
        (message) => message.ownerId !== action.payload
      );
    },

    removeAllMessages: (state) => {
      state.messages = [];
    },

    updateMessage: (
      state,
      action: PayloadAction<{ id: number; updatedMessage: TMessage }>
    ) => {
      const { id, updatedMessage } = action.payload;
      const index = state.messages.findIndex(
        (message) => message.ownerId === id
      );
      if (index !== -1) {
        state.messages[index] = updatedMessage;
      }
    },
  },
});

export const { addMessage, removeMessage, removeAllMessages, updateMessage } =
  messagesSlice.actions;

export default messagesSlice.reducer;
