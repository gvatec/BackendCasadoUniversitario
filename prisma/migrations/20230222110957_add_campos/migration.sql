/*
  Warnings:

  - Added the required column ` rg` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN ` rg` VARCHAR(45) NOT NULL,
    ADD COLUMN `cpf` INTEGER NOT NULL,
    ADD COLUMN `nomemae` VARCHAR(45) NULL;
