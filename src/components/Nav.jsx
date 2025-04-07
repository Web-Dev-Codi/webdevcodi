import { CV } from "./CV";
import React from "react";

export default function Nav() {
  return (
    <div className="nav_bg">
      <div>
        <div className="nav_background"></div>
        <nav className="wide_nav_container">
          <div className="nav_left">
            <a href="/" className="name">
              Web Developer
            </a>
          </div>
          <span className="nav_center">Site is under construction.</span>
          <div className="nav_right">
            <CV />
          </div>
        </nav>
      </div>
    </div>
  );
}
