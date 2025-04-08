import React from "react";
import data from "../lib/data";
// import ShowcaseTechStackImg from "./ShowcaseTechStackImg";
import { ImArrowRight } from "react-icons/im";

const showcaseStyle = {
  maxInlineSize: "100%",
  maxHeight: "100%",
  blockSize: "auto",
  objectFit: "fill",
  transition: "transform 3s ease",
  backfaceVisibility: "hidden",
  posistion: "relative",
  Zindex: "-1",
};

export default function ShowcaseCard() {
  return (
    <React.Fragment>
      {Array.from(data).map((item) => (
        <div className="showcase-card" id="showcase-card" key={item.id}>
          <img
            alt="Inquizable"
            loading="lazy"
            src={item.imgUrl}
            decoding="sync"
            className="showcase-card__image"
            style={showcaseStyle}
          />
          <div className="showcase-card__text-wrapper" id="text-wrapper">
            <h2 className="showcase-card__title">{item.title}</h2>
            <div className="showcase-card__tech_stack">
              {data.map((image, index) => (
                <img
                  key={index}
                  src={image} // Assuming stackImages is an array of objects with a 'src' property
                  alt={image.alt || `Tech stack ${index + 1}`} // Optional alt text
                  width={25}
                  height={25}
                />
              ))}
            </div>
            <div
              className="showcase-card__details-wrapper"
              id="details-wrapper"
            >
              <p className="showcase-card__excerpt">{item.description}</p>
              <a href={item.href} className="showcase-card__visit">
                <p>Visit Site</p>
                <ImArrowRight />
              </a>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
