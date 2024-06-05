import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AutheProvider";

export default function Navbar() {

  const {user,logOut}=useContext(AuthContext)


const logOutHandler =()=>{
  logOut()
  .then(()=>{})
  .catch(err=>console.log(err))
}
    const menuItem = 
    <>
    <li><Link to ='/'> home</Link></li> 
    <li><Link to ='/addJewellary'>add Jewellary</Link></li>   
    <li><Link to ='/regiester'>Sing up</Link></li>
   {
    user?.uid? 
    <>
    <li><button onClick={logOutHandler}> Log Out</button></li>
    <li><Link to ='/dashboard'>Dashboard</Link></li>
    </>
    :
<li><Link to ='/login'>Log in</Link></li>
   }
  </>


  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
          
        </ul>
      </div>
      <a href='/' className="btn btn-ghost normal-case text-xl">used clothes store</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
      {menuItem}
       
      </ul>
    </div>
    <label htmlFor="dahbordSidevar" tabIndex={1} className="btn btn-ghost lg:hidden ml-32 lg:ml-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
   
  </div>
);
}
