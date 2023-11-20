import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Link } from "react-router-dom";
import { TCategoryResponse } from "@/lib/types";

type PageProps = {
  data: TCategoryResponse;
};
export default function Category({ data }: PageProps) {
  const myCategory = (data?.attributes?.name).split("/")[0].toLowerCase();
  return (
    <Link to={`${myCategory}`}>
      <Card className="max-w-[350px] border-none ">
        {" "}
        <CardContent className="p-0 rounded-t-md overflow-hidden">
          <img
            src={data?.attributes?.image?.data?.attributes?.url}
            alt={data?.attributes?.name}
            className="w-full aspect-video object-center object-cover"
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-1.5 p-2 ">
          <span className="text-sm font-semibold hover:underline underline-offset-4">
            {data?.attributes?.name}
          </span>
          <span className="text-xs font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            in natus laborum blanditiis.
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
