import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { API_KEY, BASE_URL } from "../../utils/BASE_API";
import Buscador from "../Buscador";
import Card from "../../commons/Card";
import axios from "axios";

export default function Series() {
  const search = useInput();
  const [series, setSeries] = useState([]);

  const fetchSeries = (search) => {
    const type = search ? "search" : "discover";
    axios
      .get(`${BASE_URL}/${type}/tv`, {
        params: { api_key: API_KEY, query: search },
      })
      .then((res) => {
        console.log("series", res);
        setSeries(res.data.results);
      });
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSeries(search.value);
  };

  return (
    <div style={{ color: "white" }}>
      <Buscador search={search} handleSubmit={handleSearch} />
      <div className="container">
        <div className="row">
          {series[0] ? (
            series.map((s) => <Card key={s.id} content={s} />)
          ) : (
            <h1>Cargando las series</h1>
          )}
        </div>
      </div>
    </div>
  );
}
