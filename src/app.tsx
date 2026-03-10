import { useState, useEffect } from 'react'

import { SearchLine } from '@/components/search-line'
import { Paginator } from '@/components/paginator'
import { UserList } from '@/components/user-list'

import type { IUser } from '@/types'

interface IServerData {
  users: IUser[]
  total: number
  skip: number
  limit: number
}

interface IFilters {
  skip: number
  search: string
}

const APIURL = 'https://dummyjson.com/users'

const handleResponse = async (url: string): Promise<IServerData | null> => {
  const rawData = await fetch(url)
  if (!rawData.ok) {
    return null
  }
  try {
    const data = await rawData.json()
    return data
  } catch (e) {
    console.error(e)
    return null
  }
}

const fetchusers = async (skip: number, limit: number) => {
  const url = `${APIURL}?limit=${limit}&skip=${skip}`
  return await handleResponse(url)
}

const fetchSearchUsers = async (text: string, skip: number, limit: number) => {
  const url = `${APIURL}/search?q=${text}&limit=${limit}&skip=${skip}`
  return await handleResponse(url)
}

export const App = () => {
  const limitPerPage = 8
  const [total, setTotal] = useState<number>(0)
  const [users, setUsers] = useState<IUser[]>([])
  const [filters, setFilters] = useState<IFilters>({ skip: 0, search: '' })

  useEffect(() => {
    const setData = (data: IServerData | null) => {
      if (data == null) return

      setUsers(data.users)
      setTotal(data.total)
    }

    const getUsers = async () => {
      const storeUsers = await fetchusers(filters.skip, limitPerPage)
      setData(storeUsers)
    }

    const getSearchedUsers = async () => {
      const storeUsers = await fetchSearchUsers(
        filters.search,
        filters.skip,
        limitPerPage
      )
      setData(storeUsers)
    }

    if (filters.search) {
      getSearchedUsers()
    } else {
      getUsers()
    }
  }, [filters])

  const onSearchUsers = (text: string) => {
    setFilters({ search: text, skip: 0 })
  }

  const setNewPage = (skip: number) => {
    setFilters((prevFilters) => ({ ...prevFilters, skip }))
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <SearchLine searchCallback={(str) => onSearchUsers(str)} />

        <UserList users={users}></UserList>

        <Paginator
          total={total}
          skip={filters.skip}
          limit={limitPerPage}
          onChangePage={(id) => setNewPage(id)}
        />
      </div>
    </div>
  )
}
