-- CreateTable
CREATE TABLE "WineTest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "WineTest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WineTest_name_key" ON "WineTest"("name");
