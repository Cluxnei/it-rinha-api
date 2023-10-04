/*
  Warnings:

  - A unique constraint covering the columns `[apelido]` on the table `Pessoa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Pessoa_apelido_key` ON `Pessoa`(`apelido`);
