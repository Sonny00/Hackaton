import { useEffect, useState } from "react";
import { RequireAdmin } from "../Components/RequireRole";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../Components/NavBar";
import useApi from "../Hooks/useApi";
import SearchBar from "../Components/SearchBar";

export default function Events() {
    // const [userData, setUserData] = useState(null);
    const [eventsData, setEventsData] = useState(null);

    const api = useApi();

    const fetchData = async () => {
        try {
            const events = await api.getEvents();
            setEventsData(events?.data);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    const EventsPage = (event) => {
        const { eventsData } = event;
        const startDate = new Date(eventsData?.startDate);
        const endDate = new Date(eventsData?.endDate);
        const startDateString = `${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()} à ${startDate.getHours()}:${startDate.getMinutes()}` 
        const endDateString = `${endDate.getDate()}/${endDate.getMonth()}/${endDate.getFullYear()} à ${endDate.getHours()}:${endDate.getMinutes()}` 
        return (
            <div className="container mt-5 mb-5 w-65">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-dark text-white">
                                <h3 className="display-5">
                                    {eventsData?.title}
                                </h3>
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
                                    <h6>{eventsData?.description}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="solid"></hr>
            </div>
        );
    };

    return (
    <div>
        <div
            style={{
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "bold",
                marginTop: "20px",
                marginBottom: "20px",
                paddingBottom: "20px",
                borderBottom: "0.5px solid black",
            }}
        >
            Les évènements
        </div>
        <button className="btn btn-primary">Ajouter</button>
        {eventsData && (
            <div>
                {eventsData?.map((event, index) => {
                    return (
                        <div key={index}>
                            <EventsPage eventsData={event} />
                        </div>
                    );
                })}
            </div>
        )}
    </div>
    );
}
