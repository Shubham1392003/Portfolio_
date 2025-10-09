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

// Hero.jsx
import ProfileCard from './ProfileCard/ProfileCard.jsx'
import Particles from './Particles/Particles.jsx'
import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react'
import DecryptedText from './DecryptedText/DecryptedText.jsx'

function Hero() {
  // 🔹 Common styles
  const encryptedStyle = "text-yellow-400 font-mono"
  const baseSpeed = 35

  // 🔹 Reusable decrypt block
  const DecryptBlock = ({ text, className = "", ...props }) => (
    <DecryptedText 
      text={text} 
      animateOn="view"
      sequential
      speed={baseSpeed}
      encryptedClassName={encryptedStyle}
      className={className}
      {...props}
    />
  )

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-10 bg-black flex items-center justify-center"
    >
      {/* 🔸 Particle Background */}
      <div className="fixed inset-0 z-50">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* 🔸 Main Content */}
      <div className="relative z-60 text-center p-4 max-w-7xl mx-auto sm:px-6 lg:px-8 py-20">
        
        {/* PROFILE CARD with tilt effect */}
        <div className="mb-5 flex justify-center">
          <ProfileCard
            name="Shubham Kendre"
            title="Junior Developer"
            handle="shubham.codes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/profile1.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          />
        </div>

        {/* 🔸 Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          <DecryptBlock text="Shubham Kendre" className="text-white" />
        </h1>

        {/* 🔸 Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-400 mb-6">
          <DecryptBlock 
            text="Junior Developer | AI/ML & Full-Stack Focus"
            className="text-gray-400"
          />
        </p>

        {/* 🔸 Summary */}
        <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
          <DecryptBlock 
            text="B.Tech student passionate about Machine Learning, AI, and Full-Stack Development. Building innovative solutions with Python, React.js, and Next.js."
            className="text-gray-500"
          />
        </p>

        {/* 🔸 Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Pune, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 9028924151</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>skendre380@gmail.com</span>
          </div>
        </div>

        {/* 🔸 Social Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Shubham1392003"
            target="_blank"
            rel="noopener noreferrer"
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
  )
}

export default Hero
