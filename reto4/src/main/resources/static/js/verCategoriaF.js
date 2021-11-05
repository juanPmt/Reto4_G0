$(document).ready(function () {
    console.log("Entre a categorias");
    verCategoriaF();
});

let abrirFormCat=function (id){
    $("#idCat").val(id);
    $('#modalCat').modal('show');
};
let cerrarFormCat=function (){
    $('#modalCat').modal('hide');
    verCategoriaF();
};

function editCategoriaF(){
    console.log("ejecutando funcion para actualizar");

    let categoria = {
        id: +$("#idCat").val(),
        name: $("#inputNombreCat2").val(),
        description: $("#inputDescripcionCat2").val()
    };

    console.log(categoria);

    $.ajax({
        url: "api/Category/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(categoria),
        statusCode:{
            201:function(){
                alert('Se ha actualizado de manera correcta');
                cerrarFormCat();
            }
        },
    });
}

function eliminarCat(identificador){

    console.log("ejecutando funcion para eliminar");
    $.ajax({
        url: "/api/Category/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        statusCode:{
            204:function(){
                alert('Se ha eliminado la categoria');
                verCategoriaF();
            }
        },
    });
}

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
                        <button type="button" class="btn-xs btn-primary" onclick="abrirFormCat(${items[i].id})">
                         Editar
                        </button>
                        <button type="button" class="btn-xs btn-danger" onclick="eliminarCat(${items[i].id})">
                         Borrar
                        </button>
                        </td>
                    </tr>`;
    }
    tablaCT += `</table>`;

    $("#tablaCT").html(tablaCT);
}