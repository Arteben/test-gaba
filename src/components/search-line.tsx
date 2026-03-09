import { useState } from 'react'
// Material Design Icons from react-icons
import { MdSearch } from 'react-icons/md'

interface ISearchLineParams {
  filterCallback: () => void
}

let searchTimeout: number | undefined = undefined

export const SearchLine = ({ filterCallback }: ISearchLineParams) => {
  const [search, setSearch] = useState('')

  const onChangeFilter = (text: string) => {
    searchTimeout = window.setTimeout(() => {
      console.log('search text', text)
      filterCallback()

      window.clearTimeout(searchTimeout)
    }, 600)
  }

  return (
    <div className="relative group">
      <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-2xl group-focus-within:text-blue-500 transition-colors" />
      <input
        type="text"
        placeholder="Search users..."
        className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 shadow-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        value={search}
        onChange={(e) => {
          onChangeFilter(e.target.value)
        }}
      />
    </div>
  )
}
