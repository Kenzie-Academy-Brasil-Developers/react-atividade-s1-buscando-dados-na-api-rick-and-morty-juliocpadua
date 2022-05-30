import "./App.css";
import { useEffect, useState } from "react";
import Chacarcters from "./components/Chacarcters";
import Logo from "./Logo/Logo.png";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(characterList);

  return (
    <div>
      <header className="App-header">
        <img className="image" alt="logo" src={Logo} />
      </header>
      <div className="container">
        {characterList.length > 0 && (
          <Chacarcters characterList={characterList} />
        )}
      </div>
    </div>
  );
}

export default App;
