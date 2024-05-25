export default function Taskbar ( {theme: string} )  {
    const position = 'fixed bottom-0 left-0 w-full'
    return (
        <div
            className={`${position} text-center text-white flex flex-row justify-between items-center`}
        >
            <img src={"/windowsXP_taskbar.webp"} alt={"windowsXP taskbar"} className={"w-10"}/>
            <div>End setting</div>
        </div>
    )
}

