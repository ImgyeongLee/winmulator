/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `FloppyData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `FloppyData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FloppyData" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FloppyData_email_key" ON "FloppyData"("email");
