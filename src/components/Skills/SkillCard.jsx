import React from 'react';
import { motion } from 'framer-motion';
import { SkillCardContainer, SkillIcon, SkillLevel } from './Skills.styles';

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <SkillCardContainer>
        <SkillIcon>{skill.icon}</SkillIcon>
        <h3>{skill.name}</h3>
        <SkillLevel>
          <div className="progress" style={{ width: `${skill.level}%` }} />
        </SkillLevel>
        <p>{skill.proficiency}</p>
      </SkillCardContainer>
    </motion.div>
  );
};

export default SkillCard;