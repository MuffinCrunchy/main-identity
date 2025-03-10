import HomeButton from "./HomeButton.tsx";
import {RefObject, useRef, useState} from "react";
import useIsVisible from "../hooks/useIsVisible.ts";
import Modal from "./Modal.tsx";
import {FaAnglesLeft, FaAnglesRight, FaSnowflake} from "react-icons/fa6";

type ProjectProps = {
    title: string;
    desc: string;
    resps: string[];
    techs: string[];
}

const PersonalProjects = () => {
    const ref : RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const isVisible : boolean = useIsVisible(ref);
    const [openModal, setOpenModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentContent, setCurrentContent] = useState<ProjectProps>();

    const nextSlide = (): void => {
        if (currentIndex === contents.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prevIndex: number): number => prevIndex + 1 % contents.length);
        }
    };

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex: number): number => (prevIndex - 1 + contents.length) % contents.length);
    };

    const openContent = (content: ProjectProps): void => {
        setOpenModal(true);
        setCurrentContent(content);
    }

    const contents: Array<ProjectProps> = [
        {
            "title": "Oeuvre Atelier",
            "desc": "An online marketplace dedicated to artist who want to sell their work publicly.",
            "resps": [
                "Led a cross-functional team of frontend and mobile developers, managing sprints for smooth project execution.",
                "Designed a scalable database architecture (ERD) to optimize data flow and system efficiency.",
                "Built a RESTful API in Spring Boot for seamless marketplace functionalities.",
                "Integrated PostgreSQL for efficient data storage and transactional consistency.",
                "Integrated JWT authentication for secure transactions and data protection.",
                "Connected third-party payment gateways and media streaming APIs to enhance the platform.",
                "Deployed the backend APIs with Docker & Ngrok, ensuring secure tunneling and scalability."
            ],
            "techs": ["Java", "Spring Boot", "Javascript", "ReactJS", "React Native", "PostgreSQL", "JWT", "Docker", "Ngrok", "Git"]
        },
        {
            "title": "Restaurant Management System",
            "desc": "A restaurant management system for product monitoring and order tracking.",
            "resps": [
                "Developed a RESTful API in Spring Boot to streamline restaurant operations.",
                "Designed a scalable database architecture with ERD, optimizing data retrieval and system performance.",
                "Implemented PostgreSQL for efficient data storage and retrieval.",
                "Applied the Repository Design Pattern for a clean, maintainable backend structure.",
                "Deployed locally with Docker and publicly on a VPS for real-world accessibility."
            ],
            "techs": ["Java", "Spring Boot", "PostgreSQL", "JWT", "Docker", "VPS", "Git"]
        },
        {
            "title": "Air Polution Forecasting",
            "desc": "Predict Air Quality of East Jakarta City using Long Short-Term Memory (LSTM) algorithm.",
            "resps": [
                "Cleaned and prepared air quality datasets using NumPy and Pandas for accurate forecasting.",
                "Conducted data analysis to identify trends and variable correlations.",
                "Developed and trained an LSTM-based predictive model using TensorFlow & Keras.",
                "Tested and evaluated model performance with new data using Matplotlib.",
                "Built a web app in Streamlit to visualize forecasts and insights."
            ],
            "techs": ["Python", "Pandas", "NumPy", "Matplotlib", "Tensorflow", "Keras", "Streamlit"]
        }
    ]

    return (
        <>
            <div className="p-20 h-screen flex justify-start items-center">
                <div ref={ref}>{isVisible && <HomeButton />}</div>
                <div className="flex w-full items-center justify-center text-gray-100">
                    <div className="flex-1 w-1/2 space-y-6">
                        <div className="flex-1 w-3/4 font-outfit text-[80px] font-semibold leading-tight tracking-wider bg-linear-to-r from-25% to-indigo-900">
                            <p>Personal</p>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="flex w-1/2 items-center justify-center">
                        <div className="relative w-full max-w-2xl mx-auto rounded-4xl bg-radial-[at_10%_20%] from-25% to-indigo-900 to-75%">
                            <div className="overflow-hidden relative h-50 m-12">
                                {contents.map((content: ProjectProps, index: number) => (
                                    <div key={index} className={`absolute inset-0 transition-transform transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}>
                                        <p className="font-questrial text-4xl font-bold tracking-widest pb-2 text-indigo-200">{content.title}</p>
                                        <div className="py-5 flex items-center before:flex-1 before:border-t before:border-indigo-200 before:me-5 after:flex-1 after:border-t after:border-indigo-200 after:ms-5">
                                            <span className="text-2xl text-indigo-200 transition delay-75 ease-in-out duration-300 cursor-pointer hover:text-indigo-400 hover:scale-125 hover:rotate-180" onClick={() => openContent(content)}><FaSnowflake /></span>
                                        </div>
                                        <ul className="flex flex-wrap space-x-1 font-quicksand text-indigo-200 *:bg-indigo-950 *:rounded-full *:border *:px-3 *:py-0.5 *:border-indigo-200/50 *:my-1">
                                            {content.techs.map((tech: string, index: number) => (
                                                <li key={index}>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-100 text-2xl p-2 transition delay-75 ease-in-out duration-400 hover:-translate-x-3 cursor-pointer hover:text-indigo-300" onClick={prevSlide}>
                                <FaAnglesLeft />
                            </button>
                            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-100 text-2xl p-2 transition delay-75 ease-in-out duration-400 hover:translate-x-3 cursor-pointer hover:text-indigo-300" onClick={nextSlide}>
                                <FaAnglesRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                openModal &&
                <Modal open={openModal} close={() => setOpenModal(false)}>
                    <p className="font-questrial text-4xl font-bold tracking-widest pb-2 text-indigo-200">{currentContent ? currentContent.title : "Title Not Found"}</p>
                    <div className="flex-1 space-y-2">
                        <p className="font-quicksand text-gray-100">{currentContent ? currentContent.desc : "Lorem ipsum dolor amet"}</p>
                        <div className="py-1 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-indigo-200 after:ms-6">
                            <p className="font-questrial tracking-wider text-lg font-medium text-indigo-200">Responsibilities</p>
                        </div>
                        <ul className="font-quicksand text-gray-100 px-3 max-h-62 overflow-y-auto scrollbar">
                            {currentContent ? currentContent.resps.map((resp: string, index: number)=> (
                                <li key={index}>• {resp}</li>
                            )) : "Responsibilities Not Found"}
                        </ul>
                        <div className="py-1 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white">
                            <p className="font-questrial tracking-wider text-lg font-medium text-indigo-200">Techstacks</p>
                        </div>
                        <ul className="flex flex-wrap space-x-1 font-quicksand text-indigo-200 *:bg-indigo-950 *:rounded-full *:border *:px-3 *:py-0.5 *:border-indigo-200/50 *:my-1">
                            {currentContent ? currentContent.techs.map((tech: string, index: number) => (
                                <li key={index}>{tech}</li>
                            )) : "No Techstacks"}
                        </ul>
                    </div>
                </Modal>
            }
        </>
    );
};

export default PersonalProjects;
