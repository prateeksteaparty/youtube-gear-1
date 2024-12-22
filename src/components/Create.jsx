export const Create = () => {
    return (
        <div>
            <button className="flex items-center space-x-1 pr-2 text-normal font-semibold  rounded-2xl pl-2 pt-1 pb-1 bg-customGray ">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 font-bold"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                    />
                </svg>
                <span className="pr-1">Create</span>
            </button>
        </div>
    );
};
