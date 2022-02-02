/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `favourite` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ingredient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `receip` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `id_UNIQUE` ON `favourite`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `id_UNIQUE` ON `ingredient`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `id_UNIQUE` ON `receip`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `id_UNIQUE` ON `user`(`id`);
