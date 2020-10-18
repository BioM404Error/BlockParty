import React from "react";
// import "./milestone.css";

export default function MilestoneEmbedded(props) {
  return (
    <div>
      <div class="first-row">
        <h1>{props.name}</h1>
      </div>
      <div class="second-row">
        <iframe title="milestone" src={props.link}></iframe>
      </div>
    </div>
  );
}
