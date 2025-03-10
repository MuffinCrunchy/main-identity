const LandingSection = () => {
    return (
        <div className="p-20 h-screen flex justify-start items-center">
            <div className="flex w-full items-center justify-center text-gray-100">
                <div className="flex-1 w-1/2 space-y-6">
                    <div className="flex-1 font-outfit text-[80px] font-semibold leading-tight tracking-wider">
                        <p>Baihaqi</p>
                        <p>Muhammad</p>
                    </div>
                    <div className="flex-1 space-y-2 font-quicksand text-2xl leading-tight tracking-widest">
                        <p>full stack developer -</p>
                        <p>machine learning engineer</p>
                    </div>
                </div>
                <div className="flex w-1/2 items-center justify-end">
                    <div className="w-3/4 space-y-10 font-questrial text-3xl text-right tracking-widest">
                        <p className="py-4 px-6 bg-linear-to-l from-25% to-indigo-900 transition delay-75 ease-in-out duration-500 hover:-translate-x-30 cursor-pointer" onClick={() => {
                            const element = document.getElementById('about-me');
                            element?.scrollIntoView({behavior: 'smooth'});
                        }}>
                            About Me
                        </p>
                        <p className="py-4 px-6 bg-linear-to-l from-25% to-indigo-900 -translate-x-10 transition delay-75 duration-500 hover:-translate-x-30 cursor-pointer" onClick={() => {
                            const element = document.getElementById('my-experience');
                            element?.scrollIntoView({behavior: 'smooth'});
                        }}>
                            My Experience
                        </p>
                        <p className="py-4 px-6 bg-linear-to-l from-25% to-indigo-900 -translate-x-10 transition delay-75 duration-500 hover:-translate-x-30 cursor-pointer" onClick={() => {
                            const element = document.getElementById('personal-projects');
                            element?.scrollIntoView({behavior: 'smooth'});
                        }}>
                            Personal Project
                        </p>
                        <p className="py-4 px-6 bg-linear-to-l from-25% to-indigo-900 transition delay-75 duration-500 hover:-translate-x-30 cursor-pointer" onClick={() => {
                            const element = document.getElementById('skills');
                            element?.scrollIntoView({behavior: 'smooth'});
                        }}>
                            Skills
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingSection;
