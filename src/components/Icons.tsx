import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {getSelectedIconId, setIconSelection} from "@/redux/iconSelectionSlice";
import {addAndOpenApp, getAppsState} from "@/redux/appSlice";

interface IconProps {
    width: number;
    height: number;
    path: string;
    alt: string;
    others: string;
    label: string;
    index: number;
}

const defaultOpenPositions: [x: number, y: number] []= [
    [150, 200],
    [200, 250],
    [550, 100],
    [500, 500]
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

    const handleDoubleClick = (e: React.MouseEvent) => {
        console.log("double clicked!")
        if (appsState && !appsState[index]) {
            dispatch(addAndOpenApp({
                id: index,
                x: defaultOpenPositions[index][0],
                y: defaultOpenPositions[index][1],
                open: true,
                minimized: false,
                fullSize: false
            }))
        } else {
            console.log("exists")
        }
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