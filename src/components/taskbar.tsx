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
                src="/windowsXP_taskbar_start.webp"
                alt="windowsXP taskbar"
                width={200}
                height={400}
                className="h-[26px] w-[80px] p-0 m-0 cursor-pointer hover:brightness-110 z-10"
            />
            <div
                className={"bg-taskbar-gradient z-1 w-full h-[26px] text-xp-taskbar ml-[-4px] z-1 " +
                    "border border-xp-taskbar"}
            >.</div>
            <div className={"bg-taskbar-setting-gradient h-[26px] w-[85px] border border-xp-taskbar_setting " +
                "flex flex-wrap justify-start items-center"}>
                <Image
                    src={isMute ? "/xp_speaker_mute.webp" : "/xp_speaker.webp"}
                    alt={"windowsXP speaker icon"}
                    width={200}
                    height={400}
                    className={"w-6 mt-[2px] cursor-pointer hover:brightness-110 z-2"}
                    onClick={() => setIsMute(prev => !prev)}
                />
                <Image
                    src={"/xp_security_error.webp"}
                    alt={"windowsXP security risk awareness icon"}
                    width={200}
                    height={400}
                    className={"w-3 h-3 cursor-pointer hover:brightness-110 z-2"}
                />
                <h3 className={"ml-2 text-center text-[0.7rem]"}>4:45</h3>
            </div>
        </div>
    );
};

export default Taskbar

