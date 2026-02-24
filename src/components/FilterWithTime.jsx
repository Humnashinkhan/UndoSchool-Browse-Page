import { useState } from "react";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";
import { Sun, Sunset, Moon } from "lucide-react";

const timeOptions = [
    {
        label: "Morning classes",
        time: "8am - 12pm",
        icon: <Sun size={28} />,
    },
    {
        label: "Afternoon classes",
        time: "12pm - 4pm",
        icon: <Sun size={28} />,
    },
    {
        label: "Evening classes",
        time: "4pm - 8pm",
        icon: <Sunset size={28} />,
    },
    {
        label: "Late evening classes",
        time: "8pm - 11pm",
        icon: <Moon size={28} />,
    },
];

const FilterWithTime = () => {
    const [active, setActive] = useState("Morning classes");

    return (
        <section className="w-full bg-[#EAF3F1] py-10">

            {/* Heading */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
                    Filter with Time
                </h2>
                <p className="text-gray-600 mt-4">
                    Choose the perfect time that fits your child's schedule
                </p>
            </div>

            {/* Time Filter Boxes */}
            <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6 mb-16">
                {timeOptions.map((item) => {
                    const isActive = active === item.label;

                    return (
                        <div
                            key={item.label}
                            onClick={() => setActive(item.label)}
                            className={`cursor-pointer rounded-2xl px-8 py-6 w-64 flex justify-between items-center transition duration-300
                ${isActive
                                    ? "bg-white shadow-lg border-2 border-purple-400"
                                    : "bg-white border border-gray-300 hover:shadow-md"
                                }`}
                        >
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    {item.label}
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    {item.time}
                                </p>
                            </div>

                            <div className="text-gray-600">
                                {item.icon}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Courses Row */}

            {/* Courses Row */}
            <div className="max-w-7xl mx-auto px-6 flex gap-6 overflow-x-auto">
                {courses.slice(0, 3).map((course, index) => (
                    <div
                        key={course.id}
                        className={`min-w-[380px] ${index === 1
                                ? "border-2 border-purple-400 rounded-2xl"
                                : ""
                            }`}
                    >
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>

        </section>
    );
};

export default FilterWithTime;