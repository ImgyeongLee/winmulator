import React from "react";

interface RightClickMenuProps {
    menuVisible: boolean;
    menuPosition: {
        y: number,
        x: number
    }
}

const RightClickMenu: React.FC<RightClickMenuProps> = ( {menuVisible, menuPosition} ) => {
    return (
        <>
            {menuVisible && (
                <ul
                    style={{
                        position: "absolute",
                        top: menuPosition.y,
                        left: menuPosition.x,
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        listStyle: "none",
                        padding: "10px",
                        zIndex: 1000
                    }}
                >
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            )}
        </>
    )
}

export default RightClickMenu