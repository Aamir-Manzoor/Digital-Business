import moment from "moment/moment";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import ProfileImg from "../assets/profiel.jpg";
import css from "./Layout.module.css";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  // const { pathname } = useLocation();

  return (
    <div className={css.container}>
      <Sidebar />
      {/* {pathname === "/" && <Navigate to="/dashboard" />} */}
      <div className={css.dashboard}>
        <div className={css.topBaseGradient}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format("dddd, do MMM YYYY")}</span>

          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Enter here" />
          </div>

          <div className={css.profile}>
            <img src={ProfileImg} alt="Image" />
            <div className={css.details}>
              <span>Amir Manzoor</span>
              <span>dummyaamir89@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
