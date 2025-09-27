import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TargetCursor from './components/targetcursor/TargetCursor.jsx';
// import MagicBento from './components/MagicBento/MagicBento.jsx';


function App() {
  return (
    // Only Navbar and Hero are rendered inside the main container.
    <div>
      <TargetCursor 
       targetSelector=".dock-item, .cursor-target" 
        spinDuration={2}
        hideDefaultCursor={true}
      />

      <Hero />
      <Navbar />
      <About />

    </div>
  );
}

export default App;