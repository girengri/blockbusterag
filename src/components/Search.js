import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";

export const Search = () => {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        // Los botones que se encuentran dentro de un formulario, el evento click
        // se maneja en el form con onSubmit
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <Link to="/">
                    <img
                        className={styles.title}
                        src="https://res.cloudinary.com/girengri/image/upload/v1639368108/Blockbuster_logo_t3n9um.svg"
                    />
                </Link>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Buscar pelicula"
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value;
                        // vamos a cambiar el navegador para realizar la busqueda con debounce+
                        setQuery({ search: value });
                    }}
                />
                <FaSearch className={styles.searchButton} size={20} />
            </div>
        </form>
    );
};
