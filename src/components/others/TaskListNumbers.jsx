import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='w-[45%] bg-red-400 py-5 px-9 rounded-xl'>
            <h2 className='font-bold text-3xl'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] bg-green-400 py-5 px-9 rounded-xl'>
            <h2 className='font-bold text-3xl'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] bg-blue-400 py-5 px-9 rounded-xl'>
            <h2 className='font-bold text-3xl'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] bg-yellow-400 py-5 px-9 rounded-xl'>
            <h2 className='font-bold text-3xl'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers