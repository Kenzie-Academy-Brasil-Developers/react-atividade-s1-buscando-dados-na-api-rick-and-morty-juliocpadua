import CharCard from "../CharCard";
import "./style.css";

function Chacarcters({ characterList }) {
  return (
    <div className="container__persons">
      {characterList.map((person) => (
        <CharCard person={person} key={person.id} />
      ))}
    </div>
  );
}

export default Chacarcters;
