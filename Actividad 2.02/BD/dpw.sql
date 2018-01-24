-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 16-02-2011 a las 23:21:41
-- Versión del servidor: 5.1.53
-- Versión de PHP: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `dpw`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `baloncesto`
--

CREATE TABLE IF NOT EXISTS `baloncesto` (
  `nombre` varchar(20) NOT NULL,
  `anio` varchar(4) NOT NULL,
  `campeonatos` int(11) NOT NULL,
  PRIMARY KEY (`nombre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `baloncesto`
--

INSERT INTO `baloncesto` (`nombre`, `anio`, `campeonatos`) VALUES
('Lakers', '1950', 15),
('Trotamundos', '1942', 24),
('USA', '1890', 35),
('Eslovenia', '1967', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `balonmano`
--

CREATE TABLE IF NOT EXISTS `balonmano` (
  `nombre` varchar(20) NOT NULL,
  `anio` varchar(4) NOT NULL,
  `campeonatos` int(11) NOT NULL,
  PRIMARY KEY (`nombre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `balonmano`
--

INSERT INTO `balonmano` (`nombre`, `anio`, `campeonatos`) VALUES
('Guayas', '1980', 10),
('Chile', '1970', 12),
('Argentina', '1970', 25),
('Brasil', '1969', 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `futbol`
--

CREATE TABLE IF NOT EXISTS `futbol` (
  `nombre` varchar(20) NOT NULL,
  `anio` varchar(4) NOT NULL,
  `campeonatos` int(11) NOT NULL,
  PRIMARY KEY (`nombre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `futbol`
--

INSERT INTO `futbol` (`nombre`, `anio`, `campeonatos`) VALUES
('Barcelona', '1912', 20),
('Madrid', '1910', 20),
('Inter', '1920', 17),
('Liverpool', '1921', 18);
