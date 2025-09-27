// import PixelBlast from "./PixelBlast/PixelBlast.jsx";
// import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react'; 
// // import Lanyard from "./Lanyard/Lanyard.jsx";


// function Hero() {
//   return (
//     <section 
//       id="home" 
//       // The section itself still needs a dark base color (bg-gray-950)
//       className="relative min-h-screen pt-10 bg-gray-950 flex items-center justify-center"
//     >
      
//       {/* PIXEL BLAST BACKGROUND LAYER (Z-INDEX: 0) */}
//       <div className="absolute inset-0 z-0">
//         <PixelBlast 
//           color="#3730A3" 
//           liquid={true}
//           liquidStrength={0.1}
//           pixelSize={4}
//           patternScale={3}
//           rippleSpeed={0.5}
//           className="pixel-blast-container"
//         />
//       </div>

//       {/* CONTENT LAYER (Z-INDEX: 10) */}
//       <div className="text-center z-10 p-4 max-w-7xl mx-auto sm:px-6 lg:px-8 py-20">
        
//         {/* Profile Image */}
//         <div className="mb-8">
//           {/* Ensure image background is transparent or matches the body */}
//           <img
//             src="/profile.jpg"
//             alt="Shubham Kendre"
//             width={200}
//             height={200}
//             className="rounded-full mx-auto mb-6 shadow-xl border-4 border-gray-700/50"
//           />
//         </div>

//         {/* The rest of your content (text, buttons, etc.) */}
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Shubham Kendre</h1>
//         <p className="text-xl sm:text-2xl text-gray-400 mb-6">Junior Developer | AI/ML & Full-Stack Focus</p>

//         <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
//           B.Tech student passionate about Machine Learning, AI, and Full-Stack Development. Building innovative
//           solutions with Python, React.js, and Next.js.
//         </p>

//         {/* Contact Information (Icons) */}
//         <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
//           <div className="flex items-center gap-2">
//             <MapPin className="h-4 w-4" />
//             <span>Pune, India</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Phone className="h-4 w-4" />
//             <span>+91 9028924151</span>
//           </div>
//           <div className="flex flex-wrap items-center gap-2">
//             <Mail className="h-4 w-4" />
//             <span>skendre380@gmail.com</span>
//           </div>
//         </div>

//         {/* Social and Action Buttons */}
//         <div className="flex flex-wrap justify-center gap-4">
//           <a
//             href="https://github.com/Shubham1392003" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="hero-target px-6 py-3 flex items-center bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 transition"
//           >
//             <Github className="mr-2 h-5 w-5" />
//             GitHub
//           </a>
//           <a
//             href="https://linkedin.com/in/shubham-kendre-23b605285" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="hero-target px-6 py-3 flex items-center border border-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
//           >
//             <Linkedin className="mr-2 h-5 w-5" />
//             LinkedIn
//           </a>
//           <a
//             href="#contact"
//             className="hero-target px-6 py-3 flex items-center border border-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
//           >
//             <Mail className="mr-2 h-5 w-5" />
//             Contact Me
//           </a>
//         </div>

//       </div>
//     </section>
//   )
// }
// export default Hero

// Hero.jsx (Final Code)

import Particles from './Particles/Particles.jsx';
import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react'; 

function Hero() {
  return (
    <section 
      id="home" 
      // Changed to 'relative' to contain the absolute/fixed children cleanly
      className="relative min-h-screen pt-10 bg-gray-950 flex items-center justify-center"
    >
      
      {/* PARTICLES BACKGROUND LAYER (z-50) */}
      {/* ⬅️ FIX: Changed position to fixed to cover the entire viewport for mouse events */}
      <div 
        className="fixed inset-0 z-50" // High Z-index to ensure it sits above general page content
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true} // This will now receive mouse events
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* CONTENT LAYER (z-60) */}
      {/* ⬅️ FIX: Increased Z-index higher than the particles (z-50) AND the Navbar (z-50) */}
      <div className="text-center relative z-60 p-4 max-w-7xl mx-auto sm:px-6 lg:px-8 py-20">
        
        {/* Profile Image - Cursor Target */}
        <div className="mb-8">
          <img
            src="/profile.jpg"
            alt="Shubham Kendre"
            width={200}
            height={200}
            className="cursor-target relative z-[10000] rounded-full mx-auto mb-6 shadow-xl border-4 border-gray-700/50"
          />
        </div>

{/* The rest of your content (text, buttons, etc.) */}
       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Shubham Kendre</h1>
    <p className="text-xl sm:text-2xl text-gray-400 mb-6">Junior Developer | AI/ML & Full-Stack Focus</p>

         <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
           B.Tech student passionate about Machine Learning, AI, and Full-Stack Development. Building innovative
           solutions with Python, React.js, and Next.js.
         </p>

        {/* Contact Information (Icons) */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Pune, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 9028924151</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>skendre380@gmail.com</span>
          </div>
        </div>


        {/* Social and Action Buttons - Cursor Targets */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Shubham1392003" 
            target="_blank" 
            rel="noopener noreferrer"
            // Z-index on links is redundant if content wrapper is high enough, but kept for safety
            className="cursor-target relative z-[10000] px-6 py-3 flex items-center bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 transition"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shubham-kendre-23b605285" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-target relative z-[10000] px-6 py-3 flex items-center border border-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="cursor-target relative z-[10000] px-6 py-3 flex items-center border border-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;