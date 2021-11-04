$(document).ready(function () {
    console.log("Entre a categorias");
    verCategoriaF();
});

let verCategoriaF = function () {
    //Nos trae desde el servidos la base de datos de la tabla categoria
    $.ajax({
        url: "/api/Category/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaCat(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            console.log(status);
        }
    });
}

function mostrarRespuestaCat(items) {
    let tablaCT = `<table class="table striped"  border="1">
                      <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                      </tr>`;

    for (let i = 0; i < items.length; i++) {

        tablaCT += `<tr> 
                       <td>${items[i].name}</td>
                       <td>${items[i].description}</td>
                       <td style="margin:0">
                        <button type="button" class="btn-xs btn-primary">Editar
                        </button>
                        <button type="button" class="btn-xs btn-danger">Borrar
                        </button>
                        </td>
                    </tr>`;
    }
    tablaCT += `</table>`;

    $("#tablaCT").html(tablaCT);
}