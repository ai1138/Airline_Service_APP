-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 27, 2021 at 10:50 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flights`
--

-- --------------------------------------------------------

--
-- Table structure for table `airline`
--

DROP TABLE IF EXISTS `airline`;
CREATE TABLE IF NOT EXISTS `airline` (
  `name` varchar(255) DEFAULT NULL,
  `airline_id` varchar(255) NOT NULL,
  PRIMARY KEY (`airline_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `airline`
--

INSERT INTO `airline` (`name`, `airline_id`) VALUES
('Air China', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `airline_staff`
--

DROP TABLE IF EXISTS `airline_staff`;
CREATE TABLE IF NOT EXISTS `airline_staff` (
  `staff_id` varchar(16) NOT NULL,
  `username` varchar(255) NOT NULL,
  `airline_id` varchar(255) DEFAULT NULL,
  `passwords` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`username`),
  KEY `airline_id` (`airline_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `airline_staff`
--

INSERT INTO `airline_staff` (`staff_id`, `username`, `airline_id`, `passwords`, `first_name`, `last_name`, `date_of_birth`, `phone_number`) VALUES
('edfsw', 'admin', '1234', 'abcd', 'Roe', 'Jones', '1978-05-25', '111-2222-3333');

-- --------------------------------------------------------

--
-- Table structure for table `airplane`
--

DROP TABLE IF EXISTS `airplane`;
CREATE TABLE IF NOT EXISTS `airplane` (
  `airplane_id` varchar(255) NOT NULL,
  `num_of_seats` int(255) DEFAULT NULL,
  `airline_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`airplane_id`),
  KEY `airline_id` (`airline_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `airplane`
--

INSERT INTO `airplane` (`airplane_id`, `num_of_seats`, `airline_id`) VALUES
('388HH3', 4, '1234'),
('3', 50, '1234'),
('2', 4, '1234'),
('1', 4, '1234');

-- --------------------------------------------------------

--
-- Table structure for table `airport`
--

DROP TABLE IF EXISTS `airport`;
CREATE TABLE IF NOT EXISTS `airport` (
  `name` varchar(255) NOT NULL,
  `airline_id` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`name`),
  KEY `airline_id` (`airline_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `airport`
--

INSERT INTO `airport` (`name`, `airline_id`, `city`) VALUES
('SFO', '1234', 'San Francisco'),
('SHEN', '1234', 'Shenzhen'),
('BEI', '1234', 'Beijing'),
('PVG', '1234', 'Shanghai'),
('BOS', '1234', 'Boston'),
('JFK', '1234', 'NYC'),
('LAX', '1234', 'Los Angeles'),
('HKA', '1234', 'Hong Kong');

-- --------------------------------------------------------

--
-- Table structure for table `booking_agent`
--

DROP TABLE IF EXISTS `booking_agent`;
CREATE TABLE IF NOT EXISTS `booking_agent` (
  `first_name` varchar(255) NOT NULL DEFAULT '',
  `last_name` varchar(255) NOT NULL DEFAULT '',
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `passwords` varchar(255) DEFAULT NULL,
  `booking_agent_id` varchar(255) NOT NULL,
  `customer_id` varchar(255) DEFAULT NULL,
  `comission` float DEFAULT '0',
  PRIMARY KEY (`booking_agent_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `booking_agent`
--

INSERT INTO `booking_agent` (`first_name`, `last_name`, `username`, `email`, `passwords`, `booking_agent_id`, `customer_id`, `comission`) VALUES
('', '', 'sara9', 'expedia@agent.com', 'abcd1234', '2', '12346', 0),
('', '', 'buns40', 'ctrip@agent.com', 'abcd1234', '1', '12350', 0);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `email` varchar(255) DEFAULT NULL,
  `customer_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) NOT NULL DEFAULT '',
  `passwords` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `passport_number` varchar(255) DEFAULT NULL,
  `passport_expiration` date DEFAULT NULL,
  `passport_country` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`email`, `customer_id`, `username`, `first_name`, `last_name`, `passwords`, `address`, `phone_number`, `passport_number`, `passport_expiration`, `passport_country`, `date_of_birth`) VALUES
('example@example.com', 'WK4D8I', 'ai222', 'abed', 'islam', '111', '', '1828882882', 'sdsd', '2021-10-11', 'sdsd', '2021-10-28'),
('user3@nyu.edu', '12347', 'ismile', 'User 3', 'islam', '1234', ', building number: 1890, street: Jay\r\nStreet, city: Brooklyn, state: New York', '12343244324', '54324', '2025-09-24', 'USA', '1999-09-19'),
('user2@nyu.edu', '12349', 'jeremy69', 'User 2', '', '1234', 'building number: 1702, street: Jay\r\nStreet, city: Brooklyn, state: New York', '12343234323', '54323', '2025-10-24', 'USA', '1999-10-19'),
('user1@nyu.edu', '12346', 'hellenrocks', 'User 1', '', '1234', 'building number: 5405, street: Jay Street, city: Brooklyn, state: New York', '123-4322-4322', '54322', '2025-12-25', 'USA', '1999-11-19'),
('testcustomer@nyu.edu', '12350', 'abedrocks', 'Test Customer 1', '', '1234', 'building number: 1555, street: Jay St, city: Brooklyn, state: New York', '123-4321-4321', '54321', '2025-12-24', 'USA', '1999-12-19');

-- --------------------------------------------------------

--
-- Table structure for table `flight`
--

DROP TABLE IF EXISTS `flight`;
CREATE TABLE IF NOT EXISTS `flight` (
  `flight_num` int(65) NOT NULL,
  `departure_date_and_time` datetime(6) DEFAULT NULL,
  `statuses` varchar(255) DEFAULT NULL,
  `airline_id` varchar(255) DEFAULT NULL,
  `departure_airport` varchar(255) DEFAULT NULL,
  `airport_arrival` varchar(255) DEFAULT NULL,
  `arrival_date_and_time` datetime(6) DEFAULT NULL,
  `base_price` float DEFAULT NULL,
  PRIMARY KEY (`flight_num`),
  KEY `airline_id` (`airline_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `flight`
--

INSERT INTO `flight` (`flight_num`, `departure_date_and_time`, `statuses`, `airline_id`, `departure_airport`, `airport_arrival`, `arrival_date_and_time`, `base_price`) VALUES
(104, '2021-05-14 00:00:00.000000', 'on-time', '1234', 'PVG', 'BEI', '2021-05-14 00:00:00.000000', 300),
(839, '2020-07-12 00:00:00.000000', 'on-time', '1234', 'SHEN', 'BEI', '2020-07-12 00:00:00.000000', 300),
(715, '2021-04-28 00:00:00.000000', 'delayed', '1234', 'PVG', 'BEI', '2021-04-28 00:00:00.000000', 3000),
(296, '2021-06-01 13:25:25.000000', 'on-time', '1234', 'PVG', 'SFO', '2021-06-01 16:50:25.000000', 500.54),
(134, '2021-02-12 00:00:00.000000', 'delayed', '1234', 'JFK', 'BOS', '2021-02-12 00:00:00.000000', 300),
(207, '2021-07-12 00:00:00.000000', 'on-time', '1234', 'LAX', 'SFO', '2021-07-12 00:00:00.000000', 300),
(206, '2021-06-12 00:00:00.000000', 'on-time', '1234', 'SFO', 'LAX', '2021-06-12 00:00:00.000000', 400),
(106, '2021-03-12 00:00:00.000000', 'delayed', '1234', 'SFO', 'LAX', '2021-03-12 00:00:00.000000', 350),
(102, '2021-04-12 13:25:25.000000', 'on-time', '1234', 'SFO', 'LAX', '2021-04-12 16:50:25.000000', 300);

-- --------------------------------------------------------

--
-- Table structure for table `past_flights`
--

DROP TABLE IF EXISTS `past_flights`;
CREATE TABLE IF NOT EXISTS `past_flights` (
  `flight_num` int(16) DEFAULT NULL,
  `customer_id` varchar(255) DEFAULT NULL,
  `rate` int(100) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `record_id` varchar(255) NOT NULL,
  PRIMARY KEY (`record_id`),
  KEY `flight_num` (`flight_num`),
  KEY `customer_id` (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `past_flights`
--

INSERT INTO `past_flights` (`flight_num`, `customer_id`, `rate`, `comments`, `record_id`) VALUES
(102, '12346', 5, 'Relaxing, check-in and onboarding very professional', 'sdfoe'),
(102, '12350', 4, 'Very Comfortable', 'oipk'),
(102, '12349', 3, 'Satisfied and will use the same flight again', '832jk'),
(104, '12350', 1, 'Customer Care services are not good', 'dfsf'),
(104, '12346', 5, 'Comfortable journey and Professional', '8888');

-- --------------------------------------------------------

--
-- Table structure for table `payment_info`
--

DROP TABLE IF EXISTS `payment_info`;
CREATE TABLE IF NOT EXISTS `payment_info` (
  `payment_id` varchar(255) NOT NULL,
  `card_num` varchar(1002) DEFAULT NULL,
  `name_on_card` varchar(255) DEFAULT NULL,
  `expiration_date` date DEFAULT NULL,
  `card_type` varchar(255) DEFAULT NULL,
  `customer_id` varchar(255) NOT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payment_info`
--

INSERT INTO `payment_info` (`payment_id`, `card_num`, `name_on_card`, `expiration_date`, `card_type`, `customer_id`) VALUES
('75375', '1111-2222-3333-4444', 'Test Customer 1', '2023-03-01', 'credit', '12350'),
('65575', '1111-2222-3333-5555', 'User 1', '2023-03-01', 'credit', '12346'),
('57575', '1111-2222-3333-5555', 'User 2', '2023-03-01', 'credit', '12349'),
('57343', '1111-2222-3333-5555', 'User 1', '2023-03-01', 'credit', '12346'),
('97585', '1111-2222-3333-4444', 'Test Customer 1', '2023-03-01', 'credit', '12350'),
('8646', '1111-2222-3333-4444', 'Test Customer 1', '2023-03-01', 'credit', '12350'),
('8635', '1111-2222-3333-5555', 'User 3', '2023-03-01', 'credit', '12347'),
('56563', '1111-2222-3333-5555', 'User 3', '2023-03-01', 'credit', '12347'),
('75755', '1111-2222-3333-5555', 'User 3', '2023-03-01', 'credit', '12347'),
('75757', '1111-2222-3333-5555', 'User 3', '2023-03-01', 'credit', '12347'),
('76644', '1111-2222-3333-4444', 'Test Customer 1', '2023-03-01', 'credit', '12350'),
('94049', '1111-2222-3333-5555', 'User 3', '2023-03-01', 'credit', '12347'),
('94560', '1111-2222-3333-5555', 'User 1', '2023-03-01', 'credit', '12346'),
('94570', '1111-2222-3333-5555', 'User 2', '2023-03-01', 'credit', '12349'),
('94580', '1111-2222-3333-5555', 'User 1', '2023-03-01', 'credit', '12346'),
('94590', '1111-2222-3333-4444', 'Test Customer 1', '2023-03-01', 'credit', '12350'),
('94600', '1111-2222-3333-5555', 'User 1', '2023-03-01', 'credit', '12346'),
('94610', '1111-2222-3333-4444', 'Test Customer 1', '2023-03-01', 'credit', '12350');

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
CREATE TABLE IF NOT EXISTS `ticket` (
  `ticket_id` varchar(255) NOT NULL,
  `customer_id` varchar(255) DEFAULT NULL,
  `customer_email_address` varchar(255) DEFAULT NULL,
  `airline_id` varchar(255) DEFAULT NULL,
  `flight_num` int(65) DEFAULT NULL,
  `sold_price` float DEFAULT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `purchase_date_and_time` datetime DEFAULT NULL,
  `booking_agent_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ticket_id`),
  KEY `payment_id` (`payment_id`),
  KEY `customer_id` (`customer_id`),
  KEY `airline_id` (`airline_id`),
  KEY `flight_num` (`flight_num`),
  KEY `booking_agent_id` (`booking_agent_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`ticket_id`, `customer_id`, `customer_email_address`, `airline_id`, `flight_num`, `sold_price`, `payment_id`, `purchase_date_and_time`, `booking_agent_id`) VALUES
('56782', '12347', 'ai1138@nyu.edu', '1234', 7854, 500, '98723', '2022-06-09 13:23:44', 'sh6420'),
('87978', '12346', 'si965@nyu.edu', '9204', 7854, 200, '47637', '2021-05-01 09:02:44', 'buns40'),
('7347', '12348', 'he360@nyu.edu', '	\r\n2222', 9844, 900, '98723', '2020-11-13 11:16:23', ''),
('67jsf', '12348', 'he360@nyu.edu', '2222', 7548, 870, '98723', '2020-12-16 17:53:07', '726278'),
('4938', '12349', 'germy63@nyu.edu', '13415', 3865, 690, '35757', '2020-12-02 11:16:23', '726278'),
('29874', '12350', 'ishy27@nyu.edu', '86433', 42928, 940, '90452', '2020-10-09 11:16:23', '726278'),
('1', '12350', 'testcustomer@nyu.edu', '1234', 102, 500, '75375', '2021-04-12 13:25:25', 'jw420'),
('2', '12346', 'user1@nyu.edu', '12346', 102, 200, '65575', '2021-04-12 13:25:25', 'buns40'),
('3', '12349', 'user2@nyu.edu', '12349', 102, 820, '57575', '2021-04-12 13:25:25', 'sara9'),
('4', '12347', 'user3@nyu.edu', '12347', 104, 690, '57343', '2021-05-14 13:25:25', 'sara9'),
('5', '12350', 'testcustomer@nyu.edu', '1234', 104, 940, '97585', '2021-05-14 13:25:25', NULL),
('6', '12346', 'user1@nyu.edu', '12346', 106, 500, '8646', '2021-03-12 13:25:25', 'jw420'),
('7', '12349', 'user2@nyu.edu', '12349', 106, 200, '8635', '2021-03-12 13:25:25', 'buns40'),
('8', '12347', 'user3@nyu.edu', '12347', 839, 820, '56563', '2020-07-12 13:25:25', 'sara9'),
('9', '12350', 'testcustomer@nyu.edu', '1234', 102, 690, '75755', '2021-04-12 13:25:25', 'sara9'),
('11', '12346', 'user1@nyu.edu', '1234', 134, 940, '75757', '2021-02-12 13:25:25', NULL),
('12', '12349', 'user2@nyu.edu', '1234', 715, 500, '76644', '2021-04-28 10:25:25', 'jw420'),
('14', '12347', 'user3@nyu.edu', '1234', 206, 200, '94049', '2021-06-12 13:25:25', 'buns40'),
('15', '12346', 'user1@nyu.edu', '1234', 206, 400, '94560', '2021-06-06 11:55:55', NULL),
('16', '12349', 'user2@nyu.edu', '1234', 206, 400, '94570', '2021-04-19 11:55:55', NULL),
('17', '12346', 'user1@nyu.edu', '1234', 207, 300, '94580', '2021-03-11 11:55:55', '1'),
('18', '12350', 'testcustomer@nyu.edu', '1234', 207, 300, '94590', '2021-04-25 11:55:55', '1'),
('19', '12346', 'user1@nyu.edu', '1234', 296, 3000, '94600', '2021-05-04 11:55:55', '2'),
('20', '12350', 'testcustomer@nyu.edu', '1234', 296, 3000, '94610', '2021-02-12 11:55:55', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
