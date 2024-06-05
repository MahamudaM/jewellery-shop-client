import { useContext } from "react";
import { AuthContext } from "../Auth/AutheProvider";
import Navbar from "../component/sharedComponent/Navbar";
import useAdmin from "../Hooks/useAdmin";
import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
  const {user}=useContext(AuthContext)
  const[isAdmin]=useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
                      {/* side navbar */}
          
           <div className="drawer drawer-mobile ">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content p-10">
    {/* <!-- Page content here --> */}
  
    <Outlet></Outlet>
 
    {/* sidebar */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My appointment</Link></li>
      {
        isAdmin && <>
        <li><Link to='/dashboard/allUser'>All users</Link></li>
        <li><Link to='/dashboard/addDoctor'>Add doctor</Link></li>
        <li><Link to='/dashboard/manageDoctor'>Manage docters</Link></li>
        </>
      }
    </ul>
  
  </div>
</div>
     
        </div>
    );
};

export default DashboardLayout;