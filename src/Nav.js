import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <ul className="Nav">
      <li><NavLink end to={`/dogs`}>Home</NavLink></li>

      {dogs.map(({ name }) => (
        <li key={name}><NavLink end to={`/dogs/${name}`}>{name}</NavLink></li>
      ))}
    </ul>
  );
}

export default Nav;
