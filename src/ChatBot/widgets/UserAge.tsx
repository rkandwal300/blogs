import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { handleExitBot, handleGetUserAge } from "@/redux/features/chatSlice";
import { createChatBotMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";

export default function UserAge(props: any) {
  const dispatch = useDispatch();
  const handleNameChange = (e: any) => {
    dispatch(handleGetUserAge(e));

    const botmessage = createChatBotMessage(`Thank you.`, { delay: 500 });
    props.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
    setTimeout(() => {
      dispatch(handleExitBot(true));
    }, 5000);
  };
  return (
    <Select onValueChange={handleNameChange}>
      <SelectTrigger className="w-[180px]h-8 mb-2 text-xs">
        <SelectValue placeholder="Please enter your age" />
      </SelectTrigger>
      <SelectContent className="h-[300px] overflow-y-scrol">
        {[...Array(23)].map((item, index) => {
          const value = index + 18;
          return (
            <SelectItem className="border-b" key={index} value={`${value}`}>
              {`${value}`}
              <span className="hidden">{item || ""}</span>
            </SelectItem>
          );
        })}
        {/* <SelectItem value="dark">Darkk</SelectItem> */}
        {/* <SelectItem value="light">Light</SelectItem>
          <SelectItem value="system">System</SelectItem> */}
      </SelectContent>
    </Select>
  );
}
