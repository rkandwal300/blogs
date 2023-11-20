import React from "react";
import { fetchApi } from "../api";
import { CategorystateValue, TCategoryResponse, TDoctor } from "../types";

const CategoryContext = React.createContext<any>(null);

const CategoryState = (props: { children: React.ReactNode }) => {
  const [categories, setCategories] = React.useState<TCategoryResponse[]>([]);
  const [doctors, setDoctors] = React.useState<{
    category: string;
    doctorList: TDoctor[];
  }>({ category: "", doctorList: [] });
  React.useEffect(() => {
    fetchApi("categories", "populate=*")
      .then((val: TCategoryResponse[]) => setCategories(val))
      .catch((e: any) => console.log(e));
  }, []);

  const handleGetDoctors = (category: string) => {
    fetchApi(
      "categories",
      "populate[1]=doctors&populate[doctors][populate][0]=image&populate=*"
    )
      .then((value: TCategoryResponse[]) => {
        value.map((val) => {
          if ((val?.attributes?.name).toLowerCase() === category) {
            setDoctors({
              category: val?.attributes?.name,
              doctorList: val?.attributes?.doctors?.data,
            });
          }
        });
      })
      .catch((e: any) => console.log(e));
  };

  const CategorystateValue: CategorystateValue = {
    categories,
    handleGetDoctors,
    doctors,
  };

  return (
    <CategoryContext.Provider value={CategorystateValue}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
export { CategoryContext };
