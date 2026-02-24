import { useState } from "react";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

// import your images properly
import codingImg from "../assets/coding.jpg";
import speakingImg from "../assets/Speaking.jpg";
import chessImg from "../assets/Chess.jpg";
import homeworkImg from "../assets/HomeWork.jpg";
import appImg from "../assets/App.png";

const categories = [
  { name: "Coding", image: codingImg },
  { name: "Public speaking", image: speakingImg },
  { name: "Chess", image: chessImg },
  { name: "Home work help", image: homeworkImg },
  { name: "App building", image: appImg },
];

const PopularCategories = () => {
  const [active, setActive] = useState("Coding");

  return (
    <section className="w-full bg-gray-100 py-10">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
          Popular Categories
        </h2>
        <p className="text-gray-500 mt-4">
          Pick what you love most! These categories have everything you need to
          learn something awesome ✨
        </p>
      </div>

      {/* Categories Row */}
      <div className="max-w-7xl mx-auto px-6 flex justify-center gap-6 flex-wrap mb-20">

        {categories.map((cat) => {
          const isActive = active === cat.name;

          return (
            <div
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`relative cursor-pointer rounded-2xl px-10 py-8 w-56 text-center transition duration-300
                ${
                  isActive
                    ? "bg-orange-500 text-white shadow-[0_15px_40px_rgba(255,115,0,0.5)]"
                    : "bg-white border border-gray-300 text-gray-700 hover:shadow-md"
                }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-30 h-30 object-contain mx-auto mb-4"
              />

              <h3 className="font-semibold text-lg">
                {cat.name}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.slice(0, 4).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </section>
  );
};

export default PopularCategories;