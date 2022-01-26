/*
  Warnings:

  - You are about to drop the `_customertoorder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_customertoorder` DROP FOREIGN KEY `_customertoorder_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_customertoorder` DROP FOREIGN KEY `_customertoorder_ibfk_2`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_ibfk_1`;

-- DropTable
DROP TABLE `_customertoorder`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
