import React from 'react';
import Card from './Card';
import logo from './Images/logo.jpg';
import feedback from './Images/feedback.jpg';
import attendance from './Images/attendance.png';

const Home = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" height={'50px'} />
      </div>
      <Card title="Attendance" image={attendance} path={'attendance'} />
      <br />
      <Card title="FeedBack" image={feedback} path={'feedback'} />
    </div>
  );
};

export default Home;
