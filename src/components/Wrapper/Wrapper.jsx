import React from "react";
import "./styles.css";

const Wrapper = ({ children }) => {
  return <div className={`contentWrapper`}>{children}</div>;
};

export default Wrapper;
