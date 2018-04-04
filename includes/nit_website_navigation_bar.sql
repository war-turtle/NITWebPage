-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2017 at 07:10 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nit website navigation bar`
--

-- --------------------------------------------------------

--
-- Table structure for table `nav_boxes`
--

CREATE TABLE `nav_boxes` (
  `box_index` int(3) NOT NULL,
  `box_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nav_boxes`
--

INSERT INTO `nav_boxes` (`box_index`, `box_name`) VALUES
(1, 'Home'),
(2, 'Institute'),
(3, 'Academic'),
(4, 'Administration'),
(5, 'Departments'),
(6, 'Sections'),
(7, 'T&P'),
(8, 'Students Activities');

-- --------------------------------------------------------

--
-- Table structure for table `nav_list`
--

CREATE TABLE `nav_list` (
  `box_index` int(11) NOT NULL,
  `item_number` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL,
  `item_link` varchar(1000) NOT NULL,
  `item_info` varchar(10000) DEFAULT NULL,
  `item_image` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nav_list`
--

INSERT INTO `nav_list` (`box_index`, `item_number`, `item_name`, `item_link`, `item_info`, `item_image`) VALUES
(2, 1, 'Institute Profile', '#', '#', '#'),
(2, 2, 'Location', '#', '#', '#'),
(3, 1, 'Courses', '#', '#', '#'),
(2, 3, 'Hounors and Awards', '#', '#', '#'),
(2, 4, 'Service Rules', '#', '#', '#'),
(2, 5, 'Rules and Policies', '#', '#', '#'),
(2, 6, 'IPR cell', '#', '#\r\n', '#'),
(2, 7, 'Photo Gallery', '#', '#', '#'),
(3, 2, 'Exam and Evaluation ', '#', '#', '#'),
(3, 3, 'Roll Sheet', '#', '#', '#'),
(3, 4, 'Fees and Expenses', '#', '#', '#'),
(3, 5, 'Admissions', '#', '#', '#'),
(3, 6, 'Research and Development', '#', '#', '#'),
(3, 7, 'Foreign Students ', '#', '#', '#'),
(3, 8, 'Academic Calendar', '#', '#', '#'),
(3, 9, 'Rules and Procedures', '#', '#', '#'),
(3, 10, 'Time Table', '#', '#', '#'),
(3, 11, 'Exam Date Sheets', '#', '#', '#'),
(3, 12, 'Notifications (ACADEMIC)', '#', '#', '#'),
(3, 13, 'News (ACADEMIC)', '#', '#', '#'),
(3, 14, 'Contact Us (ACADEMICS)', '#', '#', '#'),
(3, 15, 'Student Services', '#', '#', '#'),
(3, 16, 'Scholarship', '#', '#', '#'),
(3, 17, 'IIIT Sonepat', '#', '#', '#'),
(3, 18, 'Trainee-Teacher Scheme', '#', '#', '#'),
(3, 19, 'SENATE', '#', '#', '#'),
(3, 20, 'Scheme', '#', '#', '#'),
(3, 19, 'Senate', '#', '#', '#'),
(3, 20, 'Scheme', '#', '#', '#'),
(4, 1, 'Board of Governors', '#', '#', '#'),
(4, 2, 'Chairperson', '#', '#', '#'),
(4, 3, 'Director', '#', '#', '#'),
(4, 4, 'Registrar', '#', '#', '#'),
(4, 5, 'Financial Comtt.', '#', '#', '#'),
(4, 6, 'Senate', '#', '#', '#'),
(4, 7, 'Building Works Commt.', '#', '#', '#'),
(4, 8, 'Deans', '#', '#', '#'),
(4, 9, 'Other Officer', '#', '#', '#'),
(4, 10, 'NIT Act & Statues', '#', '#', '#'),
(4, 11, 'Organization Chart', '#', '#', '#'),
(5, 1, 'Computer Engg.', '#', '#', '#'),
(5, 2, 'Civil Engg.', '#', '#', '#'),
(5, 3, 'Mechanical Engg.', '#', '#', '#'),
(5, 4, 'Electrical Engg.', '#', '#', '#'),
(5, 5, 'Electronics & <br>Communication Engg.', '#', '#', '#'),
(5, 6, 'Business Administration', '#', '#', '#'),
(5, 7, 'Computer Application', '#', '#', '#'),
(5, 8, 'Physics', '#', '#', '#'),
(5, 9, 'Chemistry', '#', '#', '#\r\n'),
(5, 10, 'Mathematics', '#', '#', '#'),
(5, 11, 'Humanities & Social <br>Sciences', '#', '#', '#'),
(5, 12, 'School of Bio-Medical <br>Engineering', '#', '#', '#'),
(5, 13, 'School of VLSI Design &<br>Embedded System', '#', '#', '#'),
(5, 14, 'School of Materials <br>Science & Technology', '#', '#', '#'),
(5, 15, 'School of Renewable <br>Energy and Efficiency<br>(SREE)', '#', '#', '#'),
(6, 1, 'Account Section', '#', '#', '#'),
(6, 2, 'Center of Computing &<br>Networking', '#', '#', '#'),
(6, 3, 'Central Workshop', '#', '#', '#'),
(6, 4, 'Estate Section', '#', '#', '#'),
(6, 5, 'Health Center', '#', '#', '#'),
(6, 6, 'Library', '#', '#', '#'),
(6, 7, 'Store Section', '#', '#', '#'),
(6, 8, 'Sports Section', '#', '#', '#'),
(6, 9, 'GA Section', '#', '#', '#'),
(6, 10, 'Electrical Maintenance', '#', '#', '#'),
(6, 11, 'Security Section', '#', '#', '#'),
(7, 1, 'Invitation', '#', '#', '#'),
(7, 2, 'Courses', '#', '#', '#'),
(7, 3, 'General Instructions', '#', '#', '#'),
(7, 4, 'Major Recruiters', '#', '#', '#'),
(7, 5, 'Placements Statistics', '#', '#', '#'),
(7, 6, 'Placement Team', '#', '#', '#'),
(7, 7, 'TNP BROCHURE', '#', '#', '#'),
(8, 1, 'Techspardha', '#', '#', '#'),
(8, 2, 'Confluence', '#', '#', '#'),
(8, 3, 'Technical Socities', '#', '#', '#'),
(8, 4, 'Cultural Clubs', '#', '#', '#'),
(8, 5, 'Events', '#', '#', '#'),
(8, 6, 'Student Help Desk', '#', '#', '#');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nav_boxes`
--
ALTER TABLE `nav_boxes`
  ADD PRIMARY KEY (`box_index`);

--
-- Indexes for table `nav_list`
--
ALTER TABLE `nav_list`
  ADD KEY `box_index` (`box_index`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nav_boxes`
--
ALTER TABLE `nav_boxes`
  MODIFY `box_index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `nav_list`
--
ALTER TABLE `nav_list`
  ADD CONSTRAINT `nav_list_ibfk_1` FOREIGN KEY (`box_index`) REFERENCES `nav_boxes` (`box_index`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
