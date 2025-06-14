import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const users = [
  { username: "hunch", password: "lorenzana" },
  { username: "ciit", password: "student" },
];

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const match = users.find(user => user.username === username && user.password === password);
    if (match) {
      onLogin(true);
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="content">
      <h2>Login Page</h2>
      <h4>Username: </h4>
      <input
        placeholder="Type Your Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <h4>Password: </h4>
      <input
        type="password"
        placeholder="Type Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

function HomePage() {

  return (
    <div className="content">
      <h1>Home Page</h1>
      <p>This is a sample homepage of my page</p>
    </div>
  );

}

function AboutUs() {
  return (
    <div className="content">
      <h1>About Us</h1>
      <p>This website is a sample of a login forum with functioning navigation bars for the page, you may interact with "Home", About, Contact.</p>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="content">
      <h1>Contact Us</h1>
      <p>If you'd like to get in touch, please email us at <a href="mailto:sampledummyaccount@gmail.com">sampledummyaccount@gmail.com</a></p>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <h1> Sample Page </h1>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/about">About Us</Link> |
            <Link to="/contact">Contact Us</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}

    </Router>
  )
}

export default App;