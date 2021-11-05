$(document).ready(function () {
    console.log("Entre a reservas");
    verReservaF();   
});

let abrirFormRev=function (id,pc){
    $("#idRev").val(id);
    $("#pcR").val(pc);
    $('#modalRev').modal('show');
};

let abrirFormR=function (id){
    $("#idR").val(id);
    $('#modalR').modal('show');
};

let cerrarFormRev=function (){
    $('#modalRev').modal('hide');
    verReservaF();
};

let cerrarFormR=function (){
    $('#modalR').modal('hide');
    verReservaF();
};

function editReservaF(){
    console.log("ejecutando funcion para actualizar");

    let reserva = {
        idReservation: +$("#idR").val(),
        startDate: $("#inputFechaInicio2").val(),
        devolutionDate: $("#inputFechaEntrega2").val()
    };

    console.log(reserva);

    $.ajax({
        url: "api/Reservation/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(reserva),
        statusCode:{
            201:function(){
                alert('Se ha actualizado de manera correcta');
                cerrarFormR();
            }
        },
    });
}

function eliminarRes(identificador){

    console.log("ejecutando funcion para eliminar");
    $.ajax({
        url: "/api/Reservation/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        statusCode:{
            204:function(){
                alert('Se ha eliminado la reserva');
                verReservaF();
            }
        },
    });
}

function crearReviewF(){
 
    let review = {
        idReservation: +$("#idRev").val(),
        score: $("#inputSc").val(),
    };

    console.log(review);

    $.ajax({
        url: "api/Reservation/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(review),
        statusCode:{
            201:function(){
                crearMensajeRF();
                alert('Se ha calificado de manera correcta');
                cerrarFormRev();
            }
        },
    });
}

function crearMensajeRF(){
    let mensaje = {
        computer:{
            id: +$("#pcR").val()
        },
        messageText: $("#MensajeR").val()
    };

    console.log("Se va a registrar el mensaje para el computador", mensaje.computer);

    $.ajax({
        url: "/api/Message/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                alert('El mensaje se ha registrado de manera correcta ');
            }
        },
    });
}

function verReservaF(){
    //Nos trae desde el servidos la base de datos de la tabla reservas
        $.ajax({
            url:"/api/Reservation/all",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta);
                mostrarRespuestaR(respuesta);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }        
        });    
    }
    
    function mostrarRespuestaR(items){
        let tablaR = `<table class="table striped" border="1">
                      <tr>
                        <th>Id</th>
                        <th>Computador</th>
                        <th>Id Cliente</th>
                        <th>Nombre Cliente</th>
                        <th>Correo Cliente</th>
                        <th>Calificación</th>
                        <th>Acciones</th>
                      </tr>`;                  
        
        for (let i=0; i < items.length; i++) {
           
            tablaR +=`<tr>
                       <td>${items[i].idReservation}</td> 
                       <td>${items[i].computer.brand} ${items[i].computer.name}</td>
                       <td>${items[i].client.idClient}</td>
                       <td>${items[i].client.name}</td>
                       <td>${items[i].client.email}</td>
                       <td>${items[i].score}</td>
                       <td style="margin:0">
                        <button type="button" class="btn-xs btn-primary" onclick="abrirFormR(${items[i].idReservation})">
                         Editar
                        </button>
                        <button type="button" class="btn-xs btn-warning onclick="abrirFormRev(${items[i].idReservation},'${items[i].computer.id}')">
                         Calificar
                        </button>
                        <button type="button" class="btn-xs btn-danger" onclick="eliminarRes(${items[i].idReservation})">
                         Borrar
                        </button>
                        
                   </td>                
                    </tr>`;
        }
        tablaR +=`</table>`;
    
        $("#tablaR").html(tablaR);
    }


