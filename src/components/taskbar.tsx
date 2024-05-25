import React from "react";

import Image from "next/image"

interface TaskbarProps {
    theme: string;
}

const Taskbar: React.FC<TaskbarProps> = ({theme}) => {
    const position = 'fixed bottom-0 left-0 w-full';
    return (
        <div
            className={`${position} text-center text-white flex flex-row justify-between items-center
                        bg-taskbar-gradient z-1`}
        >
            <Image
                src="/windowsXP_taskbar.webp"
                alt="windowsXP taskbar"
                width={200}
                height={400}
                className="w-12 p-0 m-0 cursor-pointer hover:brightness-110 z-2"
            />
            <div>End setting</div>
        </div>
    );
};

export default Taskbar

