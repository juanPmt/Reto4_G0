$(document).ready(function () {
    console.log("Entre a mensajes");
    verMensajeF();
});

let abrirFormM=function (id){
    $("#idM").val(id);
    $('#modalM').modal('show');
};
let cerrarFormM=function (){
    $('#modalM').modal('hide');
    verMensajeF();
};

function editMensajeF(){
    console.log("ejecutando funcion para actualizar");

    let mensaje = {
        idMessage: +$("#idM").val(),
        messageText: $("#Mensaje2").val()
    };

    console.log(mensaje);

    $.ajax({
        url: "api/Message/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                alert('Se ha actualizado de manera correcta');
                cerrarFormM();
            }
        },
    });
}

function eliminarMens(identificador){

    console.log("ejecutando funcion para eliminar");
    $.ajax({
        url: "/api/Message/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        statusCode:{
            204:function(){
                alert('Se ha eliminado el mensaje');
                verMensajeF();
            }
        },
    });
}

function verMensajeF() {
    //Nos trae desde el servidos la base de datos de la tabla mensajes
    $.ajax({
        url: "/api/Message/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaM(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            console.log(status);
        }
    });
}

function mostrarRespuestaM(items) {
    let tablaM = `<table class="table striped" border="1">
                      <tr>
                        <th>Mensaje</th>
                        <th>Computador</th>
                        <th>Cliente</th>
                        <th>Acciones</th>
                      </tr>`;

    for (let i = 0; i < items.length; i++) {

        tablaM += `<tr>
                       <td>${items[i].messageText}</td> 
                       <td>${items[i].computer.brand} ${items[i].computer.name}</td>
                       <td>${items[i].client.name}</td>
                       <td style="margin:0">
                        <button type="button" class="btn-xs btn-primary" onclick="abrirFormM(${items[i].idMessage})">
                         Editar
                        </button>
                        <button type="button" class="btn-xs btn-danger" onclick="eliminarMens(${items[i].idMessage})">
                         Borrar
                        </button>
                        </td>
                    </tr>`;
    }
    tablaM += `</table>`;

    $("#tablaM").html(tablaM);
}


