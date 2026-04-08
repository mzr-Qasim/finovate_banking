import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Outlet /> 
      </div>
    </>
  );
}

export default MainLayout;
