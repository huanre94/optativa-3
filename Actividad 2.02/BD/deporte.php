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
		print ("HAS PULSADO EL  BOTON");

	//CONECTAR CON LA BASE DE DATOS

	$enlace =  mysqli_connect('localhost:3307', 'root','', 'dpw');
	//$enlace =  mysqli_connect('localhost', 'usuario','1234', 'dpw');
	if (!$enlace) {
    die('No pudo conectarse: ' . mysqli_error($enlace));
	}
	echo '</br>Conectado satisfactoriamente <br>';
	$tabla=$_REQUEST['tabla'];
	echo $tabla;
	$query="select *from $tabla";
	$resultado=mysqli_query($enlace, $query) or die ("<br>Hubo un error al ejecutar 
		el SQL" . mysqli_error($enlace));

	if(mysqli_num_rows($resultado)>0){
		echo "mostrar los registros<br>";
		$filas = mysqli_fetch_assoc($resultado);
		print "$filas[nombre] $filas[anio] $filas[campeonatos]  ";
	}
	else
		echo "no hay resultados";

	mysqli_close($enlace);

	}
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
