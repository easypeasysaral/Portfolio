export const skills = [
  {
    title: 'Machine Learning & AI',
    items: ['PyTorch', 'XGBoost', 'scikit-learn', 'CNNs', 'NLP', 'SHAP', 'LangChain', 'RAG', 'Feature Engineering'],
  },
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Backend & APIs',
    items: ['FastAPI', 'REST APIs', 'async/await', 'SQLAlchemy', 'Pydantic', 'TCP/IP Sockets', 'Multithreading'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Responsive Design', 'REST Integration'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'SQL', 'ORM', 'Schema Design'],
  },
  {
    title: 'Tools & Practice',
    items: ['Git / GitHub', 'Docker', 'Code Review', 'TDD Iteration'],
  },
]

export const projects = [
  {
    id: 'purchase-intent',
    cat: ['ml', 'fullstack'],
    tag: 'ML · Explainable AI',
    title: 'Customer Purchase Intent Predictor',
    task: 'Predicting which site visitors are likely to convert, to help prioritize marketing spend.',
    action:
      'Built an XGBoost classifier on customer behavior data; found and fixed a data-leakage bug in feature engineering; added SHAP-based explainability for model transparency; built a React frontend with a custom SVG confidence gauge, served via FastAPI.',
    result:
      'Raised model ROC-AUC to 0.95 (±0.0014) and shipped a working end-to-end demo with explainable, business-readable predictions.',
    stack: ['React', 'FastAPI', 'XGBoost', 'scikit-learn', 'SHAP'],
    link: 'https://github.com/easypeasysaral',
  },
  {
    id: 'meeting-assistant',
    cat: ['ml', 'backend'],
    tag: 'ML · NLP · RAG',
    title: 'Multilingual Meeting Intelligence Assistant',
    task: 'Automating meeting documentation across English and Hindi/Hinglish recordings.',
    action:
      'Built a transcription pipeline using local Whisper and Sarvam AI; used LangChain LCEL with Mistral AI to extract summaries, action items, decisions, and follow-ups; added a RAG chat interface over transcripts via ChromaDB and HuggingFace embeddings, with PDF/TXT export.',
    result: 'A multilingual assistant that lets users conversationally query past meetings and export structured reports.',
    stack: ['Python', 'LangChain', 'Whisper', 'ChromaDB', 'Streamlit'],
    link: 'https://github.com/easypeasysaral',
  },
  {
    id: 'chat-server',
    cat: ['backend'],
    tag: 'Systems · Concurrency',
    title: 'Multi-Client Chat Server',
    task: 'A low-level, production-style networking system to understand concurrency and service architecture beyond framework abstractions.',
    action:
      'Designed and implemented a multi-threaded TCP socket server in C++ using socket()/bind()/listen()/accept(), spawning a dedicated thread per client and using mutex locks to protect a shared client-state list from race conditions.',
    result:
      'A stable, testable server handling multiple simultaneous client connections with real-time message broadcasting and graceful disconnect/error handling.',
    stack: ['C++', 'TCP/IP Sockets', 'Multithreading'],
    link: 'https://github.com/easypeasysaral',
  },
  {
    id: 'crop-disease',
    cat: ['ml', 'fullstack'],
    tag: 'ML · Computer Vision',
    title: 'Crop Disease Classifier (Computer Vision & Explainability)',
    task: 'Design an explainable deep learning vision pipeline for non-expert domain users.',
    action:
      'Fine-tuned a ResNet-50 CNN in PyTorch for multi-class image classification; embedded Grad-CAM visual explainability to highlight spatial decision regions; deployed via FastAPI backend with a bilingual interface.',
    result:
      'Delivered an end-to-end, interpretable vision model that bridges complex deep learning outputs with domain-specific user needs.',
    stack: ['PyTorch', 'ResNet-50', 'Grad-CAM', 'FastAPI', 'React'],
    link: 'https://github.com/easypeasysaral/Crop-Disease-Prediction-Model',
  },
  {
    id: 'url-shortener',
    cat: ['backend'],
    tag: 'Backend · Web Service',
    title: 'URL Shortener',
    task: 'Build a lightweight backend service for generating, redirecting, and managing shortened URLs.',
    action:
      'Built a FastAPI REST API backed by SQLite; generated collision-resistant short codes with Python\'s secrets module; implemented endpoints to create a short URL, redirect by code, fetch per-code click stats, and update or delete existing links.',
    result: 'A working URL-shortening backend exposing shorten, redirect, stats, update, and delete endpoints via a clean REST interface.',
    stack: ['FastAPI', 'Python', 'SQLite', 'Pydantic'],
    link: 'https://github.com/easypeasysaral/Url_Shortener',
  },
]

export const experience = [
  {
    date: 'JUL 2026 — PRESENT',
    title: '6G Research & Innovation Intern',
    org: 'HNNOIX India Private Limited · Gurugram, Haryana',
    points: [
      'Working on research and innovation-driven projects exploring emerging 6G use cases and AI applications in telecom systems',
      'Gaining hands-on exposure to real-world 5G/6G solution design as part of a small, focused R&D team',
      'Bringing an applied ML/AI background (LLM-based systems, deployment-focused engineering) into a telecom-research context',
    ],
  },
]

export const education = [
  {
    date: '2023 — 2027',
    title: 'B.Tech, Computer Science (AI & ML)',
    org: 'Madhav Institute of Technology and Science (MITS), Gwalior',
    points: ['CGPA: 7.98', 'Coursework spanning NLP (POS tagging, CFG/PCFG, CYK parsing) and Digital Image Processing'],
  },
  {
    date: '2023',
    title: 'Class XII (Higher Secondary)',
    org: 'Paras Vidya Vihar, Sagar',
    points: ['87.0%'],
  },
  {
    date: '2021',
    title: 'Class X (Secondary)',
    org: 'Paras Vidya Vihar, Sagar',
    points: ['84.2%'],
  },
]

export const stats = [
  { num: '7.98', label: 'CGPA · MITS Gwalior' },
  { num: '0.95', label: 'ROC-AUC · Purchase Intent Model' },
  { num: '2027', label: 'Expected Graduation' },
  { num: '3+', label: 'End-to-End Shipped Projects' },
]