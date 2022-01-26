-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_ibfk_1`;

-- AlterTable
ALTER TABLE `product` MODIFY `order_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
