import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import teacherImg from "../assets/img.jpg";

const teachers = [
  {
    name: "Andy Brew",
    subject: "Computer science",
    image: teacherImg,
  },
  {
    name: "Andy Brew",
    subject: "English",
    image: teacherImg,
  },
  {
    name: "Andy Brew",
    subject: "Early educator",
    image: teacherImg,
  },
  {
    name: "Andy Brew",
    subject: "Coding",
    image: teacherImg,
  },
 
];

const TopTeachers = () => {
  return (
    <section className="py-20 bg-gray-50">

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
          Learn from Top Teachers
        </h2>
        <p className="text-gray-500 mt-4">
          Expert instructors who make learning fun and engaging for every child
        </p>
      </div>

      {/* Teachers */}
      <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8 flex-wrap mb-20">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl border border-gray-200 w-60 pt-14 pb-6 px-6 text-center hover:shadow-md transition duration-300"
          >
            {/* Profile Image (Overlapping Style) */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm"
              />
            </div>

            {/* Name */}
            <h3 className="font-semibold text-lg text-gray-800">
              {teacher.name}
            </h3>

            {/* Qualification */}
            <p className="text-sm text-gray-400 mt-1">
              M.Sc, B.Ed &nbsp; | &nbsp; 15+ Years
            </p>

            {/* Students */}
            <p className="text-sm text-gray-400 mt-1">
              1000+ Students
            </p>

            {/* Subject Badge */}
            <div className="mt-4">
              <span className="text-xs px-4 py-1 bg-gray-100 rounded-full text-gray-600">
                {teacher.subject}
              </span>
            </div>
          </div>
        ))}
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

export default TopTeachers;