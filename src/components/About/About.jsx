import React from 'react';
import { motion } from 'framer-motion';
import {
  AboutSection,
  AboutGrid,
  Avatar,
  AboutText,
  Attributes,
} from './About.styles';
import avatar from '/avatar.png';

const About = () => {
  return (
    <AboutSection id="about">
      <AboutGrid>
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Avatar>
            <img src={avatar} alt="David working at computer" />
          </Avatar>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
        <AboutText>
          <p className="greeting">Hi there 👋</p>
          <h1>I&apos;m David Quintanilla</h1>
          <p className="lead">
            Software and data engineer with hands-on experience building backend APIs,
            event-driven microservices, and Python ETL pipelines. Proficient in Java,
            Spring Boot, and Spring Cloud for distributed systems, and in Python for
            data engineering, machine learning, and statistical analysis. Pursuing a
            Master&apos;s in AI while continuing to ship reliable, well-tested software
            across the full stack.
          </p>

          <Attributes>
            <h3>Key attributes</h3>
            <ul>
              <li>Builds scalable backend APIs and microservices with Java and Spring Boot</li>
              <li>Designs ETL/ELT pipelines and cloud data warehouse solutions</li>
              <li>Applies ML and statistical modeling to real-world datasets</li>
              <li>Full-stack experience from React frontends to distributed backends</li>
              <li>Clean, testable code and professional Git workflow in team environments</li>
            </ul>
          </Attributes>
        </AboutText>
        </motion.div>
      </AboutGrid>
    </AboutSection>
  );
};

export default About;