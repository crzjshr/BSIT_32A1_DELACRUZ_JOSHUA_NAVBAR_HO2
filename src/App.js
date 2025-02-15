import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render the Navbar here */}
      <h1>Hello Goodbye</h1>
      <h2>Giving every child a chance to play!</h2>
      <Footer /> {/* Render the Footer here */}
    </div>
  );
}
