// src/data/projects.ts

export type ProjectTabId = "problem" | "workflow" | "tech" | "impact";

export interface ProjectFigure {
  src: string;          // path under /public or absolute URL
  caption?: string;
  alt?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectBlock {
  type: "text" | "figures" | "links";
  text?: string;                 // when type === "text"
  figures?: ProjectFigure[];     // when type === "figures"
  links?: ProjectLink[];         // when type === "links"
}

export interface ProjectTab {
  id: ProjectTabId;
  label: string;
  blocks: ProjectBlock[];
}

export interface Project {
  id: string;
  title: string;
  category: "professional" | "selected";
  intro: string;
  thumbnail: string;
  skills: string[];

  // New: tabbed content model (preferred going forward)
  tabs?: ProjectTab[];

  // Legacy fields (kept so existing projects render without migration)
  overview?: string;
  data?: string;
  approach?: string;
  results?: string;
  techStack?: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  // ====== Perennial / Soil-Carbon — uses the new tab model ======
  {
    id: "soil-carbon",
    title:
      "End-to-end Predictive Machine Learning Models Pipeline For Carbon Stock Estimates",
    category: "professional",
    intro:
      "Client project at Perennial (ag-tech). End-to-end ML with XGBoost (point estimates), Quantile RF (quantiles), Optuna tuning, Monte Carlo UQ, tiled inference, and QA for VM0042/VM0032 compliance.",
    thumbnail: "soil-carbon-thumbnail.jpg",
    skills: [
      "Python",
      "Flyte Orchestration",
      "XGBoost",
      "Quantile RF",
      "Google Cloud Platform",
      "BigQuery",
      "Optuna",
      "Hyperparameter Tuning",
      "Uncertainty Quantification",
      "Monte Carlo Simulation",
      "Quality Assurance",
    ],
    tabs: [
      {
        id: "problem",
        label: "Problem",
        blocks: [
          {
            type: "text",
            text:
              "Project: Soil Carbon & Bulk Density Prediction with Uncertainty Quantification.\n" +
              "Context: Built during my DS/ML internship at Perennial (soil-carbon MRV for programs like Bayer, Heartland USDA). " +
              "Estimating SOC% and bulk density (BD) at scale is crucial for carbon stock and verification. Traditional lab measurements are expensive and sparse, creating large spatial and temporal gaps.\n" +
              "Challenge: Build scalable, reliable models that generalize across regions (U.S. & global cropland), quantify uncertainty, and support carbon-stock estimation & compliance (VM0042 / VM0032).\n" +
              "Impact: Improved accuracy and trust → more credible reporting across 3M+ acres and stronger sustainability claims.",
          },
          {
            type: "text",
            text:
              "The Challenge\n" +
              "• Accurately estimating SOC% and BD at scale to verify carbon credits and regenerative outcomes.\n" +
              "• Lab measurements are costly and geographically sparse, leaving gaps across millions of acres.\n" +
              "Goals\n" +
              "• Predict SOC% and BD across U.S./global cropland.\n" +
              "• Quantify uncertainty to meet MRV standards (VM0042/VM0032).\n" +
              "• Scale efficiently across terabytes of geospatial data.\n" +
              "This directly supported Bayer’s soil carbon validation by improving model accuracy and enabling transparent uncertainty reporting across 3M+ acres.",
          },
          {
            type: "figures",
            figures: [
              // Replace with your assets or remove this block if not needed.
              {
                src: "figures/soil-pipeline.png",
                caption: "End-to-end pipeline overview",
                alt: "Pipeline diagram",
              },
            ],
          },
        ],
      },
      {
        id: "workflow",
        label: "Workflow",
        blocks: [
          {
            type: "text",
            text:
              "Tech/Tools: Python (Pandas, GeoPandas, XGBoost, scikit-learn, Optuna, SHAP), Quantile Random Forest (QRF), Flyte workflows, BigQuery, MongoDB, GCS, rasterio/xarray, GitLab CI/CD.\n" +
              "End-to-End: Data Ingestion → Preprocessing/Feature Eng → XGBoost Training (Point) → QRF Training (Quantiles) → Optuna Optimization → Monte Carlo Simulation (Variance) → Inference (Tiled at Scale) → QA (DBSCAN).",
          },
          {
            type: "text",
            text:
              "XGBoost — why & how (inputs/outputs)\n" +
              "• Chosen for robust non-linear tabular/geospatial modeling.\n" +
              "• Inputs: ~140k lab samples + 72 satellite/topographic/climate features.\n" +
              "• Outputs: deterministic SOC% and BD per field/tile.\n" +
              "• Notes: Flyte-based stratified K-fold with ID/OOD splits; SHAP highlighted NDVI, precipitation, elevation; boosters stored to GCS for reproducible inference.",
          },
          {
            type: "text",
            text:
              "Quantile Random Forest — why & how\n" +
              "• Provides 5th/50th/95th quantiles per sample → uncertainty bands required for regulatory reporting.\n" +
              "• Trained on same features as XGBoost; coverage tests targeted ~90% of truths within intervals.\n" +
              "• Produces credible probabilistic estimates for field-level stock aggregation.",
          },
          {
            type: "text",
            text:
              "Evaluation Metrics — what & why\n" +
              "• R² (fit / variance explained)\n" +
              "• RMSE/MAE (accuracy; penalize large errors)\n" +
              "• Bias & slope (calibration; detect systematic bias)\n" +
              "• Coverage% (reliability of uncertainty bounds)",
          },
          {
            type: "text",
            text:
              "Optimization — Optuna\n" +
              "• Bayesian search (100 trials) over max_depth, learning_rate, n_estimators, subsample, colsample_bytree, min_child_weight, lambda, alpha.\n" +
              "• 8% RMSE reduction; early stopping + parallel trials in Flyte.",
          },
          {
            type: "text",
            text:
              "Uncertainty Quantification — Monte Carlo\n" +
              "• 1,000 draws per field using QRF quantiles / residual resampling to propagate model + input uncertainty into carbon stock.\n" +
              "• Outputs: mean, variance, and confidence intervals; aggregated for compliance.",
          },
          {
            type: "text",
            text:
              "Inference Workflow\n" +
              "• Pre-tiled rasters (~10 TB) processed via Flyte task arrays (2 km × 2 km tiles).\n" +
              "• Outputs: SOC%/BD predictions + lower/upper bounds in Zarr/GeoTIFF; summaries to BigQuery dashboards.\n" +
              "• Continental-scale runtime in under 6 hours.",
          },
          {
            type: "text",
            text:
              "QA — DBSCAN\n" +
              "• Cluster residuals/uncertainty maps to flag spatial anomalies and extrapolation zones.\n" +
              "• Automated checks + manual review → cleaner, trustworthy maps for Bayer & Heartland.",
          },
          {
            type: "figures",
            figures: [
              {
                src: "figures/shap-summary.png",
                caption: "SHAP summary (top drivers)",
                alt: "SHAP summary plot",
              },
              {
                src: "figures/uncertainty-bands.png",
                caption: "Quantile bands (5/50/95%)",
                alt: "Uncertainty bands",
              },
            ],
          },
          {
            type: "links",
            links: [
              {
                label: "VM0042 Standard",
                url: "https://verra.org/methodologies/vm0042-methodology-for-improved-agricultural-land-management/",
              },
            ],
          },
        ],
      },
      {
        id: "tech",
        label: "Tech Stack",
        blocks: [
          {
            type: "text",
            text:
              "Languages/Libraries: Python, Pandas, GeoPandas, scikit-learn, XGBoost, Quantile RF, SHAP, rasterio, xarray.\n" +
              "Orchestration/Storage: Flyte, BigQuery, MongoDB, Google Cloud Storage, Zarr/GeoTIFF.\n" +
              "MLOps/Infra: GitLab CI/CD, distributed task arrays, tiled raster processing.",
          },
          {
            type: "links",
            links: [
              { label: "Perennial (company site)", url: "https://www.perennial.earth/" },
            ],
          },
        ],
      },
      {
        id: "impact",
        label: "Impact",
        blocks: [
          {
            type: "text",
            text:
              "• Reduced prediction RMSE by 8% via Optuna + feature refinement.\n" +
              "• Produced quantile-based uncertainty maps aligned with VM0042/VM0032.\n" +
              "• Enabled scalable cloud inference across millions of acres (<6h runtime).\n" +
              "• Strengthened client trust for carbon validation (Bayer/Heartland).\n" +
              "Disclaimer: selected details redacted for confidentiality.",
          },
        ],
      },
    ],
  },

  // ====== Selected projects — unchanged (legacy fields) ======
  {
    id: "opinionminer",
    title: "OpinionMiner: NLP on Online Reviews",
    category: "selected",
    intro:
      "End-to-end NLP pipeline extracting sentiment, aspects/topics, and pain points from large-scale product reviews; built dashboards for category insights.",
    thumbnail: "opinionminer-thumbnail.jpg",
    skills: ["Python", "spaCy", "Transformers", "LDA/NMF", "FastAPI", "Plotly"],
    overview:
      "Built a comprehensive NLP system to automatically analyze millions of product reviews, extracting actionable insights about customer sentiment, product aspects, and pain points. The system powers category-level dashboards for product teams to understand customer feedback at scale.",
    data:
      "2M+ product reviews across 50+ categories from e-commerce platforms. Data includes review text, ratings, timestamps, and product metadata. Processed using distributed NLP pipelines.",
    approach:
      "Developed multi-stage NLP pipeline: (1) Sentiment analysis using fine-tuned Transformers, (2) Aspect extraction with spaCy NER and dependency parsing, (3) Topic modeling using LDA and NMF for theme discovery, (4) Pain point detection using regex rules and semantic similarity. Built FastAPI backend for real-time analysis and Plotly dashboards for visualization.",
    results:
      "Achieved 92% accuracy in sentiment classification and 87% F1-score in aspect extraction. Identified 15+ recurring pain points per category. Enabled product teams to prioritize improvements based on customer feedback volume and sentiment. Reduced manual review analysis time by 95%.",
    techStack: [
      "Python",
      "spaCy",
      "Transformers (BERT)",
      "Gensim (LDA/NMF)",
      "FastAPI",
      "Plotly Dash",
      "PostgreSQL",
      "Elasticsearch",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/madisonshenn/sentiment-geospatial-network-analysis-online-review" },
      { label: "Demo Dashboard", url: "#" },
    ],
  },
  {
    id: "newslens",
    title: "NewsLens: Personalized News Recommendation",
    category: "selected",
    intro:
      "Multi-stage recsys for news personalization (candidate generation + ranking), with user profiles, recency, diversity, and dwell-time optimization.",
    thumbnail: "newslens-thumbnail.jpg",
    skills: ["Python", "LightGBM", "DIN", "Airflow", "A/B Testing", "Feature Store"],
    overview:
      "Designed and implemented a production-grade personalized news recommendation system using a two-stage architecture: candidate generation for recall and sophisticated ranking for personalization. The system optimizes for engagement while maintaining content diversity and freshness.",
    data:
      "10M+ news articles, 500K+ active users, implicit feedback (clicks, dwell time, shares). Features include user reading history, article metadata, real-time trending signals, and contextual features (time, device, location).",
    approach:
      "Two-stage pipeline: (1) Candidate generation using collaborative filtering, content similarity, and trending articles (2) Ranking using LightGBM and Deep Interest Network (DIN) with features for user preferences, article quality, recency, and diversity. Implemented feature store for real-time serving. Used Airflow for orchestration and A/B testing framework for evaluation.",
    results:
      "Increased average session time by 35% and click-through rate by 28%. Improved content diversity score by 40% while maintaining engagement. Successfully deployed to production serving 500K+ users with <50ms p95 latency. A/B tests showed 15% increase in user retention.",
    techStack: [
      "Python",
      "LightGBM",
      "TensorFlow",
      "DIN",
      "Redis (feature store)",
      "Apache Airflow",
      "Flyte",
      "PostgreSQL",
      "Docker",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/madisonshenn/news-multichannel-recommendation-system" },
      { label: "Technical Report", url: "#" },
    ],
  },
];
