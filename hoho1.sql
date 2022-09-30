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
  `id` varchar(36) NOT NULL,
  `0` varchar(1) DEFAULT NULL,
  `1` varchar(1) DEFAULT NULL,
  `2` varchar(1) DEFAULT NULL,
  `3` varchar(1) DEFAULT NULL,
  `4` varchar(1) DEFAULT NULL,
  `5` varchar(1) DEFAULT NULL,
  `6` varchar(1) DEFAULT NULL,
  `7` varchar(1) DEFAULT NULL,
  `8` varchar(1) DEFAULT NULL,
  `9` varchar(1) DEFAULT NULL,
  `10` varchar(1) DEFAULT NULL,
  `11` varchar(1) DEFAULT NULL,
  `12` varchar(1) DEFAULT NULL,
  `13` varchar(1) DEFAULT NULL,
  `14` varchar(1) DEFAULT NULL,
  `15` varchar(1) DEFAULT NULL,
  `16` varchar(1) DEFAULT NULL,
  `17` varchar(1) DEFAULT NULL,
  `18` varchar(1) DEFAULT NULL,
  `19` varchar(1) DEFAULT NULL,
  `20` varchar(1) DEFAULT NULL,
  `21` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `id` varchar(36) NOT NULL,
  `Seoul` varchar(1) DEFAULT NULL,
  `Incheon` varchar(1) DEFAULT NULL,
  `Daejeon` varchar(1) DEFAULT NULL,
  `Daegu` varchar(1) DEFAULT NULL,
  `Pusan` varchar(1) DEFAULT NULL,
  `Ulsan` varchar(1) DEFAULT NULL,
  `Gwangju` varchar(1) DEFAULT NULL,
  `Gyeonggi` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `id` varchar(36) NOT NULL,
  `JAVA` varchar(1) DEFAULT NULL,
  `Javascript` varchar(1) DEFAULT NULL,
  `Python` varchar(1) DEFAULT NULL,
  `R` varchar(1) DEFAULT NULL,
  `C` varchar(1) DEFAULT NULL,
  `C++` varchar(1) DEFAULT NULL,
  `C#` varchar(1) DEFAULT NULL,
  `PHP` varchar(1) DEFAULT NULL,
  `Cobol` varchar(1) DEFAULT NULL,
  `HTML` varchar(1) DEFAULT NULL,
  `Linux` varchar(1) DEFAULT NULL,
  `Kotlin` varchar(1) DEFAULT NULL,
  `Dart` varchar(1) DEFAULT NULL,
  `Go` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
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
-- Table structure for table `userResume`
--

DROP TABLE IF EXISTS `userResume`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userResume` (
  `uuid` varchar(36) NOT NULL,
  `stack` varchar(100) DEFAULT NULL,
  `career` varchar(100) DEFAULT NULL,
  `portfolio` varchar(100) DEFAULT NULL,
  `etc` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  KEY `uuid` (`uuid`),
  CONSTRAINT `userresume_ibfk_1` FOREIGN KEY (`uuid`) REFERENCES `users` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userResume`
--

LOCK TABLES `userResume` WRITE;
/*!40000 ALTER TABLE `userResume` DISABLE KEYS */;
INSERT INTO `userResume` VALUES ('42fb6f32-73bb-4900-8b4e-4a99a25437ec','','','','','2022-09-28 08:02:58','2022-09-28 08:02:58'),('42fb6f32-73bb-4900-8b4e-4a99a25437ec','Javascript|Python|C#|HTML|Linux||','1|a|2|b|3|c|4|d|','getURL','etc','2022-09-28 08:07:08','2022-09-28 08:07:08'),('42fb6f32-73bb-4900-8b4e-4a99a25437ec','Javascript|Python|C#|HTML|Linux||','1|a|2|b|3|c|4|d|','getURL','etc','2022-09-28 08:08:28','2022-09-28 08:08:28'),('42fb6f32-73bb-4900-8b4e-4a99a25437ec','Javascript|Python|C#|HTML|Linux||','1|a|2|b|3|c|4|d|','getURL','etc','2022-09-28 08:09:53','2022-09-28 08:09:53'),('42fb6f32-73bb-4900-8b4e-4a99a25437ec','Javascript|Python|C#|HTML|Linux||','1|a|2|b|3|c|4|d|','getURL','etc','2022-09-28 08:39:09','2022-09-28 08:39:09');
/*!40000 ALTER TABLE `userResume` ENABLE KEYS */;
UNLOCK TABLES;

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
  `userPic` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('42fb6f32-73bb-4900-8b4e-4a99a25437ec','ch_id','ch_pw','ch_name','ch_email','ch_location','0DF393CE-7A33-471C-8399-B9D3C145569B_1_201_a1664440309730.jpeg'),('5ef4498a-f451-4535-9b0b-6e600aa7a43d','ch_id','ch_pw','ch_name','ch_email','ch_location',NULL),('668a4b73-1b99-4974-8882-1b22bb76e58c','a','a','ch_name','ch_email','ch_location',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `viewuserresume`
--

DROP TABLE IF EXISTS `viewuserresume`;
/*!50001 DROP VIEW IF EXISTS `viewuserresume`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `viewuserresume` AS SELECT 
 1 AS `id`,
 1 AS `pw`,
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
-- Final view structure for view `viewuserresume`
--

/*!50001 DROP VIEW IF EXISTS `viewuserresume`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `viewuserresume` AS select `a`.`id` AS `id`,`a`.`pw` AS `pw`,`a`.`name` AS `name`,`a`.`email` AS `email`,`a`.`location` AS `location`,`b`.`stack` AS `stack`,`b`.`career` AS `career`,`b`.`portfolio` AS `portfolio`,`b`.`etc` AS `etc`,`b`.`updatedAt` AS `updatedAt` from (`users` `a` join `userresume` `b`) where (`a`.`uuid` = `b`.`uuid`) */;
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

-- Dump completed on 2022-09-30 14:42:30
