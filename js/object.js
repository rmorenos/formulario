let json = {
    "nombre": "",
    "apellido_paterno": "",
    "apellido_materno": "",
    "correo": "",
    "sexo": "",
    "edad": 0,
    "hobbit": [],
    "futbol": "",
}

function rescatarFormulario(){
  
    let poppup = document.getElementById("json");
    poppup.classList.remove("hide");
    json.nombre = document.getElementById("nombre").value.checked;
    json.apellido_paterno = document.getElementById("apellido_paterno").value;
    json.apellido_materno = document.getElementById("apellido_materno").value;
    json.correo = document.getElementById("correo").value;
    json.edad = document.getElementById("edad").value;
    json.sexo = document.getElementById("sexo").value;
    document.getElementsByName("Hobbies").forEach(function(elemnent){
        json.hobbit.push( elemnent.checked);

    });
    json.futbol = document.querySelector("[name='futbol']:checked").value;

    let arregloDeLetras["a","b""c""d""""""""""""""""]



     //pre.innerHTML = JSON.stringify(json);
     console.log(json.nombre);
     if(json.nombre == null){
         alert("el nombre es obligatorio");
         return 0;
     }



}   
   

   

