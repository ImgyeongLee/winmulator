import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {getSelectedIconId, setIconSelection} from "@/redux/iconSelectionSlice";

interface IconProps {
    width: number;
    height: number;
    path: string;
    alt: string;
    others: string;
    label: string;
    index: number;
}

const Icon: React.FC<IconProps> = ( {width, height, path, alt, others, label, index} ) => {

    const dispatch = useDispatch()
    const currentSelectionId = useSelector(getSelectedIconId)
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

    return (
        <div className={`flex flex-col justify-center items-center w-fit min-w-[50px]`}
             onClick={handleSelection}
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