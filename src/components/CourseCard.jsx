const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="rounded-xl h-48 w-full object-cover"
        />
        {course.selling && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
            Selling Fast
          </span>
        )}
      </div>

      <div className="flex gap-2 mt-3 flex-wrap">
        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
          {course.language}
        </span>
        <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
          {course.level}
        </span>
        <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">
          {course.classes}
        </span>
      </div>

      <h3 className="mt-3 font-semibold line-clamp-2">
        {course.title}
      </h3>

      <p className="text-sm text-gray-500 mt-2 line-clamp-2">
        {course.description}
      </p>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span>{course.age}</span>
        <span>{course.duration} mins</span>
        <span className="font-bold">₹{course.price}</span>
      </div>

    </div>
  );
};

export default CourseCard;