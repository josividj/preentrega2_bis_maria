
class Participante {
    nombre;
    numeroElegido;

    constructor(nombre) {
        this.nombre = nombre;
        this.numeroElegido = null;
    }

    elegirNumero() {
        this.numeroElegido = Math.round(Math.random() * 999 + 1);
        return this.numeroElegido;
    }

    cargarDatos() {
        this.nombre = prompt('Ingrese un nombre');
        this.elegirNumero(); // Llamar a la función "elegirNumero" y asignar el resultado al atributo "numeroElegido" del objeto "Participante"
        alert(`El nombre es ${this.nombre} y el número elegido es ${this.numeroElegido}`)
    }
    
    cargarAlumno() {
        let seguir;
        const alumnos = []; // Creamos un array para almacenar los alumnos ingresados
        do {
            const nuevoAlumno = new Participante(); // Creamos una nueva instancia de Participante
            nuevoAlumno.cargarDatos(); // Llamamos al método "cargarDatos" de la instancia de Participante creada para cargar los datos
            alumnos.push(nuevoAlumno); // Agregamos el nuevo alumno al array de alumnos
            seguir = prompt('Desea continuar? s/n').toLowerCase();
        } while (seguir === 's');
        return alumnos; // Retornamos el array de alumnos
    }
}



