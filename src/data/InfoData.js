/* //* Component Import */
import Tooltip from "../component/Tooltip";

/* //* Styles Import */
import Styles from "../styles/components/DataTable.module.scss";

export const INFO_LIST = [
  {
    id: 1,
    ansNumber: "16509",
    ansName: "AMAZON-02",
    score: 7.25,
    dataCenters: [
      "16509-IE-Dublin",
      "16509-US-Boardman",
      "16509-JP-Tokyo",
      "16509-US-Columbus",
      "16509-DE-Frankfurt am",
      "Main",
    ],
    population: "23",
    delinquent: "0",
    privateValue: "11",
    privatePercentage: "47.83%",
    stake: "56,944,969(14.82%)",
  },
  {
    id: 2,
    ansNumber: "396356",
    ansName: "LATITUDE-SH",
    score: 8.41,
    dataCenters: ["396356-Jp-Tokyo", "396356-GB-London"],
    population: "65",
    delinquent: "0",
    privateValue: "7",
    privatePercentage: "10.77%",
    stake: "56,339,204 (14.66%)",
  },
  {
    id: 3,
    ansNumber: "20326",
    ansName: "TERASWITCH",
    score: 8.28,
    dataCenters: [
      "20326-NL-Amsterdam",
      "20326-IE-Dublin",
      "20326-US-Pittsburgh",
      "20326-SG-Singapore",
      "20326-GB-London",
      "20326-JP-Tokyo",
      "20326-US-Los Angeles",
      "20326-SG-Asia/Singapore",
    ],
    population: "53",
    delinquent: "0",
    privateValue: "13",
    privatePercentage: "24.53%",
    stake: "51,762,458 (13.47%)",
  },
  {
    id: 4,
    ansNumber: "16276",
    ansName: "OVH SAS",
    score: 7.61,
    dataCenters: [
      "16276-FR-Strasbourg",
      "16276-FR-Europe/Paris",
      "16276-KZ-Asia/Almaty",
      "16276-PL-Warsaw",
      "16276-FR-Gravelines",
      "16276-GB-London",
      "16276-FR-Roubaix",
    ],
    population: "283",
    delinquent: "2",
    delinquentPercentage: "0.71%",
    privateValue: "47",
    privatePercentage: "16.61%",
    stake: "35,064,367 (9.12%)",
  },
  {
    id: 5,
    ansNumber: "13030",
    ansName: "Init7 (Switzerland) Ltd.",
    score: 1.0,
    dataCenters: ["13030-CH-Aarburg"],
    population: "1",
    delinquent: "1",
    delinquentPercentage: "100.0%",
    privateValue: "0",
    stake: "18 (0.00%)",
  },
  {
    id: 6,
    ansNumber: "51945",
    ansName: "ConnetU Ltd.",
    score: 6.0,
    dataCenters: ["51945-GB-Europe/London"],
    population: "1",
    delinquent: "0",
    privateValue: "0",
    stake: "10 (0.00%)",
  },
  {
    id: 7,
    ansNumber: "216444",
    ansName: "UAB Cherry Servers",
    score: 6.0,
    dataCenters: ["216444-LT-Europe/Vilnius"],
    population: "1",
    delinquent: "0",
    privateValue: "0",
    stake: "1 (0.00%)",
  },
];

export const TABLE_HEADINGS = [
  <>
    ASN <Tooltip />
  </>,
  <>
    Average Score <Tooltip />
  </>,
  <>Data Centers</>,
  <>
    {" "}
    Population <span className={Styles.numbers}>(1983)</span> <Tooltip />
  </>,
  <>
    <div className={Styles.marginBottom}>
      Delinquent <span className={Styles.numbers}>(12 | 0.61%)</span>{" "}
      <Tooltip />
    </div>
    <div className={Styles.marginBottom}>
      Private <span className={Styles.numbers}>(271 | 13.67%)</span> <Tooltip />
    </div>
  </>,
  <>
    {" "}
    Active stake <span className={Styles.numbers}>(384,322,582)</span>{" "}
    <Tooltip />
  </>,
];
