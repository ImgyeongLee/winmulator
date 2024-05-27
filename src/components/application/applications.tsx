import {useSelector} from "react-redux";
import {getAppsState} from "@/redux/appSlice";
import Application from "@/components/application/application";
import React from "react";

interface ApplicationsProps {
    isMoving: boolean;
    handleMouseUpFromTop: (isMoving: boolean) => void;
}

const Applications: React.FC<ApplicationsProps> = ({isMoving, handleMouseUpFromTop}) => {
    const appsState = useSelector(getAppsState)

    return (
        <>
            {appsState && Object.keys(appsState).map((key: string, index) => {
                return (
                    <Application
                        key={index}
                        appState={appsState[Number(key)]}
                        isMoving={isMoving}
                        handleMouseUpFromTop={handleMouseUpFromTop}
                    />
                )
            })}
        </>
    )
}

export default Applications