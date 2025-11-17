import React from 'react';
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
        <Avatar>
          <img src={avatar} alt="David working at computer" />
        </Avatar>

        <AboutText>
          <h1>
            Hi, I&apos;m David Quintanilla! <span className="wave">👋</span>
          </h1>
          <p className="lead">
            Analytical and detail oriented software and data professional with experience in data
            visualization, cleaning, and statistical analysis using Python, SQL, and Tableau. Hands‑on with
            regression, hypothesis testing, and A/B testing. Recently completed the Meta Data Analyst
            Certificate and actively building full stack apps and backend APIs. Passionate about turning
            data into decisions and shipping reliable, user focused software.
          </p>

          <Attributes>
            <h3>Key attributes</h3>
            <ul>
              <li>Strong foundation in front‑end and back‑end development</li>
              <li>Experience with modern frameworks and cloud platforms</li>
              <li>Collaborative, clear communicator, and proactive learner</li>
              <li>Write clean, maintainable, and well‑tested code</li>
              <li>Curious about new tools and best practices</li>
            </ul>
          </Attributes>
        </AboutText>
      </AboutGrid>
    </AboutSection>
  );
};

export default About;