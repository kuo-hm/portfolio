import "./App.css";
import ContactMe from "./Components/ContactMe";
import Introduction from "./Components/Introduction";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <ContactMe />
    </div>
  );
}

export default App;
