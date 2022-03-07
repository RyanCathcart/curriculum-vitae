import "./styles/App.css";
import Splash from "./components/Splash/Splash";
import About from "./components/About";

export default function App() {
  return (
    <div className="App">
      <Splash />
      <About />
    </div>
  );
}
