export const personal = {
  name: "Muhammad Taha Naeem",
  role: "Data Science Student",
  tagline: "I build the pipeline between raw data and real answers — from cleaning to prediction.",
  email: "taha-codes@outlook.com",
  phone: "+92-317-7407596",
  location: "Lahore, Pakistan",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/tahasync",
    linkedin: "https://linkedin.com/in/heyitxtaha",
    portfolio: "https://tahasync-portfolio.netlify.app",
  },
};

import profileImg from "../assets/profile.webp";

export const about = {
  bio: [
    "I'm a Data Science student in my final years, focused on the full pipeline — from messy raw data to models that hold up in production. My recent work spans churn prediction, opinion mining on business review data, and healthcare analytics dashboards, along with full-stack systems like an ERP for a small manufacturing business and a deals-aggregation platform. I care less about running a notebook once and more about building things that keep working.",
    "Outside of core ML/data work, I've also built with blockchain and enjoy projects that sit at the intersection of data engineering and product — dashboards people actually check, models that plug into real workflows. Based in Lahore, Pakistan, currently looking for opportunities in data science, analytics, or ML engineering.",
  ],
  image: profileImg,
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "C++", "JavaScript", "Solidity"],
  },
  {
    category: "Data & ML",
    items: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "PySpark", "Hugging Face", "LangChain", "SHAP"],
  },
  {
    category: "Data Engineering",
    items: ["Apache Spark", "Kafka", "Airflow", "KNIME", "n8n"],
  },
  {
    category: "Frameworks & Tools",
    items: ["React", "Flask", "FastAPI", "Streamlit", "Docker", "Git", "PostgreSQL", "Tailwind CSS"],
  },
  {
    category: "Blockchain",
    items: ["Ethereum", "Solidity", "Web3.js", "Truffle"],
  },
];

export const projects = [
  {
    title: "PakDeals Finder",
    description: "Full-stack AI deal aggregator that scrapes 4 Pakistani e-commerce platforms, classifies intent with TF-IDF+SVM, scores deals with FAISS vector search, and summarizes via Groq Llama.",
    tech: ["Python", "Flask", "React", "LangGraph", "Groq", "FAISS"],
    github: "https://github.com/tahasync/pakdeals-finder",
    demo: null,
  },
  {
    title: "Healthcare Pulse",
    description: "Dockerized disease surveillance pipeline scraping WHO/OWID/CDC data, processed via PySpark with GBTRegressor forecasting, served through a Flask API to a React dashboard.",
    tech: ["React", "Flask", "Apache Spark", "PostgreSQL", "Docker", "n8n"],
    github: "https://github.com/tahasync/healthcare-pulse",
    demo: null,
  },
  {
    title: "Foam Shop POS",
    description: "Flutter + Firebase POS and ledger system for Asif Foam Center with real-time inventory, customer/supplier Khata, and receipt printing.",
    tech: ["Flutter", "Firebase", "Riverpod", "Dart"],
    github: "https://github.com/tahasync/foam-shop-erp",
    demo: null,
  },
  {
    title: "Opportunity Dashboard",
    description: "Streamlit + PostgreSQL web app for university faculty to manage internships with full CRUD, analytics dashboards, CSV import, and Docker Compose deployment.",
    tech: ["Streamlit", "PostgreSQL", "Docker", "Plotly", "SQLAlchemy"],
    github: "https://github.com/tahasync/streamlit-postgres-opportunity-dashboard",
    demo: null,
  },
  {
    title: "BDA Opinion Mining Capstone",
    description: "Big Data capstone streaming Sentiment140 tweets through Kafka into PySpark, calling Hugging Face RoBERTa API for sentiment inference, training Spark MLlib Logistic Regression.",
    tech: ["Kafka", "PySpark", "Hugging Face", "React", "Spark MLlib"],
    github: "https://github.com/tahasync/bda-opinion-mining-capstone",
    demo: null,
  },
  {
    title: "Telco Churn Prediction",
    description: "Compares Logistic Regression, Random Forest, and XGBoost on Telco Churn dataset with SHAP explanations, served via FastAPI with a React dashboard.",
    tech: ["XGBoost", "FastAPI", "SHAP", "scikit-learn", "React"],
    github: "https://github.com/tahasync/telco-churn-prediction",
    demo: null,
  },
];

export const experience = [
  {
    type: "education",
    institution: "University of Central Punjab (UCP), Lahore",
    degree: "Bachelor of Science in Data Science",
    period: "2022 – Present",
    details: ["7th Semester", "Relevant Coursework: Data Structures, Algorithms, Database Management, Big Data, Machine Learning"],
  },
];

export const contact = {
  formAction: "/thank-you",
};
