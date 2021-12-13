import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { obtener } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

//Recorremos la info de las peliculas con un map y le estamos mostrando el titulo y me lo guarda en un li
//Siempre hay que ponerle un id al li, para poder renderizarlo despues adecuadamente
export function MoviesGrid({ search }) {
    //Aca traemos la posicion y la funcion para modificar esa posicion, de el estado al comienzo
    const [movies, setMovies] = useState([]);

    //Estado para cargar el spinner
    const [isLoading, setIsLoading] = useState(true);

    //Estado para el scroll infino, el estado inicial va ser en la pagina 1
    const [page, setPage] = useState(1);

    //Estado para saber si una pagina tiene mas peliculas
    const [hasMore, setHasMore] = useState(true);

    //Este useEffect es un hooks y cuando se cargue la funcion, este seria el efecto secundario
    //Aca obtenemos la data de la api de acuerdo a la documentacion de esta
    useEffect(() => {
        setIsLoading(true);
        //Si tenemos search vamos a buscar con la url true de lo contrario que se carguen las peliculas principales
        //El + page es para el scroll infinito
        const searchUrl = search
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;
        obtener(searchUrl).then((data) => {
            //Aca le concatenamos la pagina anterior con la pagina nueva para que se vayan mostrando
            setMovies((prevMovies) => prevMovies.concat(data.results));
            //Preguntamos si tiene mas peliculas o no la pagina, si no tiene mas deja de cargar la pagina
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
        });
        //Agrego un arreglo vacio para que no se ejecute el componente infinitamente, con esto le decimos que se ejecute una vez
        //Agregamos al arreglo search para que se ejecute el useEffect cada vez que le doy en buscar o se cargue la pagina
    }, [search, page]);

    if (!isLoading && movies.length === 0) {
        return <Empty />;
    }

    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            // Cuando llegue al final de la pagina 1 cargueme la siguiente
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
        >
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />;
                })}
            </ul>
        </InfiniteScroll>
    );
}
