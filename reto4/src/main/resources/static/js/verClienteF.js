$(document).ready(function () {
    console.log("Entre a clientes");
    verClienteF();
});

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
                        <button type="button" class="btn-xs btn-primary">Editar
                        </button>
                        <button type="button" class="btn-xs btn-danger">Borrar
                        </button>
                        </td>
                    </tr>`;
    }
    tablaCL += `</table>`;

    $("#tablaCL").html(tablaCL);
}


