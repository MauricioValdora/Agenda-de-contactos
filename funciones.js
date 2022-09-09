const guardarContacto=(baseDatos,contacto)=>{
    baseDatos.setItem(contacto.id,JSON.stringify(contacto));
    window.location.reload();
}

const cargarContacto=(baseDatos,parentNode)=>{
    let claves = Object.keys(baseDatos);

    for (clave of claves){
    let contacto = JSON.parse( baseDatos.getItem(clave));
        crearContacto(parentNode,contacto,baseDatos);
    }

}

const crearContacto=(parentNode,contacto,baseDatos)=>{

    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconoBorrar = document.createElement('spam');

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = 'delete_forever'

    divContacto.classList.add('tarea');
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = ()=>{
        baseDatos.removeItem (contacto.id)
        window.location.reload();
    }

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);
    parentNode.appendChild(divContacto);


}