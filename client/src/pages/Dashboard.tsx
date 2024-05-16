import React from "react";
import {FaPlus} from "react-icons/fa";
import {useState} from "react";
import {IoMdCheckmark} from "react-icons/io";

type Task = {
    id: number,
    title: string,
    status: 'todo' | 'in-progress' | 'done'
}

export default function Dashboard(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const createTaskHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key !== 'Enter') return;

        setTasks([...tasks, {
            id: Date.now(),
            title: newTaskTitle,
            status: 'todo'
        }]);

        setNewTaskTitle('');
        setIsCreateTaskModalOpen(false);
    }

    return (
        <div className='max-w-[1280px] m-auto mt-[20px] flex gap-2'>
            <div className='w-[480px] bg-amber-500 pt-[15px] pl-[10px] rounded'>
                <span>К выполнению</span>

                <div className='my-[10px] flex flex-col gap-2'>
                    {tasks.map(task =>
                        <div key={task.id} className='max-w-[100%] overflow-auto'>{task.title}</div>
                    )}
                    {isCreateTaskModalOpen ?
                        <input type='text' onKeyDown={event => createTaskHandler(event)} placeholder='Название задачи' value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} className='bg-amber-500  text-white placeholder:text-white outline-none' /> :
                        <button onClick={() => setIsCreateTaskModalOpen(true)} className='flex items-center gap-2'>
                            <FaPlus/>Создать
                        </button>
                    }
                </div>
            </div>
            <div className='w-[480px] bg-amber-500'>
                <span>В работе</span>
            </div>
            <div className='w-[480px] bg-amber-500'>
                <div className='flex gap-2 items-center'>Готово <IoMdCheckmark /></div>
            </div>
        </div>
    )
}