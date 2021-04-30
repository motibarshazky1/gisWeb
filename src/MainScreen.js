import React from 'react';
import './MainScreen.css';
import { Link } from 'react-scroll';

const MainScreen = () => {
	return (
		<div className="main-screen">
			<div className="title">
				<label>Welcome To Prison Mapping</label>
			</div>
			<div className="main-buttons">
				<button className="main-button">
					<a className="a" href="https://qgis.vercel.app/">
						View Map
					</a>
				</button>
				<button className="main-button">
					<Link to="photo-library" spy={true} smooth={true} duration={600}>
						Photo Library
					</Link>
				</button>
				<button className="main-button">
					<Link to="site-rate" spy={true} smooth={true} duration={600}>
						Rate The Site
					</Link>
				</button>
			</div>
		</div>
	);
};

export default MainScreen;
