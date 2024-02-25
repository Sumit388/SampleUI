/* //* Styles Import */
import Styles from "../styles/Homepage.module.scss";

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className={Styles.tabsContainer}>
    <button
      onClick={() => setActiveTab("dataCenter")}
      className={activeTab === "dataCenter" ? Styles.activeTab : ""}
    >
      Data Centers
    </button>{" "}
    <button
      onClick={() => setActiveTab("asn")}
      className={activeTab === "asn" ? Styles.activeTab : ""}
    >
      ASN
    </button>
  </div>
);

export default Tabs;
