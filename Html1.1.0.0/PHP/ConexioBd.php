<?php

    $conexion = mysqli_connect("localhost","root","", "loginregistercleverlybd");

    if($conexion){
        echo 'Conectado';
    }else{
        echo 'No conec';
    }
    
?>