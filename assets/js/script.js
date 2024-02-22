// si JavaScript necesita acceder a valores del formulario ingresados por el usuario, se usa DOMContentLoaded para asegurar que estos elementos estén disponibles cuando se ejecute el código.
document.addEventListener('DOMContentLoaded', () => {

    /******************************* */

    // Clase base - [Propietario]
    class Propietario {
      // constructor propiertario
      constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
      }
  
      // Método para obtener los datos del propietario
      datosPropietario() {
        return `El nombre del dueño es: ${this.nombre}, el domicilio es: ${this.direccion} y el número de contacto es: ${this.telefono}.`;
      }
    }
  
    /******************************* */

    // Clase intermedia - [Animal] que hereda de [Propietario]
    class Animal extends Propietario {
      // constructor Animal, recibe un parámetro ('tipo')
      constructor(nombre, direccion, telefono, tipo) {
        // 'super' se usa para llamar a funciones en el objeto padre.
        super(nombre, direccion, telefono);
        this.tipo = tipo;
      }
  
      // Método para obtener el ('tipo de animal')
      get tipoAnimal() {
        return `El tipo de animal es un: ${this.tipo}`;
      }
    }
  
    /******************************* */

    // Clase final - [Mascota] que hereda de Animal
    class Mascota extends Animal {
      // constructor Mascota, recibe parámetros ('nombreMascota') y ('enfermedad')
      constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this.enfermedad = enfermedad;
      }
  
      // Método para obtener el nombre de la mascota
      get nombreMascota() {
        return this._nombreMascota;
      }
  
      // Método para establecer el nombre de la mascota
      set nombreMascota(nuevoNombre) {
        this._nombreMascota = nuevoNombre;
      }
    }

    /******************************* */
  
    // formulario con id "miFormulario" y div con id "resultado"
    document.getElementById('miFormulario').addEventListener('submit', function(e) {
      e.preventDefault(); // evita que la página recargue el presionar el boton

  
      // crear una nueva mascota con los datos del formulario
      let nombre = document.getElementById('propietario').value;
      let telefono = document.getElementById('telefono').value;
      let direccion = document.getElementById('direccion').value;
      let nombreMascota = document.getElementById('nombreMascota').value;
      let tipo = document.getElementById('tipo').value;   
      let enfermedad = document.getElementById('enfermedad').value;
  
      let mascota = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);


      /******************************* */

  
      // recopilan los datos en resultado
      let ul = document.getElementById('resultado').getElementsByTagName('ul')[0];
      ul.innerHTML = `
        <li>${mascota.datosPropietario()}</li>
        <li>${mascota.tipoAnimal}, mientras que el nombre de la mascota es: ${mascota.nombreMascota} y la enfermedad es: ${mascota.enfermedad}.</li>`;

      // Hace visible los datos de resultado en datosAgregados
      document.getElementById('datosAgregados').style.display = 'block';
    });
  
    // Ocultar el div datosAgregados (vacío)
    document.getElementById('datosAgregados').style.display = 'none';
});


  
  