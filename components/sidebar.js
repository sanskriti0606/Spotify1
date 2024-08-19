// src/components/Sidebar.js
import React from "react";
import Link from "next/link";
import { HomeIcon, SearchIcon, LibraryIcon } from "@heroicons/react/outline"; // Use Heroicons for icons

const Sidebar = () => {
  return (
    <div className="bg-black text-white w-64 h-screen flex flex-col fixed">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Spotify</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/">
                <a className="flex items-center space-x-3 hover:text-green-500">
                  <HomeIcon className="h-6 w-6" />
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/search">
                <a className="flex items-center space-x-3 hover:text-green-500">
                  <SearchIcon className="h-6 w-6" />
                  <span>Search</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/library">
                <a className="flex items-center space-x-3 hover:text-green-500">
                  <LibraryIcon className="h-6 w-6" />
                  <span>Your Library</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-auto p-6">
        <button className="text-white bg-green-500 py-2 px-4 rounded-full w-full">
          Sign Up
        </button>
        <button className="mt-4 py-2 px-4 rounded-full w-full border border-white">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
