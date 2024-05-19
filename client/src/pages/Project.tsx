// icons
import {CiSearch} from "react-icons/ci";

// hooks
import useInput from "@hooks/useInput.tsx";

// components
import ColumnsList from "@components/project/ColumnsList.tsx";

export default function Project() {
    // const API_URL = import.meta.env.VITE_API_URL;
    const search = useInput('');

    // async function createKanbanHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    //     if (event.key !== 'Enter') {
    //         return;
    //     }
    //
    //     try {
    //         const response = await axios.post(`${API_URL}/kanbans`, {
    //             title: newKanbanTitle
    //         })
    //
    //         setKanbans([...response.data]);
    //         setNewKanbanTitle('');
    //         setIsCreateKanbanModalOpen(false);
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // function createTaskHandler(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    //     if (event.key !== 'Enter') {
    //         return;
    //     }
    //
    //     setTasks([...tasks, {
    //         id: Date.now(),
    //         title: newTaskTitle,
    //         status: 'todo'
    //     }]);
    //
    //     setNewTaskTitle('');
    //     setCreateTaskModalOpen('');
    // }

    return (
        <div className='px-[40px] m-auto mt-[20px] flex gap-2 overflow-x-auto flex-col'>
            <div className='max-w-[400px] mt-[30px] mb-[20px]'>
                <h1
                    className='text-[24px] py-[5px] w-fit rounded font-semibold'>
                    Доска Test
                </h1>
            </div>
            <div className='bg-white flex items-center max-w-[220px] rounded border border-gray-400 h-[40px] mb-[40px]'>
                <CiSearch className='w-[25px] h-[25px] ml-[8px]'/>
                <input {...search}
                       type='text'
                       className='w-[270px] h-[20px] bg-white rounded p-[5px] mr-[3px] outline-none'
                       placeholder='Поиск'
                />
            </div>
            <div className='flex gap-2'>
                <ColumnsList search={search}/>
            </div>
        </div>
    )
}