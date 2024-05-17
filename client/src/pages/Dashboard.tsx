import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import {CiSearch} from "react-icons/ci";

type Task = {
    id: number,
    title: string,
    status: 'todo' | 'in-progress' | 'done'
}

type Kanban = {
    _id: string,
    title: string,
    tasks?: string[],
}

export default function Dashboard(){
    const API_URL = import.meta.env.VITE_API_URL;

    const [tasks, setTasks] = useState<Task[]>([]);
    const [kanbans, setKanbans] = useState<Kanban[]>([])

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newKanbanTitle, setNewKanbanTitle] = useState('');

    const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
    const [isCreateKanbanModalOpen, setIsCreateKanbanModalOpen] = useState(false);

    const [mouseEnteredKanban, setMouseEnteredKanban] = useState('');
    const [mouseEnteredKanbanTitle, setMouseEnteredKanbanTitle] = useState('');

    useEffect(() => {
        getKanbans().then(data => setKanbans(data));
    }, []);

    async function getKanbans() {
        try {
            const response = await axios.get(`${API_URL}/kanbans`);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    }
    async function createKanbanHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key !== 'Enter') {
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/kanbans`, {
                title: newKanbanTitle
            })

            setKanbans([...response.data]);
            setNewKanbanTitle('');
            setIsCreateKanbanModalOpen(false);
        }catch (error) {
            console.error(error)
        }
    }
    async function deleteKanbanHandler(id: string) {
        try {
            console.log('hashdhasd')
            const response = await axios.delete(`${API_URL}/kanbans/${id}`);
            setKanbans([...response.data]);
        } catch (error){
            console.error(error);
        }
    }

    function createTaskHandler (event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.key !== 'Enter') {
            return;
        }

        setTasks([...tasks, {
            id: Date.now(),
            title: newTaskTitle,
            status: 'todo'
        }]);

        setNewTaskTitle('');
        setIsCreateTaskModalOpen(false);
    }

    return (
        <div className='px-[40px] m-auto mt-[20px] flex gap-2 overflow-x-auto flex-col'>
            <div className='max-w-[385px] mt-[30px] mb-[20px]'>
                <h1 className='text-[24px] py-[5px] w-fit rounded font-semibold hover:bg-gray-200 transition-all'>
                    Доска KANasd
                </h1>
            </div>
            <div className='bg-white flex items-center max-w-[220px] rounded border border-gray-400 h-[40px] mb-[40px]'>
                <CiSearch className='w-[25px] h-[25px] ml-[8px]'/>
                <input type='text' className='w-[270px] h-[20px] bg-white rounded p-[5px] mr-[3px] outline-none' placeholder='Поиск'/>
            </div>
            <div className='flex gap-2'>
                <div className='w-[270px] bg-amber-500 min-h-[600px] pt-[15px] pl-[10px] rounded'>
                    <span>К выполнению</span>

                    <div className='my-[10px] flex flex-col gap-2'>
                        {tasks.map(task =>
                            <div key={task.id} className='max-w-[100%] overflow-auto'>{task.title}</div>
                        )}
                        {isCreateTaskModalOpen ?
                            <input
                                autoFocus
                                type='text'
                                value={newTaskTitle}
                                onBlur={() => setIsCreateTaskModalOpen(false)}
                                onKeyDown={event => createTaskHandler(event)}
                                onChange={event => setNewTaskTitle(event.target.value)}
                                className='bg-amber-500 outline-none placeholder:text-black'
                            /> :
                            <button onClick={() => setIsCreateTaskModalOpen(true)} className='flex items-center gap-2'>
                                <FaPlus/>Создать
                            </button>
                        }
                    </div>
                </div>
                <div className='w-[270px] bg-amber-500 min-h-[600px] pt-[15px] pl-[10px] rounded'>
                    <span>В работе</span>
                </div>
                <div className='w-[270px] bg-amber-500 min-h-[600px] pt-[15px] pl-[10px] rounded'>
                    <div className='flex gap-2 items-center'>Готово <IoMdCheckmark/></div>
                </div>

                {kanbans.map(kanban =>
                    <div
                        onMouseEnter={() => setMouseEnteredKanban(kanban._id)}
                        onMouseLeave={() => setMouseEnteredKanban('')}
                        key={kanban._id}
                        className='min-w-[270px] bg-[#f7f8f9] min-h-[600px] rounded'
                    >
                        <div
                            onMouseEnter={() => setMouseEnteredKanbanTitle(kanban._id)}
                            onMouseLeave={() => setMouseEnteredKanbanTitle('')}
                            className='flex gap-2 py-[8px] px-[8px]'
                        >
                            <span
                                className='w-full flex items-center cursor-pointer h-[40px] pl-[8px] hover:bg-gray-300 transition-all rounded bg-gray-200'>{kanban.title}</span>

                            {mouseEnteredKanbanTitle === kanban._id && (
                                <div onClick={() => deleteKanbanHandler(kanban._id)}
                                     className='bg-gray-200 p-[8px] rounded hover:cursor-pointer transition-all hover:bg-gray-300'>
                                    <BsThreeDots className='w-[24px] h-[24px]'/>
                                </div>
                            )}
                        </div>

                        {mouseEnteredKanban === kanban._id && (
                            <div
                                className='flex gap-2 items-center mx-[8px] p-[8px] rounded hover:cursor-pointer transition-all hover:bg-gray-300'>
                                <FaPlus className='w-[16px] h-[16px]'/>
                                Create a task
                            </div>
                        )}
                    </div>
                )}

                <div>
                    {isCreateKanbanModalOpen ?
                        <div className='bg-gray-200 h-[42px] p-[5px] rounded'>
                            <input
                                autoFocus
                                type='text'
                                value={newKanbanTitle}
                                onBlur={() => setIsCreateKanbanModalOpen(false)}
                                onKeyDown={(event) => createKanbanHandler(event)}
                                onChange={event => setNewKanbanTitle(event.target.value)}
                                className='pl-[5px] rounded bg-none h-full placeholder:text-black outline-blue-500'
                            />
                        </div> :
                        <FaPlus
                            onClick={() => setIsCreateKanbanModalOpen(true)}
                            className='w-[42px] h-[42px] p-[13px] cursor-pointer hover:bg-gray-300 transition-all rounded bg-[#091e420f]'
                        />
                    }
                </div>
            </div>
        </div>
    )
}