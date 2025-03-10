import './App.css'
import LandingSection from "./components/LandingSection.tsx";
import AboutMe from "./components/AboutMe.tsx";
import PersonalProjects from "./components/PersonalProjects.tsx";
import MyExperience from "./components/MyExperience.tsx";
import Skills from "./components/Skills.tsx";
// import Modal from "./components/Modal.tsx";

function App() {
  return (
    <>
        <div className="bg-slate-950 snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
            <div className="snap-always snap-center" id="landing-section">
                <LandingSection />
            </div>
            <div className="snap-always snap-center" id="about-me">
                <AboutMe />
            </div>
            <div className="snap-always snap-center" id="my-experience">
                <MyExperience />
            </div>
            <div className="snap-always snap-center" id="personal-projects">
                <PersonalProjects />
            </div>
            <div className="snap-always snap-center" id="skills">
                <Skills />
            </div>
        </div>
    </>
  )
}

export default App
