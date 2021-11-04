function crearMensajeF(){
    let mensaje = {
        computer:{
            id: +$("#selectCom").val()
        },
        messageText: $("#Mensaje").val()
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