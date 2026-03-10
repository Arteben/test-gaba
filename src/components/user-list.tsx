import { MdEmail, MdPerson } from 'react-icons/md'

import type { IUser } from '@/types'

interface IParamsUserList {
  users: IUser[]
}

export const UserList = ({ users }: IParamsUserList) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-sm font-semibold text-slate-600">
              Avatar
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-600">
              First name
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-600">
              Last name
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-slate-600">
              Email
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {users.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-slate-50/80 transition-colors"
            >
              <td className="px-6 py-4">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="w-12 h-12 rounded-full ring-2 ring-white shadow-sm"
                />
              </td>
              <td className="px-6 py-4 font-medium">{user.firstName}</td>
              <td className="px-6 py-4 font-medium">{user.lastName}</td>
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

      {users.length === 0 && (
        <div className="p-20 text-center text-slate-400">
          <MdPerson className="mx-auto text-5xl mb-2 opacity-20" />
          <p>No users found matching your search.</p>
        </div>
      )}
    </div>
  )
}
