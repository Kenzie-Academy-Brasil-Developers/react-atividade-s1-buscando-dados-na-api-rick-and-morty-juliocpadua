import "./App.css";
import { useEffect, useState } from "react";
import Chacarcters from "./components/Chacarcters";
import Logo from "./Logo/Logo.png";
import Run from "./Run/Run.png";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [currentPage]);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < 42) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <div>
      <header className="App-header">
        <img className="image" alt="logo" src={Logo} />
      </header>

      <div className="button__pages">
        <div className="button__image">
          <img className="image__run" alt="run" src={Run} />
          <button className="button__pages--back--next" onClick={previousPage}>
            Voltar
          </button>
        </div>
       <h2 className="page">{currentPage}</h2>
        <div className="button__image">
          <img id="inverter" className="image__run" alt="run" src={Run} />
          <button className="button__pages--back--next" onClick={nextPage}>
            Avançar
          </button>
        </div>
      </div>
      <div className="container">
        {characterList.length > 0 && (
          <Chacarcters characterList={characterList} />
        )}
      </div>
    </div>
  );
}

export default App;
