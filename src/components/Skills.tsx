import {RefObject, useRef} from "react";
import useIsVisible from "../hooks/useIsVisible.ts";
import HomeButton from "./HomeButton.tsx";
import { FaJava } from "react-icons/fa6";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPython,
    SiSpring,
    SiReact,
    SiTailwindcss,
    SiPostgresql,
    SiMysql,
    SiTensorflow,
    SiPandas,
    SiAmazonwebservices,
    SiDocker,
    SiGit,
    SiLinux
} from "react-icons/si";

const Skills = () => {
    const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const isVisible: boolean = useIsVisible(ref);

    return (
        <div className="p-20 h-screen flex justify-start items-center">
            <div ref={ref}>{isVisible && <HomeButton />}</div>
            <div className="flex w-full items-center justify-center text-gray-100">
                <div className="flex-1 w-1/2 space-y-6">
                    <div className="flex-1 w-3/4 font-outfit text-[80px] font-semibold leading-tight tracking-wider bg-linear-to-r from-25% to-indigo-900">
                        <p>Skills</p>
                    </div>
                </div>
                <div className="flex w-1/2 items-center justify-center">
                    <div className="w-full px-8 py-6 max-w-2xl mx-auto space-y-2 rounded-4xl bg-radial-[at_10%_20%] from-25% to-indigo-900 to-75%">
                        <div className="py-1 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white">
                            <p className="font-questrial tracking-wider text-lg font-medium text-indigo-200">Technical</p>
                        </div>
                        <ul className="flex flex-wrap space-x-1 font-quicksand text-indigo-200 text-5xl *:px-6 *:py-0.5 *:my-3">
                            <li><FaJava /></li>
                            <li><SiHtml5 /></li>
                            <li><SiCss3 /></li>
                            <li><SiJavascript /></li>
                            <li><SiPython /></li>
                            <li><SiSpring /></li>
                            <li><SiReact /></li>
                            <li><SiTailwindcss /></li>
                            <li><SiPostgresql /></li>
                            <li><SiMysql /></li>
                            <li><SiTensorflow /></li>
                            <li><SiPandas /></li>
                            <li><SiAmazonwebservices /></li>
                            <li><SiDocker /></li>
                            <li><SiGit /></li>
                            <li><SiLinux /></li>
                        </ul>
                        <div className="py-1 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white">
                            <p className="font-questrial tracking-wider text-lg font-medium text-indigo-200">Language</p>
                        </div>
                        <div className="flex flex-1 justify-between items-center font-quicksand text-gray-100 pl-5">
                            <p>Indonesia</p>
                            <p>[ Native ]</p>
                        </div>
                        <div className="flex flex-1 justify-between items-center font-quicksand text-gray-100 pl-5">
                            <p>English</p>
                            <p>[ TOEFL ITP 540 - B21 ]</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
