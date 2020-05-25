import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>
            It is a long established fact that a reader will be distracted.
          </h1>
          <h3>
            The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters
          </h3>
        </div>
        <div className="hero-img">
          <img src="../assets/hero-img.jpg" />
        </div>
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <div className="about-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries.
          </p>
        </div>
      </div>
      <div className="our-service">
        <div>
          <h2>Our Services</h2>
        </div>
        <div className="services-body">
          <div>
            <div>Icon 1</div>
            <h3>Farmer's Market</h3>
            <p>
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries.
            </p>
          </div>
          <div>
            <div>Icon 2</div>
            <h3>Access to Farm Machinery</h3>
            <p>
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries.
            </p>
          </div>
          <div>
            <div>Icon 3</div>
            <h3>Farmer's Blog</h3>
            <p>
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;