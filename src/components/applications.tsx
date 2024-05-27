import {useSelector} from "react-redux";
import {getAppsState} from "@/redux/appSlice";
import Application from "@/components/application";

export default function Applications() {
    const appsState = useSelector(getAppsState)

    return (
        <>
            {appsState && Object.keys(appsState).map((key: string, index) => {
                return (
                    <Application
                        key={index}
                        appState={appsState[Number(key)]}
                    />
                )
            })}
        </>
    )
}