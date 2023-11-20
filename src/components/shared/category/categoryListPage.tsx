import { CategorystateValue } from "@/lib/types";
import Category from "./category";
import React, { useContext } from "react";
import { CategoryContext } from "@/lib/context/categoryState";

export const CategoryListPage = () => {
  const { categories }: CategorystateValue = useContext(CategoryContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3 justify-items-start p-3">
      {categories.map((val, i) => {
        return (
          <React.Fragment key={i}>
            {categories && <Category data={val} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};
