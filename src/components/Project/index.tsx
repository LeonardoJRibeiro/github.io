import React from 'react';
import { Card } from '@material-ui/core';

interface ProjectProps {
  title: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ title, description }) => {
  return (
    <Card>

    </Card>
  );
}

export default Project;