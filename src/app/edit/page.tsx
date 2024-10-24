"use client";

import {useSearchParams} from "next/navigation";
import {SideBar} from "@/components/edit/SideBar";
import {EditComponent} from "@/components/edit/EditComponent";

const Page = () => {

    const params = useSearchParams();

    const id = params.get("id"); // get the id from the url

    return (
        <div className={"w-full h-screen flex"}>
            <SideBar/>
            <EditComponent/>
        </div>
    );
};

export default Page;
