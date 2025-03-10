import {MouseEventHandler, ReactNode} from "react";
import {
    FaPaw
} from "react-icons/fa6";

const Modal = ({open, close, children}: {open: boolean, close: MouseEventHandler<HTMLElement>, children: ReactNode}) => {
    return (
        <div onClick={close} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/80" : "invisible"}`}>
            <div onClick={e => e.stopPropagation()} className={`w-1/2 p-6 bg-radial-[at_10%_20%] from-indigo-900 to-black to-indigo-950 rounded-xl  ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <button className="absolute top-5 right-5 p-2 text-indigo-200 text-2xl transition delay-75 ease-in-out duration-200 cursor-pointer hover:text-indigo-400 hover:scale-125 hover:rotate-12" onClick={close}>
                    <FaPaw />
                </button>
                {children}
            </div>
        </div>

    );
};

export default Modal;
