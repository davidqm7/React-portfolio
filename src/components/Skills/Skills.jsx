import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillsData, skillFilters } from '../../data/skills';
import SkillCard from './SkillCard';
import {
  SkillsSection,
  SectionHeader,
  FilterContainer,
  SkillsGrid,
} from './Skills.styles';

const Skills = () => {
  const [filter, setFilter] = useState('all');
  const filtered = skillsData.filter(s => filter === 'all' || s.category === filter);

  return (
    <SkillsSection id="skills">
      <SectionHeader>
        <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
          Technical Skills
        </motion.h2>
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>
          My technical toolkit and expertise
        </motion.p>
      </SectionHeader>

      <FilterContainer>
        {skillFilters.map(btn => (
          <button
            key={btn.id}
            className={filter === btn.id ? 'active' : ''}
            onClick={() => setFilter(btn.id)}
          >
            {btn.label}
          </button>
        ))}
      </FilterContainer>

      <SkillsGrid>
        <AnimatePresence mode="popLayout">
          {filtered.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </AnimatePresence>
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;