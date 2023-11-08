import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

export function AvatarChat({ src, className = "", ...props }: any) {
  return (
    <Avatar {...props} className={`z-20 ${className}`}>
      <AvatarImage src={src || ""} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
