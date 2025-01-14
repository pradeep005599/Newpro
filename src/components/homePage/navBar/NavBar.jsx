import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import img from '../../../assest/navlogo.png'
import Sidebar from "../../SideBar/Sidebar";
const NavBar = () => {
  const [sidebaropen,setsidebaropen]=useState (false)
  return (
    <div className="mainBar">
        { sidebaropen && <Sidebar/> }
        <div className="navlogo">
          <img src={img} width={50} alt="Loaging" />
        </div>
        <div className="list">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/">Contact</Link>
        <Link className="link" to="/">Help</Link>
        </div>
        <div className="listlogo">
        <button onClick={()=>{setsidebaropen(!sidebaropen)}}><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list-nested"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
          />
        </svg></button>
      </div>
    </div>
  );
};

export default NavBar;
