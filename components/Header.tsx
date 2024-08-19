import React from "react";
import Link from "next/link";
import Search from "./Search";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component


const Header = () => {
  return (
    <nav className="bg-black">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link className="text-2xl font-bold text-white" href="/">
            Music World
          </Link>
          <div className="flex space-x-6 items-center">
            <Search />
            <Link className="text-sm text-gray-400 hover:text-white" href="/premium">
              Premium
            </Link>
            <Link className="text-sm text-gray-400 hover:text-white" href="/support">
              Support
            </Link>
            <Link className="text-sm text-gray-400 hover:text-white" href="/download">
              Download
            </Link>
            <div className="border-l border-gray-600 h-6 mx-4"></div>
            <Link className="text-sm text-gray-400 hover:text-white" href="/signup">
              Sign Up
            </Link>
            <Link className="text-sm text-white font-bold bg-green-500 px-4 py-2 rounded-full hover:bg-green-600" href="/login">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const router = useRouter();

//   const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter' && query) {
//       router.push(`/search/${query.split(' ').join('-')}`);
//     }
//   };

//   return (
//     <div className="flex items-center border-b border-gray-400 py-2">
//       <input
//         type="search"
//         className="w-full bg-black text-white outline-none"
//         placeholder="Search for songs, artists, etc."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={handleSearch}
//       />
//     </div>
//   );
// };

// export default Search;

