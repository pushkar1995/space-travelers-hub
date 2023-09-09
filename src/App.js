import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Rockets from './pages/Rockets/Rockets';
import MyProfile from './pages/MyProfile/MyProfile';
import { fetchRockets } from './redux/rocketSlice';
import Missions from './pages/Missions/Missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  });
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/myprofile" element={<MyProfile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
