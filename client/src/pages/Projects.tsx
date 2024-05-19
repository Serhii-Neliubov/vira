export default function Projects() {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-[24px] font-semibold mt-[16px]'>Projects</h1>
            <div className='flex flex-col items-center mt-[16px]'>
                <div className='bg-white p-[8px] rounded mt-[8px] hover:bg-gray-200 transition-all'>
                    <h3 className='text-[16px] font-semibold'>Project 1</h3>
                    <p className='text-[14px]'>Description of project 1</p>
                </div>
                <div className='bg-white p-[8px] rounded mt-[8px] hover:bg-gray-200 transition-all'>
                    <h3 className='text-[16px] font-semibold'>Project 2</h3>
                    <p className='text-[14px]'>Description of project 2</p>
                </div>
                <div className='bg-white p-[8px] rounded mt-[8px] hover:bg-gray-200 transition-all'>
                    <h3 className='text-[16px] font-semibold'>Project 3</h3>
                    <p className='text-[14px]'>Description of project 3</p>
                </div>
            </div>
        </div>
    )
}