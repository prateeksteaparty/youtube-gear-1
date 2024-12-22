export const SearchBar = () => {
    return (
        <div>
            <div className=" w-[550px] flex items-center border border-gray-500 rounded-full bg-black my-2 ">
                {/* Input Field */}
                <input
                    id="default-search"
                    className="w-full bg-black text-gray-400 border-none outline-none rounded-l-full pl-4 py-2"
                    placeholder="Search"
                    required
                />
                {/* Search Button */}
                <button className="bg-customGray text-gray-400 py-2 px-4 rounded-r-full flex items-center justify-center">
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </div>
            <div className="sm:hidden w-[550px]">
            <button className="bg-customGray text-gray-400 py-2 px-4 rounded-r-full flex items-center justify-center">
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
