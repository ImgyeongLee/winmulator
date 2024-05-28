-- CreateTable
CREATE TABLE "FloppyData" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "filesize" INTEGER NOT NULL DEFAULT 0,
    "filename" TEXT NOT NULL,

    CONSTRAINT "FloppyData_pkey" PRIMARY KEY ("id")
);
