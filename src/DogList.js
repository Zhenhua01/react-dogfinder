import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function DogList() {

  const [dogs, setDogs] = useState(null);

  if (!dogs) {
    axios.get('http://localhost:5001/dogs').then(res => setDogs(res.data));
    return <p>loading</p>
  }

  return (
    <>
      {dogs.map(({ name, src }) => (
      <div key={src}>
        <img src={`/${src}.jpg`} alt={`${name}`} height='200px'/>
        <Link to={`/dogs/${name}`}>Name: {name}</Link>
      </div>
    ))}
    </>
  );
}

export default DogList;