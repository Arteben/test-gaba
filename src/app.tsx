import { useState, useEffect } from 'react'

import { MdEmail, MdPerson } from 'react-icons/md'

import { SearchLine } from '@/components/search-line'

interface IUser {
  name: string
  email: string
  avatar: string
}

const storeUsers: IUser[] = [
  {
    name: 'Alex Rivera',
    email: 'alex.r@example.com',
    avatar: 'https://i.pravatar.cc/150?u=1',
  },
  {
    name: 'Sarah Chen',
    email: 's.chen@example.com',
    avatar: 'https://i.pravatar.cc/150?u=2',
  },
  {
    name: 'Jordan Smyth',
    email: 'j.smyth@example.com',
    avatar: 'https://i.pravatar.cc/150?u=3',
  },
  {
    name: 'Maria Garcia',
    email: 'm.garcia@example.com',
    avatar: 'https://i.pravatar.cc/150?u=4',
  },
  {
    name: 'James Wilson',
    email: 'j.wilson@example.com',
    avatar: 'https://i.pravatar.cc/150?u=5',
  },
  {
    name: 'Elena Rossi',
    email: 'e.rossi@example.com',
    avatar: 'https://i.pravatar.cc/150?u=6',
  },
  {
    name: 'Kevin Lee',
    email: 'k.lee@example.com',
    avatar: 'https://i.pravatar.cc/150?u=7',
  },
]

export const App = () => {
  const [users, setUsers] = useState<IUser[]>(storeUsers)

  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 4
  // const [totalPages] = useState<number>(storeUsers.length / usersPerPage)

  const onSearchUsers = (text: string) => {
    setCurrentPage(1)
    setUsers(
      storeUsers.filter((u) =>
        u.name.toLowerCase().includes(text.toLowerCase())
      )
    )
  }

  // const setPage = () => {
  //   setUsers(
  //     users.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
  //   )
  // }

  // useEffect(() => {
  // }, [])

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <SearchLine
          searchCallback={(str) => {
            onSearchUsers(str)
          }}
        />

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
              {users.map((user, idx) => (
                <tr
                  key={idx}
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
          {users.length === 0 && (
            <div className="p-20 text-center text-slate-400">
              <MdPerson className="mx-auto text-5xl mb-2 opacity-20" />
              <p>No users found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
