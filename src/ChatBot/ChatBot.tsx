import Chatbot from "react-chatbot-kit";

type Props = { config: any; MessageParser: any; ActionProvider: any };

function ChatBot({ config, MessageParser, ActionProvider }: Props) {
  return (
    <div className="app-header border rounded-md shadow max-w-sm">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

ChatBot.propTypes = {};

export default ChatBot;
