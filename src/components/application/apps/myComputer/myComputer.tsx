import LeftSubMenus from "@/components/application/apps/myComputer/leftSubMenus";
import RightBody from "@/components/application/apps/myComputer/rightBody";
import {cn} from "@/app/lib/utils";
import {useSelector} from "react-redux";
import {getAppsState, getFocusedAppId} from "@/redux/appSlice";

export default function MyComputer() {
    const items = {
        'System Tasks': [
            ['/xp/appControls/view_sys_info.webp', 'View system information'],
            ['/xp/appControls/add_remove_programs.webp', 'Add or remove programs'],
            ['/xp/appControls/change_settings.webp', 'Change a setting']
        ],
        'Other Places': [
            ['/xp/appControls/my_network.webp', 'My Network Places'],
            ['/xp/appIcons/folder_filled_document.webp', 'My Documents'],
            ['/xp/appIcons/folder_shared.webp', 'Shared Documents'],
            ['/xp/startMenu/control_panel.webp', 'Control Panel'],
        ]
    }

    const appsState = useSelector(getAppsState)
    const focusedAppId = useSelector(getFocusedAppId)
    const appState = appsState[focusedAppId]
    const heightClass = appState.height < 516 ? { height: `${appState.height - 110}px` } : { height: '100%' };


    return (
        <div
            className={cn("app-body grid grid-cols-6 h-full overflow-auto")}
            style={heightClass}
        >
            <div className={"left-menu col-span-2 h-full overflow-auto"}>
                <LeftSubMenus showAbout={true} items={items} />
            </div>
            <div className={"right-body col-span-4 bg-neutral-50 w-full h-full overflow-auto"}>
                <RightBody />
            </div>
        </div>
    )
}