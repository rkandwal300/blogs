import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TDoctor } from "@/lib/types";
import { MdThumbUp } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

type PageProps = {
  data: TDoctor;
  category: string;
};

export const Doctor = ({ data, category }: PageProps) => {
  const { toast } = useToast();
  return (
    <Card className="flex border-x-0 rounded-none  gap-2.5">
      <CardHeader className="p-2 px-3">
        <Avatar className="w-28 h-28 rounded-full overflow-hidden">
          <AvatarImage
            src={data?.attributes?.image?.data?.attributes?.url}
            alt={data?.attributes?.name}
            className="w-full h-full object-cover object-center"
          />
          <AvatarFallback>{data?.attributes?.name}</AvatarFallback>
        </Avatar>
      </CardHeader>{" "}
      <CardContent className=" w-full flex flex-col items-start gap-2 p-2">
        <div className="flex flex-col items-start gap-1">
          <span className="text-lg text-blue-500">
            {`Dr. ${data?.attributes?.name}`}
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium text-muted-foreground">
              {category || ""}
            </span>
            <div>
              {" "}
              <span className="text-sm font-medium text-muted-foreground">
                {"Experience : "}
              </span>
              <span className="text-sm">{`${data?.attributes?.experience} years`}</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium text-muted-foreground">
              {"Address : "}
            </span>
            <span className="text-sm">{data?.attributes?.address}</span>
          </div>
          <div>
            <span className="text-sm font-medium text-muted-foreground">
              {"Clinic : "}
            </span>
            <span className="text-sm">{data?.attributes?.clinic}</span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Badge className="bg-green-500 gap-1 ">
            {" "}
            <MdThumbUp size={18} className={"text-white"} />
            {`${data?.attributes?.rating}%`}
          </Badge>
          <span className="text-sm font-medium text-foreground underline underline-offset-2">
            {" "}
            {`${data?.attributes?.totalPatients} Patient Stories `}
          </span>
        </div>
      </CardContent>
      <CardFooter className="w-full flex flex-col justify-end items-center p-2 gap-2 ">
        <span className=" flex items-center gap-2 text-sm font-medium text-green-500">
          <FaRegCalendarAlt />
          {" Avilable Today"}
        </span>
        <Button
          size={"lg"}
          className="flex flex-col "
          onClick={() => {
            toast({
              title: "Appointment Booked ",
              description: `Your Appointment is on Friday, February 10, 2023 at 5:57 PM with Dr. ${data?.attributes?.name}`,
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          <span className="text-sm font-medium ">{"Book Appointment"}</span>
          <span className="text-xs font-medium text-white">
            {"No Booking Fee"}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};
