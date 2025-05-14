// src/components/SkillCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Badge } from 'react-bootstrap';

const SkillCard = ({ icon, title, skills = [] }) => {
  return (
    <motion.div
      className="col-md-4 mb-4"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="text-center border-0 shadow-sm rounded-4 p-3">
        <div className="mb-3 fs-1">{icon}</div>
        <h5 className="fw-bold mb-3">{title}</h5>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {skills.map((skill, idx) => (
            <Badge bg="dark" key={idx}>
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
