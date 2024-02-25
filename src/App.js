/* //* Packages Import */
import { useState } from "react";

/* //* Components Import */
import DataTable from "./component/DataTable";
import Tabs from "./component/Tabs";
import CookiesNotification from "./component/CookiesNotification";
import DummyDataCenter from "./component/DummyDataCenter";

/* //* Assets Import */
import bg from "../src/assets/bg.svg";

/* //* Styles Import */
import "./App.css";
import Styles from "./styles/Homepage.module.scss";

function App() {
  const [activeTab, setActiveTab] = useState("asn");
  return (
    <div className={Styles.appContainer}>
      <img alt="bg" src={bg} />
      <div className={Styles.mainContainer}>
        <h1>UI Test</h1>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className={Styles.tableContainer}>
          {activeTab === "asn" ? <DataTable /> : <DummyDataCenter />}
        </div>
        <CookiesNotification />
      </div>
    </div>
  );
}

export default App;
