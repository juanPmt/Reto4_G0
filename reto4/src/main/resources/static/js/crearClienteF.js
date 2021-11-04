function crearClienteF(){
    let cliente = {
        name:  $("#inputNombreCliente").val(),
        email: $("#correo").val(),
        age: +$("#inputEdad").val(),
        password: $("#inputContraseña").val()
    };

    console.log("Se va a registrar el cliente", cliente.name);

    $.ajax({
        url: "/api/Client/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                alert('El cliente se ha registrado de manera correcta ');
            }
        },
    });
    
}