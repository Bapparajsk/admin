"use client";

import {IconArrowDown} from "@tabler/icons-react";
import {useState} from "react";

type ListProps = {
    title: string,
    icon: any,
}

export const List = ({
    title,
    icon,
    items
}:{
    title: string,
    icon: any,
    items?: ListProps[]
}) => {

    const [show, setShow] = useState(false);

    return (
        <div  className={"w-[90%] flex flex-col items-end justify-center gap-2 cursor-pointer"}>
            <div onClick={() => setShow((prev) => !prev)} className={"w-full h-auto flex items-center justify-between bg-gray-600 py-2 px-2 rounded-md "}>
                <div className={"flex gap-2"}>
                    <p>{title}</p>
                    {icon}
                </div>
                <IconArrowDown size={15} className={`transition-transform duration-500 ${show ? 'rotate-0' : 'rotate-180'}`}/>
            </div>
            <div className={"w-[95%] h-auto relative pl-3 flex flex-col gap-2"}>
                {show && items && items.map((value, index) => (
                    <div
                        key={index}
                        className={"w-full h-auto flex items-center justify-between bg-gray-800 py-1 px-2 rounded-md "}>
                        <div className={"flex gap-2"}>
                            <p>{value.title}</p>
                            {value.icon}
                        </div>
                    </div>
                ))}
                <div className={"h-full w-[1px] absolute left-0 top-0 bg-red-600"}/>
            </div>
        </div>
    );
};
