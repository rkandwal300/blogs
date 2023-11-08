import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ChatState {
  chat_show: boolean;
  name: string;
  age: number;
  slot: string;
  chat_exit: boolean;
}

const initialState: ChatState = {
  chat_show: false,
  name: "",
  age: 0,
  slot: "",
  chat_exit: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    handleEnrollChat: (state, action: PayloadAction<boolean>) => {
      state.chat_show = action.payload;
    },
    handleGetUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    handleGetUserAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    handlegetUserSlot: (state, action: PayloadAction<string>) => {
      state.slot = action.payload;
    },
    handleExitBot: (state, action: PayloadAction<boolean>) => {
      state.chat_exit = action.payload;
    },
  },
});

export const {
  handleEnrollChat,
  handlegetUserSlot,
  handleGetUserName,
  handleGetUserAge,
  handleExitBot,
} = chatSlice.actions;
export const chatReducer = chatSlice.reducer;

export default chatSlice.reducer;
