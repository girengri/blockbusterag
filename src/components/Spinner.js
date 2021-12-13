import React from "react";
import { ImSpinner7 } from "react-icons/im";
import styles from "./Spinner.module.css";

export const Spinner = () => {
    /*Para elegir un icono para el spinner vamos a instalar la siguiente libreria
                  https://www.npmjs.com/package/react-icons
                  npm i react-icons
                  
                  */
    return (
        <div className={styles.spinner}>
            <ImSpinner7 className={styles.spinning} size={60} />
        </div>
    );
};
