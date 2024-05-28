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
            filename: 'Payment.pdf',
            filesize: 184000,
            disknum: 46,
            desc: "LET's GOOO",
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
