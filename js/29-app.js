//para la gestion de alumnos
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    getApellido() {
        return this.apellido;
    }

    setApellido(nuevoApellido) {
        this.apellido = nuevoApellido;
    }

}

class Profesor extends Persona {
    constructor(nombre, apellido, curso) {
        super(nombre, apellido);
        this.curso = curso;
    }

    getCurso() {
        return this.curso;
    }
    setCurso(nuevoCurso) {
        this.curso = nuevoCurso;
    }
}

export class Alumno extends Persona {
    constructor(nombre, apellido, direccion, telefono) {
        super(nombre, apellido);
        this.direccion = direccion;
        this.telefono = telefono;
    }

    getDireccion() {
        return this.direccion;
    }

    setDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion
    }

    getTelefono() {
        return this.telefono;
    }

    setTelefono(nuevoTelefono) {
        this.telefono = nuevoTelefono;
    }

    generarCodigo() {
        let codigo = 'alu-';
        codigo += `${this.nombre.slice(0, 2)}${this.apellido.slice(0, 2)}${this.telefono.slice(-3)}`;
        return codigo;
    }
}



export class UI {
    mensaje(mensaje, tipo, posicion) {
        const div = document.createElement('div');
        div.classList.add('contenedorMensaje', 'mensajeFormulario');
        const p = document.createElement('p');
        p.textContent = mensaje;

        const getDiv = document.querySelector('.contenedorMensaje');
        if (getDiv !== null) {
            getDiv.remove();
        }

        div.appendChild(p);

        posicion.appendChild(div);

        if (tipo === 'error') {
            setTimeout(() => {
                div.remove();
            }, 3000);
        }

    }

    campoAlumno(posicion) {
        const div = document.createElement('div');
        div.classList.add('campoAdicional');
        div.innerHTML = `
        <form action="" id="formularioAlumno" class="formulario">
        <h3>Matricular alumno</h3>
        <div class="columnasDos" id="campos">
          <div class="campo">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombreAlumno" />
          </div>
          <div class="campo">
            <label for="apellidoAlumno">Apellido:</label>
            <input type="text" name="apellidoAlumno" id="apellidoAlumno" />
          </div>
          <div class="campo">
            <label for="telefono">Telefono:</label>
            <input type="text" name="telefono" id="telefono" />
          </div>
          <div class="campo">
            <label for="direccion">Dirección:</label>
            <input type="direccion" name="direccion" id="direccion" />
          </div>
          <div class="campo">
            <label for="codigoGenerado">Código generado:</label>
            <input
              type="codigoGenerado"
              name="codigoGenerado"
              id="codigoGenerado"
              disabled
            />
          </div>
        </div>
        <input type="submit" value="Validar" class="btn" />
      </form>
        `;

        const getDiv = document.querySelector('.campoAdicional');
        if (getDiv !== null) {
            getDiv.remove();
        }


        posicion.appendChild(div);
    }
}