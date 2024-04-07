import React from 'react'
import { Plus } from 'lucide-react';

function Buttons() {
  return (
    <>
    <div className='flex flex-1 justify-center mt-[2rem] gap-10 items-center  '>
    <button
      type="button"
      className="rounded-full bg-[#2F667F] px-5 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
        <div className='flex flex-1 items-center justify-center'>
<span>
    <Plus className='text-white'/>
</span>
      <span>
        Create Report 
        
        </span>

        </div>
    </button>
    <button
      type="button"
      className="rounded-full bg-transparent px-6 py-2 text-sm font-semibold text-[#2F667F] shadow-sm text-[#2F667F] border border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Share this dashBoard
    </button>
    <button
      type="button"
      className="rounded-full bg-transparent border border-slate-500 px-6 py-2 text-sm font-semibold text-slate-500 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Select Duration
    </button>
    <button
      type="button"
      className="rounded-full bg-transparent px-6 py-2 text-sm font-semibold text-slate-500 shadow-sm border border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Compare with  Duration
    </button>
    </div>
    </>
  )
}

export default Buttons