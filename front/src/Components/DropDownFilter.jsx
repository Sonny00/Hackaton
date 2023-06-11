import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";

export default function DropDownFilter(props) {
    const { onValidate = () => {}, selectedFilter = () => {} } = props;

    const [skills, setSkills] = useState();

    const api = useApi();

    const fetchSkills = async () => {
        try {
            const skills = await api.getSkills();
            setSkills(skills?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    useEffect(() => {
        document
            .querySelector(".changeSelected")
            .addEventListener("click", (value) => {
                const select = document.querySelector(".options");
                selectedFilter(select.value);
            });
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <label
                htmlFor="cars"
                style={{
                    marginRight: "10px",
                }}
            >
                Choisir la spécialité{" "}
            </label>
            <select
                style={{
                    width: "200px",
                    padding: "12px 20px",
                    margin: "8px 0",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                }}
                class="options"
                name="cars"
                id="cars"
            >
                <option value="All">Tous</option>
                {skills &&
                    skills?.map((skill) => {
                        return <option value={skill.name}>{skill.name}</option>;
                    })}
            </select>
            <button
                style={{
                    width: "200px",
                    color: "green",
                    padding: "10px 15px",
                    margin: "8px 0",
                    marginLeft: "10px",
                    display: "inline-block",
                    border: "1px solid green",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                }}
                onClick={onValidate}
                class="changeSelected"
            >
                Appliquer
            </button>
        </div>
    );
}
