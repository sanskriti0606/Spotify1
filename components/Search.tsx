import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handlesubmit = (e: any) => {
    if (e.key === "Enter" && query !== "") {
      router.push(`/search/${query.split(" ").join("-")}`);
    }
  };

  return (
    <div className="flex items-center border-b-2 border-blue-500 py-2">
      <input
        autoComplete="on"
        id="search-field"
        onChange={(e) => setQuery(e.target.value)}
        tabIndex={1}
        onKeyDown={handlesubmit}
        className="appearance-none bg-transparent border-none w-full text-gray-1000 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="search"
        placeholder="Search..."
      />

      {query !== "" && (
        <Link href={`/search/${query}`} type="submit">
          Search
        </Link>
      )}
    </div>
  );
};

export default Search;
