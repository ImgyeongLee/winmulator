import Image from "next/image";
import {cn} from "@/app/lib/utils";
import {IoTriangleSharp} from "react-icons/io5";
import React from "react";

export default function StartMenu() {
    const startMenuLeftItems: [path: string, label: string, sublabel: string, width: number][] = [
        ['/xp/startMenu/IE.webp', 'Internet', 'Internet Explorer', 20],
        ['/xp/startMenu/email.webp', 'E-mail', 'Contact the developers', 20],
        ['', '', '', -1],
        ['/xp/startMenu/notepad.webp', 'Notepad', '', 20],
        ['/xp/startMenu/paint.webp', 'Paint', '', 20],
        ['/xp/startMenu/media_player.webp', 'Windows Media Player', '', 20],
        ['/xp/startMenu/win_messenger.webp', 'Windows Messenger', '', 20],
        ['/xp/appIcons/spider_solitaire.webp', 'Solitaire', '', 20],
        ['/xp/appIcons/minesweeper.webp', 'Minesweeper', '', 20],
        ['/xp/appIcons/pinball3d.webp', '3D Pinball', '', 20]

    ]

    const startMenuRightItems: [path: string, label: string, subMenu: boolean][] = [
        ['/xp/startMenu/my_documents.webp', 'My Documents', false],
        ['/xp/startMenu/my_pictures.webp', 'My Pictures', false],
        ['/xp/startMenu/my_musics.webp', 'My Musics', false],
        ['/xp/startMenu/recent_documents.webp', 'Recent Documents', true],
        ['/xp/appIcons/xp_my_computer.webp', 'My Computer', false],
        ['', '', false],
        ['/xp/startMenu/connect_to.webp', 'Connect To', true],
        ['/xp/startMenu/printer_faxes.webp', 'Printers and Faxes', false],
        ['', '', false],
        ['/xp/startMenu/control_panel.webp', 'Control Panel', false],
        ['/xp/startMenu/command_prompt.webp', 'Run', false],
        ['/xp/startMenu/support_help.webp', 'Help and Support', false],
    ]

    return (
        <div className={"ml-[0.5px] main-container absolute z-99 bottom-[33px] flex flex-col justify-start  " +
            " w-[400px] h-fit rounded-[8px] bg-xp-start-menu xp-box-shadow"}>
            <div
                className={"header rounded-[8px] flex items-center gap-2 xp-start-menu-header-gradient px-1 py-2"}
            >
                <div className={"border border-[2px] border-neutral-100/70 rounded-[5px]"}>
                    <Image
                        width={35}
                        height={20}
                        src={'/userImage1.webp'}
                        alt={'user account image'}
                    />
                </div>

                <h2 className={"font-bold text-[0.9rem]"}>User</h2>
            </div>
            <div
                className={"body-content flex-grow grid grid-cols-2 border border-xp-start-menu-right-border" +
                    " bg-white mx-[3px]"}
            >
                <div className={"left-side flex flex-col ml-1 mt-1"}>
                    <div
                        className={"flex-grow"}
                    >
                        {
                            startMenuLeftItems.map(([path, label, sublabel,  width], index) => {
                                if (!path) {
                                    return <div key={index+width} className={"border-b border-gray-400/50 mt-1 mb-2"}></div>
                                }
                                return (
                                    <div key={index} className={cn("cursor-pointer flex items-center gap-2 mb-2 py-1 text-black hover:bg-xp-taskbar-selected pl-1 mr-1 group", {
                                        'mb-1 py-0': sublabel
                                    })}>
                                        <Image
                                            width={width}
                                            height={20}
                                            src={path}
                                            alt={label + ' icon'}
                                            className={cn('w-[30px] h-[30px]', {
                                                'rounded-full': label === '3D Pinball'
                                            })}
                                        />
                                        <div className={"flex flex-col group-hover:text-white"}>
                                            <h3 className={"text-[0.8rem] mr-auto group-hover:text-white"}>{label}</h3>
                                            <h3 className={"text-[0.7rem] text-gray-900/60 mr-auto group-hover:text-white"}>{sublabel}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={"all-prog text-black font-bold text-[0.8rem] flex items-center justify-end items-center " +
                        " py-2 border-t border-gray-400/50 w-full cursor-pointer hover:bg-xp-taskbar-selected hover:text-white"}>
                        <h3>All Programs</h3>
                        <Image
                            width={20}
                            height={20}
                            src={'/xp/appControls/play_button.webp'}
                            alt={'all programs button'}
                            className={'mx-2'}
                        />
                    </div>
                </div>
                <div className={"right-side pt-1 pl-1 border-l-2 border-xp-start-menu-right-border"}>
                    {
                        startMenuRightItems.map(([path, label,  subMenu], index) => {
                            if (!path) {
                                return <div key={index} className={"border-b border-gray-400/50 mt-1 mb-2"}></div>
                            }
                            return (
                                <div key={index} className={cn("flex items-center gap-2 pl-1 mb-2 py-1 text-black cursor-pointer hover:bg-xp-taskbar-selected hover:text-white", {})}>
                                    <Image
                                        width={20}
                                        height={20}
                                        src={path}
                                        alt={label + ' icon'}
                                        className={cn('w-[30px] h-[30px]', {})}
                                    />
                                    <h3 className={cn("text-[0.8rem] mr-auto", {
                                        'font-bold': index < 5
                                    })}>{label}</h3>
                                    { subMenu &&
                                        <IoTriangleSharp className={"mr-2 rotate-90 text-[0.45rem]"}/>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div
                className={"footer flex flex-row items-center justify-end h-[40px]"}
            >
                <button className={"flex mr-[18px] items-center text-[0.9rem] p-1 cursor-pointer hover:bg-xp-taskbar-selected/50"}>
                    <Image
                        width={20} height={20} src={'/xp/startMenu/log_off.webp'} alt={'log off button'}
                        className={'mr-1'}
                    />
                    <h3>Log off</h3>
                </button>
                <button className={"flex mr-4 items-center text-[0.9rem] p-1 cursor-pointer hover:bg-xp-taskbar-selected/50"}>
                    <Image
                        width={20} height={20} src={'/xp/startMenu/turn_off.webp'} alt={'log off button'}
                        className={'mr-1'}
                    />
                    <h3>Shut Down</h3>
                </button>
            </div>
        </div>
    )
}