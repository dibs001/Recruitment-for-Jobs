import React from 'react';
import { Box, Typography } from '@mui/material';
import './Reviews.css';

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <Typography variant="h5" gutterBottom>
        User Reviews
      </Typography>
      <Box className="box">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="avatar">
              <img src={review.avatar} alt={`User ${index + 1}`} />
            </div>
            <div className="content">
              <Typography variant="subtitle1" gutterBottom className='reviewComment'>
                {review.name}
              </Typography>
              <Typography variant="body2" className='reviewComment'>{review.comment}</Typography>
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Reviews;
