import { useState, useEffect } from "react";

import Search from "../../components/rick-morty/Search/Search";
import Cards from "../../components/rick-morty/Cards/Cards";
import Pagination from "../../components/rick-morty/Pagination/Pagination";
import Filter from "../../components/rick-morty/Filter/Filter";

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setFetchedData(data));
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={setStatus}
            updateGender={setGender}
            updateSpecies={setSpecies}
            updatePageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/characters" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={setPageNumber}
      />
    </div>
  );
};

export default Characters;
