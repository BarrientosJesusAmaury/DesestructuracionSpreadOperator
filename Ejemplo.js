const jugador = {
    nombre: "Steve",
    experiencia: 15,
    inventario: {
      herramienta: "Pico de diamante",
      comida: "Manzana dorada",
      bloques: 64
    }
  };

const nuevoObjeto = "Antorcha";

const nuevoInventario = { ...jugador.inventario, nuevoObjeto };
console.log(nuevoInventario);

const { nombre, inventario: { herramienta } } = jugador;
console.log(`${nombre} tiene un ${herramienta}.`);