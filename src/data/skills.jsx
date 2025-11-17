import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiPandas,
  SiNumpy,
  SiTableau,
  SiJupyter,
  SiPlotly,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSpringboot,
  SiGit,
  SiGoogleanalytics,
  SiTrello,
  SiJest,
  SiScikitlearn,
} from 'react-icons/si';

// Filters shown as buttons in the Skills section
export const skillFilters = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'data', label: 'Data Analysis & Viz' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases', label: 'Databases' },
  { id: 'tools', label: 'Tools' },
  { id: 'soft', label: 'Soft Skills' }
];

// Tailored skills from the resume
export const skillsData = [
  // Languages
  { id: 'lang1', name: 'Python', icon: <FaPython />, category: 'languages', level: 80, proficiency: 'Advanced' },
  { id: 'lang2', name: 'SQL', icon: <SiMysql />, category: 'languages', level: 80, proficiency: 'Advanced' },
  { id: 'lang3', name: 'Java', icon: <FaJava />, category: 'languages', level: 85, proficiency: 'Professional' },
  { id: 'lang4', name: 'JavaScript', icon: <FaJsSquare />, category: 'languages', level: 65, proficiency: 'Intermediate' },

  // Data Analysis & Visualization
  { id: 'data1', name: 'Pandas', icon: <SiPandas />, category: 'data', level: 85, proficiency: 'Advanced' },
  { id: 'data2', name: 'NumPy', icon: <SiNumpy />, category: 'data', level: 80, proficiency: 'Advanced' },
  { id: 'data3', name: 'Matplotlib', icon: <SiGoogleanalytics />, category: 'data', level: 75, proficiency: 'Advanced' },
  { id: 'data4', name: 'Plotly', icon: <SiPlotly />, category: 'data', level: 75, proficiency: 'Advanced' },
  { id: 'data5', name: 'Dash', icon: <SiPlotly />, category: 'data', level: 70, proficiency: 'Intermediate' },
  { id: 'data6', name: 'Tableau', icon: <SiTableau />, category: 'data', level: 75, proficiency: 'Advanced' },
  { id: 'data7', name: 'Excel / Google Sheets', icon: <SiGoogleanalytics />, category: 'data', level: 85, proficiency: 'Advanced' },
  { id: 'data8', name: 'Hypothesis Testing / A/B Testing', icon: <SiGoogleanalytics />, category: 'data', level: 70, proficiency: 'Intermediate' },
  { id: 'data9', name: 'Linear Regression', icon: <SiGoogleanalytics />, category: 'data', level: 70, proficiency: 'Intermediate' },
  { id: 'data10', name: 'Data Cleaning', icon: <SiGoogleanalytics />, category: 'data', level: 80, proficiency: 'Advanced' },
  { id: 'data11', name: 'Scikit-Learn', icon: <SiScikitlearn />, category: 'data', level: 65, proficiency: 'Intermediate' },


  // Frontend
  { id: 'fe1', name: 'React', icon: <FaReact />, category: 'frontend', level: 70, proficiency: 'Intermediate' },
  { id: 'fe2', name: 'HTML5', icon: <FaHtml5 />, category: 'frontend', level: 85, proficiency: 'Advanced' },
  { id: 'fe3', name: 'CSS3', icon: <FaCss3Alt />, category: 'frontend', level: 80, proficiency: 'Advanced' },
  { id: 'fe4', name: 'Jest (Testing)', icon: <SiJest />, category: 'frontend', level: 60, proficiency: 'Intermediate' },

  // Backend
  { id: 'be1', name: 'Spring Boot', icon: <SiSpringboot />, category: 'backend', level: 70, proficiency: 'Intermediate' },
  { id: 'be2', name: 'Firebase (Auth, Firestore)', icon: <SiFirebase />, category: 'backend', level: 70, proficiency: 'Intermediate' },

  // Databases
  { id: 'db1', name: 'PostgreSQL', icon: <SiPostgresql />, category: 'databases', level: 70, proficiency: 'Intermediate' },
  { id: 'db2', name: 'SQL (General)', icon: <SiMysql />, category: 'databases', level: 85, proficiency: 'Advanced' },
  { id: 'db3', name: 'Firebase Firestore', icon: <SiFirebase />, category: 'databases', level: 70, proficiency: 'Intermediate' },

  // Tools
  { id: 'tool1', name: 'Jupyter', icon: <SiJupyter />, category: 'tools', level: 85, proficiency: 'Advanced' },
  { id: 'tool2', name: 'Git / GitHub', icon: <SiGit />, category: 'tools', level: 85, proficiency: 'Advanced' },
  { id: 'tool3', name: 'Trello', icon: <SiTrello />, category: 'tools', level: 80, proficiency: 'Advanced' },

  // Soft Skills
  { id: 'soft1', name: 'Problem Solving', icon: <FaGithub />, category: 'soft', level: 90, proficiency: 'Strong' },
  { id: 'soft2', name: 'Analytical Thinking', icon: <FaGithub />, category: 'soft', level: 90, proficiency: 'Strong' },
  { id: 'soft3', name: 'Teamwork & Communication', icon: <FaGithub />, category: 'soft', level: 85, proficiency: 'Strong' },
  { id: 'soft4', name: 'Critical Thinking', icon: <FaGithub />, category: 'soft', level: 85, proficiency: 'Strong' },
  { id: 'soft5', name: 'Storytelling with Data', icon: <FaGithub />, category: 'soft', level: 75, proficiency: 'Advanced' },
];