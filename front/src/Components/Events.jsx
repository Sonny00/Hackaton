import {
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Dialog,
    IconButton,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import useApi from "../Hooks/useApi";
import EventForm from "./EventForm";

export default function Events() {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const api = useApi();
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getEvents();
                setEvents(response?.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    async function addEvent(event) {
        try {
            const { data: createdEvent } = await api.addEvent(event);
            setEvents((prev) => [...prev, createdEvent]);
            closeDialog();
        } catch (error) {
            console.error(error);
        }
    }

    async function updateEvent(id, data) {
        try {
            const { data: updatedEvent } = await api.updateEvent(id, data);
            setEvents((prev) => {
                const filteredEvents = prev.filter(
                    (e) => e.id !== updatedEvent.id,
                );
                return [...filteredEvents, updatedEvent];
            });
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteEvent(event) {
        try {
            await api.deleteEvent(event.id);
            setEvents((prev) => {
                const events = prev.filter((e) => e.id !== event.id);
                return events;
            });
        } catch (error) {
            console.error(error);
        }
    }

    function openDialog() {
        setOpen(true);
    }
    function closeDialog() {
        setOpen(false);
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>Les évènements</div>
            <Button
                className={classes.btnAdd}
                variant="contained"
                onClick={openDialog}
            >
                Ajouter
            </Button>
            <div className={classes.events}>
                {events.map((event) => (
                    <Event
                        key={event.id}
                        event={event}
                        onUpdate={updateEvent}
                        onDelete={deleteEvent}
                    />
                ))}
            </div>
            <Dialog open={open} fullScreen onClose={closeDialog}>
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={closeDialog}
                            aria-label="close"
                        >
                            <i className="bi bi-x"></i>
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            Ajouter un évènement
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className={classes.dialogContent}>
                    <EventForm onSubmit={addEvent} />
                </div>
            </Dialog>
        </div>
    );
}

const Event = ({ event, onUpdate, onDelete }) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);

    const startDateString = `${startDate.toLocaleString("fr", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })} à ${startDate.toLocaleString("fr", {
        hour: "numeric",
        minute: "2-digit",
    })}`;

    const endDateString = `${endDate.toLocaleString("fr", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })} à ${endDate.toLocaleString("fr", {
        hour: "numeric",
        minute: "2-digit",
    })}`;

    function openDialog() {
        setOpen(true);
    }
    function closeDialog() {
        setOpen(false);
    }

    async function updateEvent(formData) {
        await onUpdate(event.id, formData);
        closeDialog();
    }

    return (
        <>
            <Card sx={{ marginTop: "30px" }}>
                <CardHeader
                    title={event.title}
                    subheader={`${startDateString} - ${endDateString}`}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {event.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ marginBottom: "15px" }}>
                    <Button variant="contained" onClick={openDialog}>
                        Modifier
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => onDelete(event)}
                    >
                        Supprimer
                    </Button>
                </CardActions>
            </Card>

            <Dialog open={open} fullScreen onClose={closeDialog}>
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={closeDialog}
                            aria-label="close"
                        >
                            <i className="bi bi-x"></i>
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            Modifier un évènement
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className={classes.dialogContent}>
                    <EventForm event={event} onSubmit={updateEvent} />
                </div>
            </Dialog>
        </>
    );
};

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
    },
    header: {
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "bold",
        marginTop: "20px",
        marginBottom: "20px",
        paddingBottom: "20px",
        borderBottom: "0.5px solid black",
    },
    events: {
        display: "flex",
        flexDirection: "column",
        width: "75%",
        marginTop: "20px",
        rowGap: "20px",
    },
    btnAdd: {
        width: "100px",
    },
    dialogContent: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginTop: "20px",
        paddingInline: "5%",
    },
});
