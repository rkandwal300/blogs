import { Route, Routes } from "react-router-dom";
import { Home } from "./components/shared/home";
import DoctorsList from "./components/shared/doctors/doctorsList";
import CategoryState from "./lib/context/categoryState";

export default function App() {
  return (
    <CategoryState>
      <div className="flex h-screen justify-center pt-12 px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category/" element={<DoctorsList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </CategoryState>
  );
}

function Error() {
  return <div>Error </div>;
}
