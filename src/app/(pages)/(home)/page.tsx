"use client"

import Taskbar from "@/components/taskbar";
import Icon from "@/components/Icons";
import {useDispatch} from "react-redux";
import {setIconSelection} from "@/redux/iconSelectionSlice";

export default function Home() {
    const listOfIcons: [number, number, string, string, string, string] [] = [
        [20, 20, '/xp_my_computer.webp', 'windows xp my computer icon', '', 'My Computer'],
        [20, 20, '/xp_floppy.webp', 'windows xp floppy disk icon', '', 'Floppy Disk'],
        [20, 20, '/xp_recycle_empty.webp', 'windows xp recycle bin empty icon', '', 'Recycle'],
        [20, 20, '/xp_word_file.webp', 'windows xp word document file icon', '', 'About.docx'],
    ]

    const dispatch = useDispatch()

    const handleClick = () => {
        console.log("clicked")
        dispatch(setIconSelection({
            id: -1
        }))
    }

    return (
        <main className={"bg-xp h-[100vh] bg-cover bg-center min-h-screen flex flex-col"}>
            <div className="flex-grow">
                <div className="p-5 flex flex-col gap-8" onClick={handleClick}>
                    {listOfIcons.map(([width, height, path, alt, others, label], index) => (
                        <Icon
                            key={index}
                            width={width}
                            height={height}
                            path={path}
                            alt={alt}
                            others={others}
                            label={label}
                            index={index}
                        />
                    ))}
                </div>
            </div>
            <Taskbar theme="xp"/>
        </main>
    );
}
