"use client"

import React, {useState} from "react";

import Image from "next/image"

interface TaskbarProps {
    theme: string;
}

const Taskbar: React.FC<TaskbarProps> = ({theme}) => {
    const [isMute, setIsMute] = useState<boolean>(false)

    return (
        <div
            className={`text-center text-white flex flex-row justify-between items-center`}
        >
            <Image
                src="/windowsXP_taskbar.webp"
                alt="windowsXP taskbar"
                width={200}
                height={400}
                className="w-12 p-0 m-0 cursor-pointer hover:brightness-110 z-10"
            />
            <div
                className={"bg-taskbar-gradient z-1 w-full h-[26px] text-xp-taskbar ml-[-4px] z-1 " +
                    "border border-xp-taskbar"}
            >.</div>
            <div className={"bg-taskbar-setting-gradient h-[26px] w-[85px] border border-xp-taskbar_setting"}>
                <Image
                    src={isMute ? "/xp_speaker_mute.webp" : "/xp_speaker.webp"}
                    alt={"windowsXP speaker icon"}
                    width={200}
                    height={400}
                    className={"w-6 cursor-pointer hover:brightness-110 z-2"}
                    onClick={() => setIsMute(prev => !prev)}
                />
            </div>
        </div>
    );
};

export default Taskbar

