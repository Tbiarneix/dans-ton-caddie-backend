/*
  Warnings:

  - The primary key for the `favourite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `favourite` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `id_UNIQUE` ON `favourite`;

-- AlterTable
ALTER TABLE `favourite` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`ingredient_id`, `user_id`);
