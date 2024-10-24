"use client";

import {
    IconCheck,
    IconUser,
    IconPlus,
    IconSquaresFilled,
    IconBrandReactNative,
    IconBrandTailwind,
    IconFileTypeTs,
    IconCloudUpload,
    IconBrandNextjs,
    IconHtml
} from "@tabler/icons-react";
import {Button} from "@nextui-org/react";
import {List} from "@/components/edit/List";

export const SideBar = () => {
    return (
        <div className={"min-w-72 h-auto border-r border-gray-600"}>
            <div className={"w-full h-20 flex items-center justify-center border-b border-gray-600"}>
                <h1 className={"text-white text-4xl font-mono font-bold"}>Admin<span className={"text-sm text-gray-400"}>V.10</span></h1>
            </div>
            <div className={"w-full h-full"}>
                <div className={"w-full h-auto pt-2 px-2"}>
                    <div
                        className={"py-2 px-1 flex items-center justify-start gap-1 rounded-md bg-gray-600/40 cursor-pointer text-gray-400 duration-300 hover:text-gray-200"}>
                        <IconUser/>
                        <p>@rohit008</p>
                    </div>
                </div>
                <div className={"w-full h-[1px] bg-gray-600 my-2"}/>
                <div className={"w-full h-auto py-1 px-2 flex flex-col gap-2"}>
                    <div>
                        {/*<Button fullWidth variant={"bordered"} color={"danger"} endContent={<IconExclamationCircle color={"red"}/>}>*/}
                        {/*    is-verified*/}
                        {/*</Button>*/}
                        <Button fullWidth variant={"shadow"} color={"success"}
                                endContent={<IconCheck color={"white"}/>}>
                            is-verified
                        </Button>
                    </div>
                    <div className={"w-full flex items-center justify-center gap-2"}>
                        <Button fullWidth startContent={<IconSquaresFilled color={"white"}/>}>
                            components
                        </Button>
                        <Button isIconOnly> <IconPlus/> </Button>
                    </div>
                    <div className={"relative w-full h-auto flex flex-col gap-2 items-end"}>
                        <div className={"h-full w-[1px] absolute left-2 top-0 bg-red-600"}/>
                        <List title={"Next"} icon={<IconBrandNextjs/>} items={
                            [
                                {title: "Next", icon: <IconBrandNextjs/>},
                                {title: "React", icon: <IconBrandReactNative/>},
                                {title: "Tailwind", icon: <IconBrandTailwind/>},
                                {title: "TypeScript", icon: <IconFileTypeTs/>},
                            ]
                        }/>
                        <List title={"HTML"} icon={<IconHtml/>} items={
                            [
                                {title: "Html", icon: <IconHtml/>},
                                {title: "css", icon: <IconBrandReactNative/>},
                            ]
                        }/>

                    </div>
                    {/*<div className={"flex flex-col gap-2"}>*/}
                    {/*    <Button fullWidth variant={"bordered"} color={"primary"} endContent={<IconBrandReactNative/>}>*/}
                    {/*        React Native*/}
                    {/*    </Button>*/}
                    {/*    <Button fullWidth variant={"bordered"} color={"primary"} endContent={<IconBrandTailwind/>}>*/}
                    {/*        Tailwind*/}
                    {/*    </Button>*/}
                    {/*    <Button fullWidth variant={"bordered"} color={"primary"} endContent={<IconFileTypeTs/>}>*/}
                    {/*        TypeScript*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                </div>
                <div className={"w-full h-[1px] bg-gray-600 my-2"}/>
                <div className={"w-full h-auto py-1 px-2"}>
                    <Button fullWidth variant={"flat"} color={"warning"}>
                        Upload
                        <IconCloudUpload/>
                    </Button>
                </div>

            </div>
        </div>
    );
};
