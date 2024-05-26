import React from "react";
import Image from "next/image";

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
    return (
        <div
            style={{
                position: "absolute",
                top: appState.y,
                left: appState.x,
            }}
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
                                    src={'/xp_app_close.webp'} alt={"close app icon"}
                                    layout="fill"
                                    objectFit="cover"
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
                    <div className={"controls px-2 flex flex-row xp-app-bb-divider text-[0.8rem]"}>
                        Several icons
                    </div>
                    <div className={"currentPath px-2 flex text-[0.8rem]"}>
                        <h3>Address</h3>
                        <div className={"flex-grow flex items-center gap-2"}>
                            <Image
                                width={15}
                                height={10}
                                src={appState.path}
                                alt={appState.label + " icon"}
                                className={"h-4"}
                            />
                            <h1>{appState.label}</h1>
                        </div>
                    </div>
                    <div className={"content px-2"}>Main content of the app</div>
                </div>
            </div>
        </div>
    )
}

export default Application