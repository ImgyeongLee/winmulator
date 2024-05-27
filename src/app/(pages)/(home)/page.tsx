'use client';

import React, { useState } from 'react';
import Taskbar from '@/components/taskbar';
import Icon from '@/components/Icons';
import {useDispatch, useSelector} from 'react-redux';
import { setIconSelection } from '@/redux/iconSelectionSlice';
import RightClickMenu from '@/components/rightClickMenu';
import Applications from "@/components/application/applications";
import {focusApp, getAppsState, getFocusedAppId} from "@/redux/appSlice";
import {cn} from "@/app/lib/utils";

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

    const [isResizing, setIsResizing] = useState<boolean>(false)
    const [colResize, setColResize] = useState<boolean>(false)
    const [rowResize, setRowResize] = useState<boolean>(false)

    const RESIZE_MARGIN = 5
    const apps = useSelector(getAppsState)
    const focusedAppId = useSelector(getFocusedAppId)
    const appState = apps[focusedAppId]

    const handleResize = (e: React.MouseEvent) => {
        if (!appState) return
        e.stopPropagation()
        const { clientX, clientY } = e
        const { x, y, width, height } = appState
        const rW = x + width
        const yH = y + height

        // console.log("rw: ", rW, ", cX: ", clientX)
        // console.log('cal: ', y - clientY)
        if (Math.abs(rW - clientX) < RESIZE_MARGIN) {
            // right
            console.log("right")
            setIsResizing(true)
        } else if (Math.abs(x - clientX) < RESIZE_MARGIN) {
            // left
            console.log("left")
            setIsResizing(true)
        } else if (Math.abs(yH - clientY) < RESIZE_MARGIN) {
            // bottom
            console.log("bottom")
            setIsResizing(true)
        } else if (Math.abs(y - clientY) < RESIZE_MARGIN) {
            // top
            console.log("top")
            setIsResizing(true)
        }
    }

    const handleMouseUp = (e: React.MouseEvent) => {
        // console.log("moving")
        setColResize(false)
        setRowResize(false)
        setIsResizing(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!appState) return
        e.stopPropagation()
        const { clientX, clientY } = e
        const { x, y, width, height } = appState
        const rW = x + width
        const yH = y + height
        // console.log("rW: ", rW)
        // console.log("calc: ", Math.abs(rW - clientX))
        if (Math.abs(rW - clientX) <= RESIZE_MARGIN) {
            setColResize(true)
        } else if (Math.abs(x - clientX) < RESIZE_MARGIN) {
            setColResize(true)
        } else if (Math.abs(yH - clientY) < RESIZE_MARGIN) {
            setRowResize(true)
        } else if (Math.abs(y - clientY) < RESIZE_MARGIN) {
            setRowResize(true)
        } else {
            setRowResize(false)
            setColResize(false)
        }
    }

    return (
        <main className={'bg-xp h-[100vh] bg-cover bg-center min-h-screen flex flex-col'}>
            <div
                className={cn("flex-grow cursor-default", {
                    'cursor-col-resize': colResize,
                    'cursor-row-resize': rowResize
                })}
                onClick={handleClick} onContextMenu={handleRightClick}
                onMouseMove={handleMouseMove}
                onMouseDown={handleResize}
                onMouseUp={handleMouseUp}
            >
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
                <Applications />
            </div>
            <RightClickMenu menuVisible={menuVisible} menuPosition={menuPosition} />
            <Taskbar theme="xp" />
        </main>
    );
}
