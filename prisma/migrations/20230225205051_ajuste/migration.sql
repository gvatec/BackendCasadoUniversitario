-- DropIndex
DROP INDEX `session_iduser_key` ON `session`;

-- AlterTable
ALTER TABLE `session` ADD COLUMN `cpf` VARCHAR(191) NULL,
    ADD COLUMN `nomemae` VARCHAR(191) NULL,
    ADD COLUMN `rg` VARCHAR(191) NULL;
