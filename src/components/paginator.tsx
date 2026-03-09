import { useState } from 'react'
import {
  MdChevronLeft,
  MdChevronRight,
  MdEmail,
  MdPerson,
} from 'react-icons/md'

export const Paginator = () => {
  // return (
  //    <div className="flex justify-center items-center gap-2 mt-4">
  //         <button
  //           onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
  //           disabled={currentPage === 1}
  //           className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
  //         >
  //           <MdChevronLeft className="text-2xl" />
  //         </button>
  //         <div className="flex gap-1 px-4">
  //           {[...Array(totalPages)].map((_, i) => (
  //             <button
  //               key={i + 1}
  //               onClick={() => setCurrentPage(i + 1)}
  //               className={`w-10 h-10 rounded-lg font-medium transition-all ${
  //                 currentPage === i + 1
  //                   ? 'bg-blue-600 text-white shadow-md'
  //                   : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
  //               }`}
  //             >
  //               {i + 1}
  //             </button>
  //           ))}
  //         </div>
  //         <button
  //           onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
  //           disabled={currentPage === totalPages || totalPages === 0}
  //           className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
  //         >
  //           <MdChevronRight className="text-2xl" />
  //         </button>
  //       </div>
  // )
}
