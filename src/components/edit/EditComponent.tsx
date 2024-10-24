"use client";

import { useRef } from "react";
import {Button, Textarea} from "@nextui-org/react";

export const EditComponent = () => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div className={"w-full h-full"}>
            <div className={"w-full h-16 px-10 border-b border-gray-600 flex items-center justify-between"}>
                <div className={"w-full h-full flex items-center jc"}>
                    <h2 className={"text-2xl "}>Text.tsx</h2>
                </div>
                <div>
                    <Button onPress={() => {
                        console.log(textAreaRef.current?.value);
                    }}>Ok</Button>
                </div>
            </div>
            <div className={"w-full h-full"}>
                <Textarea ref={textAreaRef} fullWidth={true} minRows={43}  maxRows={43}/>
            </div>
        </div>
    );
};
