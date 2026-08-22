-- CreateTable
CREATE TABLE `ams_cc` (
    `seq` INTEGER NOT NULL AUTO_INCREMENT,
    `menu_code` VARCHAR(10) NOT NULL,
    `code1` VARCHAR(10) NOT NULL,
    `code2` VARCHAR(10) NOT NULL,
    `code3` VARCHAR(10) NOT NULL,
    `code4` VARCHAR(10) NOT NULL,
    `code5` VARCHAR(10) NOT NULL,
    `title` VARCHAR(50) NOT NULL,

    INDEX `menu_code`(`menu_code`),
    INDEX `menu_code_2`(`menu_code`),
    INDEX `seq`(`seq`),
    INDEX `seq_2`(`seq`),
    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_commission` (
    `seq` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `orderSeq` INTEGER UNSIGNED NOT NULL,
    `fromUserSeq` INTEGER UNSIGNED NOT NULL,
    `toUserSeq` INTEGER UNSIGNED NOT NULL,
    `level` INTEGER UNSIGNED NOT NULL,
    `baseAmount` INTEGER NOT NULL,
    `rate` DECIMAL(5, 2) NOT NULL,
    `calculateAmount` INTEGER NOT NULL,
    `finalAmount` INTEGER NOT NULL,
    `wday` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_fromUser`(`fromUserSeq`),
    INDEX `idx_level`(`level`),
    INDEX `idx_order`(`orderSeq`),
    INDEX `idx_toUser`(`toUserSeq`),
    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_feerate` (
    `seq` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `memSeq` INTEGER UNSIGNED NOT NULL,
    `feeName` VARCHAR(45) NOT NULL,
    `feeRate` DECIMAL(5, 2) NOT NULL,

    INDEX `fk_feerate_mem_seq_idx`(`memSeq`),
    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_local` (
    `seq` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `memSeq` INTEGER UNSIGNED NOT NULL,
    `localName` VARCHAR(45) NULL,
    `localCode` VARCHAR(45) NULL,

    INDEX `fk_locales_mem_seq_idx`(`memSeq`),
    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_member` (
    `seq` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` CHAR(1) NOT NULL DEFAULT 'b',
    `industry` VARCHAR(10) NULL,
    `service` VARCHAR(10) NULL,
    `id` VARCHAR(50) NOT NULL,
    `pw` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NULL,
    `email` VARCHAR(50) NULL,
    `phone` VARCHAR(15) NOT NULL,
    `company` VARCHAR(50) NULL,
    `businessNum` VARCHAR(20) NULL,
    `fcmToken` VARCHAR(255) NULL,
    `addr1` VARCHAR(255) NULL,
    `addr2` VARCHAR(255) NULL,
    `sido` VARCHAR(255) NULL,
    `sigungu` VARCHAR(255) NULL,
    `addrX` VARCHAR(50) NULL,
    `addrY` VARCHAR(50) NULL,
    `jday` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_op` (
    `seq` INTEGER NOT NULL AUTO_INCREMENT,
    `con_id` VARCHAR(15) NOT NULL,
    `con_title` VARCHAR(30) NOT NULL,
    `con_text` TEXT NOT NULL,

    FULLTEXT INDEX `con_text`(`con_text`),
    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_order` (
    `seq` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `requester` INTEGER UNSIGNED NOT NULL,
    `userName` VARCHAR(50) NOT NULL,
    `userPhone` VARCHAR(15) NOT NULL,
    `industry` VARCHAR(10) NOT NULL,
    `service` VARCHAR(10) NULL,
    `title` VARCHAR(255) NOT NULL,
    `num` VARCHAR(100) NOT NULL,
    `confirm` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `situation` VARCHAR(10) NOT NULL DEFAULT 'wait',
    `worker` INTEGER NULL,
    `detail` LONGTEXT NOT NULL,
    `price` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `sido` VARCHAR(10) NOT NULL,
    `sigungu` VARCHAR(10) NOT NULL,
    `img` VARCHAR(255) NULL,
    `wday` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fday` DATETIME(0) NULL,
    `point` INTEGER NULL,
    `payOk` BOOLEAN NOT NULL DEFAULT false,
    `taxInvoice` DATETIME(0) NULL,
    `deposit` DATETIME(0) NULL,

    INDEX `fk_requester_idx`(`requester`),
    INDEX `idx_deposit`(`deposit`),
    INDEX `idx_fday`(`fday`),
    INDEX `idx_situation`(`situation`),
    INDEX `idx_taxInvoice`(`taxInvoice`),
    INDEX `idx_wday`(`wday`),
    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_point_log` (
    `seq` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userSeq` INTEGER UNSIGNED NOT NULL,
    `utilize` VARCHAR(45) NOT NULL,
    `subject` VARCHAR(255) NULL,
    `amount` INTEGER NOT NULL,
    `balance` INTEGER UNSIGNED NOT NULL,
    `wday` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `eday` DATETIME(0) NULL,

    INDEX `fk_user_seq_idx`(`userSeq`),
    INDEX `idx_eday`(`eday`),
    INDEX `idx_user_wday`(`userSeq`, `wday`),
    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_qna` (
    `seq` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `question` TEXT NOT NULL,
    `answer` TEXT NULL,
    `pic` VARCHAR(100) NULL,
    `writer` INTEGER UNSIGNED NOT NULL,
    `wday` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `aday` DATETIME(0) NULL,

    INDEX `write_mem_seq_idx`(`writer`),
    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_regions` (
    `code` VARCHAR(10) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `parentCode` VARCHAR(10) NULL,
    `level` INTEGER NOT NULL,

    INDEX `idx_parent`(`parentCode`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_user` (
    `seq` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` CHAR(1) NOT NULL DEFAULT 'b',
    `industry` VARCHAR(10) NULL,
    `service` VARCHAR(10) NULL,
    `id` VARCHAR(50) NOT NULL,
    `pw` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NULL,
    `email` VARCHAR(50) NULL,
    `phone` VARCHAR(15) NOT NULL,
    `company` VARCHAR(50) NULL,
    `businessNum` VARCHAR(20) NULL,
    `fcmToken` VARCHAR(255) NULL,
    `addr1` VARCHAR(255) NULL,
    `addr2` VARCHAR(255) NULL,
    `sido` VARCHAR(10) NULL,
    `sigungu` VARCHAR(10) NULL,
    `addrY` VARCHAR(50) NULL,
    `addrX` VARCHAR(50) NULL,
    `point` INTEGER NOT NULL DEFAULT 0,
    `jday` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ams_user_closure` (
    `ancestorSeq` INTEGER UNSIGNED NOT NULL,
    `descendantSeq` INTEGER UNSIGNED NOT NULL,
    `depth` INTEGER NOT NULL,

    INDEX `fk_descendant_idx`(`descendantSeq`),
    INDEX `idx_depth`(`ancestorSeq`, `depth`),
    PRIMARY KEY (`ancestorSeq`, `descendantSeq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bank_account` (
    `seq` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userSeq` INTEGER UNSIGNED NOT NULL,
    `bankName` VARCHAR(50) NOT NULL,
    `accountNum` VARCHAR(50) NOT NULL,
    `owner` VARCHAR(20) NOT NULL,
    `wday` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `band_user_seq_fk_idx`(`userSeq`),
    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ams_feerate` ADD CONSTRAINT `fk_feerate_mem_seq` FOREIGN KEY (`memSeq`) REFERENCES `ams_member`(`seq`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ams_local` ADD CONSTRAINT `fk_locales_mem_seq` FOREIGN KEY (`memSeq`) REFERENCES `ams_member`(`seq`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ams_order` ADD CONSTRAINT `fk_requester` FOREIGN KEY (`requester`) REFERENCES `ams_user`(`seq`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ams_point_log` ADD CONSTRAINT `fk_user_seq` FOREIGN KEY (`userSeq`) REFERENCES `ams_user`(`seq`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ams_qna` ADD CONSTRAINT `qna_writer_fk` FOREIGN KEY (`writer`) REFERENCES `ams_user`(`seq`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ams_user_closure` ADD CONSTRAINT `fk_ancestor` FOREIGN KEY (`ancestorSeq`) REFERENCES `ams_user`(`seq`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ams_user_closure` ADD CONSTRAINT `fk_descendant` FOREIGN KEY (`descendantSeq`) REFERENCES `ams_user`(`seq`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bank_account` ADD CONSTRAINT `band_user_seq_fk` FOREIGN KEY (`userSeq`) REFERENCES `ams_user`(`seq`) ON DELETE CASCADE ON UPDATE CASCADE;
