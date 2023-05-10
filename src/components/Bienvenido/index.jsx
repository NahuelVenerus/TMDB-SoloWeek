import { React, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../utils/BASE_API";
import Card from "../../commons/Card";

export default function Bienvenido() {
  const [trends, setTrends] = useState([]);

  const fetchTrends = () => {
    axios
      .get(`${BASE_URL}/trending/all/week`, {
        params: { api_key: API_KEY, query: "trending" },
      })
      .then((res) => {
        setTrends(res.data.results);
      });
  };

  useEffect(() => {
    fetchTrends();
  }, []);

  return (
    <div style={{ color: "white" }}>
      <div className="container">
        <p></p>
        <h1 style={{ color: "white" }}>Bienvenido a The Movie Database!</h1>
        <p></p>
        <div className="row">
          {trends[0] ? (
            trends.map((t) => <Card key={t.id} content={t} />)
          ) : (
            <h1>Cargando las tendencias</h1>
          )}
        </div>
      </div>
    </div>
  );
}
