'use client';

import React, { useState } from 'react';
import Taskbar from '@/components/taskbar';
import Icon from '@/components/Icons';
import { useDispatch } from 'react-redux';
import { setIconSelection } from '@/redux/iconSelectionSlice';
import RightClickMenu from '@/components/rightClickMenu';
import Applications from "@/components/application/applications";

export default function Home() {
    const listOfIcons: [number, number, string, string, string, string][] = [
        [35, 35, '/xp_my_computer.webp', 'windows xp my computer icon', '', 'My Computer'],
        [35, 35, '/xp_floppy.webp', 'windows xp floppy disk icon', '', 'Floppy Disk'],
        [35, 35, '/xp_recycle_empty.webp', 'windows xp recycle bin empty icon', '', 'Recycle'],
        [35, 35, '/xp_word_file.webp', 'windows xp word document file icon', '', 'About.docx'],
    ];

    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        dispatch(
            setIconSelection({
                id: -1,
            })
        );

        // left click
        if (e.button === 0) {
            e.preventDefault();
            setMenuVisible(false);
        }
    };

    // right click
    const handleRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();

        setMenuVisible(true);
        setMenuPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const [isMoving, setIsMoving] = useState<boolean>(false)
    const handleMouseUp = (isMoving: boolean) => {
        setIsMoving(isMoving)
    }

    return (
        <main className={'bg-xp h-[100vh] bg-cover bg-center min-h-screen flex flex-col'}>
            <div className="flex-grow" onClick={handleClick} onContextMenu={handleRightClick} onMouseUp={() => handleMouseUp(false)}>
                <div className="p-5 flex flex-col gap-8">
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
                <Applications isMoving={isMoving} handleMouseUpFromTop={handleMouseUp}/>
            </div>
            <RightClickMenu menuVisible={menuVisible} menuPosition={menuPosition} />
            <Taskbar theme="xp" />
        </main>
    );
}
