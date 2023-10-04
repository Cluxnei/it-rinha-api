-- CreateTable
CREATE TABLE `Pessoa` (
    `id` VARCHAR(191) NOT NULL,
    `apelido` VARCHAR(33) NOT NULL,
    `nome` VARCHAR(101) NOT NULL,
    `nascimento` VARCHAR(11) NOT NULL,
    `stack` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
