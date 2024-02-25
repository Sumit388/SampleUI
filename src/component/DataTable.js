/* //* Data Import */
import { INFO_LIST, TABLE_HEADINGS } from "../data/InfoData";

/* //* Styles Import */
import Styles from "../styles/components/DataTable.module.scss";

const DataTable = () => (
  <table className={Styles.tableContainer}>
    <tr>
      {TABLE_HEADINGS.map((heading) => (
        <th key={heading}>{heading}</th>
      ))}
    </tr>
    {INFO_LIST.map((info) => (
      <tr key={info.id}>
        <td>
          <div className={`${Styles.asnValue} ${Styles.marginBottom}`}>
            {info.ansNumber}
          </div>
          <div>{info.ansName}</div>
        </td>
        <td>
          {" "}
          <div className={Styles.score}>
            <div>
              <div className={Styles.semiCircleOuter}>
                <div className={Styles.semiCircleInner} />
                <div className={Styles.linear1} />
                <div className={Styles.linear2} />
                <div
                  className={Styles.triangle}
                  style={{ transform: `rotate(${18 * info.score}deg)` }}
                />
              </div>
            </div>
            <div className={Styles.value}>{info.score}</div>
          </div>
        </td>
        <td>
          {info.dataCenters.map((center) => (
            <div
              className={`${Styles.centerNames} ${Styles.marginBottom}`}
              key={center}
            >
              {center}
            </div>
          ))}
        </td>
        <td>{info.population}</td>
        <td>
          <div className={Styles.marginBottom}>
            <span className={Styles.actualValue}>{info.delinquent}</span>
            {info.delinquent !== "0" && info.delinquentPercentage && (
              <span className={Styles.percentageValue}>
                ({info.delinquentPercentage})
              </span>
            )}
          </div>
          <div>
            <span className={Styles.actualValue}>{info.privateValue}</span>
            {info.privateValue !== "0" && info.privatePercentage && (
              <span className={Styles.percentageValue}>
                ({info.privatePercentage})
              </span>
            )}
          </div>
        </td>
        <td>56,944,969(14.82%)</td>
      </tr>
    ))}
  </table>
);

export default DataTable;
