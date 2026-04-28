import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import {
  EducationSection,
  SectionHeader,
  CardsGrid,
  Card,
  TypeLabel,
} from './Education.styles';

const educationData = [
  {
    id: 'edu-1',
    type: 'Degree',
    icon: <FaGraduationCap />,
    title: 'Master of Science, Artificial Intelligence',
    institution: 'Kennesaw State University',
    date: 'Expected May 2027',
  },
  {
    id: 'edu-2',
    type: 'Degree',
    icon: <FaGraduationCap />,
    title: 'Bachelor of Science, Software Engineering',
    institution: 'Kennesaw State University',
    date: 'December 2024',
  },
  {
    id: 'cert-1',
    type: 'Certificate',
    icon: <FaCertificate />,
    title: 'Meta Data Analyst Professional Certificate',
    institution: 'Meta / Coursera',
    date: '2025',
    detail: 'Statistics, Python for Data Analysis, SQL, data visualization, and A/B testing',
  },
];

const Education = () => {
  return (
    <EducationSection id="education">
      <SectionHeader>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education &amp; Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Academic background and professional credentials
        </motion.p>
      </SectionHeader>

      <CardsGrid>
        {educationData.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <TypeLabel>{item.type}</TypeLabel>
              <span className="icon">{item.icon}</span>
              <span className="title">{item.title}</span>
              <span className="institution">{item.institution}</span>
              <span className="date">{item.date}</span>
              {item.detail && <span className="detail">{item.detail}</span>}
            </Card>
          </motion.div>
        ))}
      </CardsGrid>
    </EducationSection>
  );
};

export default Education;
