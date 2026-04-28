import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SkillCardContainer,
  SkillIcon,
  SkillLevel,
  SoftSkillCard,
  SoftBadge,
} from './Skills.styles';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 6 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -6 },
};

const SkillCard = ({ skill }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  if (skill.category === 'soft') {
    return (
      <motion.div
        layout
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.25 }}
      >
        <SoftSkillCard>
          <SkillIcon>{skill.icon}</SkillIcon>
          <h3>{skill.name}</h3>
          <SoftBadge>{skill.proficiency}</SoftBadge>
        </SoftSkillCard>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.25 }}
    >
      <SkillCardContainer>
        <SkillIcon>{skill.icon}</SkillIcon>
        <h3>{skill.name}</h3>
        <SkillLevel>
          <motion.div
            className="progress"
            initial={{ width: 0 }}
            animate={{ width: inView ? `${skill.level}%` : '0%' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          />
        </SkillLevel>
        <p>{skill.proficiency} · {skill.level}%</p>
      </SkillCardContainer>
    </motion.div>
  );
};

export default SkillCard;
