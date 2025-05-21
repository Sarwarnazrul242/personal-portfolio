import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import vitainImage from "../../assets/images/website-10.png";
import flourishImage from "../../assets/images/website-9.png";
import ninegenImage from "../../assets/images/website-11.png";
import orangeFrogImage from "../../assets/images/website-0.png";
import udmBookingImage from "../../assets/images/website-1.png";
import solarSystemImage from "../../assets/images/website-2.png";
import threeDColorBallImage from "../../assets/images/website-3.png";
import particleTextImage from "../../assets/images/website-4.png";
import digitalClockImage from "../../assets/images/website-5.png";
import imageSliderImage from "../../assets/images/website-8.png";
import midokImage from "../../assets/images/website-12.png";
import heartDiseaseImage from "../../assets/images/heart.png";
import carInfoImage from "../../assets/images/carinfo.png";
import housePriceImage from "../../assets/images/house.png";
import carPriceImage from "../../assets/images/car.png";
import expenseWiseImage from "../../assets/images/expensewise.png";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(3);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ml", name: "Machine Learning" },
    { id: "mobile", name: "Mobile Apps" },
    // { id: "security", name: "Cybersecurity" }
  ];

  const projects = [
    {
      title: "ExpenseWise - Free Budget Management Tool",
      description: "A revolutionary free budgeting tool that stands out in a market dominated by paid solutions. Unlike other tools that charge fees or lock features behind paywalls, ExpenseWise provides comprehensive budget management completely free. The platform features an intuitive interface for tracking earnings and expenses, with secure user authentication and real-time data management. Built with a focus on user experience, it makes personal finance management accessible to everyone without any hidden costs.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Authentication", "RESTful API", "Responsive Design"],
      category: "web",
      image: expenseWiseImage,
      demoLink: "https://getexpensewise.vercel.app/",
      githubLink: "https://github.com/Sarwarnazrul242/ExpenseWise"
    },
    {
      title: "9thgen.ai - AI Voice Technology Platform",
      description: "Joined a startup focused on revolutionizing business communication through AI voice technology. As a frontend developer, I contributed to building a modern web platform that makes AI-powered customer service calls accessible and efficient. The platform enables businesses to automate communication while maintaining a human-centric approach.",
      technologies: ["Vue.js", "JavaScript", "Tailwind CSS", "Vite", "REST APIs", "WebRTC", "Responsive Design", "UI/UX Design"],
      category: "web",
      image: ninegenImage,
      demoLink: "https://9thgen.ai/",
      githubLink: "#"
    },
    {
      title: "Orange-frog - Employee Management System",
      description: "A full-stack employee management system developed for a Canadian lighting company as a capstone project. The platform helps manage freelance employees for concert lighting events, featuring hour tracking, event scheduling, and employee invitations. Includes separate admin and user portals with secure authentication.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Nodemailer", "JWT Authentication", "RESTful API"],
      category: "web",
      image: orangeFrogImage,
      demoLink: "https://orange-frog.vercel.app/login",
      githubLink: "https://github.com/Sarwarnazrul242/Orange-Frog"
    },
    {
      title: "UDM Room Booking System",
      description: "A comprehensive room booking system developed for University of Detroit Mercy as a senior design project. The platform manages study room reservations across campus buildings, featuring role-based access for students, faculty, managers, and administrators. Each user type has specific permissions and capabilities for room management.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Authentication", "Role-Based Access Control", "RESTful API"],
      category: "web",
      image: udmBookingImage,
      demoLink: "https://umdroom.vercel.app/",
      githubLink: "https://github.com/Sarwarnazrul242/Detroit-Mercy-Room-Booking-System"
    },
    {
      title: "Vitain - AI-Powered Supplement Recommendation",
      description: "A startup initiative with classmates to revolutionize healthcare through AI. Currently developing a web platform and mobile app with custom-trained AI models for personalized supplement recommendations. Work in progress.",
      technologies: ["Vue.js", "JavaScript", "Tailwind CSS", "Node.js", "ChatGPT API", "MongoDB", "Spline", "Python", "Vercel", "Figma"],
      category: "web",
      image: vitainImage,
      demoLink: "https://vitain.vercel.app/",
      githubLink: "#"
    },
    {
      title: "Flourish - Healthcare Journey Tracker",
      description: "I built the frontend for this healthcare platform for a Canadian company. It helps doctors get actionable insights from patient-reported data through daily health tracking and AI-powered analysis.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript", "Responsive Design", "UI/UX Design"],
      category: "web",
      image: flourishImage,
      demoLink: "https://flourish-woad.vercel.app/",
      githubLink: "#"
    },
    {
      title: "MiDOK - AI-Powered Diagnostic Assistant",
      description: "An AI-powered diagnostic tool for web, iOS, and Android, helping healthcare professionals with accurate diagnostic support. Features a user-friendly interface to improve efficiency and reduce burden from nursing shortages.",
      technologies: ["HTML/CSS", "JavaScript", "TypeScript", "Kotlin", "Swift", "Python", "ChatGPT API"],
      category: ["mobile", "ml"],
      image: midokImage,
      demoLink: "#",
      githubLink: "https://github.com/Osestic/MiDOK_Co-Pilot_App"
    },
    {
      title: "Heart Disease Classification Model",
      description: "Deep learning research project achieving 92% accuracy in heart disease classification using CNN and LSTM models. Implemented data preprocessing and augmentation techniques for improved performance.",
      technologies: ["Python", "TensorFlow", "CNN", "LSTM", "Data Preprocessing"],
      category: "ml",
      image: heartDiseaseImage,
      demoLink: "#",
      githubLink: "https://github.com/MIMIC-Benchmarking"
    },
    {
      title: "CarInformation - Android Car Info App",
      description: "An Android application that provides detailed information about various cars, including images, descriptions, prices, and engine specifications. Features a clean two-activity design with a car list view and detailed car information view, all powered by Firebase for real-time data management.",
      technologies: ["Android", "Java", "Firebase Realtime Database", "Material Design", "Android Studio"],
      category: "mobile",
      image: carInfoImage,
      demoLink: "#",
      githubLink: "https://github.com/Sarwarnazrul242/CarInformation"
    },
    {
      title: "House Price Prediction Model",
      description: "A machine learning model that predicts house prices with 76% accuracy using various features from a Kaggle dataset. The project includes comprehensive data analysis, feature engineering, and implementation of multiple algorithms including Linear Regression, Decision Trees, and Random Forest. The model serves as a valuable tool for real estate decision-making.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Linear Regression", "Decision Trees", "Random Forest", "Data Analysis"],
      category: "ml",
      image: housePriceImage,
      demoLink: "#",
      githubLink: "https://github.com/Sarwarnazrul242/House-Price-Prediction-Machine-Learning-"
    },
    {
      title: "Car Price Prediction Model",
      description: "A machine learning model that predicts car prices based on various features such as brand, model, year, mileage, and condition. The project includes data preprocessing, feature engineering, and implementation of multiple regression models to achieve accurate price predictions. The model helps buyers and sellers make informed decisions in the automotive market.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Linear Regression", "Gradient Boosting", "Data Preprocessing", "Feature Engineering"],
      category: "ml",
      image: carPriceImage,
      demoLink: "#",
      githubLink: "https://github.com/Sarwarnazrul242/Car-Price-Prediction-ML"
    },
    {
      title: "3D Solar System Visualization",
      description: "An interactive 3D visualization of our solar system built with Three.js. The website features realistic planet rotations, orbital paths, and detailed information about each celestial body. Users can navigate through space, zoom in on planets, and learn interesting facts about our solar system in an immersive 3D environment.",
      technologies: ["Three.js", "JavaScript", "HTML5", "CSS3", "WebGL", "3D Modeling", "Interactive Design"],
      category: "web",
      image: solarSystemImage,
      demoLink: "https://3d-solar.vercel.app/",
      githubLink: "https://github.com/Sarwarnazrul242/Improved-3D-Solar-System"
    },
    {
      title: "Interactive 3D Color Ball",
      description: "An engaging 3D visualization featuring an interactive ball that changes colors and can be rotated in 3D space. Built with Three.js, this project demonstrates 3D object manipulation, color transitions, and user interaction. Users can drag to rotate the ball and watch as it smoothly transitions between different colors.",
      technologies: ["Three.js", "JavaScript", "WebGL", "3D Animation", "Color Transitions", "Interactive Design"],
      category: "web",
      image: threeDColorBallImage,
      demoLink: "https://3-d-ball-one.vercel.app/",
      githubLink: "https://github.com/Sarwarnazrul242/3DBall"
    },
    {
      title: "Particle Text Effect",
      description: "An interactive website that transforms text into particles that react to mouse movement. Users can type any text and watch as it breaks into particles that follow the cursor, creating a mesmerizing visual effect. This project showcases advanced CSS animations and JavaScript event handling.",
      technologies: ["HTML5", "CSS3", "JavaScript", "CSS Animations", "Particle Effects", "Interactive Design"],
      category: "web",
      image: particleTextImage,
      demoLink: "https://playful-text.vercel.app/",
      githubLink: "https://github.com/Sarwarnazrul242/Playful-Text"
    },
    {
      title: "Interactive Digital Clock",
      description: "A stylish digital clock website featuring a realistic lamp light effect. Users can toggle the light on/off, creating an immersive neon-like display that shows real-time. The project demonstrates advanced CSS styling with dynamic lighting effects and real-time JavaScript functionality.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Real-time Updates", "Light Effects", "Interactive Design"],
      category: "web",
      image: digitalClockImage,
      demoLink: "https://sarwarnazrul242.github.io/Digital-Clock/",
      githubLink: "https://github.com/Sarwarnazrul242/Digital-Clock"
    },
    {
      title: "Animal Image Slider",
      description: "An educational image slider showcasing various animals with detailed information. Features smooth transitions between images and informative descriptions about each animal. The project demonstrates advanced CSS animations and JavaScript for creating an engaging user experience.",
      technologies: ["HTML5", "CSS3", "JavaScript", "CSS Animations", "Responsive Design", "Educational Content"],
      category: "web",
      image: imageSliderImage,
      demoLink: "https://slider-chi-eight.vercel.app/",
      githubLink: "https://github.com/Sarwarnazrul242/Slider"
    }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === "all" || 
    (Array.isArray(project.category) 
      ? project.category.includes(selectedCategory)
      : project.category === selectedCategory)
  );

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const ProjectCard = ({ project }) => (
    <div className="flex flex-col lg:flex-row gap-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all p-6 bg-[#0a0a0a]/50">
      {/* Project Image with 3D Effect */}
      <div className="lg:w-1/2">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl border">
            <CardItem
              translateZ="100"
              className="w-full"
            >
              <a 
                href={project.demoLink !== "#" ? project.demoLink : project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                />
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      {/* Project Details */}
      <div className="lg:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-6 text-lg">
            {project.description}
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-blue-400">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {project.category === "web" && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              View Demo
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500/10 transition-colors"
          >
            View Github
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleProjects(3);
                }}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="flex flex-col gap-12">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreProjects && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreProjects}
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
              >
                View More Projects
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          )}

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center text-gray-400 mt-8">
              No projects found in this category.
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
