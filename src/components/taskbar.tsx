"use client"

import React, {useEffect, useState} from "react";

import Image from "next/image"

interface TaskbarProps {
    theme: string;
}

const Taskbar: React.FC<TaskbarProps> = ({theme}) => {
    const [isMute, setIsMute] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<Date>(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div
            className={`text-center text-white flex flex-row justify-between items-center`}
        >
            <Image
                src="/windowsXP_taskbar_start.webp"
                alt="windowsXP taskbar"
                width={200}
                height={400}
                className="h-[30px] w-[80px] p-0 m-0 cursor-pointer hover:brightness-110 z-10"
            />
            <div
                className={"bg-taskbar-gradient z-1 w-full h-[30px] text-xp-taskbar ml-[-4px] z-1 " +
                    "border border-xp-taskbar"}
            >.</div>
            <div className={"bg-taskbar-setting-gradient h-[30px] w-[150px] border border-xp-taskbar_setting " +
                "flex flex-wrap justify-start items-center"}>
                <Image
                    src={isMute ? "/xp_speaker_mute.webp" : "/xp_speaker.webp"}
                    alt={"windowsXP speaker icon"}
                    width={200}
                    height={400}
                    className={"w-[30px] mt-[1px] cursor-pointer hover:brightness-110 z-2"}
                    onClick={() => setIsMute(prev => !prev)}
                />
                <Image
                    src={"/xp_security_error.webp"}
                    alt={"windowsXP security risk awareness icon"}
                    width={200}
                    height={400}
                    className={"w-5 h-5 cursor-pointer hover:brightness-110 z-2"}
                />
                <h3 className={"ml-auto mr-1 text-center text-[0.9rem]"}>{formatTime(currentTime)}</h3>
            </div>
        </div>
    );
};

export default Taskbar

