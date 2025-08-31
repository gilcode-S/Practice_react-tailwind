import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Section */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-bold text-yellow-400">RagnarokBuilder</span>.  
          All rights reserved.
        </p>

        {/* Center Section */}
        <p className="text-sm italic">
          Built with ❤️ by a <span className="text-yellow-400 font-semibold">Doc Developer</span>
        </p>

        {/* Right Section */}
        <div className="flex gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
