'use client';

import { FloppyDiskProgramWin2000WinXP, FloppyDiskProgramWin7 } from '@/app/(components)/executable';
import { useState } from 'react';

export default function FloppyPage() {
    const [version, setVersion] = useState<string>('');

    const renderWebsite = () => {
        if (version == 'old') {
            return <FloppyDiskProgramWin2000WinXP />;
        } else if (version == 'new') {
            return <FloppyDiskProgramWin7 />;
        } else {
            return (
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <button
                        className="text-[#1c1cef] underline"
                        onClick={() => {
                            setVersion('old');
                        }}>
                        Our old website
                    </button>
                    <button
                        className="text-[#1c1cef] underline"
                        onClick={() => {
                            setVersion('new');
                        }}>
                        Our new website
                    </button>
                </div>
            );
        }
    };
    return <div className="h-full w-full overflow-auto">{renderWebsite()}</div>;
}
