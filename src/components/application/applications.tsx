'use client';
import { useSelector } from 'react-redux';
import { getAppsState } from '@/redux/appSlice';
import Application from '@/components/application/application';
import React from 'react';

const Applications = () => {
    const appsState = useSelector(getAppsState);

    return (
        <>
            {appsState &&
                Object.keys(appsState).map((key: string, index) => {
                    return <Application key={index} appState={appsState[Number(key)]} />;
                })}
        </>
    );
};

export default Applications;
