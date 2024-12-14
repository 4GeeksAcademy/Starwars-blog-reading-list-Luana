import React, { useEffect, useState, useContext } from "react";
import "../../styles/index.css";
import Card from "../component/card";
import CardPlanets from "../component/cardPlanets";
import CardVehicles from "../component/cardVehicles";
import { Context } from "../store/appContext";



export const Home = () => {

	const { store } = useContext(Context)

	return (
		<>
			<div className="container text-center mt-5">
				<h2 className="fw-bolder fs-2 text-light">Characters</h2>
				<div className="my-carrusel">
					{store.characters.map((item, index) => {
						return (
							<Card key={index} name={item.properties.name} Gender={item.properties.gender} uid={item.uid} description={item.description} />
						)
					})
					}
				</div>
			</div>
			<div className="container text-center mt-5">
				<h2 className="fw-bolder fs-2 text-light">Planets</h2>
				<div className="my-carrusel">
					{store.planets.map((item, index) => {
						return (
							<CardPlanets key={index} name={item.properties.name} uid={item.uid} description={item.description} />
						)
					})
					}
				</div>
			</div>
			<div className="container text-center mt-5">
				<h2 className="fw-bolder fs-2 text-light">Vehicles</h2>
				<div className="my-carrusel">
					{store.vehicles.map((item, index) => {
						return (
							<CardVehicles key={index} name={item.properties.name} uid={item.uid} description={item.description} />
						)
					})
					}
				</div>
			</div>
		</>
	)
};
