import styles from "./Details.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { obtener } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMoviePoster";
import { Link } from "react-router-dom";

export function Details() {
    //Capturamos el id de la pelicula para poder ver mas detalles de esta, traemos el id capturado en el routes
    const { movieId } = useParams();
    //Vamos a mostrar la pelicula que tenga ese Id, Para hacer la llamada asyn utilizamos useEffect
    //Despues de obtener la data con useEffects siempre hay que ponerle un estado a la promesa con useState

    //Creo un estado para cuando se llama la data, mientras carga los datos aparezca un loader
    const [isLoading, setIsLoading] = useState(true);

    const [movie, setMovie] = useState(null); //El estado inicial de este es null

    //El useEffect me hace una llamada asincrona  para traer la info de las peliculas
    useEffect(() => {
        setIsLoading(true);
        obtener("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false); //Cuando la data se termine de cargar mi loader es false, ya no lo necesito
        });
    }, [movieId]); //El array en este caso no va vacio porque depende del movieId

    if (isLoading) {
        return <Spinner />; //Si loading es true me devuelve un componente con el icono cargar
    }

    const imageUrl = getMovieImg(movie.poster_path, 500);
    return (
        <div className={styles.detailsContainer}>
            <Link to="/">
                <img
                    className={styles.block}
                    src="https://res.cloudinary.com/girengri/image/upload/v1639368108/Blockbuster_logo_t3n9um.svg"
                />
            </Link>
            <img
                className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl}
                alt={movie.title}
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Titulo: </strong>
                    {movie.title}
                </p>
                <p>
                    {" "}
                    <strong>Genero: </strong>{" "}
                    {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Sinopsis: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}
