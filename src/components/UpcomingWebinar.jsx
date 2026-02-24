import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

const UpcomingWebinar = () => {
  return (
    <section className="w-full bg-gray-100 py-16">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
          Webinar starting within 24hrs
        </h2>
      </div>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.slice(0, 4).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </section>
  );
};

export default UpcomingWebinar;