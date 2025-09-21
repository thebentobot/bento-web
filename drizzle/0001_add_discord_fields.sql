-- Add Discord-related columns to user table
ALTER TABLE `user` ADD COLUMN `discordId` text;
ALTER TABLE `user` ADD COLUMN `discordUsername` text;
ALTER TABLE `user` ADD COLUMN `discordGlobalName` text;
ALTER TABLE `user` ADD COLUMN `discordAvatar` text;
ALTER TABLE `user` ADD COLUMN `discordDiscriminator` text;
ALTER TABLE `user` ADD COLUMN `discordBannerColor` text;
ALTER TABLE `user` ADD COLUMN `discordLocale` text;
-- Create a unique index for discordId to match schema uniqueness
CREATE UNIQUE INDEX `user_discordId_unique` ON `user` (`discordId`);
