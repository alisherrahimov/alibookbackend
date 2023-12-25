-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "f_name" TEXT,
    "u_name" TEXT,
    "email" TEXT,
    "birth_date" TIMESTAMP(3),
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "language" INTEGER DEFAULT 0,
    "dark_mode" INTEGER DEFAULT 0,
    "pass_code" INTEGER,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "account_id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "gender" INTEGER DEFAULT 0,
    "age" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT
);

-- CreateTable
CREATE TABLE "devices" (
    "id" TEXT NOT NULL,
    "phone_id" TEXT NOT NULL,
    "phone_model" TEXT NOT NULL,
    "last_date" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT
);

-- CreateTable
CREATE TABLE "book_images" (
    "id" TEXT NOT NULL,
    "x" TEXT NOT NULL,
    "xx" TEXT NOT NULL,
    "xl" TEXT NOT NULL,
    "xm" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "user_images" (
    "id" TEXT NOT NULL,
    "x" TEXT NOT NULL,
    "xx" TEXT NOT NULL,
    "xl" TEXT NOT NULL,
    "xm" TEXT NOT NULL,
    "userId" TEXT
);

-- CreateTable
CREATE TABLE "genre_images" (
    "id" TEXT NOT NULL,
    "x" TEXT NOT NULL,
    "xx" TEXT NOT NULL,
    "xl" TEXT NOT NULL,
    "xm" TEXT NOT NULL,
    "genreId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_account_id_key" ON "user"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "genre_id_key" ON "genre"("id");

-- CreateIndex
CREATE UNIQUE INDEX "notification_id_key" ON "notification"("id");

-- CreateIndex
CREATE UNIQUE INDEX "devices_id_key" ON "devices"("id");

-- CreateIndex
CREATE UNIQUE INDEX "book_images_id_key" ON "book_images"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_images_id_key" ON "user_images"("id");

-- CreateIndex
CREATE UNIQUE INDEX "genre_images_id_key" ON "genre_images"("id");

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_images" ADD CONSTRAINT "user_images_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "genre_images" ADD CONSTRAINT "genre_images_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genre"("id") ON DELETE SET NULL ON UPDATE CASCADE;
