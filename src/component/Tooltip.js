/* //* Styles Import */
import Styles from "../styles/components/Tooltip.module.scss";

const Tooltip = () => (
  <span className={Styles.tooltipContainer}>
    <button data-tooltip="I’m the tooltip text.">i</button>
  </span>
);

export default Tooltip;
