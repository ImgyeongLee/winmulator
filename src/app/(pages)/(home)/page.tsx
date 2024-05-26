"use client"

import Taskbar from "@/components/taskbar";
import Icon from "@/components/Icons";

export default function Home() {
    return (
        <main className={"bg-xp h-[100vh] bg-cover bg-center min-h-screen flex flex-col"}>
            <div className="flex-grow">
                <div className="p-5 flex flex-col gap-8">
                    <Icon
                        width={20} height={20} path={'/xp_my_computer.webp'} alt={'windows xp my computer icon'}
                        others={''} label={"My Computer"}
                    />
                    <Icon
                        width={20} height={20} path={'/xp_floppy.webp'} alt={'windows xp floppy disk icon'}
                        others={''} label={"Floppy Disk"}
                    />
                    <Icon
                        width={20} height={20} path={'/xp_recycle_empty.webp'} alt={'windows xp recycle bin empty icon'}
                        others={''} label={"Recycle"}
                    />
                    <Icon
                        width={40} height={40} path={'/xp_word_file.webp'} alt={'windows xp word document file icon'}
                        others={''} label={"About.docx"}
                    />
                </div>
            </div>
            <Taskbar theme="xp"/>
        </main>
    );
}
