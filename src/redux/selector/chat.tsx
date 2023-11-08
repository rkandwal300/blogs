import { RootState } from "../store";

export const chatSelector = (state: RootState) => {
  return state.chat.chat_show;
};
export const chatBotExitSelector = (state: RootState) => {
  return state.chat.chat_exit;
};
export const chatBotExitMessageSelector = (state: RootState) => {
  return `Your name ${state.chat.name} aged ${state.chat.age} has been added to student system.`;
};
