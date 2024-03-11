import { NavLink } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
// import data from "../data/data";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <img src="./logo.png" alt="Logo" className={css.logo} />
      <div className={css.menu}>
        <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
          <MdSpaceDashboard size={30} />
        </NavLink>

        <NavLink to="calender" className={css.item} title={"Calender"}>
          <AiFillCalendar size={30} />
        </NavLink>

        <NavLink to="board" className={css.item} title={"Trello Board"}>
          <FaTasks size={30} />
        </NavLink>

        <NavLink to="users" className={css.item} title={"Users"}>
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
