import {TextareaHTMLAttributes} from "react";

export default function UiTextarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className='p-[4px] bg-gray-200 rounded h-fit'>
            <textarea
                {...props}
                autoFocus
                maxLength={255}
                className='pl-[5px] py-[5px] rounded bg-none h-full w-full placeholder:text-black outline-blue-500'
            />
        </div>
    )
}