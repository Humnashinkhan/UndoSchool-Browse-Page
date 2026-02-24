import { useState } from "react";

const ages = [
  { label: "1-2", border: "border-yellow-400", bg: "bg-yellow-400" },
  { label: "2-3", border: "border-yellow-400", bg: "bg-yellow-400" },
  { label: "3-4", border: "border-yellow-400", bg: "bg-yellow-400" },

  { label: "4-5", border: "border-orange-400", bg: "bg-orange-400" },
  { label: "5-6", border: "border-orange-400", bg: "bg-orange-400" },
  { label: "6-7", border: "border-orange-400", bg: "bg-orange-400" },

  { label: "7-8", border: "border-pink-400", bg: "bg-pink-400" },
  { label: "8-9", border: "border-pink-400", bg: "bg-pink-400" },
  { label: "9-10", border: "border-pink-400", bg: "bg-pink-400" },

  { label: "12-13", border: "border-green-400", bg: "bg-green-400" },
  { label: "13-14", border: "border-green-400", bg: "bg-green-400" },

  { label: "16-17", border: "border-blue-400", bg: "bg-blue-400" },
  { label: "17-18", border: "border-blue-400", bg: "bg-blue-400" },
];

const AgeFilter = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-gray-100 py-10 text-center">
         <h2 className="text-3xl font-semibold text-[#171717]">
        How Old Are You? 🎯
      </h2>
      <p className="mb-6 text-gray-600">
        Pick your age and find the perfect courses just for you! ✨
      </p>

      <div className="flex justify-center gap-3 flex-wrap max-w-7xl mx-auto px-4">
        {ages.map((age) => {
          const isSelected = selected === age.label;

          return (
            <button
              key={age.label}
              onClick={() => setSelected(age.label)}
              className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition duration-300
                ${
                  isSelected
                    ? `${age.bg} text-black ${age.border}`
                    : `${age.border} text-black bg-transparent`
                }`}
            >
              <span className="block leading-tight">{age.label}</span>
              <span className="block text-xs leading-tight">Years</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default AgeFilter;