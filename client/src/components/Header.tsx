import {Link, useLocation} from "react-router-dom";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import clsx from "clsx";

const routes = [
    {
        path: "/",
        name: "Your work",
    },
    {
        path: "/projects",
        name: "Projects",
    },
    {
        path: "/profile",
        name: "Filters",
    },
    {
        path: "/filters",
        name: "Dashboards",
    },
    {
        path: "/dashboards",
        name: "Teams",
    },
    {
        path: "/teams",
        name: "Plans",
    },
    {
        path: "/apps",
        name: "Apps",
    },
]

export default function Header() {
    const currentPath = useLocation().pathname;

    return (
        <div className='flex items-center h-[56px] px-[15px] border-b-[1px]'>
            <div className='hover:bg-gray-200 p-[6px] rounded'>
                <Link to='/projects' className='flex gap-2 items-center'>
                    <img src='/logo.png' alt='Logo' className='w-[24px] h-[24px]'/>
                    <span className='text-[20px] font-semibold'>Vira</span>
                </Link>
            </div>
            <nav className='ml-[25px]'>
                <ul className='flex items-center mt-[3px] gap-2'>
                    {routes.map(route => {
                        return (
                            <li key={route.name}
                                className={clsx('font-semibold gap-[2px] flex items-center cursor-pointer hover:bg-gray-200 px-[6px] hover:text-black rounded py-[6px] transition-all', {'text-purple-500 relative custom-after-line': route.path === currentPath})}>
                                <span className='text-[14px]'>{route.name}</span>
                                <MdOutlineKeyboardArrowDown/>
                            </li>
                        )
                    })}
                    <li className='cursor-pointer font-semibold text-white bg-purple-500 px-[12px] py-[4px] rounded hover:bg-purple-400 transition-all text-[14px]'>
                        <button>Create</button>
                    </li>
                </ul>
            </nav>
            <img src='' alt=''/>
        </div>
    )
}