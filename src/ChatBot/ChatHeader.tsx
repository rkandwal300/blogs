import { AvatarChat } from "@/ChatBot/widgets/chat_avatar";
import { handleEnrollChat } from "@/redux/features/chatSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";

export default function ChatHeader() {
  const dispatch = useDispatch();
  return (
    <div className=" flex items-center bg-primary text-primary-foreground p-2 rounded-b-xl py-3 gap-3">
      <span
        className="cursor-pointer"
        onClick={() => dispatch(handleEnrollChat(false))}
      >
        {" "}
        <AiOutlineArrowLeft size={20} />
      </span>
      <div className="flex items-center  gap-1">
        <AvatarChat
          src="https://gravatar.com/avatar/cd70bedf0de3d04edeffab984da84426?s=400&d=robohash&r=x"
          className="bg-background  w-8 h-8"
        />
        <span className=" text-lg font-normal">{"Chatty"}</span>
      </div>
    </div>
  );
}
