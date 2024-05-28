import LeftSubMenus from "@/components/application/apps/myComputer/leftSubMenus";

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


    return (
        <div className={"app-body grid grid-cols-6 min-h-full"}>
            <div className={"left-menu col-span-2 h-full"}>
                <LeftSubMenus showAbout={true} items={items} />
            </div>
            <div className={"right-body col-span-4 bg-neutral-50 w-full "}>Right</div>
        </div>
    )
}