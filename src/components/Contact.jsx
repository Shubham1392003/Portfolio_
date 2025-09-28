import React, { useState } from "react";
// Ensure these paths match your actual setup if you are using Shadcn UI
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

// NOTE: Please ensure the path to your custom component is correct:
import DecryptedText from './DecryptedText/DecryptedText.jsx'; 

// --- Styling Constants for Reusability and Clarity ---
const encryptedStyle = "text-yellow-400 font-mono";
const baseSpeed = 35; 
const INPUT_CLASS_OVERRIDES =
  "!bg-gray-700 !border-gray-600 !text-gray-100 !placeholder:text-gray-400 focus:!border-yellow-400 focus-visible:!ring-yellow-400";

// --- Helper DecryptBlock Component ---
const DecryptBlock = ({ text, className = "", ...props }) => (
  <DecryptedText 
    text={text} 
    animateOn="view" // Animates once when scrolled into view
    sequential={true}
    speed={baseSpeed}
    encryptedClassName={encryptedStyle}
    className={className}
    parentClassName="inline" 
    {...props}
  />
);

// --- Main Contact Component ---
export default function Contact() {
  // Your personal contact information, Shubham Kendre
  const CONTACT_INFO = {
    email: "skendre380@gmail.com",
    phone: "+91 9028924151",
    location: "Pune, India",
    github: "https://github.com/Shubham1392003",
    linkedin: "https://linkedin.com/in/shubham-kendre-23b605285",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // New states for form handling feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ message: null, type: null }); // { message: string, type: 'success' | 'error' | null }

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Basic Client-Side Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ message: "Please fill out all required fields.", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ message: "Validation successful. Preparing email link...", type: "success" });

    // 2. Construct the mailto link
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    
    // 3. Launch email client after a small delay for feedback
    setTimeout(() => {
        window.location.href = mailtoLink;
        
        // Optional: Reset form after launch (commented out to keep data in case email client fails to open)
        // setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Final feedback update
        setStatus({ message: "Email client launched. Thank you for your message!", type: "success" });
        setIsSubmitting(false);
        setTimeout(() => setStatus({ message: null, type: null }), 5000); 
    }, 1000); 
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Added aria-label for accessibility */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4" aria-label="Get In Touch">
            <DecryptBlock 
                text="Get In Touch" 
                className="text-gray-100" 
                parentClassName="inline-block"
            />
          </h2>
          <p 
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            aria-label="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology."
          >
            <DecryptBlock 
                text="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology."
                className="text-gray-400" 
                parentClassName="inline"
            />
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="!bg-gray-800 border-gray-700">
              <CardHeader className="!border-gray-700">
                <CardTitle className="!text-gray-100">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-300">Email</p>
                    <p className="text-sm text-gray-400 cursor-target relative z-[10000] hover:text-yellow-400 transition-colors">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-300">Phone</p>
                    <p className="text-sm text-gray-400 cursor-target relative z-[10000] hover:text-yellow-400 transition-colors">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-300">Location</p>
                    <p className="text-sm text-gray-400">
                      {CONTACT_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <p className="font-medium mb-3 text-gray-300">Connect with me</p>
                  <div className="flex gap-3">
                    <Button 
                        size="sm" 
                        variant="outline" 
                        asChild
                        className="cursor-target relative z-[10000] border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-yellow-400 transition-colors"
                    >
                      <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                        size="sm" 
                        variant="outline" 
                        asChild
                        className="cursor-target relative z-[10000] border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-yellow-400 transition-colors"
                    >
                      <a
                        href={CONTACT_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="!bg-gray-800 border-gray-700">
              <CardHeader className="!border-gray-700">
                <CardTitle className="!text-gray-100">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={INPUT_CLASS_OVERRIDES}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={INPUT_CLASS_OVERRIDES}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className={INPUT_CLASS_OVERRIDES}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={6}
                      className={INPUT_CLASS_OVERRIDES}
                    />
                  </div>
                  
                  {/* Status Message Display */}
                  {status.message && (
                    <p className={`text-sm font-medium ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                      {status.message}
                    </p>
                  )}
                  {/* End Status Message Display */}

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} // Disable while "submitting"
                    className="w-full cursor-target relative z-[10000] bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Opening Email..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}