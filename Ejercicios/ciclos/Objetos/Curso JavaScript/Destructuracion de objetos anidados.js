let autoGuardado = {
    archivo: "app.js",
    cursor: {
      linea: 7,
      columna: 16
  },
  ultimoArchivo: {
    archivo: "index.html",
    cursor: {
      linea: 8,
      columna: 20
    } 
  },
  otroNodo: {
    subNodo:{
      cursor: {
        linea: 11,
        columna: 11
      }
    }
  }
};

//Primera Forma de Destructuracion

let { cursor:cursorA } = autoGuardado;
console.log(cursorA);

let { ultimoArchivo: { cursor:cursorB } } = autoGuardado;
console.log(cursorB);

let { otroNodo: { subNodo: { cursor:cursorC } } } = autoGuardado;
console.log(cursorC);

//Segunda Forma de Destructuracion

let Objeto_OtroNodo = autoGuardado.otroNodo.subNodo.cursor;
console.log(Objeto_OtroNodo);