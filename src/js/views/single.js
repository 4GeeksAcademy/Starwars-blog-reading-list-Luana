import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();



	useEffect(() => {
		actions.getInfoCharacters(theid)
	}, [])
	const characters = store.infoCharacters;

	return (
		<div className="text-center">
			<div className="card mb-3 ms-5 justify-content-center bg-dark bg-gradient" style={{ maxWidth: "1000px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`} className="card-img-top" alt={characters?.properties?.name} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h3 className="card-title mb-5 text-center text-light fw-bold">{characters?.properties?.name}</h3>
							<p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Gender: {characters?.properties?.gender}</p>
							<p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Eye Color: {characters?.properties?.eye_color}</p>
							<p className="card-text  shadow p-4 mb-4 rounded text-info text-opacity-80 bg-dark bg-gradient">Hair Color: {characters?.properties?.hair_color}</p>
							<p className="card-text  shadow p-4 mb-4  rounded text-info text-opacity-80 bg-dark bg-gradient">Height: {characters?.properties?.height}</p>
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

Single.propTypes = {
	match: PropTypes.object
};

export default Single