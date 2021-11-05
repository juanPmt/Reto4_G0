$(document).ready(function () {
    console.log("Entre a clientes");
    verClienteF();
});

let abrirFormCl=function (id){
    $("#idCl").val(id);
    $('#modalCl').modal('show');
};
let cerrarFormCl=function (){
    $('#modalCl').modal('hide');
    verClienteF();
};

function editClienteF(){
    console.log("ejecutando funcion para actualizar");

    let cliente = {
        idClient: +$("#idCl").val(),
        name:  $("#inputNombreCliente2").val(),
        age: +$("#inputEdad2").val(),
        password: $("#inputContraseña2").val()
    };

    console.log(cliente);

    $.ajax({
        url: "api/Client/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                alert('Se ha actualizado de manera correcta');
                cerrarFormCl();
            }
        },
    });
}

function eliminarCliente(identificador){

    console.log("ejecutando funcion para eliminar");
    $.ajax({
        url: "/api/Client/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        statusCode:{
            204:function(){
                alert('Se ha eliminado el cliente');
                verClienteF();
            }
        },
    });
}

let verClienteF = function () {
    //Nos trae desde el servidos la base de datos de la tabla cliente
    $.ajax({
        url: "/api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaCli(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            console.log(status);
        }
    });
}

function mostrarRespuestaCli(items) {
    let tablaCL = `<table class="table striped" border="1">
                      <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                      </tr>`;

    for (let i = 0; i < items.length; i++) {

        tablaCL += `<tr> 
                       <td>${items[i].name}</td>
                       <td>${items[i].email}</td>
                       <td>${items[i].age}</td>
                       <td style="margin:0">
                        <button type="button" class="btn-xs btn-primary" onclick="abrirFormCl(${items[i].idClient})">
                          Editar
                        </button>
                        <button type="button" class="btn-xs btn-danger" onclick="eliminarCliente(${items[i].idClient})">
                          Borrar
                        </button>
                        </td>
                    </tr>`;
    }
    tablaCL += `</table>`;

    $("#tablaCL").html(tablaCL);
}


