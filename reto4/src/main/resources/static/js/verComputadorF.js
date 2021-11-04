$(document).ready(function () {
    console.log("Entre a computadores");
    verComputadorF();   
});

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
                        <button type="button" class="btn-xs btn-primary">Editar
                        </button>
                        <button type="button" class="btn-xs btn-danger">Borrar
                        </button>
                        </td>
                    </tr>`;
        }
        tablaCM +=`</table>`;
    
        $("#tablaCM").html(tablaCM);
    }

