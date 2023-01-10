let usuariosCajero = {
    Nombre: " ",
    Cedula: "",
    Contrasena: "",
    Perfil: ""
}

let Billetes = {
    Denominacion: "",
    Cantidad: "",
    Valor: "",
}

function usuarioCajero(Nombre, Cedula, Contrasena, Perfil) {

    this.Nombre = Nombre;
    this.Cedula = Cedula;
    this.Contrasena = Contrasena;
    this.Perfil = Perfil;
}

function consBillete(Denominacion, Cantidad, Valor, Total) {

    this.Denominacion = Denominacion;
    this.Cantidad = Cantidad;
    this.Valor = Valor;
    this.Total = Total;
}

let Pos;
let captNombre;
let captCedula;
let captContrasena;
let captPerfil;
let objUsuario;
let objUsuario1;
let objUsuario2;
let objUsuario3;
let objUsuario4;
let objBillete;
let objBillete1;
let objBillete2;
let objBillete3;
let objBillete4;
let captCantidad;
let captRetiro;
let numBilletes;
let Encontrar;
Encontrar = 0;
let tipoB = 1;
let i = 0;
var Operacion = 0;
var retirarBilletes = 0;
let Usuario = [];
let datosBillete = [];

function Ingresar() {
    captNombre = prompt("INGRESE EL NOMBRE DEL USUARIO:");
    captCedula = prompt("INGRESE EL NUMERO DE CEDULA:");
    captContrasena = prompt("INGRESE SU CONTRASEÑA:");
    captPerfil = prompt("INGRESE EL PERFIL:");
    let objUsuario = new usuarioCajero(captNombre, captCedula, captContrasena, captPerfil);
    return objUsuario;
}

//creando usuarios
objUsuario = new usuarioCajero("Edward", "65751125", "1234", "1");
objUsuario1 = new usuarioCajero("marisol", "508763455", "1973", "2");
objUsuario2 = new usuarioCajero("laura", "7656556", "7351", "2");
objUsuario3 = new usuarioCajero("jineth", "2020765", "2341", "2");
objUsuario4 = new usuarioCajero("marina", "20202020", "4321", "1");

//guardando usuarios
Usuario.push(objUsuario);
Usuario.push(objUsuario1);
Usuario.push(objUsuario2);
Usuario.push(objUsuario3);
Usuario.push(objUsuario4);

//creando billetes
objBillete = new consBillete("5000", "5", "25000", "0");
objBillete1 = new consBillete("10000", "3", "30000", "0");
objBillete2 = new consBillete("20000", "6", "120000", "0");
objBillete3 = new consBillete("50000", "4", "200000", "0");
objBillete4 = new consBillete("100000", "3", "300000", "0");

datosBillete.push(objBillete);
datosBillete.push(objBillete1);
datosBillete.push(objBillete2);
datosBillete.push(objBillete3);
datosBillete.push(objBillete4);

//USUARIOS
function validarUsuarios() {
    do {
        if (Encontrar === 5) {

            alert("USUARIO NO EXISTE");
            Encontrar = 0;
        }
        do {

            captCedula = prompt("BIENVENIDO AL BANCO CENTRAL" + "\n" + "INGRESE SU NUMERO DOCUMENTO:  " + "\n");

        } while (captCedula == null || captCedula.length == 0);

        do {
            captContrasena = prompt("BIENVENIDO AL BANCO CENTRAL" + "\n" + "INGRESE SU CONTRASEÑA:  " + "\n");

        } while (captContrasena == null || captContrasena.length == 0);


        for (let i = 0; i < Usuario.length; i++) {


            if ((captCedula === Usuario[i].Cedula) && (captContrasena === Usuario[i].Contrasena) && (Usuario[i].Perfil === "1")) {

                Pos = i;
                Administrador();
                i = Usuario.length + 2;

            }

            if ((captCedula === Usuario[i].Cedula) && (captContrasena === Usuario[i].Contrasena) && (Usuario[i].Perfil === "2")) {
                Pos = i;
                Clientes();
                i = Usuario.length + 2;

            }

            else {

                Encontrar += 1;
                console.log(Encontrar);

            }

        }
    } while (Encontrar === 5);

    validarUsuarios();
}

//ADMINISTRADOR
function Administrador() {
    do {
        captCantidad = prompt("BIENVENIDO AL BANCO CENTRAL SEÑOR(A)   " + Usuario[Pos].Nombre + "\n" + "  INDICA LA DENOMINACION A DEPOSITAR EN BILLETES DE" + "\n" + "100000, 50000, 20000, 10000, 5000 ");
        tipoB = 1;
        if (captCantidad === "5000" || captCantidad === "10000" || captCantidad === "20000" || captCantidad === "50000" || captCantidad === "100000") {

            while (i < datosBillete.length) {


                if (datosBillete[i].Denominacion === captCantidad) {

                    numBilletes = prompt("INGRESE EL NEMERO DE BILLETES DE   " + datosBillete[i].Denominacion);
                    datosBillete[i].Cantidad = parseInt(datosBillete[i].Cantidad) + parseInt(numBilletes);
                    datosBillete[i].Valor = parseInt(datosBillete[i].Cantidad) * parseInt(captCantidad);

                    for (let j = 0; j < datosBillete.length; j++) {

                        Operacion = Operacion + parseInt(datosBillete[j].Valor);
                    }

                    alert("SE INGRESARON    " + numBilletes + " Billetes de: $    " + datosBillete[i].Denominacion + "\n" + " EL DINERO TOTAL DEL CAJERO ES $:   " + Operacion);
                    i = datosBillete.length;

                }
                else {

                    i += 1;
                }
            }
        }

        else {

            tipoB += 1;

        }

    } while (tipoB === 2);

    validarUsuarios();
}

//CLIENTE
function Clientes() {

    do {

        captRetiro = prompt("BIENVENIDO AL BANCO CENTRAL SEÑOR(A)   " + Usuario[Pos].Nombre + "\n" + "INGRESE LA CANTIDAD DE DINERO QUE DESEA RETIRAR EN MULTIPLOS DE 5000" + "\n");
        captRetiro = parseInt(captRetiro);

    } while (captRetiro % 5000 !== 0);

    for (let j = 0; j < datosBillete.length; j++) {

        Operacion = Operacion + parseInt(datosBillete[j].Valor);
    }

    j = 0;
    i = datosBillete.length;
    i -= 1;

    if (captRetiro <= Operacion) {

        while (i >= j) {
            console.log(i);

            retirarBilletes = Math.floor(captRetiro / parseInt(datosBillete[i].Denominacion));
            captRetiro -= retirarBilletes * parseInt(datosBillete[i].Denominacion);
            datosBillete[i].Cantidad = parseInt(datosBillete[i].Cantidad) - retirarBilletes
            datosBillete[i].Valor = datosBillete[i].Cantidad * parseInt(datosBillete[i].Denominacion);
            i--;
        }
    }
    else {

        alert("NO PUEDO ENTREGAR ESA CANTIDAD");
    }

    Operacion = 0;

    for (let j = 0; j < datosBillete.length; j++) {

        Operacion = Operacion + parseInt(datosBillete[j].Valor);
    }

    alert("SE SACARON    " + retirarBilletes + " Billetes de: $    " + datosBillete[0].Denominacion + "\n" + " EL DINERO TOTAL DEL CAJERO ES $:   " + Operacion);
    validarUsuarios();
}

/*for (let i = 0; i < datosBillete.length; i++) {

    console.log(datosBillete[i].Denominacion);
    console.log(datosBillete[i].Cantidad);
    console.log(datosBillete[i].Total);
    console.log(datosBillete[i].Valor);

}*/
validarUsuarios();