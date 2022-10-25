import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import Hero from "./Hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="d-flex container justify-content-center gap my-5">
        <div className="box shadow rounded text-center  p-3">
          <div>
            <FaRegFolderOpen
              className="text-primary"
              size={"3em"}
            ></FaRegFolderOpen>
          </div>
          <div className="ms-3">
            <h5 className="text-primary">40+ UX Courses</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              vero.
            </p>
          </div>
        </div>
        <div className="box shadow rounded text-center  p-3">
          <div>
            <FaRegFolderOpen
              className="text-primary"
              size={"3em"}
            ></FaRegFolderOpen>
          </div>
          <div className="ms-3">
            <h5 className="text-primary">40+ UX Courses</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              vero.
            </p>
          </div>
        </div>
        <div className="box shadow rounded text-center  p-3">
          <div>
            <FaRegFolderOpen
              className="text-primary"
              size={"3em"}
            ></FaRegFolderOpen>
          </div>
          <div className="ms-3">
            <h5 className="text-primary">40+ UX Courses</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              vero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
