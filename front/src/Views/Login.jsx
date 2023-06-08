import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../Contexts/UserProvider";
import useApi from "../Hooks/useApi";
import logo from "../assets/logoGrey.svg";

export default function Login() {
    const { user, login } = useUser();
    const api = useApi();
    const [errorMessages, setErrorMessages] = useState({});

    const navigate = useNavigate();
    const classes = useStyles();

    const handleSubmit = async (event) => {
        event.preventDefault();
        var { email, pass } = document.forms[0];

        try {
            const token = await api.login(email.value, pass.value);
            const user = await api.getLoggedInUser(
                token.data.id,
                token.data.access_token,
            );
            login({ ...user.data, token: token.data.access_token });
            navigate("/me");
        } catch (error) {
            setErrorMessages({ name: "error", message: "Saisie incorrectes" });
        }
    };

    const renderErrorMessage = (message) => (
        <div
            className="error"
            style={{
                color: "red",
            }}
        >
            {message}
        </div>
    );

    const renderForm = (
        <div className={classes.form}>
            <img src={logo} alt="logo" className={classes.logo} />
            {renderErrorMessage(errorMessages.message)}
            <form onSubmit={handleSubmit}>
                <div className={classes.inputContainer}>
                    <label>Adresse mail </label>
                    <input
                        className={classes.emailInput}
                        type="text"
                        name="email"
                        required
                    />
                    <label>Mot de passe </label>
                    <input
                        className={classes.passwordInput}
                        type="password"
                        name="pass"
                        required
                    />
                </div>
                <div className={classes.buttonContainer}>
                    <input
                        className={classes.submitButton}
                        type="submit"
                        label="Envoyer"
                    />
                </div>
            </form>
        </div>
    );

    if (user != null) {
        return <Navigate to="/me" />;
    }

    return (
        <div className={classes.app}>
            <div className={classes.loginForm}>{renderForm}</div>
        </div>
    );
}

const useStyles = createUseStyles({
    app: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
        fontFamily:
            "[Cambria | Cochin | Georgia | Times | Times New Roman | serif]",
        backgroundColor: "var(--color-white)",
    },
    emailInput: {
        width: "250px",
        height: "35px",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        paddingLeft: "20px",
        paddingRight: "20px",
    },
    passwordInput: {
        width: "250px",
        height: "35px",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        paddingLeft: "20px",
        paddingRight: "20px",
    },
    submitButton: {
        marginTop: "10px",
        cursor: "pointer",
        fontSize: "15px",
        background: "var(--color-blue)",
        border: "1px solid var(--color-blue)",
        color: "#fff",
        padding: "10px 20px",

        "&:hover": {
            background: "var(--color-green)",
        },
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
    },
    loginForm: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: "5rem",
        boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    listContainer: {
        display: "flex",
    },
    error: {
        color: "red",
        fontSize: "15px",
    },
    title: {
        fontSize: "25px",
        marginBottom: "20px",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        margin: "10px",
    },
});
