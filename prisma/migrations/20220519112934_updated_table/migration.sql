/*
  Warnings:

  - Added the required column `sustainable` to the `wine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wine" ADD COLUMN     "sustainable" TEXT NOT NULL;
