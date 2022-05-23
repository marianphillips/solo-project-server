/*
  Warnings:

  - You are about to drop the column `primary` on the `wine` table. All the data in the column will be lost.
  - You are about to drop the column `secondary` on the `wine` table. All the data in the column will be lost.
  - You are about to drop the column `tertiary` on the `wine` table. All the data in the column will be lost.
  - Added the required column `characteristics` to the `wine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wine" DROP COLUMN "primary",
DROP COLUMN "secondary",
DROP COLUMN "tertiary",
ADD COLUMN     "characteristics" TEXT NOT NULL;
