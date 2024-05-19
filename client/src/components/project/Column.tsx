import {ReactNode} from "react";

type ColumnProps = {
    children: ReactNode;
    columnName: string;
}

export const Column = ({children, columnName}: ColumnProps) => {
    return (
        <div className='min-w-[270px] bg-[#f7f8f9] min-h-[600px] rounded'>
            <div className='flex gap-2 py-[8px] px-[8px]'>
                <span
                    className='w-full flex items-center h-[40px] pl-[8px]'>
                    {columnName}
                </span>
            </div>

            {children}
        </div>
    )
}