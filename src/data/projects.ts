
import SoilCarbonThumb from "@/assets/soil-carbon-thumbnail.png";
import NBEATSThumb from "@/assets/nbeats.png";
import newsrecsysprojThumb from "@/assets/newslens-thumbnail.png";
import yelpanalysisThumb from "@/assets/opinionminer-thumbnail.png";

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
  approachImage?: string;
  results: string;
  techStack: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: "soil-carbon",
    title: "End-to-end Predictive Machine Learning Models Pipeline For Carbon Stock Estimates",
    category: "professional",
    intro: "This is a client project I owned when interning with Perennial. The ML pipeline contains training workflow with XGBoost and Quantile Random Forest, Uncertainty Quantification Workflow, Inference Workflow, and Quality Assurance Workflow. The final deliverables provide point estimate with uncertainty measures for targeting fields and will help with decisions-making like carbon accounting and agricultural practices.",
    thumbnail: SoilCarbonThumb,
    skills: ["Python", "Flyte Orchestration", "XGBoost", "Quantile RF", "Google Cloud Platform", "BigQuery", "Optuna", "Hyperparameter Tuning", "Uncertainty Quantification", "Monte Carlo Simulation", "Quality Assurance"],
    overview: "Note: Specific client details and proprietary methodologies have been omitted to respect confidentiality agreements.\n\nDeveloped during my Data Science & Machine Learning internship at Perennial, an ag-tech startup specializing in soil carbon MRV (Measurement, Reporting, and Verification) for corporate sustainability and carbon credit programs with clients.\n\nAccurately estimating soil organic carbon (SOC%) and bulk density (BD) at scale is critical for quantifying carbon stock and validating regenerative agricultural practices. However, traditional laboratory measurements are prohibitively expensive and geographically sparse, resulting in significant spatial and temporal data gaps that limit our ability to assess carbon sequestration across large agricultural landscapes.\n\nKey Challenges:\n1. Ambiguous problem definition requiring iterative scoping and stakeholder alignment\n2. Limited training data with notable quality inconsistencies across collection sites\n3. Need for models that generalize across diverse geospatial regions, soil types, and land management practices\n4. Regulatory requirement to quantify prediction uncertainty for compliance with carbon verification standards (VM0042 / VM0032)",
    data: "",
    approach: "1. Data Pipeline & Feature Engineering:\nIntegrated ~140,000 soil samples (SOC% and BD measurements) with 72 environmental covariates including satellite imagery (Sentinel-2, Landsat), topographic features (elevation, slope, aspect), and climate variables (temperature, precipitation patterns). Implemented robust data cleaning, spatial join operations, and feature standardization to handle multi-source heterogeneity. Collaborated with Subject Matter Expert and other experienced DS to ensure the quality of the data.\n\n2. Training Workflow:\nModel Architecture\nXGBoost for Point Predictions: Selected for its proven performance with heterogeneous tabular and geospatial data, effectively capturing non-linear relationships between soil properties and environmental features. Implemented stratified 5-fold cross-validation to ensure robust generalization across diverse agricultural settings. Model artifacts serialized as JSON boosters and versioned in GCS for reproducible inference.\n\nQuantile Random Forest (QRF) for Uncertainty Estimation: While XGBoost provides optimal point estimates, QRF generates full prediction distributions by estimating quantiles (5th, 10th, 25th, 50th, 75th, 90th, 95th percentiles). This enables construction of prediction intervals critical for regulatory compliance. Conducted coverage calibration tests to ensure ~90% of observed values fell within the predicted uncertainty bounds.\n\n3. Evaluation Framework\nR² Score: Overall variance explained by the model\nRMSE: Aggregate prediction error with penalty for large deviations\nSlope & Intercept Analysis: Calibration diagnostics to detect systematic bias, particularly for QRF quantile predictions\nCoverage Rate: Validation that uncertainty intervals appropriately capture true values (target: 90% coverage)\n\n4. Hyperparameter Optimization\nImplemented Bayesian optimization using Optuna (100 trials) to tune critical XGBoost hyperparameters: max_depth, learning_rate, n_estimators, subsample, colsample_bytree, min_child_weight, lambda (L2 regularization), and alpha (L1 regularization). Achieved 8% RMSE reduction while improving training efficiency through early stopping and parallelized trial execution within Flyte.\n\n5. Uncertainty Quantification via Monte Carlo Simulation\nTo propagate both model uncertainty and input feature variability into final carbon stock estimates, executed 5,000 Monte Carlo simulations per agricultural field using QRF quantile distributions. Generated spatially explicit layers of predicted mean SOC%, variance maps, and 90% confidence intervals. Aggregated field-level statistics for downstream compliance reporting.\n\n6. Inference Workflow\nDeployed production inference on pre-processed raster tiles. Each tile processed in parallel, generating SOC%, BD, and derived carbon stock (SOC*BD*depth) predictions. Outputs stored in cloud-optimized Zarr and GeoTIFF formats for efficient downstream analysis and visualization.\n\n7. Quality Assurance with DBSCAN\nImplemented spatial outlier detection using DBSCAN clustering on prediction residuals and uncertainty maps. Flagged anomalous spatial patterns indicative of model extrapolation or data artifacts for expert review in GIS. This iterative QA process ensured not only aggregate accuracy but also field-level plausibility.",
    approachImage: "soil-carbon-pipeline.png",
    results: "This project directly supported credible carbon stock reporting across 3+ million acres of agricultural land, enabling corporate clients to substantiate sustainability claims and participate in carbon credit markets with regulatory confidence.\n\nQuantifiable Outcomes:\n1. 8% RMSE reduction through systematic hyperparameter tuning and feature engineering\n2. Regulatory-compliant uncertainty quantification with calibrated prediction intervals for VM0042/VM0032 standards\n3. Production-scale geospatial inference processing 10TB+ of satellite and environmental data\n4. Contract renewals: High-quality deliverables and model performance contributed to the renewal of an ending contracts.\n\nKey Learnings:\n1. Navigating ambiguous problem definitions in applied ML requires iterative scoping with domain experts and stakeholders\n2. Not just mean prediction, uncertainty quantification is important in regulated domains like carbon market here, finance, health, etc.\n3. Spatial validation and anomaly detection are essential for maintaining trust in geospatial ML systems; the reasonability and interpretability of the predicted outputs are more important than the machine learning model evaluation metrics in practice.\n4. Effective MLOps (versioning, orchestration, monitoring) is as important as model performance for production impact. E.g. computational complexity, resource requirements, and scaling behaviors.",
    techStack: ["Python", "SQL (BigQuery)", "Flyte", "Google Cloud Platform", "GCS", "GitLab CI/CD", "pandas", "geopandas", "numpy", "xgboost", "RandomForestQuantileRegressor", "scikit-learn", "scikit-garden", "optuna", "SHAP", "rasterio", "xarray", "matplotlib", "seaborn"],
    links: []
  },
  {
    id: "should-cost-ai",
    title: "Building Should Cost AI Agent with N-BEATS Neural Networks Time Series Forecasting",
    category: "professional",
    intro: "",
    thumbnail: NBEATSThumb,
    skills: ["Python", "Azure SQL Database", "Azure AI Service", "Serverless Compute", "PyTorch", "Darts", "N-BEATS", "Time Series Forecasting", "Hyperparameter Tuning", "Cross-Validation"],
    overview: "Note: Specific client details and proprietary methodologies have been omitted to respect confidentiality agreements.\n\nProblems of the existing models:\nRaw materials and inputs are critical to the client company, as they directly determine product quality, performance, and cost efficiency. Reliable sourcing of high-quality chemicals, polymers, and additives ensures consistent innovation and compliance with regulatory standards.\n\nCurrent should cost models are developed on the spread sheet, and all the cost drivers are tracked on the spreadsheet, so any updates are manual and error-prone.\n\nCertain cost drivers' values change constantly and they are usually not public or accessible by the client.\n\nBased on above, it's difficult for the client company, specifically the procurement team, to determine what prices to pay during contract negotiation and they have noticed overpayments from the historical data.\n\nProposal from the client:\nEnable better supplier negotiations and help stakeholders to understand the true drivers of material expenses, from feedstock trends to processing and logistics.\n\nTransform the model from a static calculation on spreadsheets into an adaptive, intelligence-driven system.\n\nLeverage real-time data feed and autonomously gather and process key inputs; calculate a robust should-cost price that reflects true cost drivers and market conditions.\n\nThe model can continually refines its assumptions and generate transparent and dynamic pricing insights for 3 selected raw materials.",
    approach: "N-BEATS Neural Networks:\nWhy do we want to choose N-BEATS, over other traditional time series models, classic ML models, or DL frameworks?\n- Do not need feature engineering\n- Proven performance\n- Interpretable variants\n- Works with limited data (Client here only provides 12 months × 4 years of data)\n\nOptimization:\nData Preprocessing\n- Handling Missing Values\n- Normalization\n\nLearning Rate Scheduling\n\nHyperparameter Tuning\n- Random search\n- Fine tuning on key hyperparameters\n- Rolling window cross validation or forward chaining\n\nEvaluation Metrics:\n- Primary metrics: MAPE, RMSE, MAE\n- Secondary metric: directional accuracy\n\nForecasting:\n- Backtesting/walk forward validation",
    approachImage: "should-cost-pipeline.png",
    results: "This is an ongoing project expected to end in December 2025, but according to the client company, raw materials represent a significant share (> 70%) of overall production costs, making transparency into their pricing essential for competitiveness.",
    techStack: ["Python", "Azure SQL Database", "Azure AI Service", "Serverless Compute", "PyTorch", "Darts", "N-BEATS Neural Networks", "Time Series Forecasting", "Hyperparameter Tuning", "Cross-Validation"],
    links: []
  },
  {
    id: "opinionminer",
    title: "BERT-based NLP, Network, and Geospatial Analysis for Online Review",
    category: "selected",
    intro: "A multi-dimensional analysis of 1M+ Yelp reviews combining NLP, network analysis, and geospatial methods to uncover user behavior patterns and deliver actionable insights for users, businesses, and the platform.",
    thumbnail: yelpanalysisThumb,
    skills: ["Python", "MySQL", "NetworkX", "NLP", "VADER", "Geospatial Analysis"],
    overview: "Analyzed complex, multi-faceted review platform data to extract actionable insights for three stakeholder groups: users seeking quality recommendations, businesses aiming to improve ratings and visibility, and the platform looking to boost engagement and retention. The challenge was integrating diverse data types (reviews, user networks, geolocation, sentiment) into a cohesive analytical framework across 8 metropolitan areas with 300K+ businesses.",
    approach: "1. Data Engineering: Used MySQL for cleaning, validation, and preprocessing across 6 interconnected datasets (businesses, reviews, users, check-ins)\n2. Geospatial Analysis: Created global/regional visualizations using Basemap and Folium to identify high-density business clusters and track high-value user (HVU) movement patterns\n3. Sentiment Analysis: Applied VADER and AFINN lexicons to quantify review sentiment, extract keyword drivers, and analyze sentiment-rating relationships beyond star scores\n4. Network Analysis: Built friendship graphs with NetworkX, performed community detection using Louvain algorithm, and computed centrality metrics to identify influencers and local micro-communities",
    results: "1. Delivered multi-stakeholder recommendations: \n- for users, identified that Elite status correlates with review volume over quality; \n- for businesses, found that Nevada/Arizona markets offer highest visibility and that operational consistency beats geography for ratings; \n- for platform, revealed declining registrations despite strong engagement, suggesting need for seasonal campaigns and re-engagement strategies. \n2. Discovered that \"useful\" reviews tend to be longer and more critical (not just positive), and that regional network analysis reveals community structures invisible at global scale.",
    techStack: ["Python", "MySQL", "Pandas", "NumPy", "NetworkX", "NLTK (VADER, AFINN)", "TextBlob", "Matplotlib", "Basemap", "Folium", "Scikit-learn"],
    links: [
      { label: "GitHub", url: "https://github.com/madisonshenn/sentiment-geospatial-network-analysis-online-review" }
    ]
  },
  {
    id: "newslens",
    title: "Multi-Channel News Recommendation System",
    category: "selected",
    intro: "A scalable CTR prediction pipeline combining collaborative filtering, embedding-based retrieval, and rule-based cold-start strategies to recommend personalized news articles.",
    thumbnail: newsrecsysprojThumb,
    skills: ["Python", "Collaborative Filtering", "Embedding Retrieval", "Faiss", "Cold-Start Strategy"],
    overview: "Built a personalized news recommendation engine to predict which articles users are likely to click based on historical browsing behavior. The core challenge was handling massive scale (~300k users, 3M clicks, 360k articles) while addressing cold-start problems for 90% of articles that never appeared in user logs and 20% of users with minimal interaction history.",
    approach: "Reframed the problem as CTR prediction with a multi-channel recall strategy to balance latency and accuracy:\n\nItemCF & UserCF: Implemented collaborative filtering with custom weighting for click order, time decay, and content similarity\nEmbedding Recall: Used Faiss for efficient approximate nearest neighbor search in article vector space\nCold-Start Solution: Applied rule-based filtering on embeddings considering topic alignment, content length similarity, and recency constraints (90-day window)\nFusion: Combined recall channels with normalized scoring and weighted aggregation to generate top-K recommendations per user",
    results: "Successfully generated top-5 article recommendations with rank-weighted scoring (1/k penalty). Learned to design scalable retrieval systems by separating candidate generation (recall) from ranking, and discovered that combining multiple weak signals (temporal patterns, content features, collaborative signals) produces more robust recommendations than any single method alone.",
    techStack: ["Python", "Pandas", "NumPy", "Faiss (vector similarity search)", "Collaborative Filtering", "Embedding-based Retrieval", "Scikit-learn"],
    links: [
      { label: "GitHub", url: "https://github.com/madisonshenn/news-multic" }
    ]
  }
];
