import "./App.css";
import Navbar from "./components/Navbar.jsx";
import data from "./data.js";
import Place from "./components/Place.jsx";

function App() {
  const location = data.map((place) => {
    return (
      <div>
        <Place {...place} />
        <hr id="line" />
      </div>
    );
  });

  return (
    <div className="App">
      <Navbar />
      {location}
      <h5>Made by FRXGFA</h5>
    </div>
  );
}

export default App;
