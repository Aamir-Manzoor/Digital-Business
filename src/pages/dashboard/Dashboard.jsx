import css from "./Dashboard.module.css";
import {
  cardsData,
  // ordersData,
  // groupNumber,
  // INITIAL_EVENTS,
  // userData,
  // boardData,
} from "../../data/data";
const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>

            <div className={css.durationButton}>
              <select>
                <option value="">1 Week</option>
                <option value="">1 Month</option>
                <option value="">1 Year</option>
              </select>
            </div>
          </div>
          <div className={css.card}>
            {cardsData.map((card, i) => {
              <div className={css.card} key={i}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>{card.change}</span>
                </div>

                <div className={css.cardAmount}></div>
              </div>;
            })}
          </div>
        </div>
      </div>

      <div className={css.orders}>orders</div>
    </div>
  );
};

export default Dashboard;
