<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Ejercicio BD-PHP</title>

<link rel="stylesheet" href="deporte.css" type="text/css" />
</head>

<body>
<?php
if(isset($_REQUEST['Cargar'])){
	print("Has pulsado el boton");
	
	$enlace = mysqli_connect('localhost','root','');
	
	if(!enlace){
	die('No pudo conectarse: '.mysqli_error());
	}
	
	echo '</br>Conectado satisfactoriamente';
	mysqli_select_db($enlace,'dpw') or die('No se pudo seleccionar la BD');
	
	mysqli_close($enlace);
}

?>

<div id="seleccion">
<h3>Seleccione que tabla desea cargar.</h3>
<form  name="seleccion" method="POST" action="deporte.php">
<select name="tabla">
<option>Futbol</option>
<option>Baloncesto</option>
<option>Balonmano</option>
</select>

<input name="Cargar" type="button" value="Cargar" />
</form>
</div>


<div id="resultado">
</div>

</body>
</html>
