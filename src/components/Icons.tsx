import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {getSelectedIconId, setIconSelection} from "@/redux/iconSelectionSlice";
import {addAndOpenApp, focusApp, getAppsState, toggleMinimizeApp} from "@/redux/appSlice";

interface IconProps {
    width: number;
    height: number;
    path: string;
    alt: string;
    others: string;
    label: string;
    index: number;
}

const defaultOpenPositions: { x: number, y: number } []= [
    { x: 150, y: 200},
    { x: 200, y: 250},
    { x: 550, y: 100},
    { x: 500, y: 400},
    { x: 400, y: 500}
]

const Icon: React.FC<IconProps> = ( {width, height, path, alt, others, label, index} ) => {

    const dispatch = useDispatch()
    const currentSelectionId = useSelector(getSelectedIconId)
    const appsState = useSelector(getAppsState)
    const [isSelected, setIsSelected] = useState<boolean>(false)

    useEffect(() => {
        if (currentSelectionId === index) {
            setIsSelected(true)
        }
        else {
            setIsSelected(false)
        }
    }, [currentSelectionId])

    const handleSelection = (e: React.MouseEvent) => {
        e.stopPropagation()
        dispatch(setIconSelection({
            id: index,
        }))
    }

    const handleDoubleClick = () => {
        if (appsState && !appsState[index]) {
            let position = defaultOpenPositions[index]
            position = adjustPosition(position.x, position.y)

            dispatch(addAndOpenApp({
                id: index,
                label: label,
                path: path,
                x: position.x,
                y: position.y,
                width: 600,
                height: 500,
                open: true,
                minimized: false,
                fullSize: false
            }))
        } else {
            if (appsState[index].minimized) {
                dispatch(toggleMinimizeApp({
                    id: index
                }))
            }
        }
        dispatch(focusApp({
            id: index
        }))
    }

    return (
        <div className={`flex flex-col justify-center items-center w-fit min-w-[50px]`}
             onClick={handleSelection}
             onDoubleClick={handleDoubleClick}
        >
            <Image
                width={width}
                height={height}
                src={path}
                alt={alt}
                className={`${others} text-center mb-1 ${isSelected ? 'bg-xp-app-select' : ''}`}
            />
            <p
                className={`xp-text-shadow text-[0.6rem] text-white ${isSelected ? 'bg-xp-app-select' : ''}`}
            >{label}</p>
        </div>
    )
}

export default Icon

const adjustPosition = (x: number, y: number) => {
    const adjustedX = x > window.innerWidth - 500 ? window.innerWidth - 500 : x;
    const adjustedY = y > window.innerHeight - 400 ? window.innerHeight - 400 : y;
    return { x: adjustedX, y: adjustedY };
};