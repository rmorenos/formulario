document.querySelector('submit').addEventListener('click', saveDatos);



function saveDatos() {
    let snombre = document.querySelector('#nombre').value,
     sapellido = document.querySelector('#apellido').value,
     shm = document.querySelector('#sexo').value,
     sedad= document.querySelector('#edad').value,
    ssexo= document.querySelector('#hm').value;

    addOjecto(snombre, sapellido, shm, sedad, ssexo)
    
}