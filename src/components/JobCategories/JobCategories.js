import React from 'react';
import { Box, Typography } from '@mui/material';
import './JobCategories.css';

const JobCategories = ({ categories }) => {
  return (
    <div className="job-categories">
      <Typography variant="h5" gutterBottom>
        Job Categories
      </Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <div className="icon">{category.icon}</div>
            <Typography variant="body1">{category.name}</Typography>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default JobCategories;
