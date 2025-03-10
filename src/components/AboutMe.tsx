import HomeButton from "./HomeButton.tsx";
import useIsVisible from "../hooks/useIsVisible.ts";
import {RefObject, useRef} from "react";
import {FaLinkedin, FaSquareInstagram, FaSquareGithub, FaSquareSteam} from "react-icons/fa6";

const AboutMe = () => {
    const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const isVisible: boolean = useIsVisible(ref);

    return (
        <div className="p-20 h-screen flex justify-start items-center">
            <div ref={ref}>{isVisible && <HomeButton />}</div>
            <div className="flex w-full items-center justify-center text-gray-100">
                <div className="flex-1 w-1/2 space-y-6">
                    <div className="flex-1 w-3/4 font-outfit text-[80px] font-semibold leading-tight tracking-wider bg-linear-to-r from-25% to-indigo-900">
                        <p>About</p>
                        <p>Me</p>
                    </div>
                </div>
                <div className="flex w-1/2 items-center justify-center">
                    <div className="w-full max-w-2xl mx-auto p-10 space-y-2 rounded-4xl bg-radial-[at_10%_20%] from-25% to-indigo-900 to-75%">
                        <div className="py-1 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white">
                            <p className="font-questrial tracking-wider text-lg font-medium text-indigo-200">Summary</p>
                        </div>
                        <p className="font-quicksand text-gray-100 pl-5">
                            Expertise spans both machine learning and full-stack development, with extensive experience in frontend and backend projects. Skilled in building and improving applications, managing data efficiently, and collaborating with teams to deliver high-quality solutions. Experienced in leading projects, analyzing data, and developing reliable and scalable backend systems. A quick learner with strong problem-solving abilities, leadership skills, and a commitment to continuous growth in the tech industry.
                        </p>
                        <div className="py-1 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white">
                            <p className="font-questrial tracking-wider text-lg font-medium text-indigo-200">Contact</p>
                        </div>
                        <p className="font-quicksand text-gray-100 pl-5">
                            +6281809003056
                        </p>
                        <p className="font-quicksand text-gray-100 pl-5">
                            baihaqi.m551@gmail.com
                        </p>
                        <div className="py-1 flex items-center after:flex-1 after:border-t after:border-gray-200 after:ms-6">
                            <p className="font-questrial tracking-wider text-lg font-medium text-indigo-200">Social Media</p>
                        </div>
                        <div className="flex flex-1 items-center justify-start pl-5 text-4xl space-x-6 text-gray-100 transition delay-75 ease-in-out duration-400 *:cursor-pointer *:hover:text-indigo-300 *:hover:scale-125 *:hover:rotate-12">
                            <a href="https://www.linkedin.com/in/hq-m/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/MuffinCrunchy" target="_blank" rel="noreferrer"><FaSquareGithub /></a>
                            <a href="https://www.instagram.com/lemon.coffee_/" target="_blank" rel="noreferrer"><FaSquareInstagram /></a>
                            <a href="https://steamcommunity.com/id/lemon-coffee/" target="_blank" rel="noreferrer"><FaSquareSteam /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
