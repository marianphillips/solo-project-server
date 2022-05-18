/*
  Warnings:

  - You are about to drop the `WineTest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "WineTest";

-- CreateTable
CREATE TABLE "Wine" (
    "id" SERIAL NOT NULL,
    "producer" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Wine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Info" (
    "id" SERIAL NOT NULL,
    "wineId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "varietal" TEXT NOT NULL,
    "natural" BOOLEAN NOT NULL,
    "vegan" BOOLEAN NOT NULL,
    "body" TEXT NOT NULL,
    "sweet" INTEGER NOT NULL,
    "primary" TEXT NOT NULL,
    "secondary" TEXT NOT NULL,
    "tertiary" TEXT NOT NULL,

    CONSTRAINT "Info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Info_wineId_key" ON "Info"("wineId");

-- AddForeignKey
ALTER TABLE "Info" ADD CONSTRAINT "Info_wineId_fkey" FOREIGN KEY ("wineId") REFERENCES "Wine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
