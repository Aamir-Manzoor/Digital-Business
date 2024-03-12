import { BsArrowIconUpShort } from "react-icons/bs";
import css from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={css.container}>
      <span className={css.title}>Overview Statistics</span>

      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrowIcon}>
            <BsArrowIconUpShort />
          </div>

          <div className={css.card}>
            <span>Top item this month</span>
            <span>Office comps</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
