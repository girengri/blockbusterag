import React, { useState } from "react";
import styles from "./Register.module.css";
// import { useNavigate } from "react-router-dom";

const Register = ({ Registro, error }) => {
    // const navigate = useNavigate();

    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        username: "",
        password: "",
    });

    const { nombre, email, username, password } = datos;

    const handleSubmit = (e) => {
        e.preventDefault();
        Registro(datos);
    };

    const onChange = ({ target }) => {
        setDatos({
            ...datos,
            [target.name]: target.value,
        });
        console.log(datos);
    };

    return (
        <div className={styles.contenedor}>
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
                    name="correo"
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
                    name="contraseña"
                    placeholder="Password"
                    required
                    onChange={onChange}
                    value={password}
                />

                <button className={styles.boton}>Registrar</button>
            </form>
        </div>
    );
};

export default Register;
