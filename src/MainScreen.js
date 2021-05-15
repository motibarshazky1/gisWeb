import React from 'react';
import './MainScreen.css';
import { Link } from 'react-scroll';

const MainScreen = () => {
	return (
		<div className="main-screen">
			<div className="title">
				<label>Welcome To Prison Mapping</label>
			</div>
			<img src="https://img.icons8.com/ios/452/handcuffs.png" className="img" alt=""></img>
			<div className="main-buttons">
				<button className="main-button">
					<a className="a" href="https://gis-map.vercel.app/">
						View Map
					</a>
				</button>
				<button className="main-button">
					<Link to="photo-library" spy={true} smooth={true} duration={600} className="link">
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
