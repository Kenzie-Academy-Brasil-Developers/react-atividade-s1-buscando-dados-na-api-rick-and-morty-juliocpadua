import "./style.css";

function CharCard({ person }) {
  return (
    <div className="container__person">
      <h2 className="name">{person.name}</h2>
      <img className="img__card" alt={person.name} src={person.image} />

      <div className="element__container">
        <p className="element">
          <strong>Espécie:</strong> {person.species}
        </p>
        <p className="element">
          <strong>Origem:</strong> {person.origin.name}
        </p>
        <p className="element">
          <strong>Localidade:</strong> {person.location.name}
        </p>
        <p className="element">
          <strong>Sexo:</strong> {person.gender}
        </p>
      </div>

      <div>
        {person.status === "Alive" ? (
          <h3 className="status__vivo">O personagem está vivo</h3>
        ) : (
          <h3 className="status__morto">O personagem está Morto</h3>
        )}
      </div>
    </div>
  );
}

export default CharCard;
