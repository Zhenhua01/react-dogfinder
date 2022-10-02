import { useParams, useNavigate, Navigate } from 'react-router-dom';

function DogDetails({ dogs }) {
  const params = useParams();
  const dogName = params.name;
  const [dog] = dogs.filter(d => d.name === dogName);

  if (!dog) {
    return (<Navigate to="/dogs" />);
  };

  const { name, src, facts, age } = dog;

  return (
    <div>
      <img src={`/${src}.jpg`} alt={`${name}`} />
      <h1>{name}</h1>
      <p>Age:{age}</p>
      <ul>
        {facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>

  );

}

export default DogDetails;