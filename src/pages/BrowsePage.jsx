import { useState } from "react";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import AgeFilter from "../components/AgeFilter";
import SectionHeader from "../components/SectionHeader";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import TopTeachers from "../components/TopTeachers";
import UpcomingWebinar from "../components/UpcomingWebinar";
import PopularCategories from "../components/PopularCategories";
import FilterWithTime from "../components/FilterWithTIme";

const BrowsePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TopBar/>
      <Hero onSearch={setSearchTerm} />
      <AgeFilter />

      <main className="max-w-8xl mx-auto py-16">

        <SectionHeader
          title="New Launches ⭐"
          subtitle="Our most loved courses that kids absolutely adore!"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <TopTeachers/>
        <UpcomingWebinar/>
        <PopularCategories/>
        <FilterWithTime/>
      </main>
    </>
  );
};

export default BrowsePage;