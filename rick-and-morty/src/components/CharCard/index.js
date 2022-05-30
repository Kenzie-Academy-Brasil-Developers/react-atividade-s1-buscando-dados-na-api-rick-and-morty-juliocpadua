import "./style.css";

function CharCard({ person }) {
  return (
    <div className="container__person">
      <h2>{person.name}</h2>
      <img className="img__card" alt={person.name} src={person.image} />
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
