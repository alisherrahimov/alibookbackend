-- AlterTable
ALTER TABLE "book_images" ADD COLUMN     "bookId" TEXT;

-- AlterTable
ALTER TABLE "genre" ADD COLUMN     "bookId" TEXT;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "reviewId" TEXT;

-- CreateTable
CREATE TABLE "book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "language" INTEGER NOT NULL DEFAULT 0,
    "age" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "purchase" INTEGER NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "author" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "review" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "star" DOUBLE PRECISION NOT NULL,
    "bookId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "book_id_key" ON "book"("id");

-- CreateIndex
CREATE UNIQUE INDEX "author_id_key" ON "author"("id");

-- CreateIndex
CREATE UNIQUE INDEX "review_id_key" ON "review"("id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "review"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "genre" ADD CONSTRAINT "genre_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_images" ADD CONSTRAINT "book_images_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
