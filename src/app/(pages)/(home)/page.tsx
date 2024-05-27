'use client';

import React, { useState } from 'react';
import Taskbar from '@/components/taskbar';
import Icon from '@/components/Icons';
import {useDispatch, useSelector} from 'react-redux';
import { setIconSelection } from '@/redux/iconSelectionSlice';
import RightClickMenu from '@/components/rightClickMenu';
import Applications from "@/components/application/applications";
import {focusApp, getAppsState, getFocusedAppId, moveApp, resizeApp} from "@/redux/appSlice";
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
    const [colResize, setColResize] = useState<{ left: boolean, right: boolean }>({left: false, right: false})
    const [rowResize, setRowResize] = useState<{ top: boolean, bottom: boolean}>({top: false, bottom: false})

    const RESIZE_MARGIN = 5
    const apps = useSelector(getAppsState)
    const focusedAppId = useSelector(getFocusedAppId)
    const appState = focusedAppId != null ? apps[focusedAppId] : undefined

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!appState) return
        e.stopPropagation()

        if (colResize.left || colResize.right || rowResize.bottom || rowResize.top) {
            setIsResizing(true)
        }
    }

    const handleMouseUp = () => {
        setIsResizing(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!appState) return
        e.stopPropagation()
        const { clientX, clientY } = e
        const { x, y, width, height } = appState
        const rW = x + width
        const yH = y + height

        if (isResizing) {
            if (colResize.left) {
                const offsetX = x - clientX
                dispatch(resizeApp({
                    id: appState.id,
                    width: width + offsetX > 350 ? width + offsetX : width,
                    height: height
                }))
                dispatch(moveApp({
                    id: appState.id,
                    x: width + offsetX > 350 ? x - offsetX : x,
                    y: y
                }))
            }
            else if (colResize.right) {
                const offsetX = clientX - (x + width)
                dispatch(resizeApp({
                    id: appState.id,
                    width: width + offsetX > 350 ? width + offsetX : width,
                    height: height
                }))
            }
            else if (rowResize.top) {
                const offsetY = y - clientY
                dispatch(resizeApp({
                    id: appState.id,
                    height: height + offsetY > 350 ? height + offsetY : height,
                    width: width
                }))
                dispatch(moveApp({
                    id: appState.id,
                    y: height + offsetY > 350 ? (y - offsetY) : y,
                    x: x
                }))
            }
            else if (rowResize.bottom) {
                const offsetY = clientY - (y + height)
                dispatch(resizeApp({
                    id: appState.id,
                    height: height + offsetY > 350 ? height + offsetY : height,
                    width: width
                }))
            }
        }
        else {
            if (Math.abs(rW - clientX) <= RESIZE_MARGIN) {
                setColResize({left: false, right: true})
            } else if (Math.abs(x - clientX) <= RESIZE_MARGIN) {
                setColResize({left: true, right: false})
            } else if (Math.abs(yH - clientY) <= RESIZE_MARGIN) {
                setRowResize({bottom: true, top: false})
            } else if (Math.abs(y - clientY) <= RESIZE_MARGIN) {
                setRowResize({bottom: false, top: true})
            } else {
                setRowResize({bottom: false, top: false})
                setColResize({left: false, right: false})
            }
        }
    }

    return (
        <main className={'bg-xp h-[100vh] bg-cover bg-center min-h-screen flex flex-col'}>
            <div
                className={cn("flex-grow cursor-default", {
                    'cursor-col-resize': colResize.right || colResize.left,
                    'cursor-row-resize': rowResize.top || rowResize.bottom
                })}
                onClick={handleClick} onContextMenu={handleRightClick}
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
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
