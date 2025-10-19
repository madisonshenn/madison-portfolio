export interface ExperienceItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  skills?: string[];
  link?: string;
}

export const professionalExperience: ExperienceItem[] = [
  {
    title: "Kearney - CMU Student Lab",
    subtitle: "AI/ML Engineer",
    period: "August 2025 - December 2025",
    description:
      "Developed an AI agent with N-BEATS neural networks for cost forecasting and an LLM-powered conversational interface with Groq/Llama 3.1 to deliver on-demand should-cost analysis for chemical procurement, preventing overpayment and improving contract negotiation efficiency.",
    skills: [
      "Python",
      "N-BEATS",
      "LLM",
      "Deep Learning",
      "Cross-functional Collaboration",
      "Presentation",
      "Agile"
    ],
    link: "https://www.kearney.com/"
  },
  {
    title: "Perennial",
    subtitle: "Data Scientist, Internship",
    period: "May 2025 - August 2025",
    description:
      "Client Project: developed predictive ML pipelines with XGBoost and Quantile Random Forests to predict carbon stocks; R&D: models' transferability and domain adaptation & SHAP/PFI-based interpretability for internal feature stores",
    skills: [
      "Python",
      "XGBoost",
      "Quantile Random Forest (QRF)",
      "Optuna",
      "SHAP",
      "DBSCAN",
      "Flyte",
      "BigQuery",
      "GCP",
      "Geospatial Analysis",
      "GIS",
      "Cross-functional Collaboration",
      "Presentation",
      "Agile"
    ],
    link: "https://www.perennial.earth/"
  },
  {
    title: "Oliver Wyman",
    subtitle: "Marketing Analyst, Internship",
    period: "April 2024 - October 2024",
    description:
      "Design and execute A/B tests on social-commerce ad placements; Implemented Logistic Regression, Random Forest, and XGBoost models to identify high-value segments; Built Tableau dashboards for real-time KPI monitoring.",
    skills: [
      "Python",
      "SQL",
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
      "A/B Testing",
      "Tableau",
      "Experimentation Design",
      "Cross-functional Collaboration"
    ],
    link: "https://www.oliverwyman.com/"
  },
  {
    title: "Autohome Inc.",
    subtitle: "Data Analyst, Internship",
    period: "July 2023 - August 2023",
    description:
      "Applied K-Means and DBSCAN clustering with RFM modeling for user segmentations; Conducted feature scaling, EDA, and visualization of user-level patterns to drive marketing strategy optimization.",
    skills: [
      "Python",
      "SQL",
      "K-Means",
      "DBSCAN",
      "RFM Modeling",
      "EDA",
      "Feature Engineering",
      "Data Visualization"
    ],
    link: "https://ir.autohome.com.cn/"
  },
  {
    title: "Ernst & Young (EY), Financial Services Office",
    subtitle: "Financial Analyst Intern",
    period: "May 2023 - July 2023",
    description:
      "Conducted time series analysis to predict fund inflows/outflows; developed risk-aligned evaluation metrics integrating directional accuracy and magnitude weighting; Performed exploratory data analysis on seasonal and cyclical trends to guide investment decision-making.",
    skills: [
      "Python",
      "Prophet",
      "ARIMA",
      "XGBoost",
      "Random Forest",
      "Time Series Forecasting",
      "EDA",
      "Financial Modeling"
    ],
    link: "https://www.ey.com/en_cn"
  },
  {
    title: "Credera",
    subtitle: "Business Analyst Intern",
    period: "May 2022 - July 2022",
    description:
      " ",
    skills: [
      " "
    ],
    link: "https://www.credera.com/en-us"
  },
  {
    title: "Bureau Executive",
    subtitle: "Human Resources Intern",
    period: "August 2020 - December 2020",
    description:
      " ",
    skills: [
      " "
    ],
    link: "https://www.bureauexec.com/"
  },
];

export const academicExperience: ExperienceItem[] = [
  {
    title: "M.S. Information Systems Management",
    subtitle: "Carnegie Mellon University",
    period: "2024 - 2025",
    description:
      "Specialization in Machine Learning and AI. Relevant courseworks include Generative AI, Relational Database Management (PostgreSQL), Distributed Systems (Java), Data Structures and Algorithms (Java), Time Series Forecasting (Python), and NoSQL Database Management (MongoDB, Apache Cassandra, Redis, Neo4j), Advanced Business Analytics (Python).",
    skills: [
      "Generative AI",
      "Machine Learning",
      "Distributed Systems",
      "Structured and Unstructured Database Management",
      "Java",
      "Python",
    ],
    link: "https://www.cmu.edu/"
  },
  {
    title:
      "B.S. in Statistics and Economics (Minor in Data Science)",
    subtitle: "University of North Carolina at Chapel Hill",
    period: "2020 - 2024",
    description:
      "Relevant courseworks include Machine Learning (Python), Data Science (Python + R), Stochastic Modeling, Optimization, Probability, Linear Algebra, Discrete Mathematics, Intermediate Econometrics (Stata), Intermediate Microeconomics, Intermediate Macroeconomics, Financial Market, Financial Accounting.",
    skills: [
      "Statistics",
      "Econometrics",
      "Machine Learning",
      "Python",
      "R",
      "Java",
      "Stata"
    ],
    link: "https://www.unc.edu/"
  },
];
