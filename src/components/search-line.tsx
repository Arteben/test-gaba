import React, { useState, useMemo } from "react";
// Material Design Icons from react-icons
import {
  MdSearch,
  MdChevronLeft,
  MdChevronRight,
  MdEmail,
  MdPerson,
} from "react-icons/md";

export const SearchLine = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  // Filter Logic
  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, users]);

  return (
    <>
      <div className="relative group">
        <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-2xl group-focus-within:text-blue-500 transition-colors" />
        <input
          type="text"
          placeholder="Search users..."
          className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 shadow-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
};
