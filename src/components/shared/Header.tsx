import { Button } from "../ui/button";
import { handleEnrollChat } from "@/redux/features/chatSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col  items-center gap-3">
      <span className="text-xl font-semibold">
        {" Enter into Student Info System. "}
      </span>

      <Button onClick={() => dispatch(handleEnrollChat(true))}>
        {" "}
        {"Enroll Now!"}
      </Button>
    </div>
  );
}
