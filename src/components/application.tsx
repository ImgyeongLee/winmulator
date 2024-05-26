import React from "react";

interface AppState {
    id: number;
    x: number;
    y: number;
    open: boolean;
    minimized: boolean;
    fullSize: boolean;
}

interface ApplicationProps {
    appState: AppState;
}

const Application: React.FC<ApplicationProps> = ( {appState} ) => {
    return (
        <div
            style={{
                position: "absolute",
                top: appState.y,
                left: appState.x,
            }}
            className={"w-[300px] h-[200px] mb-10 bg-xp-taskbar"}>
            Application {appState.id}
            <h3>X: {appState.x}</h3>
            <h3>Y: {appState.y}</h3>
            <h3>Open: {appState.open ? 'yes' : 'no'}</h3>
            <h3>Full: {appState.fullSize ? 'yes': 'no'}</h3>
            <h3>Min: {appState.minimized ? 'yes': 'no'}</h3>
        </div>
    )
}

export default Application