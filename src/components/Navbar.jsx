import Dock from './Dock/Dock.jsx'; 
// Updated imports for more relevant icons
import { VscHome, VscFolderOpened, VscAccount, VscMail } from 'react-icons/vsc';

function Navbar() {
  // Helper function to handle redirection by updating the URL hash
  const handleRedirect = (id) => {
    // This will navigate the browser to the section with the matching ID (e.g., #projects)
    window.location.hash = id;
    
    // Optional: Add smooth scrolling for a better user experience
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems = [
    { 
      icon: <VscHome size={18} />, 
      label: 'Home', 
      onClick: () => handleRedirect('home') // Directs to #home
    },
    { 
      icon: <VscFolderOpened size={18} />, // Changed to a folder icon for projects
      label: 'Projects', 
      onClick: () => handleRedirect('projects') // Directs to #projects
    },
    { 
      icon: <VscAccount size={18} />, // Kept the account/user icon for profile/about
      label: 'About', 
      onClick: () => handleRedirect('about') // Directs to #about
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