import React from "react";
import data from "../lib/data";

const ShowcaseTechStackImg = ({ techStack }) => {
  return (
    <>
      {techStack && techStack.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Tech stack ${index + 1}`}
          width={25}
          height={25}
        />
      ))}
    </>
  );
};

export default ShowcaseTechStackImg;
