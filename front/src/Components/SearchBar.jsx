import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

export default function SearchBar() {
    const [selected, setSelected] = useState("all");
    useEffect(() => {
        document
            .querySelector(".changeSelected")
            .addEventListener("click", (value) => {
                const select = document.querySelector(".options");
                console.log(select.value);
                setSelected(select);
            });
    }, []);

    return (
        <div>
            <label htmlFor="cars">Choisir la spécialité :</label>
            <select
                style={{
                    width: "20%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                }}
                class="options"
                name="cars"
                id="cars"
            >
                <option value="volvo">Tous</option>
                <option value="volvo">ReactJs</option>
                <option value="saab">NodeJs</option>
                <option value="opel">NextJs</option>
                <option value="audi">NestJs</option>
            </select>
            <button
                style={{
                    width: "20%",
                    color: "grey",
                    padding: "10px 15px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                }}
                class="changeSelected"
            >
                Appliquer
            </button>
        </div>
    );
}
