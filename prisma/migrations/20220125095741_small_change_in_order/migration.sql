/*
  Warnings:

  - You are about to drop the `_ordertoproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ordertoproduct` DROP FOREIGN KEY `_ordertoproduct_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_ordertoproduct` DROP FOREIGN KEY `_ordertoproduct_ibfk_2`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_ibfk_2`;

-- DropTable
DROP TABLE `_ordertoproduct`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
