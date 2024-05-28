import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.floppyData.upsert({
        where: {
            email: 'test@gmail.com',
        },
        update: {},
        create: {
            username: 'deepbread',
            email: 'test@gmail.com',
            filename: 'postman',
            filesize: 987328,
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
