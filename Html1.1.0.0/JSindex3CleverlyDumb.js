/* Desplazamiento */
document.getElementById("BotonInicioSesion").addEventListener("click",IniciarSesion);
document.getElementById("BotonRegistrarse").addEventListener("click",register);

window.addEventListener("resize", AnchoPagina);

/* Variables: */

var contenedor_login_register = document.querySelector(".contenedorLoginRegister");
var formulario_login = document.querySelector(".formularioLogin");
var formulario_register = document.querySelector(".formularioRegistrarse");

var caja_Trasera_Login = document.querySelector(".cajaTraseraParaLogin");
var caja_Trasera_Register = document.querySelector(".cajaTraseraRegister");

function AnchoPagina(){
    if(window.innerWidth > 850){
        caja_Trasera_Login.style.display = "block";
        caja_Trasera_Register.style.display = "block";
    }else{
        caja_Trasera_Register.style.display = "block";
        caja_Trasera_Register.style.opacity = "1";
        caja_Trasera_Login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

function IniciarSesion(){
    
    if(window.innerWidth > 850){

    

    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_Trasera_Login.style.opacity = "1";
    caja_Trasera_Register.style.opacity = "0";

    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_Trasera_Login.style.display = "block";
        caja_Trasera_Register.style.display= "none";
    }
}

function register(){
    
    if(window.innerHeight > 850){
        /* Cuando hacemos click al boton de registrarse en el formulario se va a bloquear */
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_Trasera_Register.style.opacity = "0";
        caja_Trasera_Login.style.opacity = "1"; 

    }else{

        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_Trasera_Register.style.display = "none";
        caja_Trasera_Login.style.display = "block";
        caja_Trasera_Login.style.opacity = "1";

    }

}

