import React, { useContext } from "react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const CourseDetail = () => {
  const courseSingle = useLoaderData();
  const { setSelected } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEnroll = () => {
    console.log("enrolled clicked");
    setSelected(courseSingle);
    navigate("/checkout");
  };
  return (
    <div>
      {courseSingle.displayName}
      <button onClick={handleEnroll}> enroll this course</button>
    </div>
  );
};

export default CourseDetail;
