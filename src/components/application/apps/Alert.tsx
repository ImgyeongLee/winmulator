'use client';

import { cn } from '@/app/lib/utils';
import { useSelector } from 'react-redux';
import { getAppsState, getFocusedAppId } from '@/redux/appSlice';

export default function Alert() {
    const appsState = useSelector(getAppsState);
    const focusedAppId = useSelector(getFocusedAppId);
    const appState = focusedAppId != null ? (focusedAppId === 1 ? appsState[focusedAppId] : undefined) : undefined;
    const height = appState ? (appState.fullSize ? -1 : appsState[1].height) : appsState[1].height;

    return (
        <div
            className={cn('app-body h-full overflow-auto')}
            style={{
                height: height === -1 ? '100vh' : height - 110,
            }}>
            <div>Not found</div>
        </div>
    );
}
