import { React, useEffect, useState } from "react";
import Buscador from "../Buscador";
import axios from "axios";
import useInput from "../../hooks/useInput";
import { BASE_URL, API_KEY } from "../../utils/BASE_API";
import Card from "../../commons/Card";

export default function Movies() {
  const search = useInput();
  const [movies, setMovies] = useState([]);

  const fetchMovies = (search) => {
    const type = search ? "search" : "discover";

    axios
      // .get(`${BASE_URL}/${type}/movie?api_key=${API_KEY}?query=${search}`)
      .get(`${BASE_URL}/${type}/movie`, {
        params: { api_key: API_KEY, query: search },
      })
      .then((res) => {
        setMovies(res.data.results);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(search.value);
  };

  return (
    <div style={{ color: "white" }}>
      <Buscador search={search} handleSubmit={handleSearch} />
      <div className="container">
        <div className="row">
          {movies[0] ? (
            movies.map((movie) => <Card key={movie.id} content={movie} />)
          ) : (
            <h1>Cargando las peliculas</h1>
          )}
        </div>
      </div>
    </div>
  );
}
