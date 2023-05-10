import { Link } from "react-router-dom";
import noImg from "../../assets/Image Not Found Placeholder.jpg";
import { URL_IMAGE } from "../../utils/BASE_API";

export default function Card({ content }) {
  return (
    // <Link to="/details" query={content.id}>
    <div className="col" style={{ backgroundColor: "#373737", height: "800" }}>
      <button>Agregar a favoritos</button>
      <Link to={`/details/${content.id}`} style={{ textDecoration: "none" }}>
        <h4 style={{ color: "#d3d3d3" }}>
          {content.original_title || content.name}
        </h4>
        {content.poster_path ? (
          <img
            src={`${URL_IMAGE}${content.poster_path}`}
            alt="poster"
            height={500}
          />
        ) : (
          <img src={noImg} alt="poster" height={500} />
        )}
      </Link>
    </div>
  );
}
