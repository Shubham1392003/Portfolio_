import PixelBlast from "./PixelBlast/PixelBlast.jsx"; // Ensure correct path
// import { ... } // Your other imports

function Hero() {
  return (
    // 1. Make the section a reference point for absolute positioning (relative)
    // 2. Ensure it takes full viewport height (min-h-screen)
    // 3. Add padding-top (pt-20) to offset the fixed navbar
    <section className="relative min-h-screen pt-20 bg-gray-950 flex items-center justify-center">
      
      <div className="absolute inset-0 z-0">
        <PixelBlast 
          // Use a dark color for a cool effect, or white if preferred
          color="#3730A3" // Tailwind indigo-700 equivalent
          liquid={true}
          liquidStrength={0.1}
          pixelSize={4}
          patternScale={3}
          rippleSpeed={0.5}
          // The component's internal className is used here for the styling defined in step 1
          className="pixel-blast-container"
        />
      </div>
      <div className="text-center z-10 p-4">
        <h2 className="text-5xl font-bold mb-4 text-white">Hi, I'm Shubham 👋</h2>
        <p className="text-lg text-gray-400 mb-6">
          A passionate developer building modern web apps.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}
export default Hero