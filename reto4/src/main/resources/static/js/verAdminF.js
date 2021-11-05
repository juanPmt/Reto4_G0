$(document).ready(function () {
    console.log("Entre a usuarios A");
    verAdminF();
});

let abrirFormAd=function (id){
    $("#idAd").val(id);
    $('#modalAdmin').modal('show');
};
let cerrarFormAd=function (){
    $('#modalAdmin').modal('hide');
    verAdminF();
};

function editAdminF(){
    console.log("ejecutando funcion para actualizar");

    let admin = {
        idAdmin: +$("#idAd").val(),
        name:  $("#inputNombreAd2").val(),
        password: $("#inputContraseñaAd2").val()
    };

    console.log(admin);

    $.ajax({
        url: "api/Admin/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(admin),
        statusCode:{
            201:function(){
                alert('Se ha actualizado de manera correcta');
                cerrarFormAd();
            }
        },
    });
}

function eliminarAdmin(identificador){

    console.log("ejecutando funcion para eliminar");
    $.ajax({
        url: "/api/Admin/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        statusCode:{
            204:function(){
                alert('Se ha eliminado el usuario administrativo');
                verAdminF();
            }
        },
    });
}

function verAdminF() {
    //Nos trae desde el servidos la base de datos de la tabla admin
    $.ajax({
        url: "/api/Admin/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaAd(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            console.log(status);
        }
    });
}

function mostrarRespuestaAd(items) {
    let tablaAd = `<table class="table striped" border="1">
                      <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                      </tr>`;

    for (let i = 0; i < items.length; i++) {

        tablaAd += `<tr> 
                       <td>${items[i].name}</td>
                       <td>${items[i].email}</td>
                        <td style="margin:0">
                        <button type="button" class="btn-xs btn-primary" onclick="abrirFormAd(${items[i].idAdmin})">
                            Editar
                        </button>
                        <button type="button" class="btn-xs btn-danger" onclick="eliminarAdmin(${items[i].idAdmin})">
                            Borrar
                        </button>
                        </td>
                    </tr>`;
    }
    tablaAd += `</table>`;

    $("#tablaAd").html(tablaAd);
}

