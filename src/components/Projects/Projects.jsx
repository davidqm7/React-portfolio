import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectsData, projectFilters } from '../../data/projects';
import ProjectCard from './ProjectCard';
import {
  ProjectsSection,
  SectionHeader,
  FilterContainer,
  ProjectsGrid
} from './Project.styles';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filtered = projectsData.filter(
    p => filter === 'all' || p.category === filter
  );

  return (
    <ProjectsSection id="projects">
      <SectionHeader>
        <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
          Featured Projects
        </motion.h2>
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>
          A selection of applications I’ve built and contributed to
        </motion.p>
      </SectionHeader>

      <FilterContainer>
        {projectFilters.map(btn => (
          <button
            key={btn.id}
            className={filter === btn.id ? 'active' : ''}
            onClick={() => setFilter(btn.id)}
          >
            {btn.label}
          </button>
        ))}
      </FilterContainer>

      <ProjectsGrid>
        <AnimatePresence mode="popLayout">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;