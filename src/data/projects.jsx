import {
  FaCodeBranch,
  FaCalculator,
  FaComments,
  FaChartLine,
  FaProjectDiagram,
  FaGamepad
} from 'react-icons/fa';
import { SiPhp } from 'react-icons/si';

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'ml', label: 'ML/Data' }
];

export const projectsData = [
  // ML/Data projects
  {
    id: 'p-knn',
    title: 'K-Nearest Neighbor (KNN) Classifier from Scratch',
    category: 'ml',
    icon: <FaProjectDiagram />,
    description:
      'Built a KNN classifier from the ground up to classify tumors in the Wisconsin Breast Cancer dataset. Reached 98.37% accuracy on unseen test data with solid validation and optimization.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn (metrics)'],
    repo: 'https://github.com/davidqm7/CS7267-MachineLearning-Assignment2'
  },
  {
    id: 'p-kmeans',
    title: 'K-Means Clustering Algorithm (from Scratch)',
    category: 'ml',
    icon: <FaProjectDiagram />,
    description:
      'Implemented K-Means with NumPy/Pandas and Matplotlib for unsupervised clustering. Applied z-score normalization, multiple runs to minimize SSE, and validated against ground truth on Iris (avg centroid distance: 0.1727).',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    repo: 'https://github.com/davidqm7/CS7267-MachineLearning-Assignment1'
  },
  {
    id: 's-dash',
    title: 'Business Sales Dashboard',
    category: 'ml',
    icon: <FaProjectDiagram />,
    description:
      'An end-to-end data analytics project analyzing sales, profit, and performance trends across regions, categories, and customer segments using Python and Power BI. This project demonstrates the complete data analytics lifecycle — from data cleaning and analysis to visualization and business insights. ',
    tech: ['Python', 'matplotlib', 'Dash', 'Pandas','Numpy','seaborn','Power BI'],
    repo: 'https://github.com/davidqm7/BusinessSalesDashboard'
  },
  {
    id: 'O-list',
    title: 'E-Commerce Customer Segmentation Project: Olist Revenue Analysis ',
    category: 'ml',
    icon: <FaProjectDiagram />,
    description:
      'Utilized SQL Joins and Python to build an RFM model on 100k+ orders, identifying $2.5M in at-risk revenue and visualizing key segments with Seaborn',
    tech: ['Python','SQL joins', 'Pandas','seaborn'],
    repo: 'https://github.com/davidqm7/olist-customer-segmentation'
  },
  // Backend
  {
    id: 'p1',
    title: 'Spring Social Media Blog API',
    category: 'backend',
    icon: <FaCodeBranch />,
    description:
      'RESTful backend built with Spring Boot for social features: users, posts, and messages with robust CRUD and JPA persistence.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'REST'],
    repo: 'https://github.com/davidqm7/Spring-Social-Media-API-'
  },

  // Full Stack
  {
    id: 'p2',
    title: 'Finance Management System',
    category: 'fullstack',
    icon: <FaCalculator />,
    description:
      'Web-based accounting app with role-based access, secure authentication, and transaction tracking. Built by a team of three.',
    tech: ['React', 'Firebase', 'Auth', 'Cloud Firestore'],
    repo: 'https://github.com/davidqm7/accounting_application'
  },
  {
    id: 'p-chat',
    title: 'Basic Real-Time Chat',
    category: 'fullstack',
    icon: <FaComments />,
    description:
      'Real-time chat using Firebase Authentication and Firestore for storage, retrieval, and updates.',
    tech: ['React', 'Firebase Auth', 'Firestore'],
    repo: 'https://github.com/davidqm7/Chat-Application'
  },

  // Games/Training (Frontend delivery)
  {
    id: 'p-rafb',
    title: 'Interactive Training Games Suite – Robins AFB',
    category: 'fullstack',
    icon: <FaGamepad />,
    description:
      'Capstone suite of three Unity-based matching games converting Air Force regulatory content into interactive training (STINFO, Records Management, No Fear Act). Includes timer, attempts, restart, and deployment prep.',
    tech: ['Unity', 'C#', 'WebGL', 'Game Design'],
    repo: 'https://github.com/davidqm7/Records-Management-',
    demo: 'https://github.com/lpdevine/RobbinsAFBTrainingGame2024.git'
  },

  // Frontend / Data
  {
    id: 'p3',
    title: 'Stock Investment Dashboard',
    category: 'ml',
    icon: <FaChartLine />,
    description:
      'Interactive data visualization dashboard for stock analysis (Tesla and Amazon). Pulled historical prices and revenue data, visualized with Plotly/Dash.',
    tech: ['Python', 'Plotly', 'Dash', 'yfinance', 'Web Scraping'],
    repo: 'https://github.com/davidqm7/Stock-Dashboard'
  },

  // Frontend
  {
    id: 'p4',
    title: 'Web Calculator (Blazor + Tests)',
    category: 'frontend',
    icon: <FaCalculator />,
    description:
      'Calculator built in ASP.NET Blazor Server with automated testing using NUnit and Playwright.',
    tech: ['C#', 'ASP.NET Blazor', 'NUnit', 'Playwright'],
    repo: 'https://github.com/davidqm7/TestingQAProject'
  },
  {
    id: 'p5',
    title: 'Fibonacci Visualizer',
    category: 'frontend',
    icon: <FaProjectDiagram />,
    description:
      'React app to visualize the Fibonacci sequence with dynamic, interactive animations.',
    tech: ['React', 'JavaScript', 'CSS Animations'],
    repo: 'https://github.com/davidqm7/Fibonacci-Visualizer'
  },

  // Full Stack (classic LAMP)
  {
    id: 'p6',
    title: 'Fruit Stand Website',
    category: 'fullstack',
    icon: <SiPhp />,
    description:
      'LAMP-based fruit stand e-commerce site with database queries and basic inventory functions.',
    tech: ['PHP', 'HTML', 'CSS', 'MySQL', 'WAMP'],
    repo: '' // add repo URL if public
  }
];