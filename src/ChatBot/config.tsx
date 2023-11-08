import { createChatBotMessage } from "react-chatbot-kit";
import { AvatarChat } from "./widgets/chat_avatar";
import ChatHeader from "./ChatHeader";
import Options from "@/ChatBot/widgets/Options";
import DateTimePicker from "@/ChatBot/widgets/Claender";
import UserName from "./widgets/UserName";
import UserAge from "./widgets/UserAge";

const config = {
  initialMessages: [
    createChatBotMessage(` Hello, Welcome to student info system!`, {
      widget: "options",
      delay: 3000,
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props: any) => <Options {...props} />,
    },
    {
      widgetName: "PickSlot",
      widgetFunc: (props: any) => <DateTimePicker {...props} />,
    },
    {
      widgetName: "userName",
      widgetFunc: (props: any) => <UserName {...props} />,
      props: { listenForUserName: true },
    },
    {
      widgetName: "UserAge",
      widgetFunc: (props: any) => <UserAge {...props} />,
      props: { listenForUserName: true },
    },
  ],

  botName: "Chatty",

  customComponents: {
    header: () => <ChatHeader />,
    botAvatar: (props: any) => (
      <AvatarChat
        src="https://gravatar.com/avatar/7e0ea4da26ac8e92cabf404634a89367?s=400&d=robohash&r=x"
        className="bg-primary"
        {...props}
      />
    ),
    userAvatar: (props: any) => (
      <AvatarChat
        src={"https://github.com/shadcn.png"}
        className="bg-background "
        {...props}
      />
    ),
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
      // backgroundColor: "#7C3AED",
    },
  },
  state: {
    currentWidget: "options",
    name: "",
  },
};

export default config;
