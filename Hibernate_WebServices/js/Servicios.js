
//Variables Globales
var userActi = "";

document.querySelector('#boton').addEventListener('click',iniciarSession);

function iniciarSession(){
    var user = '';//$('#id-user').val();
    var pass = '';//$('#id-pass').val();
    var accesoHome=false;

user= document.querySelector('#id-user').value;
pass= document.querySelector('#id-pass').value;
console.log(user +' :desdequeryselector');

serivicioLogin(user,pass);


userActi=sessionStorage.getItem('usuarioActivo');

$('.id-mostrarHome').append(userActi);


console.log(userActi);
}


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
             url: 'http://proweb-favian.jelastic.saveincloud.net/ROOT-766/v1/login',
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
                     $('.id-mostrar').append('Usuario o Contraseña incorrecto');
                 } else {
                     //console.log(data);
                     //console.log(data.responseText)
                     
                     listaUsuarios = data.responseText;
                     
                    //$('.id-mostrar').append(listaUsuarios+':desde validaIngreso line 46');
                     sessionStorage.setItem('usuarioActivo',listaUsuarios);
                     
                      if ((data.responseText == user)) {
                          listaUsuarios = true;
                      }
                      $('.id-mostrarHome').append(userActi);
                      alert('Bienvenido: '+data.responseText),
                      location.href = "Home.html";
                   
                      
                       //location.href+"?id=5&"+this.href.split("?")[1];alert(this.href);
 
                      //   window.location.replace("Home.html");
                     //console.log(data.sesion);
                 }
             }
         });
     }
     
 }
 

