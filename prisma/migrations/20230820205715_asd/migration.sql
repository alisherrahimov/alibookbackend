-- AlterTable
ALTER TABLE "genre" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "genre" ADD CONSTRAINT "genre_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
