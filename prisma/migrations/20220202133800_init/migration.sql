-- CreateTable
CREATE TABLE `favourite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ingredient_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `fk_favourite_ingredient_idx`(`ingredient_id`),
    INDEX `fk_favourite_user1_idx`(`user_id`),
    PRIMARY KEY (`id`, `ingredient_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ingredient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `type` VARCHAR(45) NULL,
    `unit` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ingredient_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `fk_list_ingredient1_idx`(`ingredient_id`),
    INDEX `fk_list_user1_idx`(`user_id`),
    PRIMARY KEY (`id`, `ingredient_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `receip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(125) NOT NULL,
    `img` VARCHAR(255) NULL,
    `url` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `receip_has_ingredient` (
    `receip_id` INTEGER NOT NULL,
    `ingredient_id` INTEGER NOT NULL,

    INDEX `fk_receip_has_ingredient_ingredient1_idx`(`ingredient_id`),
    INDEX `fk_receip_has_ingredient_receip1_idx`(`receip_id`),
    PRIMARY KEY (`receip_id`, `ingredient_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(45) NOT NULL,
    `paswword` VARCHAR(45) NOT NULL,
    `role` VARCHAR(45) NOT NULL,
    `avatar` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `favourite` ADD CONSTRAINT `fk_favourite_ingredient` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `favourite` ADD CONSTRAINT `fk_favourite_user1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `list` ADD CONSTRAINT `fk_list_ingredient1` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `list` ADD CONSTRAINT `fk_list_user1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `receip_has_ingredient` ADD CONSTRAINT `fk_receip_has_ingredient_ingredient1` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `receip_has_ingredient` ADD CONSTRAINT `fk_receip_has_ingredient_receip1` FOREIGN KEY (`receip_id`) REFERENCES `receip`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
