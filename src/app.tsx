import React, { useState, useMemo } from "react";
// Material Design Icons from react-icons
import {
  MdSearch,
  MdChevronLeft,
  MdChevronRight,
  MdEmail,
  MdPerson,
} from "react-icons/md";

export const App = () => {
  // Mock Data
  const [users] = useState([
    {
      id: 1,
      name: "Alex Rivera",
      email: "alex.r@example.com",
      avatar: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "s.chen@example.com",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      name: "Jordan Smyth",
      email: "j.smyth@example.com",
      avatar: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 4,
      name: "Maria Garcia",
      email: "m.garcia@example.com",
      avatar: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 5,
      name: "James Wilson",
      email: "j.wilson@example.com",
      avatar: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 6,
      name: "Elena Rossi",
      email: "e.rossi@example.com",
      avatar: "https://i.pravatar.cc/150?u=6",
    },
    {
      id: 7,
      name: "Kevin Lee",
      email: "k.lee@example.com",
      avatar: "https://i.pravatar.cc/150?u=7",
    },
  ]);

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

  // Pagination Logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const currentData = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage,
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* 1. Search Line */}
        <div className="relative group">
          <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-2xl group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 shadow-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* 2. Table Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Avatar
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Name
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentData.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="px-6 py-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full ring-2 ring-white shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-slate-500">
                    <div className="flex items-center gap-2">
                      <MdEmail className="text-slate-400" />
                      {user.email}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {filteredUsers.length === 0 && (
            <div className="p-20 text-center text-slate-400">
              <MdPerson className="mx-auto text-5xl mb-2 opacity-20" />
              <p>No users found matching your search.</p>
            </div>
          )}
        </div>

        {/* 3. Paginator (Centered) */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <MdChevronLeft className="text-2xl" />
          </button>

          <div className="flex gap-1 px-4">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-400"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <MdChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
