import HomeButton from "./HomeButton.tsx";
import {RefObject, useRef, useState} from "react";
import useIsVisible from "../hooks/useIsVisible.ts";
import {FaAnglesLeft, FaAnglesRight, FaCaretRight} from "react-icons/fa6";
import Modal from "./Modal.tsx";

type ExpProps = {
    role: string;
    company: string;
    date: string;
    location: string;
    descs: Array<string>;
}

const MyExperience = () => {
    const ref : RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const isVisible : boolean = useIsVisible(ref);
    const [openModal, setOpenModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentContent, setCurrentContent] = useState<ExpProps>();

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

    const openContent = (content: ExpProps): void => {
        setOpenModal(true);
        setCurrentContent(content);
    }

    const contents: Array<ExpProps> = [
        {
            "role": "Full Stack Developer",
            "company": "PT Enigma Cipta Humanika",
            "date": "April 2024 - October 2024",
            "location": "South Jakarta",
            "descs": [
                "Designed and implemented scalable RESTful APIs using Spring Boot, ensuring efficient data processing, seamless integration, and robust security through JWT authentication. Managed PostgreSQL databases with a focus on data integrity, indexing, and query optimization to enhance performance.",
                "Developed responsive and high-performance web applications using ReactJS, leveraging TailwindCSS for modern UI/UX design and React Router DOM for seamless client-side navigation. Optimized state management with React Redux, improving application scalability and maintainability, while integrating Axios for efficient API communication.\n" +
                "Designed Entity Relationship Diagrams (ERD) for structured database planning and optimization.",
                "Implemented the Repository Design Pattern to enhance code reusability and maintainability.",
                "Conducted unit testing with JUnit and Mockito, improving software reliability and maintainability.",
                "Implemented Docker for containerization, ensuring consistent and scalable deployment environments, integrated third-party APIs to enhance system functionality, utilized Ngrok as a secure API gateway, and deployed APIs to a VPS, ensuring high availability and performance",
                "Designed and developed a E-Procurement using Spring Boot to optimize procurement workflows, ensuring secure authentication, structured data management, and seamless API integration for procurement operations.",
                "Built e-commerce platform using Spring Boot and ReactJS, implementing secure authentication, business logic for product and order management, and API integration for payments and user interactions. Additionally, managed deployment and infrastructure by containerizing the application, integrating external services, and ensuring secure and scalable hosting."
            ]
        },
        {
            "role": "Data Scientist Intern",
            "company": "PT Enseval Putera Megatrading",
            "date": "March 2023 - March 2024",
            "location": "East Jakarta",
            "descs": [
                "Developed and deployed a machine learning classification model using Decision Tree and XGBoost, improving HR candidate selection efficiency.",
                "Automated document extraction using OCR and Object Detection, streamlining purchase order processing and enhancing accuracy.",
                "Engineered a high-performance REST API using FastAPI to integrate ML models seamlessly, optimizing response time and system scalability.",
                "Designed a scalable data orchestration pipeline with Prefect, AWS S3, and Docker, ensuring automated workflow and data management."
            ]
        },
        {
            "role": "Machine Learning",
            "company": "Bangkit Academy",
            "date": "February 2022 - July 2022",
            "location": "Remote",
            "descs": [
                "Bangkit Graduate 2022",
                "Master the key concepts and applications of AI to solve a wide range of Machine Learning problems",
                "Received 5 certificates related to Machine Learning through Coursera",
                "Worked on Product-Based Capstone Project called Routeco, which is a mobile app that created to know about weather and air quality to user's destination",
                "Received a Tensorflow Developer Certificate"
            ]
        }
    ];

    return (
        <>
            <div className="p-20 h-screen flex justify-start items-center">
                <div ref={ref}>{isVisible && <HomeButton />}</div>
                <div className="flex w-full items-center justify-center text-gray-100">
                    <div className="flex-1 w-1/2 space-y-6">
                        <div className="flex-1 w-3/4 font-outfit text-[80px] font-semibold leading-tight tracking-wider bg-linear-to-r from-25% to-indigo-900">
                            <p>My</p>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className="flex w-1/2 items-center justify-center">
                        <div className="relative w-full max-w-2xl mx-auto rounded-4xl bg-radial-[at_10%_20%] from-25% to-indigo-900 to-75%">
                            <div className="overflow-hidden relative h-40 m-12">
                                {contents.map((content: ExpProps, index: number) => (
                                    <div key={index} className={`absolute inset-0 transition-transform transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}>
                                        <p className="font-questrial text-4xl font-bold tracking-widest text-indigo-200">{content.role}</p>
                                        <div
                                            className="py-3 flex items-center text-sm text-gray-100 before:flex-1 before:border-t before:border-indigo-200 before:me-6">{content.date}
                                        </div>
                                        <p className="font-questrial tracking-wider text-lg font-medium text-gray-100">{content.company}</p>
                                        <div className="py-5 flex items-center justify-center">
                                            <span className="text-4xl text-indigo-200 transition delay-75 ease-in-out duration-300 cursor-pointer hover:text-indigo-400 hover:scale-125 hover:rotate-90" onClick={() => openContent(content)}>
                                                <FaCaretRight /></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-100 text-2xl p-2 transition delay-75 ease-in-out duration-400 hover:-translate-x-3 cursor-pointer hover:text-indigo-300" onClick={prevSlide}>
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
                    <p className="font-questrial text-4xl font-bold tracking-widest pb-2 text-indigo-200">{currentContent ? currentContent.role : "Role Not Found"}</p>
                    <div className="flex-1 space-y-2">
                        <div className="flex flex-1 justify-between items-center">
                            <p className="font-quicksand text-gray-100">{currentContent ? currentContent.location : "Location Not Found" }</p>
                            <p className="font-quicksand text-gray-100">{currentContent ? currentContent.date : "00/00/0000 - 00/00/0000"}</p>
                        </div>
                        <div className="py-1 flex items-center after:flex-1 after:border-t after:border-indigo-200 after:ms-6">
                            <p className="font-questrial tracking-wider text-lg font-medium text-indigo-200">Description</p>
                        </div>
                        <ul className="font-quicksand text-gray-100 px-3 max-h-150 overflow-y-auto scrollbar">
                            {currentContent ? currentContent.descs.map((desc: string, index: number)=> (
                                <li key={index}>• {desc}</li>
                            )) : "Responsibilities Not Found"}
                        </ul>
                    </div>
                </Modal>
            }
        </>
    );
};

export default MyExperience;
