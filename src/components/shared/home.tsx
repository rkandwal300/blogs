import { CategoryListPage } from "./category/categoryListPage";

export const Home = () => {
  return (
    <div className="flex flex-col items-start w-fit h-fit gap-0.5 px-3 ">
      <span className="text-lg font-semibold">
        {" "}
        Book an appointment for an in-clinic consultation
      </span>
      <span className="text-sm font-normal">
        {" "}
        Find experienced doctors across all specialities
      </span>
      <CategoryListPage />
    </div>
  );
};
