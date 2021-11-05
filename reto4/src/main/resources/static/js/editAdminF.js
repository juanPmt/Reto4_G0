let abrirFormAd=function (){
    $('#modalAdmin').modal('show');
};
let cerrarFormAd=function (){
    $('#modalAdmin').modal('hide');
};

function editAdminF(){
    console.log("ejecutando funcion para actualizar");

    let admin = {
        name:  $("#inputNombreAd2").val(),
        password: $("#inputContraseñaAd2").val()
    };

    console.log(admin);

    $.ajax({
        url: "api/Admin/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(admin),
        statusCode:{
            201:function(){
                alert('Se ha actualizado de manera correcta');
            }
        },
    });
}

