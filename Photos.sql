DROP DATABASE IF EXISTS `Photos`;
CREATE DATABASE IF NOT EXISTS `Photos`;
USE `Photos`;



DROP TABLE IF EXISTS `Photos`;

CREATE TABLE `Photos` (
  `ID` INTEGER NOT NULL, 
  `Name` VARCHAR(255), 
  `fishType` VARCHAR(255), 
  INDEX (`ID`), 
  PRIMARY KEY (`ID`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;


INSERT INTO `Photos` (`ID`, `Name`, `fishType`) VALUES (1, 'fish1', 'Betta Fish');
INSERT INTO `Photos` (`ID`, `Name`, `fishType`)VALUES (2, 'fish1', 'Betta Fish');
INSERT INTO `Photos` (`ID`, `Name`, `fishType`) VALUES (3, 'fish3', 'Betta Fish');
INSERT INTO `Photos` (`ID`, `Name`, `fishType`) VALUES (4, 'fish4', 'Betta Fish');
INSERT INTO `Photos` (`ID`, `Name`, `fishType`) VALUES (5, 'fish5', 'Betta Fish');
INSERT INTO `Photos` (`ID`, `Name`, `fishType`) VALUES (6, 'fish6', 'Betta Fish');
INSERT INTO `Photos` (`ID`, `Name`, `fishType`) VALUES (7, 'fish7', 'Betta Fish');
INSERT INTO `Photos` (`ID`, `Name`, `fishType`) VALUES (8, 'fish8', 'Armored catfish');
INSERT INTO `Photos` (`ID`, `Name`, `fishType`) VALUES (9, 'fish9', 'Armored catfish');
INSERT INTO `Photos` (`ID`, `Name`, `fishType`) VALUES (10, 'fish10', 'Armored catfish');
INSERT INTO `Photos` (`ID`, `Name`, `fishType`) VALUES (11, 'fish11', 'Armored catfish');

