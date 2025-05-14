-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2025 at 05:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `expressjs-mvc-orm`
--

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Leader', 'can do anything', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Developer', 'can\'t delete', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Guest', 'view only', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `group_roles`
--

CREATE TABLE `group_roles` (
  `id` int(11) NOT NULL,
  `groupId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `group_roles`
--

INSERT INTO `group_roles` (`id`, `groupId`, `roleId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 1, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 1, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 1, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 1, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 1, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 2, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 2, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 2, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 2, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 2, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 2, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 2, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 3, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 3, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 3, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 3, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `url`, `description`, `createdAt`, `updatedAt`) VALUES
(1, '/user/create', 'create a user', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, '/user/read', 'show all users', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, '/user/update', 'update a user', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, '/user/delete', 'delete a user', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, '/role/create', 'create a role', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, '/role/read', 'show all roles', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, '/role/delete', 'delete a role', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, '/role/by-group', 'role by group', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, '/role/assign-to-group', 'assign to group', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, '/group/read', 'read group', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migrate-group-role.js'),
('migrate-group.js'),
('migrate-role.js'),
('migrate-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `groupId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`, `address`, `sex`, `phone`, `groupId`, `createdAt`, `updatedAt`) VALUES
(1, 'fakeuser@gmail.com', '******', 'Fake User', '700 S Alvarado St, Los Angeles', 'Male', '0123456789', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'admin@gmail.com', '$2b$10$/nBAwGHugtJtrFS1pn7k7eH1eGMI2DhdkxbsnQzItZlxqrhZO39zC', 'Admin Account', '100 New St, Birmingham', 'Male', '0112345678', 1, '2025-05-13 14:43:20', '2025-05-13 14:52:55'),
(3, 'dev@gmail.com', '$2b$10$/nBAwGHugtJtrFS1pn7k7eH1eGMI2DhdkxbsnQzItZlxqrhZO39zC', 'Dev Account', '120 W San Francisco', 'Female', '0998784868', 2, '2025-05-13 14:51:14', '2025-05-13 14:51:14'),
(4, 'guest@gmai.conm', '$2b$10$/nBAwGHugtJtrFS1pn7k7eH1eGMI2DhdkxbsnQzItZlxqrhZO39zC', 'Guest Account', '700 Ave, New York', 'Others', '0888776249', 3, '2025-05-13 14:57:38', '2025-05-13 14:57:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group_roles`
--
ALTER TABLE `group_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `group_roles`
--
ALTER TABLE `group_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
