import TestPage from '@/app/(pages)/test/page';
import { cn } from '@/app/lib/utils';
import { useSelector } from 'react-redux';
import { getAppsState, getFocusedAppId } from '@/redux/appSlice';
import { FloppyDiskProgramWin2000WinXP } from '@/app/(components)/executable';

export default function FloppyDisk() {
    const appsState = useSelector(getAppsState);
    const focusedAppId = useSelector(getFocusedAppId);
    const appState = focusedAppId != null ? focusedAppId === 1 ? appsState[focusedAppId] : undefined : undefined
    const height = appState && appState.height || appsState[1].height

    return (
        <div
            className={cn('app-body h-full overflow-auto')}
            style={{
                height: height - 110
            }}
        >
            <FloppyDiskProgramWin2000WinXP />
        </div>
    );
}
