/*
  Warnings:

  - You are about to drop the `Info` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wine` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Info" DROP CONSTRAINT "Info_wineId_fkey";

-- DropTable
DROP TABLE "Info";

-- DropTable
DROP TABLE "Wine";

-- CreateTable
CREATE TABLE "wine" (
    "id" SERIAL NOT NULL,
    "producer" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "varietal" TEXT NOT NULL,
    "natural" TEXT NOT NULL,
    "vegan" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "sweet" TEXT NOT NULL,
    "primary" TEXT NOT NULL,
    "secondary" TEXT NOT NULL,
    "tertiary" TEXT NOT NULL,

    CONSTRAINT "wine_pkey" PRIMARY KEY ("id")
);
