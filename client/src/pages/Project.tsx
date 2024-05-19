import {useEffect, useState} from "react";

// icons
import {CiSearch} from "react-icons/ci";

// models
import {TicketModel} from "@models/TicketModel.ts";

// services
import {TicketsService} from "@services/TicketsService.ts";

// hooks
import useInput from "@hooks/useInput.tsx";
import ColumnList from "@components/project/ColumnList.tsx";

export default function Project() {
    // const API_URL = import.meta.env.VITE_API_URL;
    const search = useInput('');

    const [tickets, setTickets] = useState<TicketModel[]>([]);

    // const [dashboardTitleModalOpen, setDashboardTitleModalOpen] = useState(false);
    //
    // const [tasks, setTasks] = useState<Task[]>([]);
    //
    // const [newTaskTitle, setNewTaskTitle] = useState('');
    // const [newKanbanTitle, setNewKanbanTitle] = useState('');
    //
    // const [createTaskModalOpen, setCreateTaskModalOpen] = useState('');
    // const [isCreateKanbanModalOpen, setIsCreateKanbanModalOpen] = useState(false);
    //
    // const [mouseEnteredKanban, setMouseEnteredKanban] = useState('');
    // const [mouseEnteredKanbanTitle, setMouseEnteredKanbanTitle] = useState('');

    useEffect(() => {
        TicketsService
            .getTickets()
            .then(tickets => setTickets(tickets));
    }, []);

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
                {/*{kanbans.map(kanban =>*/}
                {/*    <div*/}
                {/*        onMouseEnter={() => setMouseEnteredKanban(kanban._id)}*/}
                {/*        onMouseLeave={() => setMouseEnteredKanban('')}*/}
                {/*        key={kanban._id}*/}
                {/*        className='min-w-[270px] bg-[#f7f8f9] min-h-[600px] rounded'>*/}
                {/*        <div*/}
                {/*            onMouseEnter={() => setMouseEnteredKanbanTitle(kanban._id)}*/}
                {/*            onMouseLeave={() => setMouseEnteredKanbanTitle('')}*/}
                {/*            className='flex gap-2 py-[8px] px-[8px]'>*/}
                {/*            <span*/}
                {/*                className='w-full flex items-center cursor-pointer h-[40px] pl-[8px] hover:bg-gray-300 transition-all rounded bg-gray-200'>*/}
                {/*                {kanban.title}*/}
                {/*            </span>*/}

                {/*            {mouseEnteredKanbanTitle === kanban._id && (*/}
                {/*                <div onClick={() => deleteKanbanHandler(kanban._id)}*/}
                {/*                     className='bg-gray-200 p-[8px] rounded hover:cursor-pointer transition-all hover:bg-gray-300'>*/}
                {/*                    <BsThreeDots className='w-[24px] h-[24px]'/>*/}
                {/*                </div>*/}
                {/*            )}*/}
                {/*        </div>*/}

                {/*        {mouseEnteredKanban === kanban._id && (*/}
                {/*            createTaskModalOpen === kanban._id ?*/}
                {/*                <div*/}
                {/*                    className='h-[100px] border-2 border-blue-500 mx-[8px] w-[254px] bg-white rounded flex flex-col justify-between'>*/}
                {/*                    <textarea*/}
                {/*                        placeholder='What do you need to do?'*/}
                {/*                        onBlur={() => setCreateTaskModalOpen('')}*/}
                {/*                        autoFocus*/}
                {/*                        maxLength={255}*/}
                {/*                        value={newTaskTitle}*/}
                {/*                        onKeyDown={event => createTaskHandler(event)}*/}
                {/*                        onChange={event => setNewTaskTitle(event.target.value)}*/}
                {/*                        className='w-full h-[44px] outline-none resize-none p-[10px]'*/}
                {/*                    />*/}
                {/*                    <div*/}
                {/*                        className='flex items-center hover:bg-gray-200 p-[5px] w-fit cursor-pointer rounded mb-[8px] ml-[8px]'>*/}
                {/*                        <FaCheckSquare className='text-blue-400  mr-[4px]'/>*/}
                {/*                        <MdOutlineKeyboardArrowDown/>*/}
                {/*                    </div>*/}
                {/*                </div> :*/}
                {/*                <div*/}
                {/*                    onClick={() => setCreateTaskModalOpen(kanban._id)}*/}
                {/*                    className='flex gap-2 items-center mx-[8px] p-[8px] rounded hover:cursor-pointer transition-all hover:bg-gray-300'>*/}
                {/*                    <FaPlus className='w-[16px] h-[16px]'/>*/}
                {/*                    <span>Create a task</span>*/}
                {/*                </div>*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*)}*/}


                {/*isCreateKanbanModalOpen ?*/}
                {/*    <div className='w-[270px]'>*/}
                {/*        <div className='flex flex-col'>*/}
                {/*            <div className='bg-[#f7f8f9] h-[42px] p-[5px] rounded'>*/}
                {/*                <input*/}
                {/*                    autoFocus*/}
                {/*                    maxLength={30}*/}
                {/*                    value={newKanbanTitle}*/}
                {/*                    onBlur={() => setIsCreateKanbanModalOpen(false)}*/}
                {/*                    onKeyDown={(event) => createKanbanHandler(event)}*/}
                {/*                    onChange={event => setNewKanbanTitle(event.target.value)}*/}
                {/*                    className='pl-[5px] rounded bg-none h-full w-full placeholder:text-black outline-blue-500'*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <div className='flex gap-[6px] mt-[6px] justify-end'>*/}
                {/*                <IoMdCheckmark*/}
                {/*                    onClick={() => createKanbanHandler({key: 'Enter'} as React.KeyboardEvent<HTMLInputElement>)}*/}
                {/*                    className='w-[32px] hover:bg-gray-200 transition-all cursor-pointer h-[32px] p-[8px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.05),_10px_10px_30px_4px_rgba(0,0,0,0.10)] rounded'/>*/}
                {/*                <FaXmark*/}
                {/*                    className='w-[32px] hover:bg-gray-200 transition-all cursor-pointer h-[32px] p-[8px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.05),_10px_10px_30px_4px_rgba(0,0,0,0.10)] rounded'/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div> :*/}
                {/*    <FaPlus*/}
                {/*        onClick={() => setIsCreateKanbanModalOpen(true)}*/}
                {/*        className='w-[42px] h-[42px] p-[13px] cursor-pointer hover:bg-gray-300 transition-all rounded bg-[#091e420f]'*/}
                {/*    />*/}
                {/*}*/}

                <ColumnList search={search} tickets={tickets}/>
            </div>
        </div>
    )
}