/*let guardarT =function (){
    let todayD = new Date();
    let todayH = new Date();
    let date = todayD.getFullYear()+'-'+(todayD.getMonth()+1)+'-'+todayD.getDate();
    var time = todayH.getHours() + ":" + todayH.getMinutes() + ":" + todayH.getSeconds();
}*/

function crearReservaF() {
    let reserva = {
        computer: {
            id: +$("#selectCom").val()
        },
        client:{
            idClient: +$("#inputIdCliente").val()
        },
        startDate: $("#inputFechaInicio").val(),
        devolutionDate: $("#inputFechaEntrega").val()
    };

    console.log("Se va a registrar la reserva para el cliente", reserva.client);

    $.ajax({
        url: "/api/Reservation/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(reserva),
        statusCode: {
            201: function () {
                alert('La reserva se ha registrado de manera correcta');
            }
        },
    });
}

