$(document).ready(function () {
    console.log("Entre a mensajes");
    verMensajeF();
});

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
                       <td>${items[i].computer.name}</td>
                       <td>${items[i].computer.client}</td>
                       <td style="margin:0">
                        <button type="button" class="btn-xs btn-primary">Editar
                        </button>
                        <button type="button" class="btn-xs btn-danger">Borrar
                        </button>
                        </td>
                    </tr>`;
    }
    tablaM += `</table>`;

    $("#tablaM").html(tablaM);
}


