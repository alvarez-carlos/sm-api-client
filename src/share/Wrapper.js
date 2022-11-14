import React from "react";
import './Wrapper.css'

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrapper-container">{children}</div>
    </div>
  );
};

export default Wrapper;