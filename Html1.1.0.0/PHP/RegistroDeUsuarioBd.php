<?php 

    include 'conexioBd.php';

    $nombre_completo = $_POST['NombreCompleto'];
    $correo = $_POST['Correo'];
    $usuario = $_POST['Usuario'];
    $contrasena = $_POST['contrasena'];

    $query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contrasena) 
                VALUES('$nombre_completo', '$correo', '$usuario', '$contrasena')"; /*Insertar en la tabla de la base de datos */
    
    $Ejecutar = mysqli_query($conexion, $query);

    
?>