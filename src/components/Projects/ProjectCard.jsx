import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  ProjectCardContainer,
  ProjectHeader,
  TechStack,
  ProjectLinks
} from './Project.styles';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <ProjectCardContainer>
        <ProjectHeader>
          <span className="icon">{project.icon}</span>
          <h3>{project.title}</h3>
        </ProjectHeader>

        <p className="desc">{project.description}</p>

        {!!project.tech?.length && (
          <TechStack>
            {project.tech.map((t, i) => (
              <span key={`${project.id}-tech-${i}`}>{t}</span>
            ))}
          </TechStack>
        )}

        <ProjectLinks>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="demo">
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </ProjectLinks>
      </ProjectCardContainer>
    </motion.div>
  );
};

export default ProjectCard;