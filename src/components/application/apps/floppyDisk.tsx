import TestPage from '@/app/(pages)/test/page';
import { cn } from '@/app/lib/utils';
import { useSelector } from 'react-redux';
import { getAppsState, getFocusedAppId } from '@/redux/appSlice';
import { FloppyDiskProgramWin2000WinXP } from '@/app/(components)/executable';

export default function FloppyDisk() {
    const appsState = useSelector(getAppsState);
    const focusedAppId = useSelector(getFocusedAppId);
    const appState = focusedAppId ? appsState[focusedAppId] : undefined;
    const heightClass =
        appState && appState.height < 516 ? { height: `${appState.height - 110}px` } : { height: '100%' };
    return (
        <div className={cn('app-body h-full overflow-auto')} style={heightClass}>
            <FloppyDiskProgramWin2000WinXP />
        </div>
    );
}
