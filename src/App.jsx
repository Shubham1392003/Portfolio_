import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";


function App() {
  return (
    // Only Navbar and Hero are rendered inside the main container.
    <div>
      <Hero />
      <Navbar />

    </div>
  );
}

export default App;