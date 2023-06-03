$(document).ready(function () {

    var navigation_actual = window.location.pathname;
    var page_actual = navigation_actual.replace("cetus-web/cetus-web/", "").replace(".php", "").replace("/", "");

    ///**************************FORMULARIO PRODUCTOS **********************************************/
    if (page_actual == "products"){

        //Consumimos el endpoint para consultar productos
        getAllProducts()
        .done(function (datos) {
            var html = "";

            $("#tableProducts tbody tr").remove();
            $.each(datos, function (i, v) {
                html += '<tr>'+
                            '<td>' + v.productoId + '</td>'+
                            '<td>' + v.nombre + '</td>'+
                            '<td>' + v.descripcion + '</td>'+
                            '<td>' + v.nombreLaboratorio + '</td>'+
                            '<td>' + (v.estado == true ? "Activo": "Inactivo") + '</td>'+
                        '</tr>';
            });

            $("#tableProducts tbody").append(html);

        })
        .fail(function (err) { 
            console.log(err);
        });
    }

    function getAllProducts() {

        var def = $.Deferred();
        // $("#spinner-div").show();
        $.ajax({
            url: "http://localhost:18382/products/",
            data: { },
            type: "GET",
            dataType: "json",
            success: function (datos) {
                //console.log(datos);
                def.resolve(datos);

                $("#spinner-div").hide();
            },
            error: function (error) {
                alertify.error("No se pudo guardar la información, intente nuevamente.");
                def.reject(error);
                // $("#spinner-div").hide();
            }
        });

        return def.promise();
    }

    //Guardado de un producto
    $("#btnGuardarProduct").click(function (e) { 

        e.preventDefault();

        var productDTO = {
            'Nombre' : $("#product_name").val(),
            'Descripcion' : $("#product_description").val(),
            'NombreLaboratorio' : $("#laboratoryName").val(),
            'Estado' : true
        }

        setProduct(productDTO)
        .done(function (datos) { 
            console.log(datos);
        })
        .fail(function (err) { 
            console.log(err);
        })

    })


      //Buscar de un producto
    $("#buscar").click(function (e) { 

        e.preventDefault();

        var productoId=$("#dato").val();

        var productDTO = {
            'Nombre' : $("#product_name").val(),
            'Descripcion' : $("#product_description").val(),
            'NombreLaboratorio' : $("#laboratoryName").val(),
            'Estado' : true
        }

        setProduct(productDTO)
        .done(function (datos) { 
            console.log(datos);
        })
        .fail(function (err) { 
            console.log(err);
        })

    })

    function setProduct(productDTO) {

        var def = $.Deferred();
        // $("#spinner-div").show();
        $.ajax({
            url: "http://localhost:18382/products",
            data: JSON.stringify(productDTO),
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            success: function (datos) {
                //console.log(datos);
                def.resolve(datos);

                $("#spinner-div").hide();
            },
            error: function (error) {
                //alertify.error("No se pudo guardar la información, intente nuevamente.");
                def.reject(error);
                // $("#spinner-div").hide();
            }
        });

        return def.promise();
    }

    ///**************************FORMULARIO PRODUCTOS **********************************************/



    ///**************************FORMULARIO PROVEEDORES **********************************************/
    if (page_actual == "providers"){

        //Consumimos el endpoint para consultar productos
        getAllProvider()
        .done(function (datos) {
            var html = "";

            console.log(datos);

            $("#tableProviders tbody tr").remove();
            $.each(datos, function (i, v) {
                html += '<tr>'+
                            '<td>' + v.proveedorId + '</td>'+
                            '<td>' + v.tipoIdentificacion + '</td>'+
                            '<td>' + v.nombreRazonSocial + '</td>'+
                            '<td>' + v.direccion + '</td>'+
                            '<td>' + v.nombreContacto + '</td>'+
                            '<td>' + v.celularContacto + '</td>'+
                            '<td>' + (v.estado == true ? "Activo": "Inactivo") + '</td>'+
                        '</tr>';
            });

            $("#tableProviders tbody").append(html);

        })
        .fail(function (err) { 
            console.log(err);
        });
    }

    function getAllProvider() {

        var def = $.Deferred();
        // $("#spinner-div").show();
        $.ajax({
            url: "http://localhost:18382/providers/",
            data: { },
            type: "GET",
            dataType: "json",
            success: function (datos) {
                //console.log(datos);
                def.resolve(datos);

                $("#spinner-div").hide();
            },
            error: function (error) {
                alertify.error("No se pudo guardar la información, intente nuevamente.");
                def.reject(error);
                // $("#spinner-div").hide();
            }
        });

        return def.promise();
    }

    ///**************************FORMULARIO PROVEEDORES **********************************************/


    ///**************************FORMULARIO RECEPCION PRODUCTOS **********************************************/
    if (page_actual == "receptionProducts"){

        //Consumimos el endpoint para consultar productos
        getAllReceptionProducts()
        .done(function (datos) {
            var html = "";

            console.log(datos);

            $("#tableReceptionProducts tbody tr").remove();
            $.each(datos, function (i, v) {
                html += '<tr>'+
                            '<td>' + v.id + '</td>'+
                            '<td>' + v.productoName + '</td>'+
                            '<td>' + v.proveedorName + '</td>'+
                            '<td>' + v.fechaHoraRecepcion + '</td>'+
                            '<td>' + v.factura + '</td>'+
                            '<td>' + v.cantidad + '</td>'+
                            '<td>' + (v.estado == true ? "Activo": "Inactivo") + '</td>'+
                            '<td>' + v.descripcion + '</td>'+
                            '<td>' + v.lote + '</td>'+
                            '<td>' + v.registroInvima + '</td>'+
                            '<td>' + v.fechaVencimiento + '</td>'+
                        '</tr>';
            });

            $("#tableReceptionProducts tbody").append(html);

        })
        .fail(function (err) { 
            console.log(err);
        });
    }

    function getAllReceptionProducts() {

        var def = $.Deferred();
        // $("#spinner-div").show();
        $.ajax({
            url: "http://localhost:18382/receptionProducts/",
            data: { },
            type: "GET",
            dataType: "json",
            success: function (datos) {
                //console.log(datos);
                def.resolve(datos);

                $("#spinner-div").hide();
            },
            error: function (error) {
                alertify.error("No se pudo guardar la información, intente nuevamente.");
                def.reject(error);
                // $("#spinner-div").hide();
            }
        });

        return def.promise();
    }

    ///**************************FORMULARIO RECEPCION PRODUCTOS **********************************************/

}); 