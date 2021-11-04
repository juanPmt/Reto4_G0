function crearAdminF(){
    let admin = {
        name:  $("#inputNombreAd").val(),
        email: $("#inputCorreoAd").val(),
        password: $("#inputContraseñaAd").val()
    };

    console.log("Se va a registrar el usuario administrativo", admin.name);

    $.ajax({
        url: "/api/Admin/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(admin),
        statusCode:{
            201:function(){
                alert('El usuario administrativo se ha registrado de manera correcta ');
            }
        },
    });
    
}


