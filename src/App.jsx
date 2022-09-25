import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/Signup';
import LogIn from './components/Login';
import { UserContext } from './Contexts/UserContext';
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const goTo = useNavigate();
  let [user, setUser] = useState(null);
  let [token, setToken] = useState(null);
  let [refreshToken, setRefreshToken] = useState(null);
  let [role, setRole] = useState("patient");//"doctor","patient"
  // let [quizArr, setQuizArr] = useState([]);
  // let [room, setRoom] = useState(null);
  // let [studentProfile, setStudentProfile] = useState({});
  // let [reportArr, setReportArr] = useState([]);

  function logout() {
    localStorage.setItem("access_token", "");
    localStorage.setItem("refresh_token", "");
    localStorage.setItem("user_data", "");
    goTo("/");
  }

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, refreshToken, setRefreshToken, logout, role, setRole }}>
      <div className="App">
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/doctor/onboard' element={<Home />} />
          <Route path='/patient/onboard' element={<Home />} />

          <Route path='/patient/home' element={<Home />} />
          <Route path='/patient/home/:docID' element={<Home />} />
          <Route path='/patient/booknow' element={<Home />} />
          <Route path='/patient/appoints' element={<Home />} />

          <Route path='/doctor/appoints' element={<Home />} />
          <Route path='/doctor/appoints/:appointID' element={<Home />} />
        </Routes>
      </div >
    </UserContext.Provider>
  );
}

export default App;
