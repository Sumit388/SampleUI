/* //* Packages Import */
import { useState } from "react";

/* //* Styles Import */
import Styles from "../styles/components/CookiesNotification.module.scss";

const CookiesNotification = () => {
  const [visible, setVisible] = useState(true);
  return (
    visible && (
      <div className={Styles.cookieContainer}>
        <span>
          This site uses cookies. See our <a href="/">Cookie Policy</a> for
          details.
        </span>
        <button onClick={() => setVisible(false)}>OK</button>
      </div>
    )
  );
};

export default CookiesNotification;
