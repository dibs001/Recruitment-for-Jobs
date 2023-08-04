import React from 'react';
// import JobListing from './components/JobListing/JobListing';
// import JobCategories from './components/JobCategories/JobCategories';
// import Carousel from './components/Carousel/Carousel';
// import './App.css';
// import Reviews from './components/Reviews/Reviews';
// import UserProfile from './components/UserProfile/UserProfile';
import AboutSection from './components/AboutSection/AboutSection';
import ChooseUsSection from './components/ChooseUsSection/ChooseUsSection';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import Companies from './components/Companies/Companies';

// const jobCategoriesData = [
//   {
//     name: 'Technology',
//     icon: <i className="fas fa-laptop"></i>,
//   },
//   {
//     name: 'Healthcare',
//     icon: <i className="fas fa-hospital"></i>,
//   },
//   {
//     name: 'Finance',
//     icon: <i className="fas fa-money-bill"></i>,
//   }
// ];

// const jobData = [
//   {
//     title: 'Web Developer',
//     description: 'Lorem ipsum dolor sit amet...'
//   },
//   {
//     id: 1,
//     title: 'Frontend Developer',
//     company: 'Tech Co',
//     location: 'New York, NY',
//     description: 'We are seeking a skilled Frontend Developer...',
//   },{
//     id: 1,
//     title: 'Frontend Developer',
//     company: 'Tech Co',
//     location: 'New York, NY',
//     description: 'We are seeking a skilled Frontend Developer...',
//   },{
//     id: 1,
//     title: 'Frontend Developer',
//     company: 'Tech Co',
//     location: 'New York, NY',
//     description: 'We are seeking a skilled Frontend Developer...',
//   },{
//     id: 1,
//     title: 'Frontend Developer',
//     company: 'Tech Co',
//     location: 'New York, NY',
//     description: 'We are seeking a skilled Frontend Developer...'
//   }
// ];
// const reviewData = [
//   {
//     name: 'John Doe',
//     avatar: 'https://img.freepik.com/free-photo/man-sits-desk-front-computer-screen-that-says-business-it_1340-37817.jpg?size=626&ext=jpg',
//     comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sint in, reiciendis magni, debitis quaerat sapiente inventore, dolorum labore incidunt ipsa tempora magnam suscipit. Repellendus provident vero officiis laudantium assumenda!'
//   },
//   {
//     name: 'Jane Smith',
//     avatar: 'https://img.freepik.com/premium-photo/woman-sits-desk-front-laptop_826801-599.jpg?size=626&ext=jpg',
//     comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sint in, reiciendis magni, debitis quaerat sapiente inventore, dolorum labore incidunt ipsa tempora magnam suscipit. Repellendus provident vero officiis laudantium assumenda!',
//   }
// ];

const App = () => {
  // const handleSearch = (searchText) => {
  //   // search logic 
  //   console.log('Search for:', searchText);
  // };

  return (
    <>
    <div className="app">
      <NavigationBar/>
      <WelcomeSection/>
      <AboutSection />
      {/* <Carousel /> */}
      <ChooseUsSection/>
      {/* <JobCategories categories={jobCategoriesData} />      
      <JobListing jobs={jobData} />  */}
      {/* <UserProfile /> */}
      <Companies/>
      <ServicesSection/>
      <ReviewsSection/>
      {/* <Reviews reviews={reviewData} /> */}
      <Footer/>
    </div>
    </>
  );
};

export default App;
