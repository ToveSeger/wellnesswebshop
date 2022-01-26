-- DropIndex
DROP INDEX `Customer_road_key` ON `customer`;

-- AlterTable
ALTER TABLE `customer` MODIFY `phone` INTEGER NOT NULL,
    MODIFY `road` VARCHAR(100) NOT NULL,
    MODIFY `zip_code` INTEGER NOT NULL;
