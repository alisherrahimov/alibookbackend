/*
  Warnings:

  - Added the required column `price` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sertificate_code" BIGINT,
ALTER COLUMN "language" DROP NOT NULL,
ALTER COLUMN "purchase" DROP NOT NULL,
ALTER COLUMN "purchase" SET DEFAULT 0,
ALTER COLUMN "size" DROP NOT NULL;
