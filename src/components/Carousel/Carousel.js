import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const CarouselComponent = () => {
  const images = ['https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?size=626&ext=jpg','https://img.freepik.com/free-vector/woman-working-telecommuting-inside-house_23-2148503808.jpg?size=626&ext=jpg','https://img.freepik.com/free-vector/job-vacancy-background-with-worker_23-2147872848.jpg?size=626&ext=jpg', 'https://img.freepik.com/free-vector/broadcasting-live-event-concept_23-2148519567.jpg?size=626&ext=jpg'];

  return (
    <div className="carousel">
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
