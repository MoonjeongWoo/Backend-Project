-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
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
  `pw` varchar(64) NOT NULL,
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
-- Table structure for table `elementcareer`
--

DROP TABLE IF EXISTS `elementcareer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elementcareer` (
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
-- Dumping data for table `elementcareer`
--

LOCK TABLES `elementcareer` WRITE;
/*!40000 ALTER TABLE `elementcareer` DISABLE KEYS */;
INSERT INTO `elementcareer` VALUES ('39634388-f63f-4a6d-87f8-033b34d4822e','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('7740e20a-2fdc-47ba-bf3a-351f3d3454a3',NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `elementcareer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elementlocation`
--

DROP TABLE IF EXISTS `elementlocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elementlocation` (
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
-- Dumping data for table `elementlocation`
--

LOCK TABLES `elementlocation` WRITE;
/*!40000 ALTER TABLE `elementlocation` DISABLE KEYS */;
INSERT INTO `elementlocation` VALUES ('7740e20a-2fdc-47ba-bf3a-351f3d3454a3','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `elementlocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elementstack`
--

DROP TABLE IF EXISTS `elementstack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elementstack` (
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
-- Dumping data for table `elementstack`
--

LOCK TABLES `elementstack` WRITE;
/*!40000 ALTER TABLE `elementstack` DISABLE KEYS */;
INSERT INTO `elementstack` VALUES ('39634388-f63f-4a6d-87f8-033b34d4822e',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('7740e20a-2fdc-47ba-bf3a-351f3d3454a3',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL,NULL);
/*!40000 ALTER TABLE `elementstack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userresume`
--

DROP TABLE IF EXISTS `userresume`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userresume` (
  `uuid` varchar(36) NOT NULL,
  `stack` varchar(100) DEFAULT NULL,
  `career` varchar(100) DEFAULT NULL,
  `portfolio` varchar(100) DEFAULT NULL,
  `etc` varchar(100) DEFAULT NULL,
  `createdDate` date DEFAULT NULL,
  `updatedDate` date DEFAULT NULL,
  KEY `uuid` (`uuid`),
  CONSTRAINT `userresume_ibfk_1` FOREIGN KEY (`uuid`) REFERENCES `users` (`uuid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userresume`
--

LOCK TABLES `userresume` WRITE;
/*!40000 ALTER TABLE `userresume` DISABLE KEYS */;
INSERT INTO `userresume` VALUES ('39634388-f63f-4a6d-87f8-033b34d4822e','','','getURL','','2022-09-30','2022-09-30');
/*!40000 ALTER TABLE `userresume` ENABLE KEYS */;
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
  `pw` varchar(64) NOT NULL,
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
INSERT INTO `users` VALUES ('39634388-f63f-4a6d-87f8-033b34d4822e','ch_id','5b5953ac1b865b2798dbdbd39750f9af15235aa3f99ed6453d6611e862cf3a6d','gogo2','sslslslsl','Daejeon',NULL),('c9e4a272-3e62-4b1d-837f-65b5b3f88e96','id-test','ed4dd4cdaa0d2c0370b0361945ed7e1a3e5f16795f9b2ccf8ebe82138e4c23f2','gogo1','emememail','Seoul',NULL);
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
 1 AS `updatedDate`*/;
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
/*!50001 VIEW `viewuserresume` AS select `a`.`id` AS `id`,`a`.`pw` AS `pw`,`a`.`name` AS `name`,`a`.`email` AS `email`,`a`.`location` AS `location`,`b`.`stack` AS `stack`,`b`.`career` AS `career`,`b`.`portfolio` AS `portfolio`,`b`.`etc` AS `etc`,`b`.`updatedDate` AS `updatedDate` from (`users` `a` join `userresume` `b`) where (`a`.`uuid` = `b`.`uuid`) */;
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

-- Dump completed on 2022-10-01  0:38:32
