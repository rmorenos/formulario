function validacion() {
    let poppup = document.getElementById("json");
    poppup.classList.remove("hide");
    let nombre, apellido_paterno, apellido_materno, edad, correo, sexo, futbol, Hobbies;
    nombre = document.getElementById("nombre").value;
    apellido_paternoe = document.getElementById("apellido_paterno").value;
    apellido_materno = document.getElementById("apellido_materno").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    sexo = document.getElementById("sexo").value;
    

   // console.log(sexo);

  if(nombre.length == 0){
    document.getElementById("json").appendChild="falta nombre";
  }else{
    document.getElementById('json').innerHTML = "";
    }


}
    