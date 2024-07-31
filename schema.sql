-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema stock
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema stock
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `stock` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `stock` ;

-- -----------------------------------------------------
-- Table `stock`.`billing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock`.`billing` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `client_email` VARCHAR(255) NOT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `invoice_date` DATE NOT NULL,
  `status` ENUM('paid', 'unpaid') NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `stock`.`stock`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock`.`stock` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(255) NOT NULL,
  `quantity` INT NOT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  `qr_code` VARCHAR(255) NULL DEFAULT NULL,
  `barcode` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `stock`.`interventions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock`.`interventions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `stock_id` INT NOT NULL,
  `description` TEXT NOT NULL,
  `client_email` VARCHAR(255) NOT NULL,
  `date` DATE NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `stock_id` (`stock_id` ASC) VISIBLE,
  CONSTRAINT `interventions_ibfk_1`
    FOREIGN KEY (`stock_id`)
    REFERENCES `stock`.`stock` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `stock`.`payments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock`.`payments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `billing_id` INT NOT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `payment_date` DATE NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `billing_id` (`billing_id` ASC) VISIBLE,
  CONSTRAINT `payments_ibfk_1`
    FOREIGN KEY (`billing_id`)
    REFERENCES `stock`.`billing` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `stock`.`stockmovements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock`.`stockmovements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `stock_id` INT NOT NULL,
  `movement_type` ENUM('in', 'out') NOT NULL,
  `quantity` INT NOT NULL,
  `date` DATE NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `stock_id` (`stock_id` ASC) VISIBLE,
  CONSTRAINT `stockmovements_ibfk_1`
    FOREIGN KEY (`stock_id`)
    REFERENCES `stock`.`stock` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `stock`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('Gérant', 'Responsable maintenance', 'Responsable travaux neuf', 'Chargé d''affaire', 'Technicien') NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
