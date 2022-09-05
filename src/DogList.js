import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {

  return (
    <>
      {dogs.map(({ name, src }) => (
      <div key={src}>
        <img src={`/${src}.jpg`} alt={`${name}`} height='200px'/>
        <br/>
        <Link to={`/dogs/${name}`}>Name: {name}</Link>
        <br/>
      </div>
    ))}
    </>
  );
}

export default DogList;