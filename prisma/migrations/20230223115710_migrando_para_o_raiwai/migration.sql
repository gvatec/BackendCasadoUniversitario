-- AlterTable
ALTER TABLE `session` ADD COLUMN `urlfoto` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `cep` VARCHAR(191) NULL,
    ADD COLUMN `urlfoto` VARCHAR(191) NULL,
    MODIFY `cpf` VARCHAR(191) NULL,
    MODIFY `rg` VARCHAR(191) NULL;