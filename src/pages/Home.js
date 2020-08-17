import React from "react";
import { Link } from "react-router-dom";
import { CTA } from "../styled/CTA";

export default function Home() {
  return (
    <div>
      <h1>Ready to type?</h1>
      <CTA to="/game"> Click or type 's' to start playing!</CTA>
    </div>
  );
}
