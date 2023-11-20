import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategorystateValue } from "@/lib/types";
import { CategoryContext } from "@/lib/context/categoryState";
import { Doctor } from "./doctors";

export default function DoctorsList() {
  const { doctors, handleGetDoctors }: CategorystateValue =
    useContext(CategoryContext);
  const params = useParams();
  React.useEffect(() => {
    if (params?.category) {
      handleGetDoctors(params?.category || "");
    }
  }, [params?.category, handleGetDoctors]);
  return (
    <div className="w-full">
      {doctors &&
        [...doctors.doctorList].map((val, i) => {
          return <Doctor key={i} data={val} category={doctors.category} />;
        })}
    </div>
  );
}
