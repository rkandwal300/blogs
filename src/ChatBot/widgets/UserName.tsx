import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleGetUserName } from "@/redux/features/chatSlice";
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";

export default function Name(props: any) {
  const [userName, setUserName] = React.useState("");
  const dispatch = useDispatch();
  const handleNameChange = (e: any) => {
    setUserName(e.target.value);
    dispatch(handleGetUserName(e.target.value));
  };

  const handleNameSubmit = () => {
    if (userName) {
      const botmessage = createChatBotMessage(`Please enter your age.`, {
        widget: "UserAge",
      });
      props.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, botmessage],
      }));
    }
  };

  return (
    <div>
      <Input
        type="text"
        className="h-8 mb-2 text-xs"
        placeholder="Please enter your name"
        value={userName}
        onChange={handleNameChange}
      />
      <Button
        disabled={userName.length > 0 ? false : true}
        size={"sm"}
        onClick={handleNameSubmit}
        className="text-xs"
      >
        Submit
      </Button>
    </div>
  );
}
