import "react-chatbot-kit/build/main.css";
import config from "./ChatBot/config.tsx";
import MessageParser from "./ChatBot/MessageParser.tsx";
import ActionProvider from "./ChatBot/ActionProvider.tsx";
import Header from "./components/shared/Header.tsx";
import ChatBot from "./ChatBot/ChatBot.tsx";
import { useDispatch, useSelector } from "react-redux";
import {
  chatBotExitMessageSelector,
  chatBotExitSelector,
  chatSelector,
} from "./redux/selector/chat.tsx";
import { handleExitBot } from "./redux/features/chatSlice.ts";

function App() {
  const dispatch = useDispatch();
  const enroll = useSelector(chatSelector);
  const chatbotExit = useSelector(chatBotExitSelector);
  const chatbotExitMessage = useSelector(chatBotExitMessageSelector);
  return (
    <div className="flex flex-col  items-center gap-12 self-stretch px-3">
      {chatbotExit ? (
        <div>
          {chatbotExitMessage}
          <br />
          do you want to start new chat .
          <br />
          <span
            onClick={() => dispatch(handleExitBot(false))}
            className="text-primary underline cursor pointer underline-offset-4"
          >
            click Here!
          </span>
        </div>
      ) : enroll ? (
        <ChatBot
          ActionProvider={ActionProvider}
          MessageParser={MessageParser}
          config={config}
        />
      ) : (
        <Header />
      )}
    </div>
  );
}

export default App;
