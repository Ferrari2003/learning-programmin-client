import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      className="py-5 text-center"
      style={{
        backgroundImage: `url('https://i.ibb.co/kSZCZ12/error-bg.png')`,
        height: "80vh",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="bg-danger d-inline-block  px-3 text-light">Error 404</h1>
      </div>
      <div>
        <h4 className="bg-primary d-inline-block  px-3 text-light">
          Page Not Found
        </h4>
      </div>
      <div className="mt-3">
        <Link className="btn btn-outline-primary" to="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
