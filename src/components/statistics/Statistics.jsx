import { groupNumber } from "../../data/data";
import { BsArrowUpShort } from "react-icons/bs";
import css from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={css.container}>
      <span className={css.title}>Overview Statistics</span>

      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrowIcon}>
            <BsArrowUpShort />
          </div>

          <div className={css.card}>
            <span>Top item this month </span>
            <span>Office comps</span>
          </div>
        </div>

        <div className={css.card}>
          <span>Items</span>
          <span>${groupNumber(74.00003)}</span>
        </div>

        <div className={css.card}>
          <span>Profit</span>
          <span>Profit</span>
          <span>${groupNumber(27000)}</span>
        </div>

        <div className={css.card}>
          <span>Daily average</span>
          <span>${groupNumber(57680)}</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
