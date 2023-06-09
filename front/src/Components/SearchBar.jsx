import { useEffect, useState } from "react";

export default function SearchBar(props) {
    const { onValidate = () => {}, userInput = () => {} } = props;
    const [searchInput, setSearchInput] = useState("");

    return (
        <div>
            <form
                className="form-inline my-2 my-lg-0"
                style={{
                    display: "flex",
                    width: "300px",
                }}
            >
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Rechercher"
                    aria-label="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                ></input>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        onValidate(searchInput);
                    }}
                    style={{
                        marginLeft: "20px",
                    }}
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Valider
                </button>
            </form>
        </div>
    );
}
