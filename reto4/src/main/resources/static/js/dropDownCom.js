$(document).ready(function () {
    dropDownCom();
});

let dropDownCom = function () {
    $.ajax({
        url: "/api/Computer/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            let select = document.getElementById("selectCom");

            for (let i = 0; i < respuesta.length; i++) {
                let name = respuesta[i].name;
                let brand = respuesta[i].brand;
                let cod = respuesta[i].id;
                let el = document.createElement("option");
                el.text = brand+" "+name;
                el.value = cod;
                select.add(el);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            console.log(status);
        }
    });
}

