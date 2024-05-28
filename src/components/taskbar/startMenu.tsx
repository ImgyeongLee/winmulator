import Image from 'next/image';
import { cn } from '@/app/lib/utils';

export default function StartMenu() {
    const startMenuLeftItems: [path: string, label: string, sublabel: string, width: number][] = [
        ['/xp/startMenu/IE.webp', 'Internet', 'Internet Explorer', 20],
        ['/xp/startMenu/email.webp', 'E-mail', 'Contact the developers', 20],
        ['', '', '', -1],
        ['/xp/startMenu/notepad.webp', 'Notepad', '', 20],
        ['/xp/startMenu/paint.webp', 'Paint', '', 20],
        ['/xp/startMenu/media_player.webp', 'Windows Media Player', '', 20],
        ['/xp/startMenu/win_messenger.webp', 'Windows Messenger', '', 20],
        ['/xp/appIcons/spider_solitaire.webp', 'Solitaire', '', 20],
        ['/xp/appIcons/minesweeper.webp', 'Minesweeper', '', 20],
        ['/xp/appIcons/pinball3d.webp', '3D Pinball', '', 20],
    ];
    return (
        <div
            className={
                'ml-[2px] main-container absolute z-500 bottom-[33px] flex flex-col justify-start  ' +
                ' w-[380px] h-[500px] rounded-[8px] bg-xp-start-menu xp-box-shadow'
            }>
            <div className={'header rounded-[8px] flex items-center gap-2 xp-start-menu-header-gradient px-1 py-2'}>
                <div className={'border-[2px] border-neutral-100/70 rounded-[5px]'}>
                    <Image width={35} height={20} src={'/userImage1.webp'} alt={'user account image'} />
                </div>

                <h2 className={'font-bold text-[0.9rem]'}>User</h2>
            </div>
            <div
                className={
                    'flex-grow body grid grid-cols-2 divide-x-2 divide-xp-start-menu-right-border ' +
                    ' bg-white mx-[3px]'
                }>
                <div className={'flex flex-col left-side ml-1 mt-1'}>
                    <div className={'flex-grow'}>
                        {startMenuLeftItems.map(([path, label, sublabel, width], index) => {
                            if (!path) {
                                return (
                                    <div key={index + width} className={'border-b border-gray-400/50 mt-1 mb-2'}></div>
                                );
                            }
                            return (
                                <div
                                    key={index}
                                    className={cn('flex items-center gap-2 mb-2 text-black', {
                                        'mb-1': sublabel,
                                    })}>
                                    <Image
                                        width={width}
                                        height={20}
                                        src={path}
                                        alt={label + ' icon'}
                                        className={cn('w-[30px] h-[30px]', {
                                            'rounded-full': label === '3D Pinball',
                                        })}
                                    />
                                    <div className={'flex flex-col'}>
                                        <h3 className={'text-[0.8rem] mr-auto'}>{label}</h3>
                                        <h3 className={'text-[0.7rem] text-gray-900/60 mr-auto'}>{sublabel}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className={
                            'text-black font-bold text-[0.8rem] flex justify-end items-center ' +
                            ' py-2 border-t border-gray-400/50 w-full '
                        }>
                        <h3>All Programs</h3>
                        <Image
                            width={20}
                            height={20}
                            src={'/xp/appControls/play_button.webp'}
                            alt={'all programs button'}
                            className={'mx-2'}
                        />
                    </div>
                </div>
                <div className={'right-side'}>R</div>
            </div>
            <div className={'footer flex flex-row'}>
                <h3>Log off</h3>
                <h3>Turn off</h3>
            </div>
        </div>
    );
}
