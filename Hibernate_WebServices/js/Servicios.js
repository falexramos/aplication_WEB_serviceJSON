function serivicioLogin(user,pass) {


   // var user = $('#id-user').val();
   // var pass = $('#id-pass').val();
    var listaUsuarios = false;

    var data = {
        "user": user,
        "password": pass
    };
   // console.log(data);

    if ((user == '' || user == null || pass == null || pass == '')) {

        $('.id-mostrar').append('Los campos no pueden estar vacios');

        //window.setTimeout(10000);
        //location.reload(); 

    } else {

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/Hibernate_WebServices/v1/login',//'http://env-app.jl.serv.net.mx/v1/login',
            data: JSON.stringify(data),
            contentType: 'application/json',
            dataType: 'json',

            success: function (data) {
                console.log(data);
                //$('.id-mostrar').append(data.sesion);

               // console.log(data.sesion);
            },
            error: function (data) {

                if ((data.responseText == 'False')) {
                    listaUsuarios = false;
                } else {
                    //console.log(data);
                    //console.log(data.responseText)
                    
                    listaUsuarios = data.responseText;
                    
                    $('.id-mostrar').append(listaUsuarios+':desde validaIngreso line 46');
                    sessionStorage.setItem('usuarioActivo',listaUsuarios);
                    
                    // if ((data.responseText == user)) {
                    //     listaUsuarios = true;
                    // }
                      location.href = "Home.html";
                     //   window.location.replace("Home.html");
                    //console.log(data.sesion);
                }
            }
        });
    }
    
}

