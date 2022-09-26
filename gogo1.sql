-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: pick_me
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `uuid` varchar(36) NOT NULL,
  `id` varchar(15) NOT NULL,
  `pw` varchar(15) NOT NULL,
  `name` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `location` varchar(100) NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES ('077c98f9-64f8-43c3-8664-8c5d5734b70b','company-id-2','123','company-name-2','mail-2','loc-2'),('37da234a-02e3-4e30-b054-dd5096ff42a5','company-id-1','123','company-name-1','mail-1','loc-1'),('65a3ce4f-7060-41ad-96e4-705d3dce3e11','company-id-3','123','company-name-3','mail-3','loc-3');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elementCareer`
--

DROP TABLE IF EXISTS `elementCareer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elementCareer` (
  `0` varchar(36) DEFAULT NULL,
  `1` varchar(36) DEFAULT NULL,
  `2` varchar(36) DEFAULT NULL,
  `3` varchar(36) DEFAULT NULL,
  `4` varchar(36) DEFAULT NULL,
  `5` varchar(36) DEFAULT NULL,
  `6` varchar(36) DEFAULT NULL,
  `7` varchar(36) DEFAULT NULL,
  `8` varchar(36) DEFAULT NULL,
  `9` varchar(36) DEFAULT NULL,
  `10` varchar(36) DEFAULT NULL,
  `11` varchar(36) DEFAULT NULL,
  `12` varchar(36) DEFAULT NULL,
  `13` varchar(36) DEFAULT NULL,
  `14` varchar(36) DEFAULT NULL,
  `15` varchar(36) DEFAULT NULL,
  `16` varchar(36) DEFAULT NULL,
  `17` varchar(36) DEFAULT NULL,
  `18` varchar(36) DEFAULT NULL,
  `19` varchar(36) DEFAULT NULL,
  `20` varchar(36) DEFAULT NULL,
  `21` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elementCareer`
--

LOCK TABLES `elementCareer` WRITE;
/*!40000 ALTER TABLE `elementCareer` DISABLE KEYS */;
/*!40000 ALTER TABLE `elementCareer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elementLocation`
--

DROP TABLE IF EXISTS `elementLocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elementLocation` (
  `Seoul` varchar(36) DEFAULT NULL,
  `Incheon` varchar(36) DEFAULT NULL,
  `Daejeon` varchar(36) DEFAULT NULL,
  `Daegu` varchar(36) DEFAULT NULL,
  `Pusan` varchar(36) DEFAULT NULL,
  `Ulsan` varchar(36) DEFAULT NULL,
  `Gwangju` varchar(36) DEFAULT NULL,
  `Gyeonggi` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elementLocation`
--

LOCK TABLES `elementLocation` WRITE;
/*!40000 ALTER TABLE `elementLocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `elementLocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elementStack`
--

DROP TABLE IF EXISTS `elementStack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elementStack` (
  `JAVA` varchar(36) DEFAULT NULL,
  `Javascript` varchar(36) DEFAULT NULL,
  `Python` varchar(36) DEFAULT NULL,
  `R` varchar(36) DEFAULT NULL,
  `C` varchar(36) DEFAULT NULL,
  `C++` varchar(36) DEFAULT NULL,
  `C#` varchar(36) DEFAULT NULL,
  `PHP` varchar(36) DEFAULT NULL,
  `Cobol` varchar(36) DEFAULT NULL,
  `HTML` varchar(36) DEFAULT NULL,
  `Linux` varchar(36) DEFAULT NULL,
  `Kotlin` varchar(36) DEFAULT NULL,
  `Dart` varchar(36) DEFAULT NULL,
  `Go` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elementStack`
--

LOCK TABLES `elementStack` WRITE;
/*!40000 ALTER TABLE `elementStack` DISABLE KEYS */;
/*!40000 ALTER TABLE `elementStack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `introduce`
--

DROP TABLE IF EXISTS `introduce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `introduce` (
  `uuid` varchar(36) NOT NULL,
  `stack` varchar(100) DEFAULT NULL,
  `career` varchar(100) DEFAULT NULL,
  `portfolio` varchar(100) DEFAULT NULL,
  `etc` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  KEY `uuid` (`uuid`),
  CONSTRAINT `introduce_ibfk_1` FOREIGN KEY (`uuid`) REFERENCES `users` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `introduce`
--

LOCK TABLES `introduce` WRITE;
/*!40000 ALTER TABLE `introduce` DISABLE KEYS */;
INSERT INTO `introduce` VALUES ('0cd39fca-2f51-4ee9-9b32-4e04b7cb5cd8','react','39393939',NULL,'hihihihi',NULL,NULL),('0cd39fca-2f51-4ee9-9b32-4e04b7cb5cd8','react','39393939',NULL,'hihihihi','2022-09-23 08:54:42','2022-09-23 08:54:42');
/*!40000 ALTER TABLE `introduce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `userResume`
--

DROP TABLE IF EXISTS `userResume`;
/*!50001 DROP VIEW IF EXISTS `userResume`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `userResume` AS SELECT 
 1 AS `uuid`,
 1 AS `name`,
 1 AS `email`,
 1 AS `location`,
 1 AS `stack`,
 1 AS `career`,
 1 AS `portfolio`,
 1 AS `etc`,
 1 AS `updatedAt`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uuid` varchar(36) NOT NULL,
  `id` varchar(15) NOT NULL,
  `pw` varchar(15) NOT NULL,
  `name` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `location` varchar(100) NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0cd39fca-2f51-4ee9-9b32-4e04b7cb5cd8','id004','123','name004','mail004','loc004'),('35de47d7-3ed1-4277-add4-b413988d2c2d','id002','1234','name002','mail002','loc002'),('59dee75b-8866-41d5-9b91-99f9322d67a0','id006','12','name006','mail006','loc006'),('8e7436c3-fbda-4acc-9f79-fa090c4675c8','id003','123','name003','mail003','loc003'),('e78fa03c-bbd8-4172-85ef-6f2707c08490','id001','1234','name001','mail001','loc001'),('ed2e01a3-12e9-45e8-a462-d4de9e999fec','id005','12','name005','mail005','loc005'),('ef8f7ef1-ff8b-4b1b-8583-f9f5733687a3','id008','pw-test','name008','mail008','loc008');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `userResume`
--

/*!50001 DROP VIEW IF EXISTS `userResume`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `userresume` AS select `user`.`uuid` AS `uuid`,`user`.`name` AS `name`,`user`.`email` AS `email`,`user`.`location` AS `location`,`introduce`.`stack` AS `stack`,`introduce`.`career` AS `career`,`introduce`.`portfolio` AS `portfolio`,`introduce`.`etc` AS `etc`,`introduce`.`updatedAt` AS `updatedAt` from (`users` `user` join `introduce`) where (`user`.`uuid` = `introduce`.`uuid`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-26 15:03:09
