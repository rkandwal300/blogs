import React from "react";
type Props = {
  createChatBotMessage: any;
  setState: any;
  children: any;
};

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}: Props) => {
  const updateChatbotState = (message: any) => {
    setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello nice to meet you");
    updateChatbotState(botMessage);
  };

  const actions = {
    handleHello,
    updateChatbotState,
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: actions,
        });
      })}
    </div>
  );
};

export default ActionProvider;
