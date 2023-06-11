import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { createUseStyles } from "react-jss";

export default function UserForm({ user, onSubmit, isUpdate = false }) {
    const [firstname, setFirstname] = useState(() => user?.firstname ?? "");
    const [lastname, setLastname] = useState(() => user?.lastname ?? "");
    const [jobTitle, setJobTitle] = useState(() => user?.jobTitle ?? "");
    const [email, setEmail] = useState(() => user?.email ?? "");
    const [password, setPassword] = useState(() => user?.password ?? "");

    const classes = useStyles();

    function handleSubmit() {
        onSubmit({
            firstname,
            lastname,
            jobTitle,
            email,
            password,
            role: "USER",
        });
    }

    return (
        <form className={classes.form}>
            <TextField
                id="firstname"
                label="Prénom"
                variant="outlined"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
                id="lastname"
                label="nom"
                variant="outlined"
                multiline
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                multiline
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="jobTitle"
                label="Métier"
                variant="outlined"
                multiline
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
            />
            {!isUpdate && (
                <TextField
                    id="password"
                    label="Mot de passe"
                    variant="outlined"
                    multiline
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            )}
            <div className={classes.btnWrapper}>
                <Button variant="contained" onClick={handleSubmit}>
                    Envoyer
                </Button>
            </div>
        </form>
    );
}

const useStyles = createUseStyles({
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        rowGap: "20px",
        width: "100%",
        height: "100%",
    },
    btnWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
});
