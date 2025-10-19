export interface ExperienceItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  skills?: string[];
}

export const professionalExperience: ExperienceItem[] = [
  {
    title: "Geospatial Soil-Carbon Uncertainty Pipeline",
    subtitle: "Senior Data Scientist",
    period: "2023 - Present",
    description: "XGBoost/QRF modeling for ID vs OOD uncertainty quantification, VM0042 compliance validation across 3M+ acres.",
    skills: ["Python", "XGBoost", "QRF", "SHAP", "Optuna", "Geospatial Analysis"]
  },
  {
    title: "Should-Cost Forecasting Agent",
    subtitle: "Data Scientist",
    period: "2022 - 2023",
    description: "N-BEATS time series forecasting + LLM chat interface for on-demand cost predictions and procurement alignment.",
    skills: ["Python", "N-BEATS", "LLM", "Time Series", "FastAPI", "MongoDB"]
  },
  {
    title: "Ad Conversion Uplift Modeling",
    subtitle: "ML Engineer",
    period: "2021 - 2022",
    description: "Multi-strategy recall + ranking (LGBM/DIN) with A/B testing framework and cold-start mitigation for ad optimization.",
    skills: ["Python", "LightGBM", "DIN", "Spark", "BigQuery", "Flyte"]
  }
];

export const academicExperience: ExperienceItem[] = [
  {
    title: "M.S. Computer Science",
    subtitle: "Stanford University",
    period: "2019 - 2021",
    description: "Specialization in Machine Learning and AI. Thesis: Multi-modal Recommendation Systems with Deep Learning.",
    skills: ["Deep Learning", "Recommendation Systems", "Time Series Analysis"]
  },
  {
    title: "Research Assistant - AI Lab",
    subtitle: "Stanford University",
    period: "2020 - 2021",
    description: "Research in distributed systems for large-scale ML training and neural architecture search.",
    skills: ["Distributed Systems", "PyTorch", "Kubernetes", "Model Optimization"]
  },
  {
    title: "B.S. Data Science",
    subtitle: "UC Berkeley",
    period: "2015 - 2019",
    description: "Graduated with Honors. Focus on statistical modeling, machine learning, and data visualization.",
    skills: ["Statistics", "Machine Learning", "Data Visualization", "SQL"]
  }
];
