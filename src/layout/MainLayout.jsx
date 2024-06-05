import { Outlet } from "react-router-dom";
import Footer from "../component/sharedComponent/Footer";
import Navbar from "../component/sharedComponent/Navbar";

export default function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>

    </div>
  )
}
