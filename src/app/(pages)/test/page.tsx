'use client';

import { FloppyDiskProgramWin2000WinXP, FloppyDiskProgramWin7 } from '@/app/(components)/executable';

export default function TestPage() {
    return (
        <div className="h-full w-full">
            <FloppyDiskProgramWin2000WinXP />
            <FloppyDiskProgramWin7 />
        </div>
    );
}
