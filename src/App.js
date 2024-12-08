import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useState } from "react";

function App() {
  //Пользователь приложения
  const [user, setUser] = useState(
    {
      name: "Йованович Джордани  Уик", 
      role: "Обучающийся",
      email: "john@mail.com",
      registerDate: "09.12.2024",
      number: "+7(123)456-78-90",
      birthDate: "01.06.2000",
      
    }
  );

  return (
    <Router>
      <Navbar user={user}/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile user={user}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Добавьте другие маршруты по мере необходимости */}
        </Routes>
      </div>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
