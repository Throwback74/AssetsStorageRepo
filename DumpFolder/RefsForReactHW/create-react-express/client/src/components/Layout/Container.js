import React from "react";
import "./Layout.css";

export const Container = ({children, props}) => 
<div className={"container is-fluid animated" + {props}}>
{children}
</div>;
// className={"column " +{size}}