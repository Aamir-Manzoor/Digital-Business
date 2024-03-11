import { NavLink } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { AiFillCalender, AiOutlineTable } from "react-icons/ai";
import {MdSpaceDashboard } from "react-icons/md";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <img src="./logo.png" alt="Logo" className={css.logo} />
      <div className={css.menu}>
        <NavLink
          to="dashboard"
          className={css.icon}
          title={"Dashboard"}
        >
            <MdSpaceDashboard size={30}/>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
