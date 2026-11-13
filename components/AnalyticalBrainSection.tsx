"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sticker } from "./Sticker";
import { Tape } from "./Tape";
import { ProjectModal, ProjectDetail } from "./ProjectModal";
import { playTabClickSound, playPopSound } from "@/lib/sound-effects";
import {
  TrendingUp,
  ShieldAlert,
  Film,
  Smartphone,
  LineChart,
  Binary,
  Database,
  Code2,
} from "lucide-react";

const ANALYTICAL_PROJECTS: ProjectDetail[] = [
  {
    id: "google-stock-analytics",
    title: "Google Stock Analytics & Volatility Modeling",
    category: "Financial Analytics",
    tagline: "Time series decomposition, rolling volatility, and trend inflection detection for Alphabet Inc. (GOOGL).",
    summary:
      "A quantitative time series research project analyzing historical stock price movements, trading volume anomalies, and return distributions for Google (Alphabet Inc.). Employs exponential moving averages (EMA), Bollinger Bands, and ARIMA time series modeling to evaluate price momentum.",
    tags: ["Time Series", "Python", "Pandas", "Statistical Modeling", "Matplotlib"],
    color: "blue",
    highlights: [
      "Calculated 20-day and 50-day Exponential Moving Averages (EMA) to identify trend momentum",
      "Modeled rolling standard deviation to isolate volatility spikes surrounding earnings calls",
      "Conducted Augmented Dickey-Fuller (ADF) tests to confirm stationarity for ARIMA forecasting",
      "Generated automated drawdown risk metrics and cumulative return distributions",
    ],
    techStack: ["Python", "Pandas", "NumPy", "Statsmodels", "Matplotlib", "Seaborn"],
    methodology:
      "Ingested historical price bars, normalized adjusted close prices, computed logarithmic returns, engineered rolling volatility features, and structured automated statistical backtests to evaluate signal robustness.",
    codeSnippet: `# Google Stock Volatility & Moving Average
import pandas as pd
import numpy as np

def calculate_stock_signals(df):
    df['Log_Return'] = np.log(df['Adj_Close'] / df['Adj_Close'].shift(1))
    df['EMA_20'] = df['Adj_Close'].ewm(span=20, adjust=False).mean()
    df['EMA_50'] = df['Adj_Close'].ewm(span=50, adjust=False).mean()
    df['Rolling_Vol_20'] = df['Log_Return'].rolling(window=20).std() * np.sqrt(252)
    df['Signal'] = np.where(df['EMA_20'] > df['EMA_50'], 1, -1)
    return df`,
    metricLabel: "Dataset Scope",
    metricValue: "Multi-Year Historical Bars",
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection & Anomaly Classification",
    category: "Machine Learning",
    tagline: "High-precision anomaly classification under severe class imbalance using ensemble models.",
    summary:
      "Built an end-to-end fraud detection architecture on transactional records where fraudulent transactions represent a fraction of a percent of all activity. Evaluated SMOTE oversampling versus class weighting, optimizing the Precision-Recall Area Under the Curve (PR-AUC) to minimize false positives.",
    tags: ["Scikit-Learn", "Anomaly Detection", "XGBoost", "SMOTE", "Risk Scoring"],
    color: "orange",
    highlights: [
      "Addressed 0.17% class imbalance using Synthetic Minority Over-sampling Technique (SMOTE)",
      "Trained Random Forest and XGBoost classifiers optimized for Precision-Recall AUC",
      "Engineered behavioral features: rolling transaction velocity, amount z-scores, and location deltas",
      "Visualized confusion matrices, precision-recall trade-offs, and SHAP feature importance",
    ],
    techStack: ["Python", "Scikit-Learn", "XGBoost", "Imbalanced-Learn", "SHAP"],
    methodology:
      "Preprocessed high-dimensional transaction features, applied robust scaling on skewed financial amounts, tuned classification thresholds via ROC and PR curves to ensure low operational false alarm rates.",
    codeSnippet: `# Anomaly Classification Pipeline
from sklearn.ensemble import RandomForestClassifier
from imblearn.over_sampling import SMOTE
from sklearn.metrics import classification_report, average_precision_score

# Resampling minority fraud cases
smote = SMOTE(random_state=42)
X_res, y_res = smote.fit_resample(X_train, y_train)

clf = RandomForestClassifier(n_estimators=100, class_weight='balanced')
clf.fit(X_res, y_res)
y_pred_prob = clf.predict_proba(X_test)[:, 1]
pr_auc = average_precision_score(y_test, y_pred_prob)`,
    metricLabel: "Target Metric",
    metricValue: "Optimized PR-AUC & Precision",
  },
  {
    id: "netflix-sentiment-analysis",
    title: "Netflix Sentiment Analysis & Content Mining",
    category: "NLP & Text Mining",
    tagline: "Natural language processing pipeline extracting viewer sentiment, genre reception, and topic clusters.",
    summary:
      "A comprehensive text intelligence project analyzing thousands of audience reviews and catalog metadata. Uses sentiment scoring and Latent Dirichlet Allocation (LDA) topic modeling to unpack audience reactions across genres and identify critical viewer satisfaction factors.",
    tags: ["NLP", "VADER", "Topic Modeling", "Text Preprocessing", "NLTK"],
    color: "pink",
    highlights: [
      "Custom text cleaning pipeline: tokenization, lemmatization, stop-word pruning, and emoji mapping",
      "Sentiment polarity computation using VADER and fine-grained subjectivity categorization",
      "Unsupervised LDA topic modeling to reveal recurring audience criticism themes",
      "Cross-analysis comparing genre classifications with aggregate audience sentiment scores",
    ],
    techStack: ["Python", "NLTK", "Spacy", "Scikit-Learn", "VADER Sentiment", "Plotly"],
    methodology:
      "Scraped and compiled viewer feedback corpus, conducted lexical sentiment scoring, generated bigram and trigram frequency matrices, and plotted interactive topic cluster distributions.",
    codeSnippet: `# NLP Sentiment Extraction
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import nltk

sia = SentimentIntensityAnalyzer()

def extract_sentiment(text):
    scores = sia.polarity_scores(str(text))
    compound = scores['compound']
    if compound >= 0.05:
        return 'Positive'
    elif compound <= -0.05:
        return 'Negative'
    return 'Neutral'`,
    metricLabel: "Corpus Scope",
    metricValue: "Multi-Genre Review Corpus",
  },
  {
    id: "google-play-intelligence",
    title: "Google Play Intelligence & App Saturation",
    category: "Data Mining & BI",
    tagline: "Mining market saturation, user rating drivers, and category performance across 10,000+ apps.",
    summary:
      "An analytical deep-dive into the Google Play Store ecosystem. Investigated market dynamics across dozens of categories to discover the relationship between app size, price elasticity, update frequency, and user rating retention.",
    tags: ["Data Wrangling", "Exploratory Analysis", "Regression", "Tableau", "Market BI"],
    color: "lime",
    highlights: [
      "Parsed and cleaned complex unstructured strings (installs, app sizes, currency symbols)",
      "Conducted multivariate regression to assess predictors of 4.5+ star user ratings",
      "Identified market whitespace: low saturation vs. high install demand categories",
      "Visualized app size vs. uninstallation risk corridors across mobile categories",
    ],
    techStack: ["Python", "Pandas", "Scipy Stats", "Seaborn", "Power BI / Tableau"],
    methodology:
      "Extensive data normalization on messy app store records, outlier detection for anomaly installs, correlation matrices, and multivariate regression analysis to extract statistically sound market insights.",
    codeSnippet: `# Data Normalization & Feature Engineering
import pandas as pd

def clean_google_play_data(df):
    # Strip symbols and convert installs to numeric
    df['Installs'] = df['Installs'].str.replace('+', '').str.replace(',', '').astype(int)
    df['Price'] = df['Price'].str.replace('$', '').astype(float)
    df['Size_MB'] = df['Size'].apply(lambda x: float(x.replace('M', '')) if 'M' in str(x) else None)
    return df.dropna(subset=['Rating', 'Installs'])`,
    metricLabel: "Scope",
    metricValue: "10,000+ App Registry Records",
  },
  {
    id: "investor-intelligence-dashboard",
    title: "Investor Intelligence & Portfolio Dashboard",
    category: "Financial BI & Dashboards",
    tagline: "Risk-return portfolio optimization, Sharpe ratio tracking, and executive asset KPI dashboard.",
    summary:
      "An interactive financial intelligence dashboard providing investors with real-time portfolio risk analytics, Sharpe ratio calculations, asset correlation heatmaps, and simulated scenario analysis for asset allocation decisions.",
    tags: ["Dashboard", "Portfolio Optimization", "Sharpe Ratio", "Streamlit", "SQL"],
    color: "blue",
    highlights: [
      "Built interactive KPI gauges tracking portfolio Beta, Alpha, and annualized volatility",
      "Implemented Markowitz Modern Portfolio Theory (MPT) efficient frontier simulation",
      "Dynamic correlation matrix heatmap highlighting diversification vulnerabilities",
      "Custom SQL analytical views aggregating multi-asset cash flows and asset classes",
    ],
    techStack: ["SQL", "Python", "Streamlit", "Plotly", "Financial Mathematics"],
    methodology:
      "Modeled covariance matrices across historical asset returns, calculated risk-adjusted performance benchmarks, and designed a high-contrast executive interface for rapid decision-making.",
    codeSnippet: `-- SQL Portfolio Allocation Summary View
SELECT 
    asset_class,
    COUNT(holding_id) AS total_positions,
    SUM(market_value) AS total_allocation,
    ROUND(SUM(market_value) * 100.0 / SUM(SUM(market_value)) OVER(), 2) AS allocation_percentage,
    AVG(unrealized_gain_pct) AS avg_return_pct
FROM investor_portfolio
WHERE user_id = :active_investor
GROUP BY asset_class
ORDER BY total_allocation DESC;`,
    metricLabel: "Modeling Engine",
    metricValue: "MPT Efficient Frontier & Sharpe",
  },
];

export function AnalyticalBrainSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");

  const categories = [
    "All",
    "Financial Analytics",
    "Machine Learning",
    "NLP & Text Mining",
    "Data Mining & BI",
    "Financial BI & Dashboards",
  ];

  const filteredProjects =
    activeCategoryFilter === "All"
      ? ANALYTICAL_PROJECTS
      : ANALYTICAL_PROJECTS.filter((p) => p.category === activeCategoryFilter);

  return (
    <section
      id="analytical-brain"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-scrap-black text-warm-white border-b-2 border-scrap-black overflow-hidden"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-60 pointer-events-none" />

      {/* Decorative Tape */}
      <div className="absolute top-6 left-8 hidden md:block">
        <Tape color="lime" angle={4} width="w-36" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-acid-lime">
              <span>TAB [03]</span>
              <span>//</span>
              <span>FORENSIC DATA DOSSIER</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
              MY ANALYTICAL BRAIN
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest mt-1">
              TIME SERIES • ANOMALY CLASSIFICATION • NLP SENTIMENT • APP INTELLIGENCE • INVESTOR BI
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Sticker
              variant="lime"
              text="DATA VERIFIED"
              subtext="NO FAKE STATS"
              rotate={-3}
            />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-neutral-700">
          <span className="font-mono text-xs font-black uppercase text-neutral-400 mr-2">
            SELECT QUERY DOMAIN:
          </span>
          {categories.map((cat) => {
            const isActive = activeCategoryFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playPopSound();
                  setActiveCategoryFilter(cat);
                }}
                className={`px-3 py-1.5 font-mono text-xs font-bold scrap-border transition-all ${
                  isActive
                    ? "bg-acid-lime text-scrap-black scrap-shadow-lime -translate-y-0.5"
                    : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Analytical Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const iconMap: Record<string, React.ReactNode> = {
              "google-stock-analytics": <TrendingUp className="w-5 h-5 text-electric-blue" />,
              "fraud-detection": <ShieldAlert className="w-5 h-5 text-orange-pop" />,
              "netflix-sentiment-analysis": <Film className="w-5 h-5 text-hot-pink" />,
              "google-play-intelligence": <Smartphone className="w-5 h-5 text-acid-lime" />,
              "investor-intelligence-dashboard": <LineChart className="w-5 h-5 text-electric-blue" />,
            };

            return (
              <motion.div
                key={project.id}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => {
                  playTabClickSound();
                  setSelectedProject(project);
                }}
                className="group cursor-pointer bg-neutral-900 border-2 border-neutral-700 hover:border-acid-lime p-5 flex flex-col justify-between scrap-shadow-lime relative transition-all"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 bg-neutral-800 text-acid-lime scrap-border-sm">
                      {project.category}
                    </span>
                    <div className="p-1.5 bg-neutral-800 rounded-sm">
                      {iconMap[project.id]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-white group-hover:text-acid-lime transition-colors leading-tight mb-2">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs text-neutral-400 font-medium leading-relaxed mb-4">
                    {project.tagline}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5 p-3 bg-neutral-950/80 border border-neutral-800">
                    <div className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 mb-1">
                      CORE ARCHITECTURE HIGHLIGHTS:
                    </div>
                    {project.highlights.slice(0, 2).map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-1.5 text-[11px] text-neutral-300 font-normal leading-snug"
                      >
                        <span className="text-acid-lime font-black">›</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between font-mono text-xs">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="font-bold text-acid-lime flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>INSPECT</span>
                    <span>→</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Analytics Philosophy Banner */}
        <div className="mt-16 p-6 bg-neutral-900 border-2 border-acid-lime flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-acid-lime text-scrap-black rounded-none scrap-border">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white">
                METHODOLOGICAL INTEGRITY & RIGOR
              </h4>
              <p className="text-xs text-neutral-300 max-w-2xl mt-1 leading-relaxed">
                Every project in this dossier avoids vanity metrics. Clean feature engineering, realistic baseline comparisons, and statistical validations form the foundation of my analytical work.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("beyond-the-screen");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-2.5 bg-acid-lime text-scrap-black font-mono font-black text-xs uppercase scrap-border hover:bg-white transition-colors whitespace-nowrap"
          >
            NEXT: BEYOND THE SCREEN &gt;&gt;
          </button>
        </div>
      </div>

      {/* Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
