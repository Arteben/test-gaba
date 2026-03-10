import { useState } from 'react'
import { MdSearch, MdClose } from 'react-icons/md'

interface ISearchLineParams {
  searchCallback: (s: string) => void
}

let searchTimeout: number | undefined = undefined

export const SearchLine = ({ searchCallback }: ISearchLineParams) => {
  const [search, setSearch] = useState('')

  const onChangeFilter = (text: string) => {
    window.clearTimeout(searchTimeout)
    searchTimeout = window.setTimeout(() => {
      searchCallback(text)
      window.clearTimeout(searchTimeout)
    }, 500)
    setSearch(text)
  }

  return (
    <div className="relative group">
      <MdSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-2xl
                  group-focus-within:text-blue-500 transition-colors"
      />
      <input
        type="text"
        placeholder="Search users..."
        className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 shadow-sm
                  outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        value={search}
        onChange={(e) => {
          onChangeFilter(e.target.value)
        }}
      />

      {search && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onChangeFilter('')
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-700
                    hover:bg-slate-100 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          aria-label="Clear search"
        >
          <MdClose className="text-xl" />
        </button>
      )}
    </div>
  )
}
