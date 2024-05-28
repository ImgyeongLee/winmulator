'use client';

import { Lora, Pixelify_Sans } from 'next/font/google';
import { cn } from '../lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { createFloppyData, readFloppyData, readTopFloppyData } from '../lib/actions';
import { FloppyData, FloppyDataFields } from '../lib/types';
const lora = Lora({ subsets: ['latin'] });
const pixelify_sans = Pixelify_Sans({ subsets: ['latin'] });

export function FileUploadModal({ onClick }: { onClick: () => void }) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            alert(`Selected file: ${file.name}`);
        }
    };
    return (
        <article className="bg-white border-4 border-[#9C0000] flex flex-col justify-center items-center p-2 w-[40%] min-w-[200px]">
            <div>Our Policy</div>
            <section className={cn(pixelify_sans.className, 'border-2 border-t-black border-l-black bg-white m-1')}>
                <div className="overflow-y-auto leading-4 text-left mb-3 max-h-[150px]">
                    By uploading your file, you agree with our policy. Our policy is nothing. Just enjoy this website.
                    We are just gonna take the size of your file cuz it is super expensive to store your file into our
                    database server. What if the user uploads Baldur&lsquo;s Gate 3? Then we are screwed up....So
                    don&lsquo;t worry about that....
                </div>
            </section>
            <div className="space-x-2">
                <button
                    className="border-2 border-t-white border-l-white border-r-black border-b-black px-2 active:bg-[#b5b5b5] bg-[#CCCCCC]"
                    onClick={handleButtonClick}>
                    Browse the files
                </button>
                <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                <button
                    className="border-2 border-t-white border-l-white border-r-black border-b-black px-2 active:bg-[#b5b5b5] bg-[#CCCCCC]"
                    onClick={onClick}>
                    Cancel
                </button>
            </div>
        </article>
    );
}

export function RecordForm() {
    const [input, setInput] = useState<FloppyDataFields>();
    const [isDone, setIsDone] = useState<boolean>(true);
    const handleSubmit = async () => {
        if (input) {
            setIsDone(false);
            try {
                const user = await createFloppyData(input);
            } catch (error) {
                console.log(error);
                setIsDone(true);
            } finally {
                setIsDone(true);
            }
        }
    };
    return <form></form>;
}

export function LeaderBoard() {
    const [topUser, setTopUser] = useState<FloppyData>();
    const [data, setData] = useState<FloppyData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await readTopFloppyData();
                const data = await readFloppyData();
                if (!result) {
                    throw new Error('Network response was not ok');
                }
                if (!data) {
                    throw new Error('Network response was not ok');
                }
                setTopUser(result);
                setData(data);
            } catch (error) {
                setError('ERROR!');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <div>
            <h1 className="font-semibold">Leaderboard</h1>
            <div>
                <div>
                    Top user: {topUser?.username} - {topUser?.disknum} floppy disks.
                </div>
                <div>
                    &#40;Submission: {topUser?.filename} / {topUser?.filesize}&#41;
                </div>
            </div>
            <div>
                <div>Board</div>
                <div>
                    {data.map((d, i) => {
                        return <div key={i}>{d.username}</div>;
                    })}
                </div>
            </div>
        </div>
    );
}

export function FloppyDiskProgramWin2000WinXP() {
    const [isFileToggle, setIsFileToggle] = useState<boolean>(false);
    const [isBoardToggle, setIsBoardToggle] = useState<boolean>(false);

    const handleFileToggle = () => {
        setIsFileToggle(true);
        setIsBoardToggle(false);
    };

    const handleCancelToggle = () => {
        setIsFileToggle(false);
        setIsBoardToggle(false);
    };

    return (
        <main className={cn(lora.className, 'min-h-[100%] w-full bg-[#CCCCCC] text-center select-none pb-6')}>
            <header className="text-[calc(3.5vw+1rem)] py-4" style={{ textShadow: '5px 5px #5539C1' }}>
                Floppy Disk Online Convertor
            </header>
            <div
                className="bg-gradient-to-r from-transparent via-[#5539C1] to-transparent py-1 text-xl text-white animate-rainbow px-5"
                style={{ textShadow: '#FFF 1px 0 10pxe' }}>
                Welcome to disk online convertor
            </div>
            <div className="p-4">This website is for creating a lot of 4KB chunks from your uploaded file.</div>
            <div className="pb-4">
                Contributors:{' '}
                <Link href="https://imgyeong.vercel.app/" className="text-[#2626ff] underline underline-offset-4">
                    @Imgyeong
                </Link>{' '}
                <Link href="https://hlakarki.vercel.app/" className="text-[#2626ff] underline underline-offset-4">
                    @Hla
                </Link>
            </div>
            <section className="px-6">
                <article className="bg-[#c0e6bd] border-4 border-[#4ccf43] p-4 flex flex-col justify-center items-center">
                    <div className="text-red-700 text-2xl font-bold pb-3">&#8902; Menu &#8902;</div>
                    <div className="flex flex-col items-center gap-2 mb-4">
                        <div className="flex flex-col md:flex-row gap-1 items-center justify-center">
                            <button
                                className="border-2 border-t-white border-l-white border-r-black border-b-black px-2 active:bg-[#b5b5b5] bg-[#CCCCCC]"
                                onClick={handleFileToggle}>
                                Upload File
                            </button>
                            <div className="text-sm">Upload your file and get a lot of floppy disks!</div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-1 items-center justify-center">
                            <button
                                className="border-2 border-t-white border-l-white border-r-black border-b-black px-2 active:bg-[#b5b5b5] bg-[#CCCCCC]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsFileToggle(false);
                                    setIsBoardToggle(true);
                                }}>
                                Leaderboard
                            </button>
                            <div className="text-sm">Look around other submissions!</div>
                        </div>
                    </div>
                    {isFileToggle && <FileUploadModal onClick={handleCancelToggle} />}
                    {isBoardToggle && <LeaderBoard />}
                </article>
            </section>
            <footer className="text-xs py-7">&copy; 2024 Hla Htun and Imgyeong Lee. All rights reserved.</footer>
        </main>
    );
}

export function FloppyDiskProgramWin7() {
    const [isFileToggle, setIsFileToggle] = useState<boolean>(false);
    const [isBoardToggle, setIsBoardToggle] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('Home');

    return (
        <main className="md:p-4 p-1 w-full min-h-[100%] select-none">
            <header className="text-[calc(1vw+1rem)] font-bold text-[#4F4F4F] italic mb-3">
                Floppy Disk Online Convertor
            </header>
            <nav className="bg-[#F4F4F4] w-full py-1 px-3 md:space-x-6 mb-3 md:text-base text-sm space-x-3">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsBoardToggle(false);
                        setIsFileToggle(false);
                        setTitle('Home');
                    }}>
                    Home
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsBoardToggle(true);
                        setIsFileToggle(false);
                        setTitle('Leaderboard');
                    }}>
                    Leaderboard
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsBoardToggle(false);
                        setIsFileToggle(true);
                        setTitle('Upload');
                    }}>
                    Upload
                </button>
            </nav>
            <div className="text-white bg-[#0976B3] py-1 px-3 text-xl italic font-semibold">{title}</div>
            {!isBoardToggle && !isFileToggle && <FloppyHomeWin7 />}
            {isFileToggle && <FloppyUploadWin7 />}
            {isBoardToggle && <FloppyLeaderBoardWin7 />}
        </main>
    );
}

export function FloppyHomeWin7() {
    return (
        <div className="flex flex-col md:grid-cols-3 md:grid mt-3 gap-3">
            <div className="md:col-span-2 bg-slate-100 p-4 flex flex-col lg:flex-row items-center">
                <Image src="/floppy_disk.webp" alt="disk" width={500} height={500} />
                <div className="p-4">
                    <div className="font-semibold text-2xl">About floppy disk</div>
                    <div className="leading-tight mt-2">
                        A floppy disk or floppy diskette is a type of disk storage composed of a thin and flexible disk
                        of a magnetic storage medium in a square or nearly square plastic enclosure lined with a fabric
                        that removes dust particles from the spinning disk.
                    </div>
                    <div className="leading-tight mt-2">
                        You cannot but the disks here, but at least you can see our portfolios. Check these out!
                    </div>
                    <Link href="https://imgyeong.vercel.app/" className="text-[#2626ff] underline underline-offset-4">
                        @Imgyeong
                    </Link>{' '}
                    <Link href="https://hlakarki.vercel.app/" className="text-[#2626ff] underline underline-offset-4">
                        @Hla
                    </Link>
                </div>
            </div>
            <div className="p-4 bg-hiring bg-cover bg-center h-full w-full min-h-[500px] self-center"></div>
            <div className="md:col-span-3 bg-slate-300 p-4">dddf</div>
        </div>
    );
}

export function FloppyLeaderBoardWin7() {
    return <div className="p-4 mt-3 bg-[#F4F4F4] ">Leaderboard</div>;
}

export function FloppyUploadWin7() {
    const [fileSize, setFileSize] = useState<number>(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileSize(file.size);
        }
    };

    return (
        <div className="flex flex-col mt-3 gap-3">
            <div className="md:col-span-2 bg-[#EAEAEA] p-4">
                <div className="font-bold text-xl pb-2">What is this service for?</div>
                <div>SERVICE</div>
            </div>
            <div className="p-4 bg-[#F4F4F4] flex flex-col justify-center items-center">
                <div className="w-[50%] min-w-[250px]">
                    <div className="font-bold text-xl pb-2">Our Policy</div>
                    <div className="overflow-y-auto leading-5 text-left mb-5 max-h-[150px] p-2 bg-white border border-[#e4e4e4] rounded-md">
                        By uploading your file, you agree with our policy. Our policy is nothing. Just enjoy this
                        website. We are just gonna take the size of your file, cuz it is super expensive to store your
                        file into our database server. What if the user uploads Baldur&lsquo;s Gate 3? Then we are
                        screwed up.... So don&lsquo;t worry about that....
                    </div>
                </div>

                <div className="space-x-2">
                    <div>
                        <button className="win7-button" onClick={handleButtonClick}>
                            Browse the files
                        </button>
                    </div>
                    <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                </div>

                {fileSize > 0 && <div className="">Your file size is {fileSize} bytes.</div>}
            </div>
        </div>
    );
}
