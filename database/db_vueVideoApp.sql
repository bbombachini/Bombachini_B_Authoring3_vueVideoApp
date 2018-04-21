-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 21, 2018 at 03:56 AM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_vueVideoApp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_age_rating`
--

CREATE TABLE `tbl_age_rating` (
  `arating_id` smallint(5) UNSIGNED NOT NULL,
  `arating_name` varchar(125) NOT NULL,
  `arating_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `tbl_age_rating`
--

INSERT INTO `tbl_age_rating` (`arating_id`, `arating_name`, `arating_desc`) VALUES
(1, 'G', 'G – General Audiences\r\nAll ages admitted. Nothing that would offend parents for viewing by children. '),
(2, 'PG', 'PG – Parental Guidance Suggested\r\nSome material may not be suitable for children. Parents urged to give  	&ldquo;parental guidance&rdquo;. '),
(3, 'PG-13', 'PG-13 – Parents Strongly Cautioned\r\nSome material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'),
(4, 'R', 'R – Restricted\r\nUnder 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them. '),
(5, 'NC-17', 'NC-17 – Adults Only\r\nNo One 17 and Under Admitted. Clearly adult. Children are not admitted. ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

CREATE TABLE `tbl_genre` (
  `genre_id` tinyint(3) UNSIGNED NOT NULL,
  `genre_name` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`genre_id`, `genre_name`) VALUES
(1, 'Action'),
(2, 'Adventure'),
(3, 'Comedy'),
(4, 'Crime'),
(5, 'Drama'),
(6, 'Historical'),
(7, 'Horror'),
(9, 'Science Fiction'),
(12, 'Animation'),
(13, 'Family'),
(14, 'Fantasy');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

CREATE TABLE `tbl_movies` (
  `movies_id` mediumint(8) UNSIGNED NOT NULL,
  `movies_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `movies_title` varchar(125) NOT NULL,
  `movies_year` varchar(5) NOT NULL,
  `movies_storyline` text NOT NULL,
  `movies_trailer` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `movies_rating` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movies_id`, `movies_cover`, `movies_title`, `movies_year`, `movies_storyline`, `movies_trailer`, `movies_rating`) VALUES
(1, 'unsane_poster.jpg', 'Unsane', '2018', 'A young woman is involuntarily committed to a mental institution, where she is confronted by her greatest fear--but is it real or a product of her delusion?', 'unsane_2018.mp4', 7),
(2, 'deadpool_poster.jpg', 'Deadpool', '2016', 'A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.', 'deadpool_2016.mp4', 8),
(3, 'red_sparrow_poster.jpg', 'Red Sparrow', '2018', 'Ballerina Dominika Egorova is recruited to \'Sparrow School,\' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.', 'red_sparrow_2018.mp4', 6),
(4, 'the_boss_baby_poster.jpg', 'The Boss Baby', '2017', 'A suit-wearing, briefcase-carrying baby pairs up with his 7-year old brother to stop the dastardly plot of the CEO of Puppy Co.\r\n', 'the_boss_baby_2017.mp4', 6),
(5, 'kingsman_poster.jpg', 'Kingsman', '2017', 'When their headquarters are destroyed and the world is held hostage, the Kingsman\'s journey leads them to the discovery of an allied spy organization in the US. These two elite secret organizations must band together to defeat a common enemy.', 'kingsman_2017.mp4', 7),
(6, 'hidden_figures_poster.jpg', 'Hidden Figures', '2016', 'The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.', 'hidden_figures_2016.mp4', 8),
(7, 'logan_poster.jpg', 'Logan', '2017', 'In the near future, a weary Logan cares for an ailing Professor X, somewhere on the Mexican border. However, Logan\'s attempts to hide from the world, and his legacy, are upended when a young mutant arrives, pursued by dark forces.', 'logan_2017.mp4', 8),
(8, 'robin_poster.jpg', 'Christopher Robin', '2018', 'Working-class family man Christopher Robin encounters his childhood friend Winnie-the-Pooh, who helps him to rediscover the joys of life.', 'cristopher_robin_2018.mp4', 6);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_ara`
--

CREATE TABLE `tbl_mov_ara` (
  `mov_ara_id` mediumint(8) UNSIGNED NOT NULL,
  `movies_id` mediumint(8) UNSIGNED NOT NULL,
  `arating_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mov_ara`
--

INSERT INTO `tbl_mov_ara` (`mov_ara_id`, `movies_id`, `arating_id`) VALUES
(1, 1, 3),
(2, 2, 3),
(3, 3, 5),
(4, 4, 1),
(5, 5, 3),
(6, 6, 1),
(7, 7, 4),
(8, 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_gen`
--

CREATE TABLE `tbl_mov_gen` (
  `mov_genre_id` mediumint(8) UNSIGNED NOT NULL,
  `movies_id` mediumint(9) NOT NULL,
  `genre_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mov_gen`
--

INSERT INTO `tbl_mov_gen` (`mov_genre_id`, `movies_id`, `genre_id`) VALUES
(1, 7, 1),
(2, 7, 5),
(3, 7, 9),
(4, 2, 1),
(5, 2, 2),
(6, 2, 3),
(7, 1, 7),
(8, 3, 5),
(9, 3, 4),
(10, 4, 12),
(11, 4, 3),
(12, 4, 13),
(13, 5, 1),
(14, 5, 3),
(15, 5, 2),
(16, 6, 5),
(17, 6, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_age_rating`
--
ALTER TABLE `tbl_age_rating`
  ADD PRIMARY KEY (`arating_id`);

--
-- Indexes for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- Indexes for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  ADD PRIMARY KEY (`movies_id`);

--
-- Indexes for table `tbl_mov_ara`
--
ALTER TABLE `tbl_mov_ara`
  ADD PRIMARY KEY (`mov_ara_id`);

--
-- Indexes for table `tbl_mov_gen`
--
ALTER TABLE `tbl_mov_gen`
  ADD PRIMARY KEY (`mov_genre_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_age_rating`
--
ALTER TABLE `tbl_age_rating`
  MODIFY `arating_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  MODIFY `genre_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  MODIFY `movies_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_mov_ara`
--
ALTER TABLE `tbl_mov_ara`
  MODIFY `mov_ara_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_mov_gen`
--
ALTER TABLE `tbl_mov_gen`
  MODIFY `mov_genre_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
