import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const Pages = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/search" element={<Results />}></Route>
        <Route path="/" element={<Navigate replace to="/search" />}></Route>

        {/* 1-complete all the routes, 2-implement useContext */}
      </Routes>
    </div>
  );
};

export default Pages;
