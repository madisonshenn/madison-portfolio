export interface Project {
  id: string;
  title: string;
  category: "professional" | "selected";
  intro: string;
  thumbnail: string;
  skills: string[];
  overview: string;
  data?: string;
  approach: string;
  results: string;
  techStack: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: "soil-carbon",
    title: "Geospatial Soil-Carbon Uncertainty Pipeline",
    category: "professional",
    intro: "XGBoost/QRF modeling for ID vs OOD uncertainty quantification, VM0042 compliance validation across 3M+ acres.",
    thumbnail: "soil-carbon-thumbnail.jpg",
    skills: ["Python", "XGBoost", "QRF", "SHAP", "Optuna", "Geospatial Analysis"],
    overview: "Developed a comprehensive uncertainty quantification pipeline for soil carbon predictions across large-scale agricultural lands. The project addressed the critical challenge of distinguishing in-distribution (ID) from out-of-distribution (OOD) predictions to ensure compliance with VM0042 carbon credit standards.",
    data: "3M+ acres of geospatial data, multi-year soil samples, satellite imagery features, climate variables, and topographic indicators. Data sources included USDA databases, remote sensing platforms, and proprietary field measurements.",
    approach: "Implemented ensemble modeling with XGBoost for point predictions and Quantile Regression Forests (QRF) for uncertainty estimation. Used SHAP values for feature importance and explainability. Applied Optuna for hyperparameter optimization. Developed custom ID/OOD detection algorithms and variance aggregation methods for spatial predictions.",
    results: "Achieved 85% accuracy in carbon stock predictions with calibrated uncertainty bands. Successfully validated VM0042 compliance across 3M+ acres. Reduced false positives in carbon credit verification by 40%. Enabled stakeholders to make data-driven decisions about carbon offset projects.",
    techStack: ["Python", "XGBoost", "scikit-learn", "SHAP", "Optuna", "GeoPandas", "Rasterio", "PostgreSQL"],
    links: [
      { label: "VM0042 Standard", url: "https://verra.org/methodologies/vm0042-methodology-for-improved-agricultural-land-management/" }
    ]
  },
  {
    id: "forecasting-agent",
    title: "Should-Cost Forecasting Agent",
    category: "professional",
    intro: "N-BEATS time series forecasting + LLM chat interface for on-demand cost predictions and procurement alignment.",
    thumbnail: "forecasting-thumbnail.jpg",
    skills: ["Python", "N-BEATS", "LLM", "Time Series", "FastAPI", "MongoDB"],
    overview: "Built an AI-powered forecasting agent combining state-of-the-art time series models with conversational AI to provide procurement teams with on-demand cost predictions and strategic insights.",
    data: "5+ years of procurement data including material costs, supplier pricing, market indicators, and macroeconomic factors. Data refreshed daily from ERP systems and external market feeds.",
    approach: "Implemented N-BEATS neural network architecture for multi-horizon forecasting. Integrated large language model (LLM) for natural language query interface. Built FastAPI backend for real-time predictions and MongoDB for storing forecast histories. Developed custom prompt engineering for domain-specific cost analysis.",
    results: "Reduced forecast error by 30% compared to traditional methods. Enabled procurement teams to query forecasts conversationally. Improved procurement planning accuracy and reduced emergency purchases by 25%. System handles 500+ queries per week.",
    techStack: ["Python", "N-BEATS", "PyTorch", "OpenAI API", "FastAPI", "MongoDB", "Docker", "Kubernetes"],
    links: []
  },
  {
    id: "ad-conversion",
    title: "Ad Conversion Uplift Modeling",
    category: "professional",
    intro: "Multi-strategy recall + ranking (LGBM/DIN) with A/B testing framework and cold-start mitigation for ad optimization.",
    thumbnail: "ad-conversion-thumbnail.jpg",
    skills: ["Python", "LightGBM", "DIN", "A/B Testing", "Spark", "BigQuery"],
    overview: "Developed an end-to-end conversion uplift modeling system combining multiple recall strategies with sophisticated ranking models to optimize ad placement and maximize ROI.",
    data: "100M+ user interactions, ad impressions, conversions, and user features across web and mobile platforms. Processed using Spark on BigQuery infrastructure.",
    approach: "Implemented multi-strategy candidate retrieval (collaborative filtering, content-based, popularity-based). Built LightGBM and Deep Interest Network (DIN) models for ranking. Developed cold-start features using demographic and contextual data. Created comprehensive A/B testing framework with proper variance reduction techniques.",
    results: "Increased ad conversion rate by 18% while maintaining user experience. Reduced cold-start performance gap by 60%. Successfully scaled to handle 10M+ predictions per day. A/B tests showed statistically significant improvements across all key metrics.",
    techStack: ["Python", "LightGBM", "TensorFlow", "DIN", "Apache Spark", "BigQuery", "Flyte", "Android SDK"],
    links: []
  },
  {
    id: "opinionminer",
    title: "OpinionMiner: NLP on Online Reviews",
    category: "selected",
    intro: "End-to-end NLP pipeline extracting sentiment, aspects/topics, and pain points from large-scale product reviews; built dashboards for category insights.",
    thumbnail: "opinionminer-thumbnail.jpg",
    skills: ["Python", "spaCy", "Transformers", "LDA/NMF", "FastAPI", "Plotly"],
    overview: "Built a comprehensive NLP system to automatically analyze millions of product reviews, extracting actionable insights about customer sentiment, product aspects, and pain points. The system powers category-level dashboards for product teams to understand customer feedback at scale.",
    data: "2M+ product reviews across 50+ categories from e-commerce platforms. Data includes review text, ratings, timestamps, and product metadata. Processed using distributed NLP pipelines.",
    approach: "Developed multi-stage NLP pipeline: (1) Sentiment analysis using fine-tuned Transformers, (2) Aspect extraction with spaCy NER and dependency parsing, (3) Topic modeling using LDA and NMF for theme discovery, (4) Pain point detection using regex rules and semantic similarity. Built FastAPI backend for real-time analysis and Plotly dashboards for visualization.",
    results: "Achieved 92% accuracy in sentiment classification and 87% F1-score in aspect extraction. Identified 15+ recurring pain points per category. Enabled product teams to prioritize improvements based on customer feedback volume and sentiment. Reduced manual review analysis time by 95%.",
    techStack: ["Python", "spaCy", "Transformers (BERT)", "Gensim (LDA/NMF)", "FastAPI", "Plotly Dash", "PostgreSQL", "Elasticsearch"],
    links: [
      { label: "GitHub", url: "https://github.com/madison-shen/opinionminer" },
      { label: "Demo Dashboard", url: "#" }
    ]
  },
  {
    id: "newslens",
    title: "NewsLens: Personalized News Recommendation",
    category: "selected",
    intro: "Multi-stage recsys for news personalization (candidate generation + ranking), with user profiles, recency, diversity, and dwell-time optimization.",
    thumbnail: "newslens-thumbnail.jpg",
    skills: ["Python", "LightGBM", "DIN", "Airflow", "A/B Testing", "Feature Store"],
    overview: "Designed and implemented a production-grade personalized news recommendation system using a two-stage architecture: candidate generation for recall and sophisticated ranking for personalization. The system optimizes for engagement while maintaining content diversity and freshness.",
    data: "10M+ news articles, 500K+ active users, implicit feedback (clicks, dwell time, shares). Features include user reading history, article metadata, real-time trending signals, and contextual features (time, device, location).",
    approach: "Two-stage pipeline: (1) Candidate generation using collaborative filtering, content similarity, and trending articles (2) Ranking using LightGBM and Deep Interest Network (DIN) with features for user preferences, article quality, recency, and diversity. Implemented feature store for real-time serving. Used Airflow for orchestration and A/B testing framework for evaluation.",
    results: "Increased average session time by 35% and click-through rate by 28%. Improved content diversity score by 40% while maintaining engagement. Successfully deployed to production serving 500K+ users with <50ms p95 latency. A/B tests showed 15% increase in user retention.",
    techStack: ["Python", "LightGBM", "TensorFlow", "DIN", "Redis (feature store)", "Apache Airflow", "Flyte", "PostgreSQL", "Docker"],
    links: [
      { label: "GitHub", url: "https://github.com/madison-shen/newslens" },
      { label: "Technical Report", url: "#" }
    ]
  }
];
