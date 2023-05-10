import axios from "axios";
import noImg from "../../assets/Image Not Found Placeholder.jpg";
import { API_KEY, BASE_URL, URL_IMAGE } from "../../utils/BASE_API";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Details() {
  const { id } = useParams();
  const [content, setContent] = useState({ id: id });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${id}`, { params: { api_key: API_KEY } })
      .then((res) => setContent(res.data));
    axios
      .get(`${BASE_URL}/tv/${id}`, { params: { api_key: API_KEY } })
      .then((res) => setContent(res.data));
  }, [id]);

  return (
    <div className="row" style={{ color: "white", height: "700px" }}>
      <div className="col">
        <h1>{content.original_title || content.name}</h1>
        {content.poster_path ? (
          <img
            src={`${URL_IMAGE}${content.poster_path}`}
            alt="poster"
            height={600}
          />
        ) : (
          <img src={noImg} alt="poster" height={600} />
        )}
      </div>
      <div className="col">
        <h4 style={{ margin: "5%" }}>Puntaje: {content.vote_average}</h4>
        <h4 style={{ margin: "5%" }}>Descripcion:</h4>
        <p style={{ textAlign: "left", marginLeft: "15%", marginRight: "15%" }}>
          {content.overview}
        </p>
        <h4 style={{ margin: "5%" }}>Géneros</h4>
        {content?.genres?.map((g) => {
          return <p>{g.name}</p>;
        })}
      </div>
    </div>
  );
}
