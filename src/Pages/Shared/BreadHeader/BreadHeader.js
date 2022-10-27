import React from "react";

const BreadHeader = ({ title }) => {
  return (
    <section
      className=" include-bg pt-150 pb-150 breadcrumb__overlay text-light "
      style={{
        backgroundImage: `url("https://i.ibb.co/DQC36zr/7915212-3785210-1900x.jpg")`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content text-center p-relative z-index-1">
              <h2 className="breadcrumb__title">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadHeader;
