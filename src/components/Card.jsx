import React from 'react'

function Card() {
  return (
    <>
    <div className='flex flex-1 items-center justify-center gap-[1rem] mt-4 mb-5'>
        <div className='flex flex-col border border-slate-500 p-[3rem] rounded-md '>
            <h1 className='text-xl font-bold'>On Time</h1>
            <div className='flex flex-col'>
                <div className='flex flex-1 justify-center items-center gap-[4rem]'>
                    <span>Completed Iteration</span>
                    <b>7</b>
                </div>
                <div className='flex flex-1 justify-between'>
                    <span>Total Iteration</span>
                    <b>9</b>
                </div>
                <div className='flex flex-1 justify-between '>
                    <span>%Iteration Done</span>
                    <b>77.8%</b>
                </div>
            </div>
        </div>
        <div className='flex flex-col border border-slate-500 p-[3rem] rounded-md'>
            <h1 className='text-xl font-bold '>On Scope</h1>
            <div className='flex flex-col'>
                <div className='flex flex-1 justify-center items-center gap-[4rem]'>
                    <span>Story Points Done</span>
                    <b>3200</b>
                </div>
                <div className='flex flex-1 justify-between'>
                    <span>Total Story Points</span>
                    <b>4230</b>
                </div>
                <div className='flex flex-1 justify-between'>
                    <span>%Stories Done</span>
                    <b>70.9%</b>
                </div>
            </div>
        </div>
        <div className='flex flex-col border border-slate-500 p-[3.5rem] rounded-md'>
            <h1 className='text-xl font-bold'>On Velocity</h1>
            <div className='flex flex-col'>
                <div className='flex flex-1 justify-center items-center gap-[4rem]'>
                    <span>Average Velocity</span>
                    <b>428.6</b>
                </div>
                <div className='flex flex-1 justify-between'>
                    <span>Required Velocity</span>
                    <b>615.0</b>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Card