'use server';

import prisma from '@/app/lib/prisma';
import { FloppyDataFields } from './types';

export async function createFloppyData(data: FloppyDataFields) {
    const { username, email, filename, filesize, disknum } = data;
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
            disknum: disknum,
        },
    });

    return { success: true };
}

export async function readTopFloppyData() {
    const data = await prisma.floppyData.findFirst({
        orderBy: {
            disknum: 'desc',
        },
    });
    return data;
}

export async function readFloppyData() {
    const data = await prisma.floppyData.findMany();
    return data;
}
