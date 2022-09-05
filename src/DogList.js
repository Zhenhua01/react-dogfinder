import axios from "axios";
import React, { useState } from "react";

function DogList() {
  
  const [dogs, setDogs] = useState(null);
  
  if (!dogs) {
    axios.get('http://localhost:5001/dogs').then(res => setDogs(res.data));
    return <p>loading</p>
  }
  
  return (
    <>
      {dogs.map(({ name, src }) => (
      <div>
        <img src={`/${src}.jpg`} alt={`${name}`} />
        <p>{name}</p>
      </div>
    ))}
    </>
  );
}

export default DogList;