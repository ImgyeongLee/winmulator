import LeftSubMenus from "@/components/application/apps/myComputer/leftSubMenus";
import RightBody from "@/components/application/apps/myComputer/rightBody";
import {cn} from "@/app/lib/utils";
import {useSelector} from "react-redux";
import {getAppsState, getFocusedAppId} from "@/redux/appSlice";

export default function MyComputer() {
    const items = {
        'System Tasks': [
            { path: '/xp/appControls/view_sys_info.webp', label: 'View system information' },
            { path: '/xp/appControls/add_remove_programs.webp', label: 'Add or remove programs' },
            { path: '/xp/appControls/change_settings.webp', label: 'Change a setting' }
        ],
        'Other Places': [
            { path: '/xp/appControls/my_network.webp', label: 'My Network Places' },
            { path: '/xp/appIcons/folder_filled_document.webp', label: 'My Documents' },
            { path: '/xp/appIcons/folder_shared.webp', label: 'Shared Documents' },
            { path: '/xp/startMenu/control_panel.webp', label: 'Control Panel' }
        ]
    }

    const appsState = useSelector(getAppsState)
    const focusedAppId = useSelector(getFocusedAppId)
    const appState = focusedAppId ? appsState[focusedAppId] : undefined
    const heightClass = appState && appState.height < 516 ? { height: `${appState.height - 110}px` } : { height: '100%' };


    return (
        <div
            className={cn("app-body grid grid-cols-6 h-full overflow-auto")}
            style={heightClass}
        >
            <div className={"left-menu col-span-2 h-full overflow-auto"}>
                <LeftSubMenus items={items} showAbout={true} />
            </div>
            <div className={"right-body col-span-4 bg-neutral-50 w-full h-full overflow-auto"}>
                <RightBody />
            </div>
        </div>
    )
}