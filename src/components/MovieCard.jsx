//Aca como props pasamos y destructuramos de una vez el movie que nos da el MovieGrid
//en image url pasamos la linea de codigo constante y le concatenamos la otra parte de la url
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMoviePoster";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300);

  console.log(movie)

  return (
    <li className={styles.movieCard}>
      {/* Cuando le doy click a una pelicula este me crea un enlace que lo maneja reac-router-dom
      Cuando le dan click va entrar y me pinta la info de la pelicula, cuando se seleccione una pelicula
      este me va a pasar el identificador de la pelicula  */}
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
      </Link>
      <div className={styles.votacion}>{movie.vote_average}</div>
    </li>
  );
}
