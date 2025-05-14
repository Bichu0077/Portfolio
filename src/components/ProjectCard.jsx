import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge } from 'react-bootstrap';

const ProjectCard = ({ title, description, image, link, source, tech = [] }) => {
  return (
    <motion.div
      className="col-md-6 col-lg-4 mb-4"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 260 }}
    >
      <Card className="h-100 shadow border-0 rounded-10">
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>

          <div className="my-2">
            {tech.map((t, idx) => (
              <Badge bg="secondary" key={idx} className="me-1">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-auto d-flex gap-2">
            {link && (
              <Button variant="primary" href={link} target="_blank">
                Live Demo
              </Button>
            )}
            {source && (
              <Button variant="outline-secondary" href={source} target="_blank">
                Source Code
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
