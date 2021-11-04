function crearCategoriaF(){
    let categoria = {
        name: $("#inputNombreCat").val(),
        description: $("#inputDescripcionCat").val(),
    };

    console.log("Se va a registrar la categoria", categoria.name);

    $.ajax({
        url:"/api/Category/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(categoria),
        statusCode:{
            201:function(){
                alert('La categoria se ha registrado de manera correcta ');
            }
        },
    });
}