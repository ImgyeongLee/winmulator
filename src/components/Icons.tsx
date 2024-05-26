import React from "react";
import Image from "next/image";

interface IconProps {
    width: number;
    height: number;
    path: string;
    alt: string;
    others: string;
    label: string;
}

const Icon: React.FC<IconProps> = ( {width, height, path, alt, others, label} ) => {
    return (
        <div className="flex flex-col justify-center items-center w-fit min-w-[50px]">
            <Image
                width={width}
                height={height}
                src={path}
                alt={alt}
                className={`${others} text-center`}
            />
            <p className={"xp-text-shadow text-[0.5rem] text-white"}>{label}</p>
        </div>
    )
}

export default Icon