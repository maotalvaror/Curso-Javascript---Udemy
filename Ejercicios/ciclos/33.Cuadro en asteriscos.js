function llamarFuncion(numeroRecibido) {
  if ( numeroRecibido >= 2 ) {
    var concatenacionAsterisco = '';

    for (let i = 1; i <= numeroRecibido; i++) {
      for (let j = 1; j <= numeroRecibido; j++) {
        concatenacionAsterisco += '*';
      }
      concatenacionAsterisco += "\n";
    }
    console.log(concatenacionAsterisco);
  } else {
    console.log('El numero que digite debe de ser mayor o igual a Dos (2)')
  }
}