// About.jsx
import { GraduationCap, Target, Code } from "lucide-react";
import DecryptedText from './DecryptedText/DecryptedText.jsx'; 


export default function About() {
  // Adjusted colors for a dark background theme
  const encryptedStyle = "text-yellow-400 font-mono"; 
  const revealedStyle = "text-white font-semibold";
  const baseSpeed = 30; // Slower speed for all animations
  
  const DecryptBlock = ({ text, className = "", ...props }) => (
    <DecryptedText 
      text={text} 
      animateOn="view"
      sequential={true}
      speed={baseSpeed}
      encryptedClassName={encryptedStyle}
      className={className}
      {...props}
    />
  );

  return (
    <section id="about" className="min-h-screen flex items-center bg-black py-20"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4"> 
            <DecryptBlock 
              text="About Me" 
              parentClassName="inline-block"
            />
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            <DecryptBlock
              text="I am a highly motivated and goal-oriented B.Tech (AI & ML) 3rd-year student with a strong foundation in software development, machine learning, and full-stack web technologies." 
              className="text-gray-400"
              parentClassName="inline"
            />
          </p>
        </div>

        {/* 3 Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Education Card */}
          <div className="cursor-target shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="pt-6"> 
              <GraduationCap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                <DecryptBlock text="Education" className="text-white" />
              </h3>
              <p className="text-gray-400">
                <DecryptBlock text="B.Tech in Artificial Intelligence & Machine Learning" className="text-gray-400" />
              </p>
              <p className="text-sm text-gray-500 mt-1">
                <DecryptBlock text="G.H. Raisoni College of Engineering and Management, Pune" className="text-gray-500 text-sm" />
              </p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="cursor-target shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="pt-6"> 
              <Code className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                <DecryptBlock text="Experience" className="text-white" />
              </h3>
              <p className="text-gray-400">
                <DecryptBlock 
                  text="Hands-on experience in building real-world projects using Python, ML, React.js, and Next.js." 
                  className="text-gray-400"
                />
              </p>
            </div>
          </div>

          {/* Goal Card */}
          <div className="cursor-target shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="pt-6"> 
              <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                <DecryptBlock text="Goal" className="text-white" />
              </h3>
              <p className="text-gray-400">
                <DecryptBlock 
                  text="To evolve into a skilled AI/ML Developer, driving innovation and creating impactful solutions." 
                  className="text-gray-400"
                />
              </p>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-gray-800 rounded-xl shadow-md p-8 border border-gray-700"> 
          <h3 className="text-2xl font-semibold text-white mb-4">
            <DecryptBlock text="Professional Summary" className="text-white" />
          </h3>
          <p className="text-gray-400 leading-relaxed">
            <DecryptBlock 
              text="With hands-on experience in building real-world projects using Python, Machine Learning, React.js, and Next.js, I bring both technical proficiency and effective communication skills to collaborative environments. Passionate about continuous learning and problem-solving, I am seeking opportunities in a forward-thinking organization where I can contribute meaningfully while further sharpening my development skills. My long-term goal is to evolve into a skilled AI/ML Developer, driving innovation and creating impactful solutions."
              className="text-gray-400 leading-relaxed"
            />
          </p>
        </div>

      </div>
    </section>
  );
}