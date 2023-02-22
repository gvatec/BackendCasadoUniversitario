/*
  Warnings:

  - You are about to drop the column ` rg` on the `users` table. All the data in the column will be lost.
  - Added the required column `rg` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN ` rg`,
    ADD COLUMN `rg` VARCHAR(191) NOT NULL,
    MODIFY `nomemae` VARCHAR(191) NULL;
