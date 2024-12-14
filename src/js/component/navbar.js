import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const { actions, store } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container">
				<Link to="/">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
						style={{ maxWidth: "100px" }}
					/>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favoritos.length}
						</a>

						<ul className="dropdown-menu">
							{store.favoritos.length === 0 ? (
								<li className="dropdown-item text-muted">Not favorites yet</li>
							) : (
								store.favoritos.map((item, id) => (
									<li key={id}>
										<a
											className="dropdown-item"
											onClick={() => actions.addfavoritos(item)}
										>
											{item} <i className="fa fa-trash float-end"></i>
										</a>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
