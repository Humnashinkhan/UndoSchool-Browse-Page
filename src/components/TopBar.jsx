const TopBar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Side - Logo + Course */}
        <div className="flex items-center gap-10">
          <div className="text-2xl font-bold">Logo</div>

          <nav>
            <span className="text-purple-600 border-b-2 border-purple-600 pb-1 cursor-pointer">
              Course
            </span>
          </nav>
        </div>

        {/* Right Side - Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-purple-600 transition">
            Login
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full hover:opacity-90 transition">
            Register for free
          </button>
        </div>

      </div>
    </header>
  );
};

export default TopBar;