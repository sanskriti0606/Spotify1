import React from "react";
import Link from "next/link";
import Search from "./Search";
const Header = () => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link className="text-xl font-bold justify-between" href="/">
            Music World
          </Link>
          <div className="flex space-x-4">
            <Search />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
