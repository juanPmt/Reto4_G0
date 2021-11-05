$(document).ready(function () {
    console.log("Entre a computadores");
    verComputadorF();   
});

let abrirFormCm=function (id, cate){
    $("#idCm").val(id);
    $("#catCm").val(cate);
    $('#modalCm').modal('show');
};
let cerrarFormCm=function (){
    $('#modalCm').modal('hide');
    verComputadorF();
};

function editComputadorF(){
    console.log("ejecutando funcion para actualizar");

    let computador = {
        id: +$("#idCm").val(),
        brand:  $("#ValoresMarca2").val(),
        name: $("#inputNombreCom2").val(),
        year: +$("#inputAño2").val(),
        description: $("#inputDescripcionCom2").val(),
    };

    console.log(computador);

    $.ajax({
        url: "api/Computer/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                alert('Se ha actualizado de manera correcta');
                cerrarFormCm();
            }
        },
    });
}

function eliminarComp(identificador){

    console.log("ejecutando funcion para eliminar");
    $.ajax({
        url: "/api/Computer/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        statusCode:{
            204:function(){
                alert('Se ha eliminado el computador');
                verComputadorF();
            }
        },
    });
}

function verComputadorF(){
    //Nos trae desde el servidos la base de datos de la tabla computador
        $.ajax({
            url:"/api/Computer/all",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta);
                mostrarRespuestaCom(respuesta);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }        
        });    
    }
    
    function mostrarRespuestaCom(items){
        let tablaCM = `<table class="table striped" border="1">
                      <tr>
                        <th>Marca</th>
                        <th>Nombre</th>
                        <th>Año</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                      </tr>`;                  
        
        for (let i=0; i < items.length; i++) {
           
            tablaCM +=`<tr>
                       <td>${items[i].brand}</td> 
                       <td>${items[i].name}</td>
                       <td>${items[i].year}</td>
                       <td>${items[i].category.name}</td>
                       <td>${items[i].description}</td>
                       <td style="margin:0">
                        <button type="button" class="btn-xs btn-primary" onclick="abrirFormCm(${items[i].id},'${items[i].category.name}')">Editar
                        </button>
                        <button type="button" class="btn-xs btn-danger" onclick="eliminarComp(${items[i].id})">Borrar
                        </button>
                        </td>
                    </tr>`;
        }
        tablaCM +=`</table>`;
    
        $("#tablaCM").html(tablaCM);
    }

