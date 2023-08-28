import React from "react";

export function HeaderIconWithInfo({ children, info }: { children: React.ReactNode, info: string}) {
    return (
        <div className='flex flex-row gap-2'>
            <div className='w-7 h-7 p-[6px] rounded-full background-2 flex justify-center items-center'>{children}</div><div className='text-black'>{info}</div>
        </div>
    )
}