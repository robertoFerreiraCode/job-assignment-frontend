import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from './containers/Home'
import Login from './containers/Login';
import Jobs from './containers/Jobs';
import Profile from './containers/Profile';
import JobPage from './containers/JobPage';
import Temps from './containers/Temps';
import TempPage from './containers/TempPage';

// const UserContext = React.createContext(0);

const App = () => {
	const [id, setId] = useState<number>(0);
	return (
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/jobs">Jobs</Link>
						</li>
						<li>
							<Link to="/temps">Temps</Link>
						</li>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/login" element={<Login setId={setId}/>}/>
					<Route path="/jobs" element={<Jobs/>}/>
					<Route path="/jobs/:jobId" element={<JobPage/>}/>
					<Route path="/temps" element={<Temps/>}/>
					<Route path="/temps/:tempId" element={<TempPage/>}/>
					<Route path="/profile" element={<Profile />}/>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</Router>
	)
	
}

export default App
