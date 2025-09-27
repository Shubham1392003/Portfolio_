import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TargetCursor from './components/targetcursor/TargetCursor.jsx';


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

    </div>
  );
}

export default App;