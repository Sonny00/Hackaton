import { Button, TextField } from "@mui/material";
import dayjs from "dayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { frFR } from "@mui/x-date-pickers/locales";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { createUseStyles } from "react-jss";

export default function EventForm({ event, onSubmit }) {
    const [title, setTitle] = useState(() => event?.title ?? "");
    const [description, setDescription] = useState(
        () => event?.description ?? "",
    );
    const [startDate, setStartDate] = useState(() => {
        if (event?.startDate == null) {
            return null;
        }
        return dayjs(event.startDate);
    });
    const [endDate, setEndDate] = useState(() => {
        if (event?.endDate == null) {
            return null;
        }
        return dayjs(event.endDate);
    });

    const classes = useStyles();

    function handleSubmit() {
        onSubmit({ title, description, startDate, endDate });
    }

    return (
        <form className={classes.form}>
            <TextField
                id="event-title"
                label="Titre"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                id="event-description"
                label="Description"
                variant="outlined"
                multiline
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={
                    frFR.components.MuiLocalizationProvider.defaultProps
                        .localeText
                }
            >
                <DateTimePicker
                    label="date de début"
                    value={startDate}
                    onChange={(newValue) =>
                        setStartDate(newValue.toISOString())
                    }
                />
            </LocalizationProvider>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={
                    frFR.components.MuiLocalizationProvider.defaultProps
                        .localeText
                }
            >
                <DateTimePicker
                    label="date de fin"
                    value={endDate}
                    onChange={(newValue) => setEndDate(newValue.toISOString())}
                />
            </LocalizationProvider>
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
