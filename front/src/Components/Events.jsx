import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { createUseStyles } from "react-jss";

export default function Events() {
    const [events, setEvents] = useState([]);
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

    return (
        <div className={classes.container}>
            <div className={classes.header}>Les évènements</div>
            <button className={`btn btn-primary ${classes.btnAdd}`}>
                Ajouter
            </button>
            <div>
                {events.map((event) => (
                    <Event key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
}

const Event = ({ event }) => {
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

    return (
        <div className="container mt-5 mb-5 w-65">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-dark text-white">
                            <h3 className="display-5">{event?.title}</h3>
                        </div>
                        <div className="p-3 bg-black text-white">
                            <h6>
                                {startDateString} {" - "}
                                {endDateString}
                            </h6>
                        </div>
                        <div className="d-flex flex-row text-white">
                            <div className="p-4 bg-primary text-left">
                                <h4>Description</h4>
                                <h6>{event?.description}</h6>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-row text-white">
                                <button className="btn btn-secondary">
                                    <h4>Modifier</h4>
                                </button>
                            </div>
                            <div className="d-flex flex-row text-white">
                                <button className="btn btn-secondary">
                                    <h4>Supprimer</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="solid"></hr>
        </div>
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
    btnAdd: {
        width: "100px",
    },
});
