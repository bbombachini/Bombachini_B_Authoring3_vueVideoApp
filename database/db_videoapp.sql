-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 09, 2018 at 09:30 AM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_videoapp`
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
-- Table structure for table `tbl_albums`
--

CREATE TABLE `tbl_albums` (
  `albums_id` mediumint(8) UNSIGNED NOT NULL,
  `albums_name` varchar(255) NOT NULL,
  `albums_cover` varchar(255) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `albums_year` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_albums`
--

INSERT INTO `tbl_albums` (`albums_id`, `albums_name`, `albums_cover`, `artist_id`, `albums_year`) VALUES
(1, 'Our Love To Admire', 'our_love_to_admire.jpg', 1, 2007),
(2, 'Heligoland', 'heligoland.jpg', 2, 2010),
(3, '...Like Clockwork', 'like_clockwork.jpg', 4, 2013),
(4, 'About Time', 'about_time.jpg', 3, 2013),
(5, 'Bad Liar', 'bad_liar.png', 5, 2017),
(6, 'Purpose', 'purpose.png', 6, 2015),
(7, 'Focus', 'focus.png', 7, 2016);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_artist`
--

CREATE TABLE `tbl_artist` (
  `artist_id` mediumint(8) UNSIGNED NOT NULL,
  `artist_name` varchar(150) NOT NULL,
  `artist_photo` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_artist`
--

INSERT INTO `tbl_artist` (`artist_id`, `artist_name`, `artist_photo`) VALUES
(1, 'Interpol', 'interpol.jpg'),
(2, 'Massive Attack', 'massive_attack.jpg'),
(3, 'Pennywise', 'pennywise.jpg'),
(4, 'Queens of The Stone Age', 'qotsa.jpg'),
(5, 'Selena Gomez', 'selena_gomez.jpg'),
(6, 'Justin Bieber', 'justin_bieber.jpg'),
(7, 'Ariana Grande', 'ariana_grande.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_art_gen`
--

CREATE TABLE `tbl_art_gen` (
  `art_gen_id` mediumint(8) UNSIGNED NOT NULL,
  `artists_id` mediumint(9) NOT NULL,
  `mus_gen_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_art_mgen`
--

CREATE TABLE `tbl_art_mgen` (
  `art_mgen_id` mediumint(8) UNSIGNED NOT NULL,
  `artist_id` int(10) UNSIGNED NOT NULL,
  `mus_gen_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_art_mgen`
--

INSERT INTO `tbl_art_mgen` (`art_mgen_id`, `artist_id`, `mus_gen_id`) VALUES
(1, 5, 3),
(2, 6, 3),
(3, 7, 3);

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
-- Table structure for table `tbl_mgenre`
--

CREATE TABLE `tbl_mgenre` (
  `mus_gen_id` mediumint(8) UNSIGNED NOT NULL,
  `mus_gen_name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mgenre`
--

INSERT INTO `tbl_mgenre` (`mus_gen_id`, `mus_gen_name`) VALUES
(1, 'Classic Rock'),
(2, 'Indie'),
(3, 'Pop'),
(4, 'Electronic'),
(5, 'Grunge'),
(6, 'Lounge'),
(7, 'Punk Rock');

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

-- --------------------------------------------------------

--
-- Table structure for table `tbl_musics`
--

CREATE TABLE `tbl_musics` (
  `musics_id` mediumint(8) UNSIGNED NOT NULL,
  `musics_name` varchar(150) NOT NULL,
  `musics_file` varchar(255) NOT NULL,
  `musics_position` tinyint(4) NOT NULL,
  `albums_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_musics`
--

INSERT INTO `tbl_musics` (`musics_id`, `musics_name`, `musics_file`, `musics_position`, `albums_id`) VALUES
(1, 'Pray For Rain', '01 Pray For Rain feat. Tunde Adebimpe.mp3', 1, 2),
(2, 'Babel', '02 Babel feat. Martina Topley-Bird.mp3', 2, 2),
(4, 'Splitting The Atom', '03 Splitting The Atom feat. Horace Andy.mp3', 3, 2),
(5, 'Girl I Love You', '04 Girl I Love You feat. Horace Andy.mp3', 4, 2),
(6, 'Psyche', '05 Psyche feat. Martina Topley-Bird.mp3', 5, 2),
(7, 'Pioneer To The Falls', '01 Pioneer to the Falls.mp3', 1, 1),
(8, 'No I In Threesome', '02 No I in Threesome.mp3', 2, 1),
(9, 'The Scale', '03 The Scale.mp3', 3, 1),
(10, 'The Heinrich Maneuver', '04 The Heinrich Maneuver.mp3', 4, 1),
(11, 'Keep Your Eyes Peeled', '01 Keep Your Eyes Peeled.mp3', 1, 3),
(12, 'I Sat By The Ocean', '02 I Sat By the Ocean.mp3', 2, 3),
(13, 'The Vampyre of Time and Memory', '03 The Vampyre of Time and Memory.mp3', 3, 3),
(14, 'If I Had a Tail', '04 If I Had a Tail.mp3', 4, 3),
(15, 'Peaceful Day', '01 Peaceful Day.mp3', 1, 4),
(16, 'Waste of Time', '02 Waste of Time.mp3', 2, 4),
(17, 'Perfect People', '03 Perfect People.mp3', 3, 4),
(18, 'Every Single Day', '04 Every Single Day.mp3', 4, 4),
(19, 'Focus', 'Ariana Grande - Focus.mp3', 1, 7),
(20, 'Bad Liar', 'Selena Gomez - Bad Liar.mp3', 1, 5),
(21, 'Company', 'Justin Bieber - Company.mp3', 1, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_age_rating`
--
ALTER TABLE `tbl_age_rating`
  ADD PRIMARY KEY (`arating_id`);

--
-- Indexes for table `tbl_albums`
--
ALTER TABLE `tbl_albums`
  ADD PRIMARY KEY (`albums_id`);

--
-- Indexes for table `tbl_artist`
--
ALTER TABLE `tbl_artist`
  ADD PRIMARY KEY (`artist_id`);

--
-- Indexes for table `tbl_art_gen`
--
ALTER TABLE `tbl_art_gen`
  ADD PRIMARY KEY (`art_gen_id`);

--
-- Indexes for table `tbl_art_mgen`
--
ALTER TABLE `tbl_art_mgen`
  ADD PRIMARY KEY (`art_mgen_id`);

--
-- Indexes for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- Indexes for table `tbl_mgenre`
--
ALTER TABLE `tbl_mgenre`
  ADD PRIMARY KEY (`mus_gen_id`);

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
-- Indexes for table `tbl_musics`
--
ALTER TABLE `tbl_musics`
  ADD PRIMARY KEY (`musics_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_age_rating`
--
ALTER TABLE `tbl_age_rating`
  MODIFY `arating_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_albums`
--
ALTER TABLE `tbl_albums`
  MODIFY `albums_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_artist`
--
ALTER TABLE `tbl_artist`
  MODIFY `artist_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_art_gen`
--
ALTER TABLE `tbl_art_gen`
  MODIFY `art_gen_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_art_mgen`
--
ALTER TABLE `tbl_art_mgen`
  MODIFY `art_mgen_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  MODIFY `genre_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_mgenre`
--
ALTER TABLE `tbl_mgenre`
  MODIFY `mus_gen_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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

--
-- AUTO_INCREMENT for table `tbl_musics`
--
ALTER TABLE `tbl_musics`
  MODIFY `musics_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
