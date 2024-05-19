import {InputHTMLAttributes} from "react";

export default function UiInput(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className='p-[4px] bg-gray-200 rounded h-fit'>
            <input
                {...props}
                autoFocus
                maxLength={30}
                className='pl-[5px] py-[5px] rounded bg-none h-full w-full placeholder:text-black outline-blue-500'
            />
        </div>
    )
}