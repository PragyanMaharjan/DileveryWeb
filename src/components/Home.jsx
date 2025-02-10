import React from 'react';
import './Home.css'; // Import the CSS file for animations

function Home() {
  return (
    <div className="home-container">
      <div className="content-box">
        <h1 className="text-5xl font-bold text-black mb-4">Welcome to Eatery Express</h1>
        <p className="text-lg text-black mb-4">
          Your go-to destination for seamless online delivery! We are dedicated to bringing your favorite products straight to your doorstep with convenience and speed. Whether it's delicious meals, groceries, or essential goods, we ensure a hassle-free shopping experience with just a few clicks.
        </p>
        <p className="text-lg text-black">
          Our mission is to provide top-quality service, ensuring timely deliveries and customer satisfaction. With a user-friendly platform and a reliable network, we make online ordering simple and efficient. Thank you for choosing us—your convenience is our priority!
        </p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
}

export default Home;