function inicio() 
{
    // Elementos
    let botonAgregar = document.getElementById(`agregar`);
    let botonMostrar = document.getElementById(`mostrar`);
    let botonActualizar = document.getElementById(`actualizar`);
    let botonEmpleabilidad = document.getElementById(`empleabilidad`);
    let resultado = document.getElementById(`contenedor-estudiantes`);
    
    // Eventos Click
    let eventoAgregar = function (e) 
    {
        e.preventDefault();
        let estudiante = agregarEstudiante();
        resultado.innerHTML = mostrar(estudiante);
    };
    
    let eventoMostrar = function (e) 
    {
        e.preventDefault();
        let estudiantes = obtenerListaEstudiantes();
        resultado.innerHTML = mostrarLista(estudiantes);
    };
    
    let eventoActualizar = function (e) 
    {
        e.preventDefault();
        let estudiantes = obtenerListaEstudiantes();
        let estudiantesActualizar = actualizar(estudiantes);
        //resultado.innerHTML = mostrarLista(estudiantesActualizar);
    };
    
    let eventoEmpleabilidad = function (e) 
    {
        e.preventDefault();
        let estudiantes = obtenerListaEstudiantes();
        let estudiantesEmpleabilidad = empleabilidad(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesEmpleabilidad);
    };
    
    // Manejadores de eventos
    botonAgregar.addEventListener(`click`, eventoAgregar);
    botonMostrar.addEventListener(`click`, eventoMostrar);
    botonActualizar.addEventListener(`click`, eventoActualizar);
    botonEmpleabilidad.addEventListener(`click`, eventoEmpleabilidad);
}inicio();

let estudiantes = [];

function obtenerListaEstudiantes() 
{
    //Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() 
{
    //Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    //El estudiante debe ser agregado a la lista de estudiantes
    //Retornar el estudiante recientemente creado
    let nombre = prompt(`Nombre de la estudiante`);
    let puntosTecnicos = prompt(`Porcentaje Técnico`);
    let puntosHSE = prompt(`Porcentaje Habilidades Socio-Emocionales`);
    while(nombre == `` && puntosTecnicos == `` && puntosHSE == ``)
    {
        alert(`No se ha ingresado alguno de los datos`);
        nombre = prompt(`Nombre de la estudiante`);
        puntosTecnicos = prompt(`Porcentaje Técnico`);
        puntosHSE = prompt(`Porcentaje Habilidades Socio-Emocionales`);
    }
    function Estudiante(nombre, puntosTecnicos, puntosHSE)
    {
        this.nombre = nombre;
        this.puntosTecnicos = puntosTecnicos;
        this.puntosHSE = puntosHSE;
        this.estado = `Activa`;
    }
    let estudiante = new Estudiante(nombre, puntosTecnicos, puntosHSE);
    estudiantes.push(estudiante);
    return estudiante;
}

function mostrar(estudiante) 
{
    //Completar el template para que muestre las propiedades correctas del estudiante 
    let resultado = ``;
    if(estudiante != undefined)
    {
        if(estudiante.nombre != null && estudiante.puntosTecnicos != null && estudiante.puntosHSE != null)
        {
            resultado += `<div class='row'>`;
            resultado += `<div class='col m12'>`;
            resultado += `<div class='card blue-grey darken-1'>`;
            resultado += `<div class='card-content white-text'>`;
            resultado += `<p><strong>Nombre: </strong>${estudiante.nombre}</p>`;
            resultado += `<p><strong>Puntos Técnicos: </strong>${estudiante.puntosTecnicos}%</p>`;
            resultado += `<p><strong>Puntos HSE: </strong>${estudiante.puntosHSE}%</p>`;
            resultado += `<p><strong>Estado: </strong>${estudiante.estado}</p>`;
            resultado += `</div>`;
            resultado += `</div>`;
            resultado += `</div>`;
            resultado += `</div>`;
        }
    }
    return resultado;
}

function mostrarLista(estudiantes)
{
    //Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    //Retornar el template de todos los estudiantes
    return estudiantes.map(mostrar);
    /*let resultado = ``;
    for(let i in estudiantes)
    {
        resultado += mostrar(estudiantes[i]);
    }
    return resultado;*/
}

function actualizar(estudiantes)
{
    let filtrar = estudiantes.filter(function(estudiante){
        return (estudiante.puntosTecnicos >= 70) && (estudiante.puntosHSE >= 70);
    });
    return filtrar;
}

function empleabilidad(estudiantes)
{
    return actualizar(estudiantes);
}