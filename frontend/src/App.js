import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs/AboutUs';
import LoginForm from './Components/Login/LoginForm';
import VolunteerForm from './Components/VolunteerForm';
import ThankYouPage from './Components/ThankYouPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Volunteer-Form" element={<VolunteerForm />} />
        <Route path="/Thank-You" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;
