import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

const CardPlanets = (props) => {

    const { actions, store } = useContext(Context);
    const isFavorite = store.favoritos.includes(props.name);

    return (


        <div className="card mx-1 bg-dark bg-gradient">
            <img src={"https://starwars-visualguide.com/assets/img/planets/" + props.uid + ".jpg"} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title text-center fw-bold text-light">{props.name}</h5>
                <p className="text-light">{props.description}</p>
                <div className="d-flex justify-content-evenly">
                    <Link to={"/singlePlanet/" + props.uid} className="btn btn-outline-danger">Learn more!</Link>
                    <button
                        className="btn btn-outline-warning"
                        onClick={() => actions.addfavoritos(props.name)}
                    >
                        <i className={`fa-regular fa-heart ${isFavorite ? "fa-solid" : ""}`}></i>
                    </button>
                </div>
            </div>
        </div>


    )
};

export default CardPlanets;