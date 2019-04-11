document.querySelector('#boton').addEventListener('click',iniciarSession);

function iniciarSession(){
    var user = '';//$('#id-user').val();
    var pass = '';//$('#id-pass').val();
    var accesoHome=false;

user= document.querySelector('#id-user').value;
pass= document.querySelector('#id-pass').value;
console.log(user+' :desdequeryselector');

serivicioLogin(user,pass);


var userActi=sessionStorage.getItem('usuarioActivo');

$('.id-mostrarHome').append(userActi);


console.log(userActi);
}

