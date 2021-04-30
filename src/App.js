import './App.css';
import { BrowserRouter } from 'react-router-dom';

import MainScreen from './MainScreen';
import PhotoLibrary from './PhotoLibrary';
import SiteRate from './SiteRate';
const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<MainScreen />
				<PhotoLibrary />
				<SiteRate />
			</BrowserRouter>
		</div>
	);
};

export default App;
