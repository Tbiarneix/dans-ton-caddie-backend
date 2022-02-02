/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `list` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `id_UNIQUE` ON `list`(`id`);
