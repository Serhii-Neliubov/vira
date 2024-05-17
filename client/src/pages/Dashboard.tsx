import React from "react";
import {FaPlus} from "react-icons/fa";
import {useState} from "react";
import {IoMdCheckmark} from "react-icons/io";
import toast from "react-hot-toast";

type Task = {
    id: number,
    title: string,
    status: 'todo' | 'in-progress' | 'done'
}

type Kanban = {
    id: number,
    title: string
}

export default function Dashboard(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [kanbans, setKanbans] = useState<Kanban[]>([])

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newKanbanTitle, setNewKanbanTitle] = useState('');

    const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
    const [isCreateKanbanModalOpen, setIsCreateKanbanModalOpen] = useState(false);

    const createTaskHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
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

    const createKanbanHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(!newKanbanTitle.length) {
            return toast.error('Title is required!');
        }

        if(event.key !== 'Enter') {
            return;
        }

        const kanban = {
            id: Date.now(),
            title: newKanbanTitle,
        }

        setKanbans([...kanbans, kanban]);
        setNewKanbanTitle('');
        setIsCreateKanbanModalOpen(false);
    }

    return (
        <div className='max-w-[1280px] m-auto mt-[20px] flex gap-2 overflow-x-auto'>
            <div className='min-w-[270px] bg-amber-500 pt-[15px] pl-[10px] rounded'>
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
            <div className='min-w-[270px] bg-amber-500'>
                <span>В работе</span>
            </div>
            <div className='min-w-[270px] bg-amber-500'>
                <div className='flex gap-2 items-center'>Готово <IoMdCheckmark /></div>
            </div>

            {kanbans.map(kanban =>
                <div className='min-w-[270px] bg-amber-500'>
                    <div className='flex gap-2 items-center'>{kanban.title}</div>
                </div>
            )}

            <div className=''>
                {isCreateKanbanModalOpen ?
                    <input
                        autoFocus
                        type='text'
                        value={newKanbanTitle}
                        onBlur={() => setIsCreateKanbanModalOpen(false)}
                        onKeyDown={(event) => createKanbanHandler(event)}
                        onChange={event => setNewKanbanTitle(event.target.value)}
                        className='bg-amber-500 outline-none placeholder:text-black'
                    /> :
                    <FaPlus onClick={() => setIsCreateKanbanModalOpen(true)} />
                }
            </div>
        </div>
    )
}