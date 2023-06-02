import React from "react";
import { Link } from "gatsby";

export const CallToActionButton = ({ label, destination, fullWidth }) => {
  return (
    <Link
      to={destination}
      className={`${fullWidth ? "block" : "inline-block"} text-center cursor-pointer rounded-sm bg-yellow-500 py-2 px-4 font-bold uppercase !text-slate-800 no-underline transition-colors hover:bg-yellow-400`}
    >
      {label}
    </Link>
  );
};
