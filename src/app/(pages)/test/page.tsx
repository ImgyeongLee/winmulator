'use client';

import { FloppyDiskProgramWin2000WinXP, FloppyDiskProgramWin7 } from '@/app/(components)/executable';

export default function TestPage() {
    return (
        <div className="h-full w-full overflow-auto">
            <FloppyDiskProgramWin2000WinXP />
            <FloppyDiskProgramWin7 />
        </div>
    );
}
