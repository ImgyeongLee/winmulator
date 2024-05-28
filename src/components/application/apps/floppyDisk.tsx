'use client';

import { cn } from '@/app/lib/utils';
import { useSelector } from 'react-redux';
import { getAppsState, getFocusedAppId } from '@/redux/appSlice';
import FloppyPage from '@/app/(pages)/floppy/page';

export default function FloppyDisk() {
    const appsState = useSelector(getAppsState);
    const focusedAppId = useSelector(getFocusedAppId);
    const appState = focusedAppId != null ? (focusedAppId === 1 ? appsState[focusedAppId] : undefined) : undefined;
    const height = appState ? (appState.fullSize ? -1 : appState.height || appsState[1].height) : 450;

    return (
        <div
            className={cn('app-body h-full overflow-auto')}
            style={{
                height: height === -1 ? '100vh' : height - 110,
            }}>
            <FloppyPage />
        </div>
    );
}
