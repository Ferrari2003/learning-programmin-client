import React from "react";
import { Link } from "react-router-dom";

const LeftNav = ({ data }) => {
  console.log(data);
  return (
    <div>
      <nav>
        {data.map((course) => (
          <div>
            <Link to={`/courses/${course.id}`}>{course.displayName}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default LeftNav;
