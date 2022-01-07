-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2022 at 10:05 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ws2`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customerID` int(11) NOT NULL,
  `email` varchar(32) COLLATE utf8_swedish_ci NOT NULL,
  `phoneNumber` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `userID` int(11) NOT NULL,
  `adress` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `city` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `postalCode` varchar(20) COLLATE utf8_swedish_ci NOT NULL,
  `forename` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `dateRegistered` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customerID`, `email`, `phoneNumber`, `userID`, `adress`, `city`, `postalCode`, `forename`, `lastname`, `dateRegistered`) VALUES
(1, '', '', 1, '', '', '', '', '', '2021-12-13 15:26:18'),
(2, '', '', 2, '', '', '', '', '', '2022-01-05 11:47:19'),
(3, '', '', 3, '', '', '', '', '', '2022-01-05 12:53:49'),
(4, '', '', 4, '', '', '', '', '', '2022-01-05 12:54:03'),
(5, '', '', 5, '', '', '', '', '', '2022-01-05 12:55:46'),
(6, '', '', 6, '', '', '', '', '', '2022-01-05 12:55:58'),
(7, '', '', 7, '', '', '', '', '', '2022-01-05 12:56:08'),
(8, '', '', 1, '', '', '', '', '', '2022-01-05 14:24:24'),
(9, '', '', 9, '', '', '', '', '', '2022-01-05 15:59:14');

-- --------------------------------------------------------

--
-- Table structure for table `ordered_products`
--

CREATE TABLE `ordered_products` (
  `orderedProductsID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `orderID` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `ordered_products`
--

INSERT INTO `ordered_products` (`orderedProductsID`, `productID`, `orderID`, `amount`, `price`) VALUES
(25, 20, 30, 1, 230000),
(26, 20, 31, 3, 230000),
(27, 15, 31, 2, 11);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` int(11) NOT NULL,
  `customerID` int(11) NOT NULL,
  `dateOrderRegistered` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderID`, `customerID`, `dateOrderRegistered`) VALUES
(30, 1, '2022-01-06 23:07:22'),
(31, 5, '2022-01-06 23:12:09');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `description` varchar(200) COLLATE utf8_swedish_ci NOT NULL,
  `price` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `filePath` varchar(1000) COLLATE utf8_swedish_ci NOT NULL,
  `hidden` tinyint(1) DEFAULT 0,
  `dateRegistered` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `name`, `description`, `price`, `amount`, `filePath`, `hidden`, `dateRegistered`) VALUES
(14, '43243243', '4324324', 232344234, 432423, '', 0, '2022-01-06 10:55:10'),
(15, 'zfpkvdmsp', 'vsdpklvsd', 11, 0, '', 1, '2022-01-06 10:55:19'),
(16, 'test', 'dasda', 2, 2, '', 1, '2022-01-06 11:34:57'),
(17, 'dd123', 'dasd', 23, 23, '', 1, '2022-01-06 11:35:58'),
(18, 'testman', 'dasddasåsamn', 32342, 233232, '', 0, '2022-01-06 11:36:53'),
(19, 'testman32323', 'dasddasåsamn', 32342, 233232, '', 1, '2022-01-06 11:37:00'),
(20, 'Sports car', 'A fast sports car', 230000, 1, 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349', 0, '2022-01-06 20:05:09'),
(21, 'test img 1', 'test img 1test img 1', 1, 2, 'assets/200x200.svg', 0, '2022-01-06 20:07:05');

-- --------------------------------------------------------

--
-- Table structure for table `products_in_cart`
--

CREATE TABLE `products_in_cart` (
  `productsInCartID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `dateAddedToCart` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products_in_category`
--

CREATE TABLE `products_in_category` (
  `productInCategoryID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `categoryID` int(11) NOT NULL,
  `dateAdded` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `reviewID` int(11) NOT NULL,
  `customerID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `grade` int(11) NOT NULL,
  `reviewText` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `hidden` int(11) NOT NULL DEFAULT 0,
  `datetimeCreated` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`reviewID`, `customerID`, `productID`, `grade`, `reviewText`, `hidden`, `datetimeCreated`) VALUES
(33, 1, 3, 1, 'Prod 1 fix 2', 0, '2022-01-05 15:56:41'),
(35, 1, 4, 2, 'Prod 2 fix 1', 0, '2022-01-05 15:57:40'),
(38, 9, 4, 4, '2nd acc - prod 2', 0, '2022-01-05 15:59:37');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `roleID` int(11) NOT NULL,
  `roleName` varchar(20) COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roleID`, `roleName`) VALUES
(1, 'Admin'),
(2, 'Moderator');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `username` varchar(15) COLLATE utf8_swedish_ci NOT NULL,
  `pwd` char(255) COLLATE utf8_swedish_ci NOT NULL,
  `role` int(11) NOT NULL,
  `customerID` int(11) NOT NULL,
  `dateRegistered` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `username`, `pwd`, `role`, `customerID`, `dateRegistered`) VALUES
(1, 'boss', '$2y$10$78qlTOJj4zrMk3SUdJdgqO3d7UJ8AbwHegX0iYyjjXG2ImvgD38Ze', 1, 0, '2021-12-13 15:26:18'),
(5, 'test1', '$2y$10$zpe5Qeo1nTPNxq4g49Y1Q.c7DQe0/.iY6.qQN99ZB74sdon4VALU.', 0, 0, '2022-01-05 12:55:46'),
(9, 'testman', '$2y$10$6EjF7pl93d4g0o05xzZ9wOqUA7umxy8YRwO51oAlX9W9kt9HGdpNq', 0, 0, '2022-01-05 15:59:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerID`);

--
-- Indexes for table `ordered_products`
--
ALTER TABLE `ordered_products`
  ADD PRIMARY KEY (`orderedProductsID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `products_in_cart`
--
ALTER TABLE `products_in_cart`
  ADD PRIMARY KEY (`productsInCartID`),
  ADD UNIQUE KEY `productIDAndUserIDUnique` (`userID`,`productID`);

--
-- Indexes for table `products_in_category`
--
ALTER TABLE `products_in_category`
  ADD PRIMARY KEY (`productInCategoryID`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`reviewID`),
  ADD UNIQUE KEY `unique_index` (`customerID`,`productID`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roleID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `ordered_products`
--
ALTER TABLE `ordered_products`
  MODIFY `orderedProductsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `products_in_cart`
--
ALTER TABLE `products_in_cart`
  MODIFY `productsInCartID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `products_in_category`
--
ALTER TABLE `products_in_category`
  MODIFY `productInCategoryID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `reviewID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `roleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
