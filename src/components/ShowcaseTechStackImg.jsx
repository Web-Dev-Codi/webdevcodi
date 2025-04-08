import React from "react";
import data from "../lib/data"; // Adjust the path as needed

const ShowcaseTechStackImg = () => {
  return (
    <div className="tech-stack">
      {data.map((image, index) => (
        <img
          key={index}
          src={image.src} // Assuming stackImages is an array of objects with a 'src' property
          alt={image.alt || `Tech stack ${index + 1}`} // Optional alt text
          width={25}
          height={25}
        />
      ))}
    </div>
  );
};

export default ShowcaseTechStackImg;
