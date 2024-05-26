"use client"

import Taskbar from "@/components/taskbar";
import Icon from "@/components/Icons";

export default function Home() {
    return (
        <main className={"bg-xp h-[100vh] bg-cover bg-center min-h-screen flex flex-col"}>
            <div className="flex-grow">
                <div className="p-5">
                    <Icon
                        width={30} height={30} path={'/xp_my_computer.webp'} alt={'windows xp my computer icon'}
                        others={''} label={"My Computer"}
                    />
                </div>
            </div>
            <Taskbar theme="xp"/>
        </main>
    );
}
