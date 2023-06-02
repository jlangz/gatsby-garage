import React from "react";
import { Link } from "gatsby";

export const CallToActionButton = ({
  label,
  destination,
  fullWidth,
  isActive,
}) => {
  return (
    <Link
      to={destination}
      className={`
      ${fullWidth ? "block" : "inline-block"}
      ${isActive ? "cursor-default bg-yellow-400 scale-110" : ""} 
      btn`}
    >
      {label}
    </Link>
  );
};
