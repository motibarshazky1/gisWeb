import './App.css';
import { BrowserRouter } from 'react-router-dom';

import MainScreen from './Screens/MainScreen/MainScreen';
import PhotoLibrary from './Screens/PhotoLibrary/PhotoLibrary';
import SiteRate from './Screens/SiteRate/SiteRate';
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
