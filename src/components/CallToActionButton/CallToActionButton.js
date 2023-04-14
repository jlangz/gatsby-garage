import React from "react";
import {Link} from "gatsby";

export const CallToActionButton = ({label, destination}) => {
  return (
    <Link to={destination} className="inline-block cursor-pointer bg-yellow-500 py-2 px-4 font-bold uppercase rounded-sm no-underline transition-colors text-slate-800 hover:bg-yellow-400">{label}</Link>
  )
}