function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.piernas = 4;
}

const persona1 = new Persona('Homero', 39);

    persona1.edad = 528;
    persona1.nombre = 'pepa la cerdita';
    console.log(persona1.nombre);


    let nota = parseInt( prompt("ingrese su nota"))
    let nombre = prompt("ingrese su nombre")
    let año = prompt("ingrese su año")
    
    class EscuelaCicloSuperior{
    
        constructor(nombre, año, nota, resolucion){
            this.nombre = nombre.toUpperCase();
            this.año = año;
            this.nota = nota;
            this.resolucion = resolucion;
            
        }
        
        devolucion(){
            
            console.log(`Alumno ${this.nombre} de ${this.año}to año, tu nota es: ${this.nota}  `);
            
        }
        
    }
    const alumno1 = new EscuelaCicloSuperior(nombre, año, nota)
    alumno1.devolucion();


    function Persona(nombre, edad) {
        //constructor
        this.nombre = nombre;
        this.edad = edad;
        this.piernas = 4;
      
        //funciones
        this.hablar = function () {
          console.log('hola yo soy ' + (this.nombre || 'amigo') + ' tengo ' + this.piernas + ' piernas!');
        };
        this.resetear = function () {
          this.nombre = '';
          this.edad = 0;
          this.piernas = 0;
        };
      }
      
      class Persona {
        //constructor
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
          this.piernas = 4;
        }
        //funciones
        hablar() {
          console.log('hola yo soy ' + (this.nombre || 'amigo') + ' tengo ' + this.piernas + ' piernas!');
        }
        resetear() {
          this.nombre = '';
          this.edad = 0;
          this.piernas = 0;
        }
      }
      
      const persona1 = new Persona('Homero', 39);
      persona1.resetear();
      persona1.hablar();
      
    