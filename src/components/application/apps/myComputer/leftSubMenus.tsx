'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Item {
    path: string;
    label: string;
}

interface Items {
    [key: string]: Item[];
}

interface LeftSubMenuProps {
    items: Items;
    showAbout: boolean;
}

const LeftSubMenus: React.FC<LeftSubMenuProps> = ({ items, showAbout }) => {
    return (
        <div className={'p-2 bg-xp-my-comp-left-menu min-h-full flex flex-col '}>
            {Object.keys(items).map((title, index) => {
                return (
                    <div key={index + title} className={'bg-xp-my-comp-left-submenus rounded-[5px] mb-[10px] pb-2'}>
                        <div
                            className={
                                'py-1 px-2 rounded-[5px] border-b border-gray-400/30 flex bg-xp-my-comp-left-menu-title'
                            }>
                            <h2 className={'font-bold text-[0.8rem] flex-grow text-blue-900'}>{title}</h2>
                            <Image
                                width={20}
                                height={20}
                                src={'/xp/appControls/collapse.webp'}
                                alt={'collapse button'}
                            />
                        </div>
                        <div className={'mt-2 px-2'}>
                            {items[title].map(({ path, label }, subIndex) => {
                                return (
                                    <div key={subIndex + label + path} className={'flex gap-2'}>
                                        <Image
                                            width={200}
                                            height={200}
                                            src={path}
                                            alt={label + ' icon'}
                                            className={'w-[15px] h-[15px]'}
                                        />
                                        <h3 className={'text-[0.7rem] text-blue-600'}>{label}</h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            {showAbout && (
                <div className={'bg-xp-my-comp-left-submenus rounded-[5px] mb-[10px] pb-2'}>
                    <div
                        className={
                            'py-1 px-2 rounded-[5px] border-b border-gray-400/30 flex bg-xp-my-comp-left-menu-title'
                        }>
                        <h2 className={'font-bold text-[0.8rem] flex-grow text-blue-900'}>About Devs</h2>
                        <Image width={20} height={20} src={'/xp/appControls/collapse.webp'} alt={'collapse button'} />
                    </div>
                    <div className={'mt-2 px-2 flex flex-col'}>
                        <div className={'flex items-center gap-2 mb-1'}>
                            <img
                                src={'https://avatars.githubusercontent.com/u/72935373?v=4'}
                                alt={'Hla Htun profile'}
                                className={'w-[30px] rounded-full border border-blue-800'}
                            />
                            <Link
                                href={'https://github.com/HlaKarki'}
                                className={'text-[0.7rem] text-blue-600 underline'}>
                                Hla
                            </Link>
                        </div>
                        <div className={'flex items-center gap-2'}>
                            <img
                                src={'https://avatars.githubusercontent.com/u/81654344?v=4'}
                                alt={'Imgyeong Lee Profile'}
                                className={'w-[30px] rounded-full border border-blue-800'}
                            />
                            <Link
                                href={'https://github.com/ImgyeongLee'}
                                className={'text-[0.7rem] text-blue-600 underline'}>
                                Imgyeong Lee
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeftSubMenus;
