import Button from "react-bootstrap/Button";
import React from "react";
import heroBg from "../../Assets/Home/hero-bg.svg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
        height: "90vh",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
      }}
      className="hero d-flex align-items-center"
    >
      <div className="container w-50">
        <div className="w-50 ">
          <h1>Start Now Your</h1>
          <h1>Online Education</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            accusamus, provident quas fuga repudiandae, ipsa nostrum eum
            eligendi voluptas, aliquam voluptates qui perferendis laborum
            laboriosam ut repellat necessitatibus accusantium est dolores
          </p>
          <Button variant="primary">Free Trial</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
