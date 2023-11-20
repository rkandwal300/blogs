import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TDoctor } from "@/lib/types";
import { MdThumbUp } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type PageProps = {
  data: TDoctor;
  category: string;
};

export const Doctor = ({ data, category }: PageProps) => {
  return (
    <Card className="w-full flex border-x-0 rounded-none  gap-2.5">
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
      <CardContent className="flex flex-col items-start gap-2 p-2">
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
    </Card>
  );
};
