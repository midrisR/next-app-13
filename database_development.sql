-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Jun 2023 pada 03.24
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database_development`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `brands`
--

INSERT INTO `brands` (`id`, `name`, `published`, `createdAt`, `updatedAt`) VALUES
(2, 'Kitz Valve', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(3, 'Swagelok', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(4, 'FLOWSERVE', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(5, 'FUJIKIN', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(6, 'Tozen', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(7, 'Bakrie', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(8, 'ASCO', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(9, 'CAMERON', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(10, 'BENKAN', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(11, 'Hy-Lok', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(12, 'SHOWA', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(13, 'Conseal', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(14, 'Crane', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(15, 'CHINA', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(16, 'Jepang', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(17, 'LOKAL', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(18, 'EROPA', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(19, 'TAIWAN', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(20, 'RANSBURG', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22'),
(21, 'Tombo 1995', 1, '2023-06-19 22:28:22', '2023-06-19 22:28:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `published`, `createdAt`, `updatedAt`) VALUES
(2, 'Valves', '68cce7a928cb238f8d332ad74f9cfae8.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(3, 'Accessories', '0c993ac6d5fa9744d573a3fef8675785.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(4, 'Instrument', 'e5f71f09e658c82ccf75d729ab9889a9.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(5, 'Plate', '6005902a80323c567cc656ed3c466c43.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(10, 'Bolt and Nut', '4af63dc0879b7d7cf2fb0874912401fa.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(11, 'Gasket', '45754954ad964b45357656d24e758ab9.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(12, 'Flexible Rubber Joint', '37cd4f4c7281349bad7ca59b14457e79.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(13, 'Safety Equipment', '6749392688832732a07f4f8e6542ba79.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(14, 'Pipa', '4c6d275eccb35df9bb15ee8f36fa63dc.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(20, 'Olets', '83896fefc04c3cdc6f06ff5870cdaadd.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(29, 'Round Bar', '75cf539a9c9b22344d645c52de0559f0.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(30, 'Fitting', 'c5b4030afe34d885d61f5a48f864a7a3.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(33, 'Flange', '1b4ad5fad25fddc28b382585e010171c.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53'),
(36, 'Forged Fitting', '243b6aa0bd9b861e85e3526f754dac43.jpg', 1, '2023-06-19 22:30:53', '2023-06-19 22:30:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `categorieId` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `brandId` int(11) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `metaDescription` text DEFAULT NULL,
  `metaKeywords` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `name`, `categorieId`, `description`, `brandId`, `tag`, `typeId`, `metaDescription`, `metaKeywords`, `published`, `createdAt`, `updatedAt`) VALUES
(3414, 'Pipa Seamless Carbon Steel ASTM A106 High Temperature Services', 14, '<span style=\"font-size:14px;\"><span style=\"line-height:115%\"><span style=\"line-height:115%\">JUAL PIPA&nbsp;ASTM A106, PIPA SEAMLESS A106, PIPA SEAMLESS CARBON STEEL ASTM A106 / ASME SA106, PIPA CARBON STEEL A106</span></span><br />\r\n<br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">STANDARD : ASTM </span><span style=\"line-height:115%\">A106&nbsp;</span><span style=\"font-family:Calibri,sans-serif\">/ ASME SA106<br />\r\nGRADE : A106 GR A ,GR B, GR C<br />\r\nSIZE : 1/4&quot; - 36&quot;</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">THICKNESS : SCH 5s, SCH 10s, SCH 10, SCH 20, SCH 30, SCH 40, DCH 80, SCH 120, SCH 160, SCH XXS</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">LENGTH : 6M - 12M&nbsp;</span></span><br />\r\nMANUFACTURED : CHINA, JEPANG, KOREA, AMERIKA, EROPA</span><br />\r\n&nbsp;', 15, 'Pipa Seamless ASTM A106', 1, 'PIPA ASTM A106, PIPA SEAMLESS CARBON STEEL ASTM A106 / ASME SA106, PIPA CARBON STEEL A106', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3415, 'Pipa Seamless Ferritic Alloy Steel Astm A335', 14, '<span style=\"font-size:14px;\">JUAL JUAL PIPA ASTM A335, &nbsp;PIPA SEAMLESS ASTM A335, PIPA BAJA SEAMLESS A335, PIPA ALLOY STEEL GRADE P5, P9, P11, P22, P91,<br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">STANDAR : ASTM A335, ASME SA 335<br />\r\nCLASS :&nbsp;P5, P9, P11, P22, P91</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">OUT DIAMETER : 10 mm - 600 mm (3/8&quot; - 28&quot;)</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">WALL THICKNESS : 3 mm - 16 mm (SCH 5 -SCH 160)</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">LENGTH : 1 - 12 METER , UKURAN CUSTOM&nbsp;</span></span><br />\r\nMANUFACTURED : CHINA, JEPANG, INDIA, KOREA, EROPA, AMERIKA<br />\r\nEND SURFACE : BLACK COATING</span>', 15, 'Pipa Alloy Steel  ASTM A335', 3, 'JUAL PIPA ASTM A335,  PIPA SEAMLESS ASTM A335, PIPA BAJA SEAMLESS A335, PIPA ALLOY STEEL GRADE P5, P9, P11, P22, P91,', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3420, 'Female Adapter', 4, '', 2, 'Female Adapter', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3421, 'Female Connector', 4, '', 2, 'Female Connector', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3422, 'Alumunium Jacket Sheet', 3, '', 10, 'Alumunium Jacket Sheet', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3423, 'Anchor Bolt Stainless Steel', 10, '', 8, 'Anchor Bolt', 2, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3426, 'Plate Bordes', 5, '', 5, 'Plate Bordes', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3427, 'Plate Brass', 5, '', 3, 'Plate Brass', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3428, '6 Way Ball Valve', 4, '', 10, '6 Way Ball Valve', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3429, 'Way Plug Valve', 2, '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus imperdiet nibh. Maecenas sit amet semper leo. Nulla suscipit quam nunc, sed feugiat mauris blandit nec. Nunc quis lectus ante. Phasellus ac tellus ut est condimentum vestibulum. Curabitur eu lectus eget tortor pharetra efficitur vulputate congue est. Nulla augue odio, pulvinar sed rutrum eget, gravida eget est. Donec et orci aliquet, tempor leo sit amet, suscipit lectus. Aliquam a facilisis odio. In quis enim egestas, dignissim ipsum in, mattis ipsum. Aliquam fermentum efficitur orci id volutpat.</p>\n\n<p>Donec sed nulla non purus tincidunt lacinia. Sed vel imperdiet augue, vitae blandit lectus. Suspendisse ac bibendum neque. Nunc venenatis dui eros, vel condimentum elit tincidunt in. Donec vestibulum turpis sit amet elit pellentesque laoreet. Phasellus vel libero ut nibh congue pharetra. Nulla porta felis nec luctus tempor. Cras porta nunc velit, et ullamcorper orci scelerisque eget. Aenean varius tincidunt condimentum. Proin tincidunt metus non leo laoreet laoreet. Pellentesque porta lectus neque, ac tempor velit tempus ac. In hac habitasse platea dictumst. Sed quis fringilla lectus, id mattis urna. Nulla aliquet eros eleifend diam placerat bibendum. In laoreet ligula ut elit accumsan, vitae cursus augue rhoncus. Aliquam erat volutpat.</p>\n', 8, 'Way Plug Valve', 1, 'Way Plug Valve', 'Way Plug Valve', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3430, 'Globe Valve', 2, '', 8, 'Globe Valve', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3431, 'Threeway Ball Valve', 2, '', 0, 'Threeway Ball Valve', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3432, 'Bolt', 10, '', 17, 'Bolt', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3433, 'Calcium Silicate', 3, '', 3, 'Calcium Silicate', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3434, 'Socket Weld Flange Stainless Steel Ansi/Asme', 33, '<span style=\"font-size:14px;\">JUAL SOCKET WELD FLANGE STAINLESS STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE SOCKET WELD FLANGE, FLAT FACE SOCKET WELD FLANGE, SERIES A AND B SOCKET WELD FLANGE, SWRF FLANGES<br />\r\n<br />\r\nSIZE : 1/2&quot; (DN15) - 48&quot; (DN1200)<br />\r\nDIMENSIONS : ANSI B16.5,&nbsp; B16.47 SERIES A AND B, MSS SP44, ASA, API-605, AWWA, CUSTOM DRAWINGS<br />\r\nCLASS : 150 LBS, 300 LBS, 600 LBS, 500 LBS, 1500 LBS, 2500 LBS<br />\r\nSTANDARD : ANSI / ASME B16.5, B16.47&nbsp;SERIES A AND B, ANSI FLANGES, ASME FLANGES<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF), RAISED FACE (RF), RING TYPE JOINT (RTJ)<br />\r\nMATERIAL : ASTM A 182, A 240 F 304, 304L, 304H, 316, 316L, 316Ti, 310, 310S, 321, 321H, 317, 347, 347H, 904L</span>', 15, 'Flange Socket', 2, 'JUAL SOCKET WELD FLANGE STAINLESS STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE SOCKET WELD FLANGE, FLAT FACE SOCKET WELD FLANGE, SERIES A AND B SOCKET WELD FLANGE, SWRF FLANGES', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3435, 'Flange PN 40k', 33, '<span style=\"font-size:14px;\">FLANGE PN 40K STAINLESS STEEL CLASS 150 300 600 900 1500 2500<br />\r\n<br />\r\nSIZE : 1/2&quot; (DN15) - 48&quot; (DN1200)<br />\r\nDIMENSIONS : ANSI B16.5,&nbsp; B16.47 SERIES A AND B, MSS SP44, ASA, API-605, AWWA, CUSTOM DRAWINGS<br />\r\nCLASS : 150 LBS, 300 LBS, 600 LBS, 500 LBS, 1500 LBS, 2500 LBS<br />\r\nSTANDARD : ANSI / ASME B16.5, B16.47&nbsp;SERIES A AND B, ANSI FLANGES, ASME FLANGES<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF), RAISED FACE (RF), RING TYPE JOINT (RTJ)<br />\r\nMATERIAL :&nbsp;ASTM A 182, A 240 F 304, 304L, 304H, 316, 316L, 316TI, 310, 310S, 321, 321H, 317, 347, 347H, 904L</span>', 15, 'Flange PN 40k', 1, 'FLANGE PN 40K STAINLESS STEEL CLASS 150 300 600 900 1500 2500', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3436, 'Welding Neck Flange Carbon Steel ANSI/ASME', 33, '<span style=\"font-size:14px;\"><span style=\"line-height:115%\">JUAL WELDING NECK FLANGE CARBON STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE WELDING NECK FLANGE, FLAT FACE WELDING NECK FLANGE, SERIES A AND B WELDING NECK FLANGE, WNRF FLANGES</span><br />\r\n<br />\r\nSIZE : 1/2&quot; (DN15) - 48&quot; (DN1200)<br />\r\nDIMENSIONS : ANSI B16.5,&nbsp; B16.47 SERIES A AND B, MSS SP44, ASA, API-605, AWWA, CUSTOM DRAWINGS<br />\r\nCLASS : 150 LBS, 300 LBS, 600 LBS, 500 LBS, 1500 LBS, 2500 LBS<br />\r\nSTANDARD : ANSI / ASME B16.5, B16.47&nbsp;SERIES A AND B, ANSI FLANGES, ASME FLANGES<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF), RAISED FACE (RF), RING TYPE JOINT (RTJ)<br />\r\nMATERIAL : ASTM / ASME A/SA 105, A350, A181 LF 2, LF 3,&nbsp; A516 GRADE 70, A36, A694 F42, F46, F52, F60 , F65, F706</span>', 15, 'Welding Neck Flange Carbon Steel', 1, 'JUAL WELDING NECK FLANGE CARBON STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE WELDING NECK FLANGE, FLAT FACE WELDING NECK FLANGE, SERIES A AND B WELDING NECK FLANGE, WNRF FLANGES', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3437, 'Barred Tee', 30, '<span style=\"font-size:14px;\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"line-height:115%\">JUAL BARRED TEE ASTM A403, ASTM A234<br />\r\n<span style=\"color:black\">STANDARDS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : ANSI/ASME B16.9/MSS-SP-75/MSS-SP-43/B16.49</span><br />\r\n<span style=\"color:black\">SIZE&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1/2-80-INCH (DN15 TO DN2,000)</span><br />\r\n<span style=\"color:black\">WALL THICKNESS&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : SCH5-SCHXXS</span><br />\r\n<span style=\"color:black\">STAINLESS STEEL BARRED TEE&nbsp; : ASTM A403 F304, F304L, F310, F316, F316L, F317, F317LCARBON STEEL BARRED TEE: ASTM A234 WPB, A860 WPHY 42, WPHY 46, WPHY 52, WPHY 60, WPHY 65, WPHY 70.</span><br />\r\n<span style=\"color:black\">CARBON STEEL BARRED TEE &nbsp;&nbsp;&nbsp; : ASTM A234 WPB, A860 WPHY 42, WPHY 46, WPHY 52, WPHY 60, WPHY 65, WPHY 70.</span><br />\r\n<span style=\"color:black\">LOW TEMPERATURE CARBON STEEL BARRED TEE : ASTM A420 WPL3, WPL</span></span></span></span></span>', 10, 'Barred Tee', 1, 'JUAL BARRED TEE ASTM A403, ASTM A234', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3438, 'Reducer Tee Carbon Steel', 30, '<span style=\"font-size:14px;\"><strong>JUAL REDUCER TEE CARBON STEEL<br />\r\n<br />\r\nSpecifications</strong>: ASTM / ASME A234, A420, A860, A403<br />\r\n<strong>Dimensions</strong>: ASME/ANSI B16.9, ASME B16.28, MSS-SP-43<br />\r\n<strong>Size&nbsp;</strong>:1/2&quot;-48&quot;<br />\r\n<strong>Type</strong>: Seamless / ERW / Welded / Fabricated<br />\r\n<strong>Thickness</strong>: Schedule 5S, 10S, 20S, S10, S20, S30, STD, 40S, S40, S60, XS, 80S, S80, S100, S120, S140, S160, XXS and etc.<br />\r\n<strong>Carbon Steel:</strong>&nbsp;A234 WPB, A420 WPL6, A860 WPHY 42, WPHY 46, WPHY 52, WPHY 60, WPHY 65, WPHY 70.<br />\r\n<strong>Manufacture:&nbsp;</strong>China ,Europe, Jepang, Amerika, Korea</span>', 0, 'Reducer Tee', 1, 'Jual Reducer Tee, Reducer Tee Carbon Steel', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3440, 'Safety Relief Valve', 2, '', 0, 'Safety Relief Valve', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3441, 'Butterfly Valve Wafer Cast Iron Jis Ansi Pn', 2, '<span style=\"font-size:14px;\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">JUAL&nbsp;BUTTERFLY VALVE TYPE WAFER, BUTTERFLY VALVE BRAND EVO</span></span><br />\r\n<br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">BODY MATERIAL : CAST IRON</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">DISC : SS304</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">SEAT : TEFLON</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">OPERATED : LEVER HANDLE</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">SIZE : 1 INCH - 8 INCH</span></span><br />\r\nCONNECTION : JIS, ANSI, PN<br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">BRAND : EVO CHINA</span></span></span>', 15, 'BUTTERFLY VALVE WAFERÂ EVO', 1, 'BUTTERFLY VALVE TYPE WAFER, BUTTERFLY VALVE BRAND EVO', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3442, 'Gate Valve', 2, '<span style=\"font-size:22px;\">jual&nbsp;Gate Valve</span><br />\r\n<br />\r\nMaterial :&nbsp; &nbsp;FCD450-10 (Body) CAC406(BC6) or SUS403 (Trim)<br />\r\nWorking Pressure :&nbsp; &nbsp;- 1.37Mpa Water (120Degrees C) - 1.18Mpa WOG (220Degrees C)<br />\r\nStandard : JIS', 12, 'Gate Valve', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3443, 'Pipa Welded Stainless Steel', 14, '<p><span style=\"font-size:14px;\"><strong>Diameter</strong>:&nbsp;1mm~1000mm , 1/8&quot; - 40&quot;&nbsp;<br />\r\n<strong>Wall Thickness</strong>:&nbsp;1mm~60mm (sch 5s - sch XXS)<br />\r\n<strong>Nickel Alloy </strong>:&nbsp;Monel 400, Incoloy 800H, Inconel625, Incoloy825, Hastelloy C276, Incoloy600, etc.<br />\r\n<strong>Duplex Steel</strong>: UNS S31803, S32205, S32760, S32750,SA2205,SA2507 etc<br />\r\n<strong>Stainless Steel</strong>:&nbsp;TP304/304L/316/316L/317L/347/347H/310S/310H/321/321H/904L<br />\r\n<strong>Standards </strong>:&nbsp;ASME,DIN,GOST,JIS,GB</span><br />\r\n<br />\r\n&nbsp;</p>', 0, 'Pipa Welded', 2, 'JUAL PIPA WELDED , CONNECTION PLAIN BEVELLED END', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3444, 'Gasket Non Asbestos', 11, '', 0, 'Gasket Non Asbestos', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3445, 'Spiral Wound Gasket SS304', 11, '', 0, 'Spiral Wound Gasket SS304', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3446, 'STUD BOLT AND NUT A193 GRADE B7 A194 2H CADMIUM PLATED', 10, '<span style=\"font-family:Times New Roman,Times,serif;\"><span style=\"font-size:14px;\">STUD BOLT AND 2 HEX NUT A193 GRADE B7 / A194 2H CADMIUM PLATED YANG MEMPUNYAI LAPISAN BERKUALITAS DAN BAHAN MATERIAL BERMUTU TINGGI<br />\r\nSEBAGAIMANA HALNYA PELAPISAN ZINC (SENG), STUD BOLT CADMIUM PLATED ATAU STUD BOLT PELAPISAN CADMIUM, MEMBERIKAN PERLINDUNGAN PADA BAJA DARI KOROSI KETIKA LAPISANNYA MENGALAMI KERUSAKAN PADA BAGIAN BAJA TERBUKA</span></span><br />\r\n<br />\r\n<span style=\"font-family:Times New Roman,Times,serif;\"><span style=\"font-size:14px;\">ASTM A193 MERUPAKAN STANDARD KATEGORI PADA BAUT, MUR, STUD DARI BAJA, UNTUK APLIKASI PADA FLANGE, VALVE, TANGKI DENGAN TEMPERATURE TINGGI, TEKANAN TINGGI, DAN APLIKASI SPESIAL LAINNYA<br />\r\n<br />\r\nSPECIFICATIONS&nbsp; &nbsp;: ASTM A193 / ASME SA193<br />\r\nSIZE&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : 3/6 INCH - 2 INCH<br />\r\nLENGHT&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : 3MM - 1000MM - 2000MM - 3000MM<br />\r\nMANUFACTURED : LOKAL, AMERIKA, JAPAN, INDIA, CHINA, EROPA</span></span><br />\r\n&nbsp;', 17, 'JUAL STUD BOLT AND NUT B7 / A194 2H CADMIUM PLATED', 1, 'JUAL STUD BOLT AND NUT A193 GR B7 A194 2H CADMIUM PLATED', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3447, 'Y-Srainer', 2, '', 0, 'Y-Srainer', 1, 'JUAL Y-Srainer', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3448, 'PIPA SEAMLESS CARBON STEEL ASTM A210 GRADE A1 DAN GRADE C', 14, '<p><span style=\"font-size:14px;\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">JUAL&nbsp;PIPA ASTM A210, PIPA A210, TABUNG BOILER BAJA SEAMLESS ASTM A210 ASME SA 210 GRADE A1 DAN GRADE C</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">PIPA BOILER SEAMLESS CARBON STEEL ASTM A210 GR A1 DAN GR C</span></span><br />\r\n<br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">STANDARD : ASTM SA/A210/A210M (ASME SA210/SA210M) , SEAMLESS COLD DRAWN STEEL TUBE GR.&nbsp;TABUNG BOILER BAJA, TABUNG BAJA MEDIUM-CARBON SEAMLESS DAN SUPERHEATER</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">GRADE : A 1, C</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">APLIKASI : UNTUK BOILER BERTEKANAN TINGGI, PEMANAS SUPER, PENUKAR PANAS, DLL.</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">OUT DIAMETER : 8MM - 1240MM</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">WALL THICKNESS : 0.9MM - 100MM</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">LENGHT : 1000MM - 12000MM</span></span><br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">PIPE END : PLAIN END, BEVELLED END</span></span></span></p>', 15, 'PIPA BOILER SEAMLESS ASTM A210, TABUNG BOILER A210, SUPER HEATER TUBE A210', 1, 'PIPA ASTM A210, PIPA A210, TABUNG SEAMLESS PIPA BOILER ASTM A210 SEAMLESS CARBON STEEL BOILER ASME SA210 GR A1 DAN GR C', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3450, 'Pressure Gauge', 3, '', 0, 'Pressure Gauge', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3451, 'Plate Flange JIS Stainless Steel Flange Slip On', 33, '<span style=\"font-size:14px;\">JUAL FLANGE JIS STAINLESS STEEL , FLANGE SLIP ON STAINLESS STEEL JIS B2220 - 1984 (KSB 1503-1985) CLASS 2K, 5K, 10K, 16K, 20K, 30K, 40K, 63K ,&nbsp;FLANGE JIS STAINLESS STEEL<br />\r\n<br />\r\nSIZE : 3/8&quot; (DN10) -&nbsp; 60&quot; (DN1500)<br />\r\nDIMENSIONS : DIN FLANGES JIS, BS<br />\r\nCLASS : &nbsp;2K, 5K, 10K, 16K, 20K, 30K, 40K, 63K<br />\r\nSTANDARD : JIS B2220 - 1984 (KSB 1503-1985)<br />\r\nMATERIAL :ASTM A182, 304, 304L, F316, F316L, F321, F321H, F304H, F316H, F347H, 1.4301, 1.4306, 1.4401, 1.4404, 1.4541, 1.4571, SUS304, SUS316&nbsp;<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF)</span>', 15, 'Plate Flange JIS', 2, 'JUAL FLANGE JIS STAINLESS STEEL , FLANGE SLIP ON STAINLESS STEEL JIS B2220 - 1984 (KSB 1503-1985) CLASS 2K, 5K, 10K, 16K, 20K, 30K, 40K, 63K', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3452, 'Check Valve', 2, '<h1><span style=\"color:#000000;\"><strong><span style=\"font-size:22px;\">JUAL CHECK VALVE</span></strong></span></h1>\r\nSize&nbsp; : 1/2&rdquo; to 12&rdquo;<br />\r\n<br />\r\nPressure Rating : Class 150 - 1.500#<br />\r\n<br />\r\nFace to face : According ASME B16.10/API 6D<br />\r\n<br />\r\nConnection : FF, RF, RTJ, SW, BW', 0, 'Check Valve', 1, 'JUAL CHECK VALVE', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3453, 'Elbow 45 90 180 deg Carbon Steel', 30, '<span style=\"font-size:14px;\"><strong>Jual&nbsp;Elbow 45 deg&nbsp;,&nbsp;Elbow 90 deg ,&nbsp;Elbow 180 deg Carbon Steel<br />\r\n<br />\r\nSpecifications</strong>: ASTM / ASME A234, A420, A860, A403<br />\r\n<strong>Dimensions</strong>: ASME/ANSI B16.9, ASME B16.28, MSS-SP-43<br />\r\n<strong>Size</strong>: Seamless Elbow ( 1/2&Prime;ï½ž24&Prime;), ERW / Welded / Fabricated Elbow (1/2&Prime;ï½ž48&Prime;)<br />\r\n<strong>Type</strong>: Seamless / ERW / Welded / Fabricated<br />\r\n<strong>Thickness</strong>: Schedule 5S, 10S, 20S, S10, S20, S30, STD, 40S, S40, S60, XS, 80S, S80, S100, S120, S140, S160, XXS and etc.<br />\r\n<strong>Form</strong>: 45&deg;, 90&deg;,&nbsp;180&deg; LR ,&nbsp; 90&deg;, 180&deg; SR<br />\r\n<strong>Carbon Steel:</strong> A234 WPB, A420 WPL6, A860 WPHY 42, WPHY 46, WPHY 52, WPHY 60, WPHY 65, WPHY 70.<br />\r\n<strong>Manufacture: </strong>China ,Europe, Jepang, Amerika, Korea</span>', 0, 'Elbow 45 90 180 DEG', 1, 'Jual sambungan pipa besi  elbow 45 deg , elbow 90 deg , elbow 180 deg dengan kualitas terbaik ,', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3454, 'Blind Flange Stainless Steel ANSI/ASME', 33, '<span style=\"font-size:14px;\"><span style=\"line-height:115%\"><span style=\"line-height:115%\">JUAL BLIND FLANGE STAINLESS STEEL&nbsp;CLASS 150 300 600 900 1500 2500,&nbsp;</span>RAISED FACE BLIND FLANGE, FLAT FACE BLIND FLANGE, SERIES A AND B BLIND FLANGE, BLRF FLANGES</span><br />\r\n<br />\r\nSIZE : 1/2&quot; (DN15) - 48&quot; (DN1200)<br />\r\nDIMENSIONS : ANSI B16.5,&nbsp; B16.47 SERIES A AND B, MSS SP44, ASA, API-605, AWWA, CUSTOM DRAWINGS<br />\r\nCLASS : 150 LBS, 300 LBS, 600 LBS, 500 LBS, 1500 LBS, 2500 LBS<br />\r\nSTANDARD : ANSI / ASME B16.5, B16.47&nbsp;SERIES A AND B, ANSI FLANGES, ASME FLANGES<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF), RAISED FACE (RF), RING TYPE JOINT (RTJ)<br />\r\nMATERIAL :&nbsp;ASTM A 182, A 240 F 304, 304L, 304H, 316, 316L, 316Ti, 310, 310S, 321, 321H, 317, 347, 347H, 904L</span>', 15, 'Blind Flange Stainless Steel', 2, 'JUAL BLIND FLANGE STAINLESS STEELÂ CLASS 150 300 600 900 1500 2500,Â RAISED FACE BLIND FLANGE, FLAT FACE BLIND FLANGE, SERIES A AND B BLIND FLANGE, BLRF FLANGES', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3455, 'Gasket ss316', 11, '', 0, 'Gasket ss316', 1, 'Gasket SS316, Gasket Stainless Steel 316', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3456, 'Weldolet SS304', 30, '', 0, 'Weldolet SS304', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3457, 'Reducer SCH20 and SCH40', 30, '', 0, 'Reducer SCH20 and SCH40', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3458, 'Ring Joint R53 Oval SS316', 30, '', 13, 'Ring Joint R53 Oval SS316', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3460, 'Pipa Stainless Steel Seamless And Welded ASTM A312', 14, '<span style=\"font-size:14px;\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"line-height:115%\"><span calibri=\"\">JUAL&nbsp;PIPA ASTM A312, SA312 STAINLESS STEEL WELDED PIPE, STAINLESS STEEL SEAMLESS PIPE A312, STAINLESS PIPE A312,&nbsp;<br />\r\n<br />\r\nSTANDARD : ASTM A312 / ASME SA312<br />\r\nGRADE : 304/L/H/LN, 316/L/H/LN/Ti/LUG, 309S/H, 310S/L/H, 317/L/LMN, 321/H, 347H/HFG TP304/304L, TP321/321H, TP316/316L, TP317/317L, TP317LMN, TP347/347H, TP 309S, TP310S/310H, TP 316L UG</span></span></span></span><br />\r\nTHICKESS : SCH5, SCH10, SCH10S, SCH20, SCH30, SCH40, SCH40S, STD, SCH80, XS, SCH60, SCH80, SCH120, SCH140, SCH160, XXS<br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"line-height:115%\"><span calibri=\"\">SIZE : 1/4&quot; - 36&quot;</span></span></span></span><br />\r\nLENGTH : 6M - 12M<br />\r\n<span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"line-height:115%\">MANUFACTURE&nbsp; : CHINA , JEPANG , KOREA , AMERIKA , EROPA</span></span></span></span>', 15, 'Pipa Stainless Steel 304', 2, 'PIPA ASTM A312, SA312 STAINLESS STEEL WELDED PIPE, STAINLESS STEEL SEAMLESS PIPE A312, STAINLESS PIPE SS304,', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3461, 'Plate A283 Grade C', 5, '', 0, 'Plate A283 Grade C', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3462, 'Flange PVC', 33, '', 15, 'Flange PVC', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3463, 'Safety Shoes', 13, '', 0, 'Safety Shoes', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3464, 'Safety Helmet', 13, '', 0, 'Safety Helmet', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3465, 'Safety Gloves', 13, '', 0, 'Safety Gloves', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3466, 'Rompi Safety', 13, '', 0, 'Rompi Safety', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3467, 'Perlengkapan Marka Jalan', 13, '', 0, 'Perlengkapan Marka Jalan', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3468, 'Safety Belt', 13, '', 0, 'Safety Belt', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3469, 'Tabung Pemadam APAR', 13, '', 0, 'Tabung Pemadam APAR', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3470, 'Spectacle Blind Flange Stainless Steel ANSI/ASME', 33, '<span style=\"font-size:14px;\">JUAL SPECTACLE BLIND FLANGES STAINLES STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE SPECTACLE BLIND FLANGES, FLAT FACE SPECTACLE BLIND FLANGES, SERIES A AND B SPECTACLE BLIND FLANGES<br />\r\n<br />\r\nSIZE : 1/2&quot; (DN15) - 48&quot; (DN1200)<br />\r\nDIMENSIONS : ANSI B16.5,&nbsp; B16.47 SERIES A AND B, MSS SP44, ASA, API-605, AWWA, CUSTOM DRAWINGS<br />\r\nCLASS : 150 LBS, 300 LBS, 600 LBS, 500 LBS, 1500 LBS, 2500 LBS<br />\r\nSTANDARD : ANSI / ASME B16.5, B16.47&nbsp;SERIES A AND B, ANSI FLANGES, ASME FLANGES<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF), RAISED FACE (RF), RING TYPE JOINT (RTJ)<br />\r\nMATERIAL :&nbsp;ASTM A 182, A 240 F 304, 304L, 304H, 316, 316L, 316TI, 310, 310S, 321, 321H, 317, 347, 347H, 904L</span>', 15, 'Spactacle Blind Flange', 2, 'JUAL SPECTACLE BLIND FLANGES STAINLES STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE SPECTACLE BLIND FLANGES, FLAT FACE SPECTACLE BLIND FLANGES, SERIES A AND B SPECTACLE BLIND FLANGES', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3471, 'Pressure Reducing Valve (PRV)', 2, '', 0, 'Pressure Reducing Valve', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3472, 'Diaphragm Valve', 2, '<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-size:12.0pt\"><span style=\"line-height:115%\"><span style=\"font-size:22px;\">jual&nbsp;Diaphragm Valve</span><br />\r\n<br />\r\n<br />\r\nSize : 15 mm to 300 mm</span></span></span></span></span><br />\r\n<br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-size:12.0pt\"><span style=\"line-height:115%\">Design Standard : BS EN 13397 : 2002 (BS 5156)</span></span></span></span></span><br />\r\n<br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-size:12.0pt\"><span style=\"line-height:115%\">Testing Standard : BS EN 12266-1 (BS 6755 Part 1)</span></span></span></span></span><br />\r\n<br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-size:12.0pt\"><span style=\"line-height:115%\">Material of Construction : Cast Iron (IS 210 Gr. FG 200/220/260) , Cast Carbon Steel (ASTM A 216 Gr. WCB) , Cast Stainless Steel &ndash; SS 304 / SS 304L&nbsp; (ASTM A 351 Gr.CF8 / CF3) , Cast Stainless Steel &ndash; SS 316 / SS 316L (ASTM A 351 Gr. CF 8M / CF3M)</span></span></span></span></span><br />\r\n<br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-size:12.0pt\"><span style=\"line-height:115%\">Body Rubber&nbsp; / Plastic or Fluoropolymer Lining : Hard Rubber (Ebonite), Natural, Neoprene, Hypalon, Butyl, EPDM</span></span></span></span></span><br />\r\n<br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-size:12.0pt\"><span style=\"line-height:115%\">&nbsp;Diaphragms : Natural , Neoprene , Hypalon , Butyl , EPDM , Silicone</span></span></span></span></span><br />\r\n<br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-size:12.0pt\"><span style=\"line-height:115%\">Stem or Spindle : AISI 410 / 304 / 316</span></span></span></span></span><br />\r\n<br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-size:12.0pt\"><span style=\"line-height:115%\">End Connections : BS -10 Table (D, E, &amp; F) , DIN ND 10 &amp; 16, ANSI B 16.5 Class 125 &amp; 150.</span></span></span></span></span>', 0, 'Diaphragm Valve', 1, 'Diaphragm Valve , Diaphragm Valve Carbon Steel ASTM 216, Diaphragm Valve SS304', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3473, 'Stud Bolt And Nut A193', 10, '<span style=\"font-size:14px;\">STUD BOLT AND 2 HEX NUT A193 GRADE B7 / A194 2H , STUD BOLT A193<br />\r\nASTM A193 MERUPAKAN STANDARD KATEGORI PADA BAUT, MUR, STUD DARI BAJA, UNTUK APLIKASI PADA FLANGE, VALVE, TANGKI DENGAN TEMPERATURE TINGGI, TEKANAN TINGGI, DAN APLIKASI SPESIAL LAINNYA<br />\r\nSPECIFICATIONS&nbsp; &nbsp;: ASTM A193 / ASME SA193<br />\r\nSIZE&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : 3/6 INCH - 2 INCH<br />\r\nLENGHT&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : 3MM - 1000MM - 2000MM - 3000MM<br />\r\nMANUFACTURED : LOKAL, AMERIKA, JAPAN, INDIA, CHINA, EROPA</span><br />\r\n&nbsp;', 17, 'Jual Stud Bolt And Nut A193 Grade B7 A194 2H', 1, 'JUAL STUD BOLT A193,  STUD BOLT AND NUT A193 GR B7 A194 2H BOLT AND NUT B7 - 2H', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3474, 'Flange Slip On Carbon Steel ANSI/ASME', 33, '<span style=\"font-size:14px;\"><span style=\"line-height:115%\"><span style=\"line-height:115%\">JUAL&nbsp;SLIP ON FLANGE CARBON STEEL CLASS&nbsp;150 300 600 900 1500 2500, RAISED FACE SLIP ON FLANGE, FLAT FACE SLIP ON FLANGE, SERIES A AND B SLIP ON FLANGE, SORF FLANGES</span></span><br />\r\n<br />\r\nSIZE : 1/2&quot; (DN15) - 48&quot; (DN1200)<br />\r\nDIMENSIONS : ANSI B16.5,&nbsp; B16.47 SERIES A AND B, MSS SP44, ASA, API-605, AWWA, CUSTOM DRAWINGS<br />\r\nCLASS : 150 LBS, 300 LBS, 600 LBS, 500 LBS, 1500 LBS, 2500 LBS<br />\r\nSTANDARD : ANSI / ASME B16.5, B16.47&nbsp;SERIES A AND B, ANSI FLANGES, ASME FLANGES<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF), RAISED FACE (RF), RING TYPE JOINT (RTJ)<br />\r\nMATERIAL : ASTM / ASME A/SA 105, A350, A181 LF 2, LF 3,&nbsp; A516 GRADE 70, A36, A694 F42, F46, F52, F60 , F65, F706</span>', 15, 'Flange Slip On Carbon Steel', 1, 'JUAL SLIP ON FLANGE CARBON STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE SLIP ON FLANGE, FLAT FACE SLIP ON FLANGE, SERIES A AND B SLIP ON FLANGE, SORF FLANGES', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3475, 'BLIND FLANGE CARBON STEEL ANSI/ASME', 33, '<span style=\"font-family:Times New Roman,Times,serif;\"><span style=\"font-size:14px;\">JUAL <span style=\"line-height:115%\"><span style=\"line-height:115%\">BLIND FLANGE CARBON STEEL CLASS&nbsp;</span></span>150 300 600 900 1500 2500, RAISED FACE BLIND FLANGE, FLAT FACE BLIND FLANGE, SERIES A AND B BLIND FLANGE, BLRF FLANGES<br />\r\n<br />\r\nSIZE : 1/2&quot; (DN15) - 48&quot; (DN1200)<br />\r\nDIMENSIONS : ANSI B16.5,&nbsp; B16.47 SERIES A AND B, MSS SP44, ASA, API-605, AWWA, CUSTOM DRAWINGS<br />\r\nCLASS : 150 LBS, 300 LBS, 600 LBS, 500 LBS, 1500 LBS, 2500 LBS<br />\r\nSTANDARD : ANSI / ASME B16.5, B16.47&nbsp;SERIES A AND B, ANSI FLANGES, ASME FLANGES<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF), RAISED FACE (RF), RING TYPE JOINT (RTJ)<br />\r\nMATERIAL : ASTM / ASME A/SA 105, A350, A181 LF 2, LF 3,&nbsp; A516 GRADE 70, A36, A694 F42, F46, F52, F60 , F65, F706</span></span>', 15, 'Blind Flange Carbon Steel ANSI ASME', 1, 'JUAL Blind Flange Carbon Steel Class 150 300 600 900 1500 2500, RAISED FACE BLIND FLANGE, FLAT FACE BLIND FLANGE, SERIES A AND B BLIND FLANGE, BLRF FLANGES', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3476, 'Socket Weld Flange Carbon Steel ANSI/ASME', 33, '<span style=\"font-size:14px;\"><span style=\"line-height:115%\">JUAL SOCKET WELD FLANGE CARBON STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE SOCKET WELD FLANGE, FLAT FACE SOCKET WELD FLANGE, SERIES A AND B SOCKET WELD FLANGE, SWRF FLANGES</span><br />\r\n<br />\r\nSIZE : 1/2&quot; (DN15) - 48&quot; (DN1200)<br />\r\nDIMENSIONS : ANSI B16.5,&nbsp; B16.47 SERIES A AND B, MSS SP44, ASA, API-605, AWWA, CUSTOM DRAWINGS<br />\r\nCLASS : 150 LBS, 300 LBS, 600 LBS, 500 LBS, 1500 LBS, 2500 LBS<br />\r\nSTANDARD : ANSI / ASME B16.5, B16.47&nbsp;SERIES A AND B, ANSI FLANGES, ASME FLANGES<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF), RAISED FACE (RF), RING TYPE JOINT (RTJ)<br />\r\nMATERIAL : ASTM / ASME A/SA 105, A350, A181 LF 2, LF 3,&nbsp; A516 GRADE 70, A36, A694 F42, F46, F52, F60 , F65, F706</span>', 15, 'Socket Weld Flange', 1, 'JUAL SOCKET WELD FLANGE CARBON STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE SOCKET WELD FLANGE, FLAT FACE SOCKET WELD FLANGE, SERIES A AND B SOCKET WELD FLANGE, SWRF FLANGES', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3477, 'Flange Slip On Stainless Steel ANSI/ASME', 33, '<span style=\"font-size:14px;\">JUAL SLIP ON FLANGE STAINLESS STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE SLIP ON FLANGE, FLAT FACE SLIP ON FLANGE, SERIES A AND B SLIP ON FLANGE, SORF FLANGES<br />\r\n<br />\r\nSIZE : 1/2&quot; (DN15) - 48&quot; (DN1200)<br />\r\nDIMENSIONS : ANSI B16.5,&nbsp; B16.47 SERIES A AND B, MSS SP44, ASA, API-605, AWWA, CUSTOM DRAWINGS<br />\r\nCLASS : 150 LBS, 300 LBS, 600 LBS, 500 LBS, 1500 LBS, 2500 LBS<br />\r\nSTANDARD : ANSI / ASME B16.5, B16.47&nbsp;SERIES A AND B, ANSI FLANGES, ASME FLANGES<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF), RAISED FACE (RF), RING TYPE JOINT (RTJ)<br />\r\nMATERIAL : ASTM A 182, A 240 F 304, 304L, 304H, 316, 316L, 316Ti, 310, 310S, 321, 321H, 317, 347, 347H, 904L</span>', 15, 'Flange Slip On Stainless Steel', 2, 'JUAL SLIP ON FLANGE STAINLESS STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE SLIP ON FLANGE, FLAT FACE SLIP ON FLANGE, SERIES A AND B SLIP ON FLANGE, SORF FLANGES', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3478, 'Flange Welding Neck Stainless Steel ANSI/ASME', 33, '<span style=\"font-size:14px;\">JUAL WELDING NECK FLANGE STAINLESS STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE WELDING NECK FLANGE, FLAT FACE WELDING NECK FLANGE, SERIES A AND B WELDING NECK FLANGE, WNRF FLANGES<br />\r\n<br />\r\nSIZE : 1/2&quot; (DN15) - 48&quot; (DN1200)<br />\r\nDIMENSIONS : ANSI B16.5,&nbsp; B16.47 SERIES A AND B, MSS SP44, ASA, API-605, AWWA, CUSTOM DRAWINGS<br />\r\nCLASS : 150 LBS, 300 LBS, 600 LBS, 500 LBS, 1500 LBS, 2500 LBS<br />\r\nSTANDARD : ANSI / ASME B16.5, B16.47&nbsp;SERIES A AND B, ANSI FLANGES, ASME FLANGES<br />\r\nMANUFACTURER : CHINA, INDIA, JEPANG, KOREA, EROPA, AMERIKA<br />\r\nTYPE : FLAT FACE (FF), RAISED FACE (RF), RING TYPE JOINT (RTJ)<br />\r\nMATERIAL :&nbsp;ASTM A 182, A 240 F 304, 304L, 304H, 316, 316L, 316TI, 310, 310S, 321, 321H, 317, 347, 347H, 904L</span>', 15, 'Flange Welding Neck', 2, 'JUAL WELDING NECK FLANGE STAINLESS STEEL CLASS 150 300 600 900 1500 2500, RAISED FACE WELDING NECK FLANGE, FLAT FACE WELDING NECK FLANGE, SERIES A AND B WELDING NECK FLANGE, WNRF FLANGES', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3479, 'Flexible Rubber Joint', 12, '<h1>Flexible Rubber Joint</h1>', 6, 'Flexible Rubber Joint', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3480, 'Angle Valve', 2, 'jual&nbsp;Angle Valve&nbsp;<br />\r\n<br />\r\nstandard :&nbsp;ASTM A216 Gr. WCB/ A352 LCB / A217 WC6 / A351 CF8 / A351 CF8M/ A351 CF3 / A351 CF3M<br />\r\n<br />\r\n<br />\r\n&nbsp;', 0, 'Angle Valve', 1, 'Angle Valve, Angele Valve ASTM A216', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3481, 'Ball Valve ANSI 150 A216 WCB Flange RF Carbon Steel', 2, '<span style=\"font-size:14px;\">JUAL&nbsp;BALL&nbsp; VALVE&nbsp; ANSI 150&nbsp;&nbsp;A216 WCB FLANGE RF CARBON STEEL<br />\r\n<br />\r\nSIZE : 1/2&quot; - 24&quot; or Custom 26&quot; - 48&quot;<br />\r\nMATERIAL BODY : A216 WCB CARBON STEEL<br />\r\nCONNECTION : FLANGE RF</span>', 15, 'Ball Valve', 1, 'BALL VALVE  ANSI 150  A216 WCB FLANGE RF CARBON STEEL', 'ball vave a216 wcb carbon steel', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3482, 'Manifold Threeway', 4, '', 0, 'Manifold Threeway', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3483, 'Needle Valve', 4, '', 0, 'Needle Valve', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3484, 'Red Double Neeple', 4, '', 0, 'Red Double Neeple', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3486, 'Elbow 45, 90, 180 deg stainless steel', 30, '<span style=\"font-size:14px;\">JUAL&nbsp;&nbsp;ELBOW 45, 90, 180 DEG STAINLESS STEEL<br />\r\n<br />\r\nType : SR,LR<br />\r\nSize :1/2&quot;-48&quot;<br />\r\nWT :&nbsp;SCH5S - SCHXXS<br />\r\nRadius :&nbsp;1.0D,1.5D, etc.<br />\r\nMaterial :&nbsp;Stainless Steel 304 / 316<br />\r\nNickel Alloy :&nbsp;Monel 400, Incoloy 800HT, Inconel625, Incoloy825, Hastelloy C276, Incoloy600, etc.<br />\r\nDuplex Steel: UNS S31803, S32205, S32760, S32750, etc<br />\r\nStainless Steel :&nbsp;TP304/304L, TP316/316L, TP347/347H, TP321/321H, 904L, 317L, 310S, etc.<br />\r\nStandards :&nbsp;ASME B16.9,MSS SP-43, DIN 2605/JIS B2313, B/T12459, GB/T13401, SH3408/SH3409, HG/T21635, HG/T21631.<br />\r\nManufacture :&nbsp;Europe,China, Jepang, Amerika, Korea</span>', 0, 'Elbow 45, 90, 180 deg stainless steel', 2, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3487, 'Bend', 30, '<span style=\"font-size:14px;\">jual fitting bend<br />\r\n<br />\r\nType : 2D, 3D, 5D, 10D, etc<br />\r\nSize :1/2&quot;-48&quot;<br />\r\nWT :&nbsp;SCH5S - SCHXXS<br />\r\nMaterial :&nbsp;<br />\r\nNickel Alloy :&nbsp;Monel 400, Incoloy 800HT, Inconel625, Incoloy825, Hastelloy C276, Incoloy600, etc.<br />\r\nDuplex Steel:&nbsp;UNS S31803, S32205, S32760, S32750, etc<br />\r\nStainless Steel :&nbsp;TP304/304L, TP316/316L, TP347/347H, TP321/321H, 904L, 317L, 310S, etc.<br />\r\nStandards :&nbsp;ASME B16.9,MSS SP-43, DIN 2605/JIS B2313, B/T12459, GB/T13401, SH3408/SH3409, HG/T21635, HG/T21631<br />\r\nManufacture:&nbsp;China ,Europe, Jepang, Amerika, Korea</span>', 0, 'Fitting Bend', 1, 'jual fitting bendÂ , bend', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3488, 'Lap Joint Stub End Stainless Steel', 30, '<span style=\"font-size:14px;\">JUAL&nbsp;LAP JOINT STUB END STAINLESS STEEL<br />\r\n<br />\r\nTypeï¼šLong Stub Endï¼ŒShort Stub End<br />\r\nSize : 1/2&quot;-24&quot;<br />\r\nWT :&nbsp;SCH5S - SCHXXS<br />\r\nMaterial :&nbsp;<br />\r\nNickel Alloy :&nbsp;Monel 400, Incoloy 800HT, Inconel625, Incoloy825, Hastelloy C276, Incoloy600, etc.<br />\r\nDuplex Steel: UNS S31803, S32205, S32760, S32750, etc<br />\r\nStainless Steel :&nbsp;TP304/304L, TP316/316L, TP347/347H, TP321/321H, 904L, 317L, 310S, etc.<br />\r\nStandards :&nbsp;ASME B16.9,MSS SP-43, DIN 2605/JIS B2313, B/T12459, GB/T13401, SH3408/SH3409, HG/T21635, HG/T21631.<br />\r\nManufacture:&nbsp;China ,Europe, Jepang, Amerika, Korea</span><br />\r\n&nbsp;', 0, 'Lap Joint Stub End Stainless Steel', 2, 'LAP LAP JOINT , JOINT STUB END', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3490, 'Reducer', 30, '<span style=\"font-size:14px;\">JUAL REDUCER FITTING<br />\r\n<br />\r\nSize : 1/2&quot;-48&quot;<br />\r\nWT :&nbsp;SCH5S - SCHXXS<br />\r\nMaterial :&nbsp;<br />\r\nNickel Alloy :&nbsp;Monel 400, Incoloy 800HT, Inconel625, Incoloy825, Hastelloy C276, Incoloy600, etc.<br />\r\nDuplex Steel&nbsp;: UNS S31803, S32205, S32760, S32750, etc<br />\r\nStainless Steel :&nbsp;TP304/304L, TP316/316L, TP347/347H, TP321/321H, 904L, 317L, 310S, etc.<br />\r\nStandards :&nbsp;ASME B16.9,MSS SP-43, DIN 2605/JIS B2313, B/T12459, GB/T13401, SH3408/SH3409, HG/T21635, HG/T21631<br />\r\nManufacture:&nbsp;China ,Europe, Jepang, Amerika, Korea</span>', 0, 'Reducer', 1, '', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3491, 'Cap', 30, '<span style=\"font-size:14px;\">Size : 1/2&quot;-24&quot;<br />\r\nWT :&nbsp;SCH5S - SCHXXS<br />\r\nNickel Alloy :&nbsp;Monel 400, Incoloy 800HT, Inconel625, Incoloy825, Hastelloy C276, Incoloy600, etc.<br />\r\nDuplex Steel: UNS S31803, S32205, S32760, S32750, etc<br />\r\nStainless Steel :&nbsp;TP304/304L, TP316/316L, TP347/347H, TP321/321H, 904L, 317L, 310S, etc.<br />\r\nStandards :&nbsp;ASME B16.9,MSS SP-43, DIN 2605/JIS B2313, B/T12459, GB/T13401, SH3408/SH3409, HG/T21635, HG/T21631.<br />\r\nManufacture:&nbsp;China ,Europe, Jepang, Amerika, Korea</span><br />\r\n&nbsp;', 0, 'Cap', 1, 'JUAL FITTING CAP SS304 SS316', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3492, 'Hex Plug Threaded Screw Stainless Steel', 36, '<span style=\"font-size:14px;\">JUAL FORGED THREADED HEX PLUG, ASTM A182 SS THREADED HEX PLUG, SCREWED HEX PLUG STAINLESS STEEL CLASS 3000 LBS, 6000 LBS, 9000 LBS<br />\r\n<br />\r\nSTANDARD :&nbsp; ASME B16.11 , MSS SP-79, MSS SP-95, 83, 95, 97, BS3799<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;DIN 2065, DIN 2615, DIN 2616, DIN 2617, DIN 28011<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;EN 10253-1, EN 10253-2<br />\r\nSIZE : 1/8 INCH TO 4 INCH<br />\r\nPRESSURE CLASS : 3000 LBS, 6000 LBS, 9000 LBS<br />\r\nCONNECTION : THREADED, SCREW, NPT, BSP, BSPT<br />\r\nGRADE : ASTM /&nbsp; ASME A/SA182-F304 / L, 304H, 309S, 309H, 310S, 310H, 316, 316H, 316L, 316LN, 317, 317L, 321, 321H, 347, 347H, 904L<br />\r\nMANUFACTURED : TAIWAN, EROPA, AMERIKA, JEPANG, KOREA</span>', 19, 'Hexagon Plug', 2, 'FORGED THREADED HEX PLUG, ASTM A182 SS THREADED HEX PLUG, SCREWED HEX PLUG STAINLESS STEEL CLASS 3000 LBS, 6000 LBS, 9000 LBS', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3493, 'Equal Tee Buttweld Stainless Steel', 30, '<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-size:10.5pt\"><span style=\"line-height:115%\">JUAL&nbsp;</span></span>STAINLESS STEEL BUTTWELD EQUAL TEE, BUTTWELD EQUAL TEES, SEAMLESS WELDED BUTTWELD EQUAL TEE STAINLESS STEEL</span></span></span><br />\r\n<br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">STANDARD : ASME/ANSI B16.9, ASME B16.28, MSS-SP-43</span></span></span><br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">GRADE : ASTM A403 WP316/316L, ASTM A403 SA/A774, WP-S, WP-W, WP-WX 304/304L, ASTM A182 F316L, 304L, DIN 1.4301, DIN 1.4306, DIN 1.4401, DIN 1.4404</span></span></span><br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">SIZE&nbsp; : 1/2 INCH &ndash; 48 INCH</span></span></span><br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">TYPE : SEAMLESS, ERW, WELDED</span></span></span><br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">THICKNESS : SCHEDULE 5S, 10S, 20S, S20, S30, STD, 40S, S40, S60, XS, 80S, S100, S120, S140, S160, XXS</span></span></span><br />\r\n<span style=\"font-size:11pt\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\">MANUFACTURED : CHINA, JEPANG, KOREA, EROPA, AMERIKA, INDIA</span></span></span>', 15, 'Equal Tee Butt weld Stainless Steel', 2, 'STAINLESS STEEL BUTTWELD EQUAL TEE, BUTTWELD EQUAL TEES, SEAMLESS WELDED BUTTWELD EQUAL TEE STAINLESS STEEL', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3494, 'Reducer Tee Buttweld Stainless Steel', 30, '<span style=\"font-size:14px;\">JUAL&nbsp;STAINLESS STEEL BUTTWELD REDUCER TEE, BUTTWELD REDUCER&nbsp;TEES, SEAMLESS WELDED BUTTWELD REDUCER TEE STAINLESS STEEL<br />\r\n<br />\r\nSTANDARD : ASME/ANSI B16.9, ASME B16.28, MSS-SP-43<br />\r\nGRADE : ASTM A403 WP316/316L, ASTM A403 SA/A774, WP-S, WP-W, WP-WX 304/304L, ASTM A182 F316L, 304L, DIN 1.4301, DIN 1.4306, DIN 1.4401, DIN 1.4404<br />\r\nSIZE&nbsp; : 3 1/4 inch x 1/2 TO 32x30 inch<br />\r\nTYPE : SEAMLESS, ERW, WELDED<br />\r\nTHICKNESS : SCHEDULE 5S, 10S, 20S, S20, S30, STD, 40S, S40, S60, XS, 80S, S100, S120, S140, S160, XXS<br />\r\nMANUFACTURED : CHINA, JEPANG, KOREA, EROPA, AMERIKA, INDIA</span>', 15, 'Reducer Tee Stainless Steel', 2, 'STAINLESS STEEL BUTTWELD REDUCER TEE, BUTTWELD REDUCER TEES, SEAMLESS WELDED BUTTWELD REDUCER TEE STAINLESS STEEL', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3495, 'Reducer Concentric, Eccentric', 30, '<span style=\"font-size:14px;\"><span style=\"line-height:115%\"><span style=\"font-family:Calibri,sans-serif\"><strong><span style=\"line-height:115%\"><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">JUAL&nbsp;REDUCER CONCENTRIC,REDUCER ECCENTRIC</span></span></span></strong><br />\r\n<br />\r\n<strong><span style=\"line-height:115%\"><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">SIZE</span></span></span></strong><strong> </strong><span style=\"line-height:115%\">: 1/2&quot;-48&quot;<br />\r\n<strong><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">WALL THICKNESS</span></span></strong><strong> </strong>:&nbsp;SCH5S - SCHXXS<br />\r\n<strong><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">NICKEL</span></span></strong><strong> </strong><strong><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">ALLOY</span></span></strong> :&nbsp;&nbsp;MONEL 400, INCOLOY 800HT, INCONEL625, INCOLOY825, HASTELLOY C276, INCOLOY600, ETC.<br />\r\n<strong><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">DUPLEX</span></span></strong><strong> </strong><strong><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">STEEL</span></span></strong>: UNS S31803, S32205, S32760, S32750, ETC<br />\r\n<strong><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">STAINLESS</span></span></strong><strong> </strong><strong><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">STEEL</span></span></strong> :&nbsp;TP304/304L, TP316/316L, TP347/347H, TP321/321H, 904L, 317L, 310S, ETC.<br />\r\n<strong><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">STANDARDS</span></span></strong><strong> </strong>:&nbsp;ASME B16.9,MSS SP-43, DIN 2605/JIS B2313, B/T12459, GB/T13401, SH3408/SH3409, HG/T21635, HG/T21631.<br />\r\n<strong><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\"><span style=\"font-weight:normal\">MANUFACTURE</span></span></strong><strong><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\">:&nbsp;</span></strong>CHINA ,EUROPE, JEPANG, AMERIKA, KOREA</span></span></span></span><br />\r\n&nbsp;', 0, 'Reducer Concentric, Eccentric', 1, 'Reducer Concentric,Reducer Eccentric', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230521075120-create-book.js'),
('20230615154538-create-user.js'),
('20230615154654-create-profile.js'),
('20230618085803-modify_profile.js'),
('20230618090034-modify_profile.js'),
('20230618090049-modify_profile.js'),
('20230618090115-modify_profile.js'),
('20230618090227-create_profile.js'),
('20230618091113-create_profile.js'),
('20230619144201-create-product.js'),
('20230619145158-create-categorie.js'),
('20230619145231-create-brand.js'),
('20230619150253-create-type.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `types`
--

INSERT INTO `types` (`id`, `name`, `published`, `createdAt`, `updatedAt`) VALUES
(1, 'carbon steel', 1, '2023-06-19 22:32:45', '2023-06-19 22:32:45'),
(2, 'stainless steel', 1, '2023-06-19 22:32:45', '2023-06-19 22:32:45'),
(3, 'alloy steel', 1, '2023-06-19 22:32:45', '2023-06-19 22:32:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(2, 'admin', 'admin@mail.com', '$2a$10$6m23G7Qz6.kgstvIRgmUn.hECr1ojakULpALQwAbx.DI8yaW/lS86', '2023-06-21 16:43:08', '2023-06-21 16:43:08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `verification_tokens`
--

CREATE TABLE `verification_tokens` (
  `token` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `expires` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categorieId` (`categorieId`),
  ADD KEY `typeId` (`typeId`),
  ADD KEY `brandId` (`brandId`);

--
-- Indeks untuk tabel `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `verification_tokens`
--
ALTER TABLE `verification_tokens`
  ADD PRIMARY KEY (`token`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3496;

--
-- AUTO_INCREMENT untuk tabel `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categorieId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`typeId`) REFERENCES `types` (`id`);

--
-- Ketidakleluasaan untuk tabel `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
