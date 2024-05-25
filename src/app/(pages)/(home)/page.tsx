"use client"

import Taskbar from "@/components/taskbar";

export default function Home() {
    return (
        <main className={"bg-xp h-[100vh] bg-cover bg-center min-h-screen flex flex-col"}>
            <div className="flex-grow">
                <div className="">
                    Main
                </div>
            </div>
            <Taskbar theme="xp"/>
        </main>
    );
}
