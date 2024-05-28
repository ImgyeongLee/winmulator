'use server';

import prisma from '@/app/lib/prisma';
import { FloppyDataFields } from './types';

export async function createFloppyData(data: FloppyDataFields) {
    const { username, email, filename, filesize } = data;
    await prisma.floppyData.upsert({
        where: {
            email: email,
        },
        update: {},
        create: {
            username: username,
            email: email,
            filename: filename,
            filesize: filesize,
        },
    });

    return { success: true };
}

export async function readTopFloppyData() {
    const data = await prisma.floppyData.findFirst({
        orderBy: {
            filesize: 'desc',
        },
    });
    return data;
}

export async function readFloppyData() {
    const data = await prisma.floppyData.findMany();
    return data;
}
