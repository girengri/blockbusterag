import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Carrusel.module.css";
import carrusel from "../carrusel.json";

const Carrousel = () => {
    return (
        <div className={styles.carrusel}>
            <Carousel>
                {carrusel.map((peli) => {
                    return (
                        <Carousel.Item key={peli.id}>
                            <iframe
                                width="560"
                                height="315"
                                src={peli.url}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className="d-block w-100"
                            ></iframe>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Carrousel;
