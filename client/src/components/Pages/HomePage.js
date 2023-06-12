import React from 'react';
import homeImage from './img/img.jpg'; // Import the image file

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <img src={homeImage} alt="Home" style={{ width: '1000px', height: 'auto' }} />
    </div>
  );
};


// export default HomePage;
