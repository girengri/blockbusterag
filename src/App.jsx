import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Details } from "./pages/Details";
import { Landing } from "./pages/Landing";
import Register from "./components/Register";

export function App() {
    return (
        <Router>
            <header>
                {/*En link relaciono los links, como un menu de navegacion y en los routes relaciono que se va a mostrar
                en esas paginas al momento de darle click */}
                {/* <Link to="/">Home</Link>
                <Link to="/movie">Movie</Link> */}
            </header>

            <main>
                <Routes>
                    {/* Cuando el endpoint sea movies/idmovies me va a pintar el componente Details, lo que venga en movies/ me lo captura */}
                    <Route path="/movies/:movieId" element={<Details />} />

                    {/* Cuando el endpoint sea / me va a pintar el componente Landing, que es el grid de peliculas */}
                    <Route path="/" element={<Landing />} />

                    {/* Creo pagina cuando el usuario escriba algo inexistente */}
                    <Route path="*" element={<Navigate replace to="/" />} />
                    <Route path="/registro" element={<Register />} />
                </Routes>
            </main>
        </Router>
    );
}
