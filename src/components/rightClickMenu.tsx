import React from "react";
import { IoTriangleSharp } from "react-icons/io5";
import {useSelector} from "react-redux";
import {getAppsState, getFocusedAppId} from "@/redux/appSlice";

interface RightClickMenuProps {
    menuVisible: boolean;
    menuPosition: {
        y: number,
        x: number
    }
}

interface menuOptionProps {
    title: string;
    submenu: boolean;
    border: boolean;
    onRefresh: () => void;
}

const MenuOption: React.FC<menuOptionProps> = ( {title, submenu, border, } ) => {
    const apps = useSelector(getAppsState)
    const focusedAppId = useSelector(getFocusedAppId)
    const currentApp = focusedAppId != null ? apps[focusedAppId] : undefined

    const handleClick = () => {
        if (title === "Refresh") {
            console.log("refreshing")
            window.location.reload()
        }
    }

    return (
        <li
            className={`text-[0.7rem] hover:bg-xp-app-select pb-[2px] p-1 pl-4  cursor-pointer hover:text-white 
            flex justify-center items-center ${border ? 'border-b border-neutral-500': ''}`}
            onClick={handleClick}
        >
            <h3 className={"flex-grow"}>{title}</h3>
            {submenu && <IoTriangleSharp className={"rotate-90 w-[6px] hover:text-white"}/>}
        </li>
    )
}

const RightClickMenu: React.FC<RightClickMenuProps> = ( {menuVisible, menuPosition} ) => {
    const menuOptions: [string, boolean, boolean][] = [
        ["View", true, false],
        ["Sort By", true, false],
        ["Refresh", false, true],
        ["New", true, true],
        ["About", false, false]
    ]

    return (
        <>
            {menuVisible && (
                <ul
                    style={{
                        position: "absolute",
                        top: menuPosition.y,
                        left: menuPosition.x,
                        listStyle: "none",
                        zIndex: 1000
                    }}
                    className={"shadow-xl w-[100px] bg-xp-right-click-menu border-2 border-xp-right-click-menu"}
                >
                    {menuOptions.map(([title, submenu, border], index) => {
                        return (
                            <MenuOption title={title} key={index} submenu={submenu} border={border}/>
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default RightClickMenu