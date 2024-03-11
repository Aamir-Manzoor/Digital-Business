import moment from 'moment/moment';

import {BiSearch} from 'react-icons/bi'
import css from "./Layout.module.css";
const Layout = () => {
  return (
    <div className={css.container}>
      <div>Sidebar</div>
      <div className={css.dashboard}>
        <div className={css.topBaseGradient}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format("dddd, do MMM YYYY")}</span>

          <div className={css.searchBar}>
            <BiSearch size={20}/>
            <input type="text" placeholder='Enter here' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
