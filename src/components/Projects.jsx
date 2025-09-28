import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

// ⬅️ Adjust the path as needed
import { featuredProjects } from "./projectData.js"; 

// 🎯 CRITICAL FIX: You MUST import the DecryptedText component.
// Adjust this path based on your file structure (e.g., if it's in a subfolder like './components/DecryptedText/DecryptedText.jsx')
import DecryptedText from './DecryptedText/DecryptedText.jsx'; 


// --- Helper DecryptBlock: Now using the actual DecryptedText component ---
// Styles for the Decrypt Effect (copied from your Hero.jsx for consistency)
const encryptedStyle = "text-yellow-400 font-mono";
const baseSpeed = 35;

const DecryptBlock = ({ text, className = "", ...props }) => (
  // ✅ FIX: Use the imported DecryptedText component to enable the animation effect.
  <DecryptedText 
    text={text} 
    animateOn="view" // Animates once when scrolled into view
    sequential={true}
    speed={baseSpeed}
    encryptedClassName={encryptedStyle}
    className={className}
    parentClassName="inline" // Helps ensure correct wrapping
    {...props}
  />
);
// ----------------------------------------------------------------------------------------------------------

export default function Projects() {
  const projects = featuredProjects;

  return (
    // SECTION: Dark background
    <section id="projects" className="py-20 bg-black border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            <DecryptBlock 
              text="Featured Projects" 
              className="text-gray-100" 
              parentClassName="inline-block"
            />
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            <DecryptBlock 
              text="Here are some of my recent projects that showcase my skills in AI/ML, full-stack development, and problem-solving."
              className="text-gray-400"
              parentClassName="inline"
            />
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="h-full flex flex-col !bg-gray-800 border-gray-700 hover:border-yellow-400 transition-all duration-300"
            >
              <CardHeader className="!border-gray-700">
                <CardTitle className="!text-gray-100">
                  <DecryptBlock 
                    text={project.title} 
                    className="text-gray-100" 
                    parentClassName="inline"
                  />
                </CardTitle>
                
                <CardDescription className="!text-gray-400">
                  <DecryptBlock 
                    text={project.description} 
                    className="text-gray-400" 
                    parentClassName="inline"
                  />
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-gray-300">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex gap-2">
                  <Button 
                    size="sm" 
                    asChild 
                    className="cursor-target relative z-[10000] bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  
                  {project.liveUrl !== "#" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      asChild
                      className="cursor-target relative z-[10000] border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}