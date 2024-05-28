import Image from "next/image";
import {FaGithub} from "react-icons/fa";
import Link from "next/link";

export default function RightBody() {
    return (
        <div className={"right-content overflow-auto"}>
            <div className={"flex flex-col"}>
                <section>
                    <h1 className={"mt-2 ml-4 font-bold text-[0.8rem]"}>Files Stored on This Computer</h1>
                    <div className={"h-[1px] w-full bg-gradient-to-r from-xp-taskbar to-transparent"}></div>

                    <div className={"flex flex-row cursor-pointer"}>
                        <div className={"flex flex-row items-center px-4 text-[0.8rem] group hover:brightness-105"}>
                            <Image
                                width={20} height={20} src={"/xp/appIcons/folder_default.webp"} alt={"Folder button"}
                                className={"w-[40px]"}
                            />
                            <h3 className={"group-hover:italic"}>Shared Documents</h3>
                        </div>
                        <div className={"flex flex-row items-center p-4 text-[0.8rem] group hover:brightness-105"}>
                            <Image
                                width={20} height={20} src={"/xp/appIcons/folder_default.webp"} alt={"Folder button"}
                                className={"w-[40px]"}
                            />
                            <h3 className={"group-hover:italic"}>{"User's Documents"}</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className={"ml-4 font-bold text-[0.8rem]"}>Hard Disk Drives</h1>
                    <div className={"h-[1px] w-full bg-gradient-to-r from-xp-taskbar to-transparent"}></div>

                    <div className={"flex flex-row cursor-pointer"}>
                        <div className={"flex flex-row items-center px-4 text-[0.8rem] group hover:brightness-105"}>
                            <Image
                                width={20} height={20} src={"/xp/appIcons/local_disk.webp"} alt={"Folder button"}
                                className={"w-[40px] mr-1"}
                            />
                            <h3 className={"group-hover:italic"}>{"Local Disk (C:)"}</h3>
                        </div>
                        <div className={"flex flex-row items-center p-4 text-[0.8rem] group hover:brightness-105"}>
                            <Image
                                width={20} height={20} src={"/xp/appIcons/local_disk.webp"} alt={"Folder button"}
                                className={"w-[40px] mr-1"}
                            />
                            <h3 className={"group-hover:italic"}>{"Local Disk (D:)"}</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className={"ml-4 font-bold text-[0.8rem]"}>Devices with Removable Storage</h1>
                    <div className={"h-[1px] w-full bg-gradient-to-r from-xp-taskbar to-transparent"}></div>

                    <div className={"flex flex-row mb-4 cursor-pointer group"}>
                        <div className={"flex flex-row items-center px-4 text-[0.8rem] pt-4 group-hover:brightness-105"}>
                            <Image
                                width={20} height={20} src={"/xp/appIcons/cd_drive.webp"} alt={"Folder button"}
                                className={"w-[40px] mr-1"}
                            />
                            <h3 className={"group-hover:italic"}>{"CD Drive (E:)"}</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className={"ml-4 font-bold text-[0.8rem]"}>Contribute to WinMulator</h1>
                    <div className={"h-[1px] w-full bg-gradient-to-r from-xp-taskbar to-transparent"}></div>

                    <div className={"flex flex-row cursor-pointer"}>
                        <div className={"flex flex-row items-center px-4 text-[0.8rem] pt-4 group"}>
                            <FaGithub
                                className={"w-[40px] h-[40px] mr-[7px]"}
                            />
                            <Link href={"https://github.com/HlaKarki/winmulator"} className={"underline group-hover:italic text-blue-700 cursor-link"}>GitHub</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}