// PASTE THIS CODE INTO: script.js
// =========================================================================
// 📚 14 Future-Ready Career Tracks + Verified Start-to-End English Roadmaps
// =========================================================================
const COURSE_ROADMAPS = {
  "data-analytics": {
    title: "Data Analytics & Business Intelligence",
    subtitle: "Exact Sequence: Excel → SQL → Python → NumPy & Pandas → Power BI → Tableau → Capstone",
    modules: [
      { step: "Step 1", title: "Microsoft Excel for Data Analysis (Chandoo - Full Course)", duration: "3h 56m • Formulas, Pivot Tables & Data Cleaning", videoId: "7QNgqq154gE" },
      { step: "Step 2", title: "SQL & Relational Databases Full Course (freeCodeCamp)", duration: "4h 20m • SELECT, JOINs, Subqueries & Aggregations", videoId: "HXV3zeQKqGY" },
      { step: "Step 3", title: "Python Programming Full Course for Beginners (freeCodeCamp)", duration: "4h 26m • Variables, Loops, Functions & Data Structures", videoId: "rfscVS0vtbw" },
      { step: "Step 4", title: "Data Analysis with Python: NumPy, Pandas & Matplotlib (freeCodeCamp)", duration: "4h 10m • Exploratory Data Analysis (EDA)", videoId: "r-uOLxNrNk8" },
      { step: "Step 5", title: "Microsoft Power BI Full Course for Beginners (Luke Barousse)", duration: "8h 24m • Power Query, DAX & Interactive Reports", videoId: "FwjaHCVNBWA" },
      { step: "Step 6", title: "Tableau Full Course: Dashboards & Storytelling (Alex The Analyst)", duration: "1h 30m • Visual Analytics & Calculated Fields", videoId: "j8FSP8XuFyk" },
      { step: "Step 7", title: "Complete Data Analyst Portfolio Bootcamp (freeCodeCamp)", duration: "19h 23m • End-to-End Real-World Projects", videoId: "PSNXoAs2FtQ" }
    ]
  },
  "fullstack-web": {
    title: "Full Stack Web Development",
    subtitle: "Complete Sequence: Web & Internet Basics → HTML5 & CSS3 → JavaScript → Git & GitHub → TypeScript → React → Node.js & Express → PostgreSQL → Docker & Deployment",
    modules: [
      { step: "Step 1", title: "HTML5 & CSS3 Complete Course (SuperSimpleDev)", duration: "6h 31m • Semantic HTML, Flexbox, Grid & Responsive UI", videoId: "G3e-cpL7ofc" },
      { step: "Step 2", title: "JavaScript Full Course for Beginners (freeCodeCamp)", duration: "8h 00m • ES6+, DOM Manipulation, Fetch & Async/Await", videoId: "PkZNo7MFNFg" },
      { step: "Step 3", title: "Git & GitHub Crash Course for Beginners (freeCodeCamp)", duration: "1h 08m • Version Control, Branches & Pull Requests", videoId: "RGOj5yH7evk" },
      { step: "Step 4", title: "TypeScript Full Course for Web Developers (freeCodeCamp)", duration: "5h 00m • Static Typing & Interfaces", videoId: "30LWjhZzg50" },
      { step: "Step 5", title: "React JS Full Course for Beginners (freeCodeCamp)", duration: "11h 55m • Components, Hooks, State & Routing", videoId: "bMknfKXIFA8" },
      { step: "Step 6", title: "Node.js & Express.js Full Course (freeCodeCamp)", duration: "8h 16m • REST APIs, Middleware & JWT Auth", videoId: "Oe421EPjeBE" },
      { step: "Step 7", title: "PostgreSQL & Relational Database Design (freeCodeCamp)", duration: "4h 20m • Production Schemas, Indexing & SQL Queries", videoId: "qw--VYLpxG4" },
      { step: "Step 8", title: "Docker Containers for Full-Stack Deployment (freeCodeCamp)", duration: "3h 10m • Containerizing Frontend, API & Database", videoId: "fqMOX6JJhGo" }
    ]
  },
  "genai-llm": {
    title: "AI Engineer (Zero to Production)",
    subtitle: "Complete Sequence: Python → Linear Algebra & Math → ML Foundations → Neural Networks & PyTorch → LLM Architecture → Prompt Engineering → RAG & Vector DBs → Fine-Tuning → AI Agents & MCP → FastAPI & Docker",
    modules: [
      { step: "Step 1", title: "Python Full Course for Beginners (freeCodeCamp)", duration: "4h 26m • Core Python, Data Structures & OOP", videoId: "rfscVS0vtbw" },
      { step: "Step 2", title: "Mathematics for Machine Learning & Linear Algebra (freeCodeCamp)", duration: "9h 50m • Vectors, Matrices, Calculus & Probability", videoId: "0jspaMLxKyY" },
      { step: "Step 3", title: "Data Manipulation with NumPy & Pandas (freeCodeCamp)", duration: "4h 10m • Tensors, Arrays & Dataset Preparation", videoId: "r-uOLxNrNk8" },
      { step: "Step 4", title: "Machine Learning Foundations with Scikit-Learn (freeCodeCamp)", duration: "3h 53m • Supervised Learning, Evaluation & Metrics", videoId: "i_LwzRVP7bg" },
      { step: "Step 5", title: "Neural Networks: Zero to Hero – Micrograd (Andrej Karpathy)", duration: "2h 25m • Backpropagation & Training from Scratch", videoId: "VMj-3S1tku0" },
      { step: "Step 6", title: "PyTorch Deep Learning & Transformers (freeCodeCamp)", duration: "25h 37m • Deep Neural Nets & Attention Mechanisms", videoId: "V_xro1bcAuA" },
      { step: "Step 7", title: "Intro to Large Language Models (Andrej Karpathy)", duration: "1h 00m • Pre-training, Tokenization, RLHF & Scaling", videoId: "zjkBMFhNj_g" },
      { step: "Step 8", title: "Prompt Engineering Complete Course (freeCodeCamp)", duration: "2h 15m • Zero-Shot, Few-Shot, CoT & Structured Outputs", videoId: "_ZvnD73m40o" },
      { step: "Step 9", title: "LangChain, Embeddings & RAG Systems Full Course (freeCodeCamp)", duration: "3h 40m • Vector Databases, Chunking & Retrieval", videoId: "lG7Uxts9SXs" },
      { step: "Step 10", title: "Building Autonomous AI Agents & Tool Calling (freeCodeCamp)", duration: "2h 50m • Multi-Agent Workflows, Memory & Function Calling", videoId: "sal78ACtGTc" },
      { step: "Step 11", title: "Deploying AI APIs with FastAPI & Docker (freeCodeCamp)", duration: "3h 30m • Production AI Microservices & Streaming", videoId: "0sOvCWFmrtA" }
    ]
  },
  "python-fullstack": {
    title: "Fullstack with Python",
    subtitle: "Complete Sequence: Python & OOP → Git → HTML5 & CSS3 → JavaScript → SQL → Django → FastAPI → React → Docker",
    modules: [
      { step: "Step 1", title: "Python Programming Full Course (freeCodeCamp)", duration: "4h 26m • Python Fundamentals & OOP", videoId: "rfscVS0vtbw" },
      { step: "Step 2", title: "Git & GitHub Version Control (freeCodeCamp)", duration: "1h 08m • Commits, Branches & Collaboration", videoId: "RGOj5yH7evk" },
      { step: "Step 3", title: "HTML5 & CSS3 Responsive Web Design (SuperSimpleDev)", duration: "6h 31m • Frontend Layout & Styling", videoId: "G3e-cpL7ofc" },
      { step: "Step 4", title: "JavaScript Essentials for Web Apps (freeCodeCamp)", duration: "8h 00m • DOM, Fetch API & Modern ES6+", videoId: "PkZNo7MFNFg" },
      { step: "Step 5", title: "SQL & Relational Databases (freeCodeCamp)", duration: "4h 20m • Database Modeling & Queries", videoId: "HXV3zeQKqGY" },
      { step: "Step 6", title: "Python Django Web Framework Full Course (freeCodeCamp)", duration: "4h 10m • Models, Views, Templates & Auth", videoId: "F5mRW0jo-U4" },
      { step: "Step 7", title: "Python FastAPI Modern REST API Course (freeCodeCamp)", duration: "3h 30m • Async APIs, Pydantic & Swagger Docs", videoId: "0sOvCWFmrtA" },
      { step: "Step 8", title: "React JS Frontend Integration (freeCodeCamp)", duration: "11h 55m • Single Page App Frontend", videoId: "bMknfKXIFA8" },
      { step: "Step 9", title: "Dockerizing Python Web Apps (freeCodeCamp)", duration: "3h 10m • Production Containers", videoId: "fqMOX6JJhGo" }
    ]
  },
  "java-fullstack": {
    title: "Java Enterprise Fullstack",
    subtitle: "Complete Sequence: Core Java & OOP → Git → MySQL → HTML/CSS & TypeScript → Spring Boot 3 & Security → Angular → Microservices & Docker",
    modules: [
      { step: "Step 1", title: "Java Programming & OOP Full Course (freeCodeCamp)", duration: "6h 15m • Core Java, Collections, Streams & Multithreading", videoId: "A74TOX803D0" },
      { step: "Step 2", title: "Git & GitHub Version Control (freeCodeCamp)", duration: "1h 08m • Enterprise Git Workflows", videoId: "RGOj5yH7evk" },
      { step: "Step 3", title: "MySQL Database Full Course (Bro Code)", duration: "3h 00m • Relational Databases & SQL", videoId: "7S_tz1z_5bA" },
      { step: "Step 4", title: "HTML5 & CSS3 Web Foundations (SuperSimpleDev)", duration: "6h 31m • UI Structure & Responsive Styling", videoId: "G3e-cpL7ofc" },
      { step: "Step 5", title: "TypeScript Complete Course (freeCodeCamp)", duration: "5h 00m • Strongly Typed Frontend Foundation", videoId: "30LWjhZzg50" },
      { step: "Step 6", title: "Spring Boot 3 & Spring Security Full Course (Amigoscode)", duration: "4h 50m • REST APIs, Spring Data JPA & JWT Auth", videoId: "9SGDpanrc8U" },
      { step: "Step 7", title: "Angular TypeScript Full Course (freeCodeCamp)", duration: "3h 55m • Enterprise SPA Frontend", videoId: "3qBXWUpoPHo" },
      { step: "Step 8", title: "Spring Boot Microservices Architecture (freeCodeCamp)", duration: "4h 10m • Service Discovery & API Gateway", videoId: "mPPhcU7oWDU" },
      { step: "Step 9", title: "Docker Containers for Java Microservices (freeCodeCamp)", duration: "3h 10m • Container Deployment", videoId: "fqMOX6JJhGo" }
    ]
  },
  "data-science": {
    title: "Data Science & Machine Learning",
    subtitle: "Complete Sequence: Mathematics & Linear Algebra → Statistics & Probability → Python → SQL → NumPy & Pandas → Scikit-Learn ML → PyTorch Deep Learning",
    modules: [
      { step: "Step 1", title: "Mathematics & Linear Algebra for Machine Learning (freeCodeCamp)", duration: "9h 50m • Vectors, Matrices & Derivatives", videoId: "0jspaMLxKyY" },
      { step: "Step 2", title: "Statistics & Probability Full Course (freeCodeCamp)", duration: "8h 15m • Distributions, Hypothesis Testing & Bayes", videoId: "xxpc-HPKN28" },
      { step: "Step 3", title: "Python Programming Full Course (freeCodeCamp)", duration: "4h 26m • Python for Data Science", videoId: "rfscVS0vtbw" },
      { step: "Step 4", title: "SQL for Data Extraction & Analysis (freeCodeCamp)", duration: "4h 20m • Querying Datasets from Databases", videoId: "HXV3zeQKqGY" },
      { step: "Step 5", title: "Data Analysis with Python, NumPy & Pandas (freeCodeCamp)", duration: "4h 10m • Data Cleaning, EDA & Visualization", videoId: "r-uOLxNrNk8" },
      { step: "Step 6", title: "Machine Learning for Everybody with Scikit-Learn (freeCodeCamp)", duration: "3h 53m • Regression, Classification & Feature Engineering", videoId: "i_LwzRVP7bg" },
      { step: "Step 7", title: "PyTorch for Deep Learning & Neural Networks (freeCodeCamp)", duration: "25h 37m • Computer Vision, NLP & Deep Neural Nets", videoId: "V_xro1bcAuA" }
    ]
  },
  "cloud-devops": {
    title: "Cloud Computing & DevOps",
    subtitle: "Complete Sequence: Networking Basics → Linux & Bash → Git → Python Scripting → Docker → Kubernetes → AWS Cloud → Terraform IaC",
    modules: [
      { step: "Step 1", title: "Computer Networking Full Course (freeCodeCamp)", duration: "9h 24m • DNS, TCP/IP, Load Balancing, HTTP & Firewalls", videoId: "qiQR5rTSshw" },
      { step: "Step 2", title: "Linux Command Line & Bash Full Course (freeCodeCamp)", duration: "3h 15m • Shell Scripting, Permissions & System Admin", videoId: "sWbUDq4S6Y8" },
      { step: "Step 3", title: "Git & GitHub Version Control & CI/CD Basics (freeCodeCamp)", duration: "1h 08m • Branching Strategies & Automated Pipelines", videoId: "RGOj5yH7evk" },
      { step: "Step 4", title: "Python for DevOps Automation Scripting (freeCodeCamp)", duration: "4h 26m • Automating Cloud & Server Tasks", videoId: "rfscVS0vtbw" },
      { step: "Step 5", title: "Docker Containers Full Course (freeCodeCamp)", duration: "3h 10m • Dockerfiles, Multi-Stage Builds & Compose", videoId: "fqMOX6JJhGo" },
      { step: "Step 6", title: "Kubernetes Full Course for Beginners (TechWorld with Nana)", duration: "3h 36m • Pods, Services, Deployments & Helm", videoId: "X48VuDVv0do" },
      { step: "Step 7", title: "AWS Certified Cloud Practitioner Full Course (freeCodeCamp)", duration: "13h 15m • EC2, S3, IAM, VPC & Serverless", videoId: "SOTamWNgDKc" },
      { step: "Step 8", title: "Terraform Infrastructure as Code (freeCodeCamp)", duration: "2h 45m • Automated Multi-Cloud Provisioning", videoId: "SLB_c_ayRMo" }
    ]
  },
  "cybersecurity": {
    title: "Cybersecurity & Ethical Hacking",
    subtitle: "Complete Sequence: Computer Networking → Linux Administration → Python Security Scripting → Ethical Hacking & Pentesting → Web AppSec (OWASP)",
    modules: [
      { step: "Step 1", title: "Computer Networking Full Course (freeCodeCamp)", duration: "9h 24m • OSI Model, TCP/IP, Subnetting, DNS & Firewalls", videoId: "qiQR5rTSshw" },
      { step: "Step 2", title: "Linux Fundamentals for Security (freeCodeCamp)", duration: "3h 15m • Linux System Hardening, Permissions & CLI", videoId: "sWbUDq4S6Y8" },
      { step: "Step 3", title: "Python Programming for Security Automation (freeCodeCamp)", duration: "4h 26m • Writing Custom Scanners & Exploit Scripts", videoId: "rfscVS0vtbw" },
      { step: "Step 4", title: "Ethical Hacking 15-Hour Full Course (The Cyber Mentor)", duration: "15h 18m • Reconnaissance, Exploitation & Active Directory", videoId: "3Kq1MIfTWCE" },
      { step: "Step 5", title: "Web Application Security & OWASP Top 10 (freeCodeCamp)", duration: "2h 50m • SQLi, XSS, CSRF & Bug Bounty Basics", videoId: "rWHvp7rUka8" }
    ]
  },
  "data-engineering": {
    title: "Data Engineering & Big Data",
    subtitle: "Complete Sequence: SQL Data Warehousing → Linux & Bash → Python ETL → Docker → Apache Spark (PySpark) → Apache Kafka",
    modules: [
      { step: "Step 1", title: "SQL & Relational Data Warehousing (freeCodeCamp)", duration: "4h 20m • Analytical SQL, Window Functions & Star Schemas", videoId: "HXV3zeQKqGY" },
      { step: "Step 2", title: "Linux & Bash Shell Scripting (freeCodeCamp)", duration: "3h 15m • Cron Jobs, File Processing & Server CLI", videoId: "sWbUDq4S6Y8" },
      { step: "Step 3", title: "Python for Data Pipelines & ETL (freeCodeCamp)", duration: "4h 26m • Automated Data Extraction & Transformation", videoId: "rfscVS0vtbw" },
      { step: "Step 4", title: "Docker for Data Engineers (freeCodeCamp)", duration: "3h 10m • Containerized Data Workflows", videoId: "fqMOX6JJhGo" },
      { step: "Step 5", title: "PySpark & Apache Spark Big Data Course (freeCodeCamp)", duration: "3h 50m • Distributed Batch Data Processing", videoId: "_C8kWso4ne4" },
      { step: "Step 6", title: "Apache Kafka Event Streaming Full Course (Amigoscode)", duration: "2h 40m • Real-Time Event Streaming Pipelines", videoId: "B7CwU_tMcsg" }
    ]
  },
  "mobile-dev": {
    title: "Cross-Platform Mobile App Dev",
    subtitle: "Complete Sequence: JavaScript ES6+ → TypeScript → Git → React Native → Flutter & Dart → Firebase Cloud Backend",
    modules: [
      { step: "Step 1", title: "JavaScript Full Course for Beginners (freeCodeCamp)", duration: "8h 00m • Async Programming, APIs & ES6+ Foundations", videoId: "PkZNo7MFNFg" },
      { step: "Step 2", title: "TypeScript & Modern JS Full Course (freeCodeCamp)", duration: "5h 00m • Type-Safe Mobile App Logic", videoId: "30LWjhZzg50" },
      { step: "Step 3", title: "Git & GitHub Version Control (freeCodeCamp)", duration: "1h 08m • App Release Branching & Collaboration", videoId: "RGOj5yH7evk" },
      { step: "Step 4", title: "React Native Mobile Development Course (Programming with Mosh)", duration: "4h 30m • Native iOS & Android with React", videoId: "0-S5a0eXPoc" },
      { step: "Step 5", title: "Flutter & Dart 37-Hour Complete Course (freeCodeCamp)", duration: "37h 00m • Cross-Platform Widgets & State Management", videoId: "VPvVD8t02U8" },
      { step: "Step 6", title: "Firebase Auth & Cloud Firestore Backend (Fireship)", duration: "2h 30m • Realtime Database & Push Notifications", videoId: "9kRgVxULbag" }
    ]
  },
  "dsa-system-design": {
    title: "DSA, Algorithms & System Design",
    subtitle: "Complete Sequence: CS50 Foundations → Python/Java Coding → Data Structures & Algorithms → Dynamic Programming → System Design",
    modules: [
      { step: "Step 1", title: "Harvard CS50 – Full Computer Science University Course (freeCodeCamp)", duration: "25h 51m • Memory, Pointers, Complexity & Foundations", videoId: "8mAITcNt710" },
      { step: "Step 2", title: "Python Programming for Coding Interviews (freeCodeCamp)", duration: "4h 26m • Clean Syntax, HashMaps, Sets & Heaps", videoId: "rfscVS0vtbw" },
      { step: "Step 3", title: "Data Structures Easy to Advanced Course (William Fiset / freeCodeCamp)", duration: "8h 03m • Arrays, Linked Lists, Trees, Heaps & Graphs", videoId: "RBSGKlAvoiM" },
      { step: "Step 4", title: "Dynamic Programming – Learn to Solve Algorithmic Problems (freeCodeCamp)", duration: "5h 10m • Memoization, Tabulation & Interview Patterns", videoId: "oBt53YbR9Kk" },
      { step: "Step 5", title: "System Design for Beginners Course (freeCodeCamp)", duration: "2h 05m • Load Balancers, Caching, Sharding & Scalability", videoId: "m8Icp_Cid5o" }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Product Design & Figma",
    subtitle: "Complete Sequence: UI/UX & User Research → Figma Complete Course → Design Systems & Accessibility → HTML5 & CSS3 Handoff",
    modules: [
      { step: "Step 1", title: "UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma (freeCodeCamp)", duration: "1h 40m • User Flows, Typography, Color & Visual Hierarchy", videoId: "c9Wg6Cb_YlU" },
      { step: "Step 2", title: "Figma UI Design Tutorial: Auto Layout & Prototyping (AJ&Smart)", duration: "1h 15m • Auto Layout, Variants, Constraints & Interactive Prototypes", videoId: "FTFaQWZBqQ8" },
      { step: "Step 3", title: "Design Systems with Figma Full Course (freeCodeCamp)", duration: "3h 10m • Design Tokens, Reusable UI Kits & Accessibility", videoId: "EK-pHkc5EL4" },
      { step: "Step 4", title: "HTML5 & CSS3 for Product Designers (SuperSimpleDev)", duration: "6h 31m • Translating Figma Designs to Responsive Code", videoId: "G3e-cpL7ofc" }
    ]
  },
  "blockchain-web3": {
    title: "Blockchain & Web3 Engineering",
    subtitle: "Complete Sequence: Blockchain & Cryptography → JavaScript & React → Solidity Smart Contracts → Foundry Testing & Security",
    modules: [
      { step: "Step 1", title: "Blockchain & Cryptography Explained (3Blue1Brown + freeCodeCamp)", duration: "1h 30m • Hashing, Consensus & Distributed Ledgers", videoId: "bBC-nXj3Ng4" },
      { step: "Step 2", title: "JavaScript & React Frontend Foundations (freeCodeCamp)", duration: "11h 55m • Building Web3 dApp User Interfaces", videoId: "bMknfKXIFA8" },
      { step: "Step 3", title: "Solidity, Blockchain & Smart Contract Course (Patrick Collins / freeCodeCamp)", duration: "31h 50m • EVM, Solidity, DeFi & Smart Contract Security", videoId: "gyMwXuJrbJQ" },
      { step: "Step 4", title: "Foundry Smart Contract Development & Auditing (Cyfrin / Patrick Collins)", duration: "8h 45m • Modern Solidity Testing, Fuzzing & Deployment", videoId: "sas02qhhZkk" }
    ]
  },
  "mlops-ai": {
    title: "MLOps & Production AI Deployment",
    subtitle: "Complete Sequence: Python & Linux → FastAPI Model Serving → Git & CI/CD → Docker → MLflow & Pipelines → Kubernetes & AWS",
    modules: [
      { step: "Step 1", title: "Linux & Bash for Production Servers (freeCodeCamp)", duration: "3h 15m • Server Environments & Automation", videoId: "sWbUDq4S6Y8" },
      { step: "Step 2", title: "Python FastAPI Modern REST API Development (freeCodeCamp)", duration: "3h 30m • Serving ML & LLM Models as High-Speed APIs", videoId: "0sOvCWFmrtA" },
      { step: "Step 3", title: "Git & GitHub CI/CD Workflows (freeCodeCamp)", duration: "1h 08m • Automated Testing & Deployment Triggers", videoId: "RGOj5yH7evk" },
      { step: "Step 4", title: "Docker Containers Full Course (freeCodeCamp)", duration: "3h 10m • Packaging AI Models & GPU Dependencies", videoId: "fqMOX6JJhGo" },
      { step: "Step 5", title: "MLOps Course – Build & Deploy Machine Learning Pipelines (freeCodeCamp)", duration: "4h 15m • MLflow, Data Versioning & Automated Retraining", videoId: "-dJPoLm_oko" },
      { step: "Step 6", title: "Kubernetes Full Course for Beginners (TechWorld with Nana)", duration: "3h 36m • Scaling AI Inference Clusters in Production", videoId: "X48VuDVv0do" }
    ]
  }
};

const COURSE_NAME_TO_KEY = {
  "Data Analytics & Business Intelligence": "data-analytics",
  "Full Stack Web Development": "fullstack-web",
  "AI Engineer (Zero to Production)": "genai-llm",
  "Generative AI & LLM Engineering": "genai-llm",
  "Fullstack with Python": "python-fullstack",
  "Java Enterprise Fullstack": "java-fullstack",
  "Data Science & Machine Learning": "data-science",
  "Cloud Computing & DevOps": "cloud-devops",
  "Cybersecurity & Ethical Hacking": "cybersecurity",
  "Data Engineering & Big Data": "data-engineering",
  "Cross-Platform Mobile App Dev": "mobile-dev",
  "DSA, Algorithms & System Design": "dsa-system-design",
  "UI/UX Product Design & Figma": "ui-ux-design",
  "Blockchain & Web3 Engineering": "blockchain-web3",
  "MLOps & Production AI Deployment": "mlops-ai"
};

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  updateToggleLabel(isDark);
}

function updateToggleLabel(isDark) {
  const toggleBtn = document.getElementById("darkToggle");
  if (toggleBtn) {
    toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
}

function openCourseModal(courseKey) {
  const course = COURSE_ROADMAPS[courseKey];
  const modal = document.getElementById("roadmapModal");
  if (!course || !modal) return;

  document.getElementById("modalCourseTitle").textContent = course.title;
  document.getElementById("modalCourseSubtitle").textContent = course.subtitle;

  const enrollBtn = document.getElementById("modalEnrollBtn");
  if (enrollBtn && enrollBtn.tagName === "A") {
    enrollBtn.href = `register.html?course=${encodeURIComponent(course.title)}`;
  }

  const stepsList = document.getElementById("roadmapStepsList");
  stepsList.innerHTML = "";

  course.modules.forEach((mod, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `roadmap-step-btn ${index === 0 ? "active" : ""}`;
    btn.innerHTML = `
      <span class="step-number">${mod.step}</span>
      <div class="step-info">
        <strong>${mod.title}</strong>
        <span>${mod.duration}</span>
      </div>
    `;
    btn.addEventListener("click", () => {
      stepsList.querySelectorAll(".roadmap-step-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadRoadmapVideo(mod);
    });
    stepsList.appendChild(btn);
  });

  if (course.modules.length > 0) {
    loadRoadmapVideo(course.modules[0]);
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function loadRoadmapVideo(moduleItem) {
  const iframe = document.getElementById("roadmapVideoFrame");
  const nowPlaying = document.getElementById("nowPlayingTitle");
  const extLink = document.getElementById("youtubeExternalLink");

  if (iframe) {
    iframe.src = `https://www.youtube.com/embed/${moduleItem.videoId}?rel=0`;
  }
  if (nowPlaying) {
    const isLocalFile = window.location.protocol === "file:";
    nowPlaying.textContent = isLocalFile
      ? `▶ ${moduleItem.step}: ${moduleItem.title} (Tip: Use Live Server or click Open in YouTube if blocked locally)`
      : `▶ ${moduleItem.step}: ${moduleItem.title}`;
  }
  if (extLink) {
    extLink.href = `https://www.youtube.com/watch?v=${moduleItem.videoId}`;
  }
}

function closeCourseModal() {
  const modal = document.getElementById("roadmapModal");
  const iframe = document.getElementById("roadmapVideoFrame");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
  if (iframe) {
    iframe.src = "";
  }
}

function closeModalOnOutsideClick(event) {
  if (event.target.id === "roadmapModal") {
    closeCourseModal();
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCourseModal();
});

document.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "enabled";
  if (isDark) {
    document.body.classList.add("dark-mode");
  }
  updateToggleLabel(isDark);

  const filterContainer = document.getElementById("courseFilters");
  if (filterContainer) {
    const filterButtons = filterContainer.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll("#coursesGrid .course-card");

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.getAttribute("data-filter");
        cards.forEach(card => {
          if (category === "all" || card.getAttribute("data-category") === category) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  const regForm = document.getElementById("registrationForm");
  if (regForm) {
    const params = new URLSearchParams(window.location.search);
    const preselectedCourse = params.get("course");
    if (preselectedCourse) {
      const courseSelect = document.getElementById("course");
      for (const option of courseSelect.options) {
        if (option.value === preselectedCourse) {
          option.selected = true;
          break;
        }
      }
    }

    renderSavedRegistration();

    regForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      regForm.querySelectorAll(".error-message").forEach(el => (el.style.display = "none"));
      regForm.querySelectorAll("input, select, .radio-group").forEach(el => el.classList.remove("error"));

      if (!regForm.name.value.trim()) {
        valid = false;
        showError("name");
      }

      const ageVal = Number(regForm.age.value);
      if (!regForm.age.value || ageVal < 1 || ageVal > 120) {
        valid = false;
        showError("age");
      }

      const selectedGender = regForm.querySelector('input[name="gender"]:checked');
      if (!selectedGender) {
        valid = false;
        document.getElementById("gender-group").classList.add("error");
        document.getElementById("error-gender").style.display = "block";
      }

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regForm.email.value.trim());
      if (!emailValid) {
        valid = false;
        showError("email");
      }

      if (!regForm.course.value) {
        valid = false;
        showError("course");
      }

      if (!regForm.terms.checked) {
        valid = false;
        showError("terms");
      }

      if (!valid) return;

      const submitBtn = document.getElementById("submitBtn");
      const successMsg = document.getElementById("successMsg");
      submitBtn.disabled = true;
      submitBtn.value = "Registering...";

      const registrationData = {
        name: regForm.name.value.trim(),
        age: ageVal,
        gender: selectedGender.value,
        email: regForm.email.value.trim(),
        course: regForm.course.value,
        date: new Date().toLocaleDateString()
      };

      setTimeout(() => {
        localStorage.setItem("latestRegistration", JSON.stringify(registrationData));
        submitBtn.disabled = false;
        submitBtn.value = "Register";
        regForm.reset();
        successMsg.style.display = "block";
        renderSavedRegistration();

        const roadmapKey = COURSE_NAME_TO_KEY[registrationData.course];
        if (roadmapKey) {
          openCourseModal(roadmapKey);
        }

        setTimeout(() => {
          successMsg.style.display = "none";
        }, 6000);
      }, 900);
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const contactSuccessMsg = document.getElementById("contactSuccessMsg");
    renderSavedInquiry();

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const inquiryData = {
        name: document.getElementById("contactName").value.trim(),
        email: document.getElementById("contactEmail").value.trim(),
        topic: document.getElementById("contactTopic").value,
        message: document.getElementById("contactMessage").value.trim(),
        date: new Date().toLocaleDateString()
      };

      localStorage.setItem("latestInquiry", JSON.stringify(inquiryData));
      contactSuccessMsg.style.display = "block";
      contactForm.reset();
      renderSavedInquiry();

      setTimeout(() => {
        contactSuccessMsg.style.display = "none";
      }, 5000);
    });
  }
});

function renderSavedInquiry() {
  const container = document.getElementById("savedContactInquiry");
  if (!container) return;

  const saved = localStorage.getItem("latestInquiry");
  if (!saved) {
    container.style.display = "none";
    return;
  }

  const data = JSON.parse(saved);
  container.style.display = "block";
  container.innerHTML = `
    <strong>📨 Your Last Submitted Inquiry</strong><br>
    <strong>Topic:</strong> ${data.topic}<br>
    <strong>From:</strong> ${data.name} (${data.email}) • <em>Sent on ${data.date}</em>
  `;
}

function showError(field) {
  const input = document.getElementById(field);
  if (input) input.classList.add("error");
  const error = document.getElementById(`error-${field}`);
  if (error) error.style.display = "block";
}

function renderSavedRegistration() {
  const container = document.getElementById("savedRegistration");
  if (!container) return;

  const saved = localStorage.getItem("latestRegistration");
  if (!saved) {
    container.style.display = "none";
    return;
  }

  const data = JSON.parse(saved);
  const roadmapKey = COURSE_NAME_TO_KEY[data.course];

  container.style.display = "block";
  container.innerHTML = `
    <strong>🎓 Active Student Enrollment</strong><br>
    <strong>Student:</strong> ${data.name} (${data.age}, ${data.gender})<br>
    <strong>Enrolled Course:</strong> ${data.course}<br>
    <strong>Email:</strong> ${data.email} • <em>Enrolled on ${data.date}</em>
    ${roadmapKey ? `<br><button type="button" class="btn-roadmap" onclick="openCourseModal('${roadmapKey}')">📺 Watch ${data.course} Video Roadmap</button>` : ""}
  `;
}