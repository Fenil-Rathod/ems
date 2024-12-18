import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 mt-7 rounded bg-[#1c1c1c]'>
        <form className='flex flex-wrap w- items-start justify-between'>
            <div className='w-1/2'>
                <div> 
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3> 
                    <input type='text' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Task Title'></input>
                 </div>
                <div> 
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3> 
                    <input type='date' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Enter Date'></input>
                 </div>
                <div> 
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assigned Task</h3> 
                    <input type='text' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Employee Name'></input>
                 </div>
                <div> 
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3> 
                    <input type='text' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Dev, Design, etc.'></input>
                 </div>

            </div>
                <div className='w-2/5  flex flex-col items-start'> 
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' type='text' placeholder='Dev, Design, etc.' name='' id=''> </textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'> Create Task </button>
                </div> 
        </form> 
    </div>
  )
}

export default CreateTask