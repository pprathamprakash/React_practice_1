//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";

import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1> Favourite Quotes! </h1>
    <ul>
      <li>
        {" "}
        <strong>There is no paradise for you to escape to! </strong>
      </li>
      <li>
        {" "}
        <strong> I would rather fight for my life than live it! </strong>{" "}
      </li>
      <li>
        {" "}
        <strong>
          {" "}
          All my life, the people and the moments that have defined me are all
          illuminated by sparks!{" "}
        </strong>{" "}
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
