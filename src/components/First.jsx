import React from "react";
import { useState } from "react";
import "../stylesheets/First.css";
import Student from "./Student";
function First(props) {
  const students = [
    {
      id: 1,
      name: "A.Bashir",
      number: "115131",
    },

    {
      id: 2,
      name: "A.Rakib",
      number: "115131",
    },
    {
      id: 3,
      name: "Akash",
      number: "115131",
    },
  ];
  return (
    <div className="full">
      <ul style={{ listStyle: "none" }}></ul>
      <li>
        <Student />
      </li>
    </div>
  );
}

export default First;
