import { useSearchParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";

export function Landing() {
    //Llamamos a useSearchParams para que me obtenga la url cuando el usuario busque algo
    //Cada vez que yo hago una busqueda tengo que resetear mis useState para que se me muestren las peliculas buscadas
    const [query] = useSearchParams();
    const search = query.get("search"); //Nos traemos el parametro de nuestra ruta que en nuestro caso es search
    const debouncedSearch = useDebounce(search, 300); //Paso la busqueda y el tiempo que se va a demorar para buscarme la info
    return (
        <div>
            <Search />

            <Carrousel />
            {/* Con el key hacemos que cuando cambie la busqueda, el moviegrid se resetea */}
            <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
        </div>
    );
}
