import Dock from './Dock/Dock.jsx'; 
// Updated imports for more relevant icons
import { VscHome, VscFolderOpened, VscAccount, VscMail } from 'react-icons/vsc';

function Navbar() {
  // Helper function to handle redirection by updating the URL hash
  const handleRedirect = (id) => {
    // 1. First, set the URL hash immediately.
    window.location.hash = id;
    
    // 2. Wrap the scrolling logic in a brief delay. 
    // This gives the browser a moment to process the hash change 
    // and correctly find the target element in the DOM, which makes scrolling more reliable.
    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        // Scroll only if the element is found
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: If the element isn't immediately found, the hash change 
        // will still trigger the browser's default jump (or smooth scroll if CSS is set).
        console.warn(`Target element with ID '${id}' not found.`);
      }
    }, 10); // A 10ms delay is usually sufficient
  };

  const dockItems = [
    { 
      icon: <VscHome size={18} />, 
      label: 'Home', 
      onClick: () => handleRedirect('home') // Directs to #home
    },
    { 
      icon: <VscAccount size={18} />, // Kept the account/user icon for profile/about
      label: 'About', 
      onClick: () => handleRedirect('about') // Directs to #about
    },
    { 
      icon: <VscFolderOpened size={18} />, // Changed to a folder icon for projects
      label: 'Projects', 
      onClick: () => handleRedirect('projects') // Directs to #projects
    },
    { 
      icon: <VscMail size={18} />, // Changed to a mail icon for contact
      label: 'Contact', 
      onClick: () => handleRedirect('contact') // Directs to #contact
    },
  ];

  return (
    <nav className="flex justify-center items-center p-2 bg-transparent fixed w-full bottom-0 z-50">
      <Dock
        items={dockItems}
        baseItemSize={50}
        magnification={70}
      />
    </nav>
  );
}

export default Navbar;