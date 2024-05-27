import React, {useState} from "react";
import { cn } from "@/app/lib/utils"
import Image from "next/image";
import {IoTriangleSharp} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {focusApp, getFocusedAppId, moveApp, removeApp, toggleFullSizeApp, toggleMinimizeApp} from "@/redux/appSlice";
import {number} from "prop-types";

const RESIZE_MARGIN = 10

interface AppState {
    id: number;
    label: string;
    path: string;
    x: number;
    y: number;
    width: number;
    height: number;
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
    const [isMoving, setIsMoving] = useState<boolean>(false)
    const [dragOffset, setDragOffset] = useState<{x: number, y: number}>({x: 0, y: 0})
    const [isResizing, setIsResizing] = useState<boolean>(false)
    const [resizeDirection, setResizeDirection] = useState<string>('')
    const [resizeStart, setResizeStart] = useState<{width: number, height: number}>({ width: 0, height: 0})

    const selectedAppId = useSelector(getFocusedAppId)
    const dispatch = useDispatch()

    const handleFocus = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(focusApp({
            id: appState.id
        }))
    }

    const handleAppClose = () => {
        dispatch(removeApp({
            id: appState.id
        }))
    }

    const handleAppMaximize = () => {
        dispatch(toggleFullSizeApp({
            id: appState.id
        }))
    }

    const handleAppMinimize = (e: React.MouseEvent) => {
        e.stopPropagation()
        dispatch(toggleMinimizeApp({
            id: appState.id
        }))
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        // e.stopPropagation()
        // console.log(e.clientX - appState.x < 5)
        // if (resizeDirection) {
        //     setResizeStart({
        //         width: e.clientX - appState.x,
        //         height: e.clientY - appState.y
        //     })
        //     setIsResizing(true)
        // } else {
            const offsetX = e.clientX - appState.x
            const offsetY = e.clientY - appState.y
            setDragOffset({x: offsetX, y: offsetY})
            setIsMoving(true)
        // }
    }

    // const handleResize = (e: React.MouseEvent) => {
    //     e.stopPropagation()
    //     const resizeQ = e.clientX - appState.x < RESIZE_MARGIN
    //     console.log(resizeQ)
    //     if (resizeQ) {
    //         console.log("resizing")
    //         const newWidth = e.clientX - resizeStart.width
    //         const newHeight = e.clientY - resizeStart.height
    //         // dispatch(moveApp({
    //         //     id: appState.id,
    //         //     width: newWidth,
    //         //     height: newHeight
    //         // }))
    //         console.log("nW: ", newWidth)
    //         console.log("nH: ", newHeight)
    //     }
    //     else {
    //         const { clientX, clientY } = e
    //         const { x, y, width, height } = appState
    //         let direction = ''
    //
    //         if (clientX >= x + width - RESIZE_MARGIN) {
    //             direction = 'right';
    //         } else if (clientX <= x + RESIZE_MARGIN) {
    //             direction = 'left';
    //         } else if (clientY >= y + height - RESIZE_MARGIN) {
    //             direction = 'bottom';
    //         } else if (clientY <= y + RESIZE_MARGIN) {
    //             direction = 'top';
    //         }
    //         console.log("direction: ", direction)
    //         setResizeDirection(direction);
    //     }
    // }

    const handleMouseMove = (e: React.MouseEvent) => {
        // e.stopPropagation()
        if (isMoving) {
            console.log("moving")
            const newX = e.clientX - dragOffset.x
            const newY = e.clientY - dragOffset.y

            dispatch(moveApp({
                id: appState.id,
                x: newX,
                y: newY
            }))
        }
    }

    const handleMouseUp = (e: React.MouseEvent) => {
        setIsMoving(false)
        setIsResizing(false)
    }

    return (
        <>
            { !appState.minimized &&
                <div
                    style={{
                        position: "absolute",
                        top: appState.fullSize ? 0 : appState.y,
                        left: appState.fullSize ? 0 : appState.x,
                        width: appState.fullSize ? '100%' : appState.width,
                        height: appState.fullSize ? '100%' : appState.height,
                        zIndex: selectedAppId === appState.id ? 100 : 10,
                    }}
                    onClick={handleFocus}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    // onMouseDown={handleResize}
                    className={cn("cursor-inherit mb-10 bg-xp-taskbar rounded-[3px] flex flex-col select-none", {})}
                >
                    <div
                        className={cn("header bg-xp-taskbar flex text-white flex-row items-center px-2 py-1 xp-app-header-gradient rounded-t-[3px]", {
                            'cursor-move': isMoving,
                        })}
                        onMouseDown={handleMouseDown}
                    >
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
                        <div className={"header_controls flex flex-row gap-[1.5px] rounded-[2px]"}>
                            <button
                                className={"border border-neutral-200 rounded-[2px] xp-app-controls-gradient min-w-[20px] hover:brightness-110"}>
                                <div
                                    className={"border-[0.5px] border-gray-500 rounded-[2px] w-full h-full flex justify-center items-center"}
                                    onClick={handleAppMinimize}
                                >
                                    <svg className={"mt-3"} width="12" height="5" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="12" height="5" fill="#D9D9D9"/>
                                    </svg>
                                </div>
                            </button>
                            <button
                                className={"border border-neutral-200 rounded-[2px] min-w-[20px] xp-app-controls-gradient hover:brightness-110"}
                            >
                                <div
                                    className={"border-[0.5px] border-gray-500 rounded-[2px] w-full h-full flex justify-center items-center"}
                                    onClick={handleAppMaximize}
                                >
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
                                <div className={"relative w-full h-full"} onClick={handleAppClose}>
                                    <Image
                                        src={'/xp_app_close.webp'}
                                        alt={"close app icon"}
                                        width={30}
                                        height={30}
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                        className="rounded-[2px]"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={cn("container min-w-full px-1 flex-grow flex pb-1", {
                        'min-w-[100vw]': appState.fullSize
                    })}>
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
                                <div className={"ml-2 pr-2 flex items-center hover:brightness-105 border-r border-gray-400 cursor-pointer"}>
                                    <Image
                                        width={25}
                                        height={25}
                                        src={"/xp_folder_green_arrow.webp"}
                                        alt={"back arrow button"}
                                    />
                                </div>
                                <div className={"ml-2 flex items-center hover:brightness-105 cursor-pointer"}>
                                    <Image
                                        width={25}
                                        height={25}
                                        src={"/xp_search.webp"}
                                        alt={"back arrow button"}
                                    />
                                    <h3>Search</h3>
                                </div>
                                <div className={"ml-2 pr-2 flex items-center hover:brightness-105 border-r border-gray-400 cursor-pointer"}>
                                    <Image
                                        width={25}
                                        height={25}
                                        src={"/xp_folders_open_empty.webp"}
                                        alt={"back arrow button"}
                                    />
                                    <h3 className={"ml-2"}>Folders</h3>
                                </div>
                                <div className={"ml-2 pr-2 flex items-center hover:brightness-105 cursor-pointer"}>
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
                                <div className={"flex-grow border border-xp-taskbar-300 cursor-pointer"}>
                                    <div className={"ml-1 flex items-center gap-2 "}>
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
                                    <div className={"flex items-center ml-1 mr-2 cursor-pointer"}>
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
                            <div className={"content px-2 flex-grow"}>Main content of the app</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Application