/*
  Warnings:

  - Added the required column `order_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `order_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
