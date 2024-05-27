import React, {useState} from "react";
import Image from "next/image";
import {IoTriangleSharp} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {focusApp, getFocusedAppId} from "@/redux/appSlice";

interface AppState {
    id: number;
    label: string;
    path: string;
    x: number;
    y: number;
    open: boolean;
    minimized: boolean;
    fullSize: boolean;
}

interface ApplicationProps {
    appState: AppState;
}

interface SubheaderOptionProps {
    name: string;
}

const SubheaderOption: React.FC<SubheaderOptionProps> = ( {name} ) => {
    return (
        <h3 className={"hover:bg-xp-taskbar hover:text-white cursor-pointer px-1"}>{name}</h3>
    )
}

const Application: React.FC<ApplicationProps> = ( {appState} ) => {
    const selectedAppId = useSelector(getFocusedAppId)

    const dispatch = useDispatch()
    const handleFocus = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(focusApp({
            id: appState.id
        }))
    }

    return (
        <div
            style={{
                position: "absolute",
                top: appState.y,
                left: appState.x,
                zIndex: selectedAppId === appState.id ? 100 : 10
            }}
            onClick={handleFocus}
            className={"w-[500px] h-[400px] mb-10 bg-xp-taskbar rounded-[3px] flex flex-col cursor-default"}
        >
            <div className={"header w-full bg-xp-taskbar flex text-white flex-row items-center px-2 py-1 xp-app-header-gradient rounded-t-[3px]"}>
                    <div className={"flex-grow flex items-center gap-2"}>
                        <Image
                            width={15}
                            height={10}
                            src={appState.path}
                            alt={appState.label + " icon"}
                            className={"h-4"}
                        />
                        <h1 className={"xp-text-shadow text-[0.9rem]"}>{appState.label}</h1>
                    </div>
                    <div className={"controls flex flex-row gap-[1.5px] rounded-[2px]"}>
                        <button
                            className={"border border-neutral-200 rounded-[2px] xp-app-controls-gradient min-w-[20px] hover:brightness-110"}>
                            <div className={"border-[0.5px] border-gray-500 rounded-[2px] w-full h-full flex justify-center items-center"}>
                                <svg className={"mt-3"} width="12" height="5" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="12" height="5" fill="#D9D9D9"/>
                                </svg>
                            </div>
                        </button>
                        <button
                            className={"border border-neutral-200 rounded-[2px] min-w-[20px] xp-app-controls-gradient hover:brightness-110"}
                        >
                            <div className={"border-[0.5px] border-gray-500 rounded-[2px] w-full h-full flex justify-center items-center"}>
                                <svg width="13" height="15" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="23" height="5" fill="#D9D9D9"/>
                                    <rect y="4" width="2" height="17" fill="#D9D9D9"/>
                                    <rect x="21" y="4" width="2" height="17" fill="#D9D9D9"/>
                                    <rect y="21" width="23" height="2" fill="#D9D9D9"/>
                                </svg>
                            </div>
                        </button>
                        <button
                            className={"border border-neutral-200 rounded-[2px] min-w-[20px] w-[20px] hover:brightness-110"}
                        >
                            <div className={"relative w-full h-full"}>
                                <Image
                                    src={'/xp_app_close.webp'}
                                    alt={"close app icon"}
                                    width={30}
                                    height={30}
                                    style={{
                                        objectFit: 'cover',
                                        layout: 'fill'
                                    }}
                                    className="rounded-[2px]"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            <div className={"container px-1 flex-grow flex pb-1"}>
                <div className={"body flex-grow flex flex-col bg-xp-right-click-menu"}>
                    <div className={"subheader px-1 flex gap-1 xp-app-bb-divider text-[0.8rem]"}>
                        <SubheaderOption name={"File"} />
                        <SubheaderOption name={"Edit"} />
                        <SubheaderOption name={"View"} />
                        <SubheaderOption name={"Favourites"} />
                        <SubheaderOption name={"Tools"} />
                        <SubheaderOption name={"Help"} />
                    </div>
                    <div className={"controls px-1 py-1 flex flex-row xp-app-bb-divider text-[0.8rem] "}>
                        <div className={"opacity-50 flex items-center cursor-not-allowed"}>
                            <Image
                                width={25}
                                height={25}
                                src={"/xp_back.webp"}
                                alt={"back arrow button"}
                            />
                            <h3 className={"text-[0.6rem]"}>Back</h3>
                            <IoTriangleSharp className={"ml-2 rotate-180 text-[0.45rem]"}/>
                        </div>
                        <div className={"ml-2 opacity-50 flex items-center cursor-not-allowed"}>
                            <Image
                                width={25}
                                height={25}
                                src={"/xp_forward.webp"}
                                alt={"back arrow button"}
                            />
                            <IoTriangleSharp className={"ml-2 rotate-180 text-[0.45rem]"}/>
                        </div>
                        <div className={"ml-2 pr-2 flex items-center hover:brightness-105 border-r border-gray-400"}>
                            <Image
                                width={25}
                                height={25}
                                src={"/xp_folder_green_arrow.webp"}
                                alt={"back arrow button"}
                            />
                        </div>
                        <div className={"ml-2 flex items-center hover:brightness-105"}>
                            <Image
                                width={25}
                                height={25}
                                src={"/xp_search.webp"}
                                alt={"back arrow button"}
                            />
                            <h3>Search</h3>
                        </div>
                        <div className={"ml-2 pr-2 flex items-center hover:brightness-105 border-r border-gray-400"}>
                            <Image
                                width={25}
                                height={25}
                                src={"/xp_folders_open_empty.webp"}
                                alt={"back arrow button"}
                            />
                            <h3 className={"ml-2"}>Folders</h3>
                        </div>
                        <div className={"ml-2 pr-2 flex items-center hover:brightness-105"}>
                            <Image
                                width={25}
                                height={25}
                                src={"/xp_change_folder_view.webp"}
                                alt={"back arrow button"}
                            />
                            <IoTriangleSharp className={"ml-2 rotate-180 text-[0.45rem]"}/>
                        </div>
                    </div>
                    <div className={"currentPath px-2 flex text-[0.8rem] xp-app-bb-divider"}>
                        <h3 className={"mr-1"}>Address</h3>
                        <div className={"flex-grow border border-xp-taskbar-300"}>
                            <div className={"ml-1 flex items-center gap-2"}>
                                <Image
                                    width={15}
                                    height={10}
                                    src={appState.path}
                                    alt={appState.label + " icon"}
                                    className={"h-4"}
                                />
                                <h1>{appState.label}</h1>
                                <div className={"ml-auto mr-[1px]"}>
                                    <Image
                                        width={15}
                                        height={10}
                                        src={'/xp_app_dropdown.webp'}
                                        alt={appState.label + " icon"}
                                        className={"h-4"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={"flex items-center ml-1 mr-2"}>
                                <Image
                                    width={15}
                                    height={10}
                                    src={'/xp_green_go_forward.webp'}
                                    alt={appState.label + " icon"}
                                    className={"h-4"}
                                />
                                <h1 className={"ml-1"}>Go</h1>
                            </div>
                        </div>
                    </div>
                    <div className={"content px-2"}>Main content of the app</div>
                </div>
            </div>
        </div>
    )
}

export default Application