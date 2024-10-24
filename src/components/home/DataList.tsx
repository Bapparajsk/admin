"use client";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export const DataList = () => {

    const router = useRouter();

    const handleEdit = (e: any) => {
        const id = e.currentKey;
        if (!id) {
            alert("Please select a row to edit");
            return;
        }

    //     find a user and send to edit page.tsx
    }

    return (
        <div className={"h-auto max-w-6xl mx-auto mt-20"}>
            <div className="flex flex-col gap-3">
                <Table
                    color={"success"}
                    selectionMode="single"
                    onSelectionChange={handleEdit}
                    aria-label={"Data List"}
                >
                    <TableHeader>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>Github Url</TableColumn>
                        <TableColumn>Edit</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Tony Reichert</TableCell>
                            <TableCell>CEO</TableCell>
                            <TableCell>Active</TableCell>
                        </TableRow>
                        <TableRow key="2">
                            <TableCell>Zoey Lang</TableCell>
                            <TableCell>Technical Lead</TableCell>
                            <TableCell>Paused</TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell>Jane Fisher</TableCell>
                            <TableCell>Senior Developer</TableCell>
                            <TableCell>Active</TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>Vacation</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};
