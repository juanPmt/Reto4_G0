$(document).ready(function () {
    console.log("Entre a usuarios A");
    verAdminF();
});

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
                        <button type="button" class="btn-xs btn-primary">Editar
                        </button>
                        <button type="button" class="btn-xs btn-danger">Borrar
                        </button>
                        </td>
                    </tr>`;
    }
    tablaAd += `</table>`;

    $("#tablaAd").html(tablaAd);
}

