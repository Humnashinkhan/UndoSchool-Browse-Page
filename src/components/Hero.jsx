import { useState } from "react";
import leftImage from "../assets/leftKid.png";
import rightImage from "../assets/rightKid.png";

const Hero = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        onSearch(search);
    };

    return (
        <section className="relative bg-gradient-to-r from-purple-900 to-purple-600 text-white py-24 overflow-hidden">

            {/* LEFT IMAGE */}
            <img
                src={leftImage}
                alt="Left Illustration"
                className="hidden lg:block absolute left-0 bottom-0 w-80 xl:w-[350px] 2xl:w-[480px] object-contain"
            />
            <div className="hidden lg:block absolute left-60 top-10 text-white px-4 py-4 rounded-full shadow-lg text-sm font-bold border border-black/70 bg-gradient-to-r from-purple-600 to-pink-500">
                500+ <br />
                Courses
            </div>
            <div className="hidden lg:block absolute left-70 top-80 text-white px-3 py-3 rounded-full shadow-lg text-sm font-bold border border-black/70 bg-gradient-to-r from-purple-600 to-pink-500">
                4.9 <br />
                Ratings
            </div>

            {/* RIGHT IMAGE */}
            <img
                src={rightImage}
                alt="Right Illustration"
                className="hidden lg:block absolute right-0 bottom-0 w-80 xl:w-[450px] 2xl:w-[480px] object-contain"
            />
            <div className="hidden lg:block absolute right-10 top-20 text-white px-3 py-3 rounded-full shadow-lg text-sm font-bold border border-black/70 bg-gradient-to-r from-purple-600 to-pink-500">
                10K <br />
                Happy Kids
            </div>
            {/* CENTER CONTENT */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                    Learn a New Skill
                </h1>

                <p className="text-xl sm:text-2xl text-yellow-400 mt-4">
                    Everyday, Anytime, and Anywhere.
                </p>

                {/* SEARCH BAR */}
                <div className="flex bg-white rounded-full overflow-hidden shadow-xl mt-10 max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="What do you want to learn today?"
                        className="flex-1 px-6 py-4 outline-none text-gray-700"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 hover:opacity-90 transition"
                    >
                        Search
                    </button>
                </div>

            </div>

        </section>
    );
};

export default Hero;