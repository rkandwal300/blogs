import React from "react";

const MessageParser = ({ children, actions }: any) => {
  const parse = (message: string) => {
    const lower_message = message.toLowerCase();
    if (lower_message == "hello") {
      actions.handleHello();
    }

    // console.log("message=", message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
