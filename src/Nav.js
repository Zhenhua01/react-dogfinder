import { NavLink } from "react-router-dom";

function Nav({ dogNames }) {
  return (
    <ul>
        {dogNames.map(name => (
          <li><NavLink to={`/dogs/:${name}`}/>{name}</li>
        ))}
    </ul>
  );
}

export default Nav;
