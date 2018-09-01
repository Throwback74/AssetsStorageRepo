import React from "react";
import "./Layout.css";

export const Columns = ({ size, children }) => (
  <div className={"column " +{size}}>
  {children}
  </div>
);