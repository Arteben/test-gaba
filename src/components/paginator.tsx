import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface IPaginatorParams {
  total: number
  skip: number
  limit: number
  onChangePage: (skip: number) => void
}

interface IPage {
  int: number
  ellipsis: boolean
}

const getRightEllipsisWindow = (
  current: number,
  total: number,
  delta: number = 2
): IPage[] => {
  const pages: IPage[] = []

  const start = Math.max(1, current - delta)
  const end = Math.min(total, current + delta)

  for (let i = start; i <= end; i++) {
    pages.push({ int: i, ellipsis: false })
  }

  if (end < total - 1) {
    pages.push({ int: -1, ellipsis: true })
    pages.push({ int: total, ellipsis: false })
  } else if (end === total - 1) {
    pages.push({ int: total, ellipsis: false })
  }

  return pages
}

export const Paginator = ({
  limit,
  total,
  skip,
  onChangePage,
}: IPaginatorParams) => {
  const totalPages = Math.ceil(total / limit)
  const currentPage = Math.ceil(skip / limit) + 1
  console.log(
    'get current page',
    'current page: ',
    currentPage,
    'skip: ',
    skip,
    'result: ',
    Math.ceil(skip / limit)
  )
  const prevPage = currentPage > 1 ? currentPage - 1 : -1
  const nextPage = currentPage >= totalPages ? -1 : currentPage + 1

  const pages = getRightEllipsisWindow(currentPage, totalPages)

  const setPage = (page: number) => {
    onChangePage(limit * (page - 1))
  }

  return (
    <>
      {pages.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => setPage(prevPage)}
            disabled={prevPage == -1}
            className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <MdChevronLeft className="text-2xl" />
          </button>
          <div className="flex gap-1 px-4">
            {pages.map((page, idx) => (
              <button
                key={idx}
                onClick={() => setPage(page.int)}
                disabled={currentPage === page.int || page.int == -1}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  currentPage === page.int
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
                }`}
              >
                {page.ellipsis ? '...' : page.int}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPage(nextPage)}
            disabled={nextPage == -1}
            className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <MdChevronRight className="text-2xl" />
          </button>
        </div>
      )}
    </>
  )
}
