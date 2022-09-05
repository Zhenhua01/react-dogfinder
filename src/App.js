import './App.css';
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

function App() {
  const [dogs, setDogs] = useState(null);

  if (!dogs) {
    axios.get('http://localhost:5001/dogs').then(res => setDogs(res.data));
    return <p>loading</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs}/>
        <RoutesList dogs={dogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
