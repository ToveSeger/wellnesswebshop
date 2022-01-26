/*
  Warnings:

  - You are about to drop the column `product_id` on the `order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_product_id_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `product_id`;
