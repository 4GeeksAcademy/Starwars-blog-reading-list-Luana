import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();


    useEffect(() => {
        actions.getInfoPlanets(theid)
    }, [])

    const planets = store.infoPlanet;

    return (
        <div className="text-center">
            <div className="card mb-3 ms-5 justify-content-center bg-dark bg-gradient" style={{ width: "auto" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`} className="card-img-top" alt={planets?.properties?.name} style={{ "objectFit": "cover", "height": "100%" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title mb-5 text-center text-light fw-bold">{planets?.properties?.name}</h3>
                            <p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Climate: {planets?.properties?.climate}</p>
                            <p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Created: {planets?.properties?.created}</p>
                            <p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Diameter: {planets?.properties?.diameter}</p>
                            <p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Gravity: {planets?.properties?.gravity}</p>
                            <div className="d-flex justify-content-evenly">
                                <Link to="/">
                                    <span className="btn btn-outline-danger btn-lg" href="#" role="button">
                                        Back home
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SinglePlanet.propTypes = {
    match: PropTypes.object
};

export default SinglePlanet