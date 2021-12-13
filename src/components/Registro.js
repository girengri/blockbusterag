import React, { useState } from "react";
// import Register from "./Register";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
import styles from "./Registro.module.css";
const url = "https://moviesbmaster.herokuapp.com/movies";
const Registro = () => {
    const navigate = useNavigate();

    const [datos, setDatos] = useState({
        id:"",
        nombre: "",
        email: "",
        username: "",
        password: md5(""),
    });

    const [nombre, email, username, password] = datos;

    const [error, SetError] = useState("");

    const onChange = ({ target }) => {
        setDatos({
            ...datos,
            [target.name]: target.value,
        });
        console.log(datos);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const Registro = async () => {
        axios
            .post(url, datos)
            .then((Respuesta) => {
                Swal.fire("Usuario registrado con extio").then((response) => {
                    console.log(response);
                    if (response.isConfirmed === true) {
                        handleRedirect();
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleRedirect = () => {
        navigate("/login");
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.inputs}
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    required
                    onChange={onChange}
                    value={nombre}
                />

                <input
                    className={styles.inputs}
                    type="email"
                    name="email"
                    placeholder="Correo"
                    required
                    onChange={onChange}
                    value={email}
                />

                <input
                    className={styles.inputs}
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    onChange={onChange}
                    value={username}
                />

                <input
                    className={styles.inputs}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={onChange}
                    value={password}
                />

                <button className={styles.boton} onClick={Registro}>
                    Registrar
                </button>
            </form>
        </div>
    );
};

export default Registro;
