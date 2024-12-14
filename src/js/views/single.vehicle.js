import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();


    useEffect(() => {
        actions.getInfoVehicle(theid)
    }, [])

    const vehicle = store.infoVehicle;

    return (
        <div className="text-center">
            <div className="card mb-3 ms-5 justify-content-center bg-dark bg-gradient" style={{ width: "1500px", height: "auto" }}>
                <div className="row g-0">
                    <div className="col-md-8 d-flex">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`} className="card-img-top ms-1" alt={vehicle?.properties?.name} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h3 className="card-title mb-5 text-center text-light fw-bold">{vehicle?.properties?.name}</h3>
                            <p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Cargo capacity: {vehicle?.properties?.cargo_capacity}</p>
                            <p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Model: {vehicle?.properties?.model}</p>
                            <p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Passengers: {vehicle?.properties?.passengers}</p>
                            <p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Consumables: {vehicle?.properties?.consumables}</p>
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

SingleVehicle.propTypes = {
    match: PropTypes.object
};

export default SingleVehicle