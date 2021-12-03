import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const Pages = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="search" element={<Results />}></Route>
        <Route path="/" element={<Navigate replace to="search" />}></Route>
        <Route path="images" element={<Results />}></Route>
        <Route path="news" element={<Results />}></Route>
      </Routes>
    </div>
  );
};

export default Pages;
