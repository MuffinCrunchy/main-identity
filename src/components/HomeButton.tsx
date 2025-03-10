const HomeButton = () => {
    return (
        <div className="fixed top-6 left-6">
            <button className="w-3xs font-questrial tracking-widest text-xl text-white text-left font-bold py-4 px-8 bg-linear-to-l from-25% to-indigo-900 rounded-l-full cursor-pointer" onClick={() => {
                const element = document.getElementById('landing-section');
                element?.scrollIntoView({behavior: 'smooth'});
            }}>
                Back
            </button>
        </div>
    );
};

export default HomeButton;
