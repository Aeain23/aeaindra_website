import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl text-slate-800">
              A Eain Dra @Ethan
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["summary", "skills", "experience", "projects", "education"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
