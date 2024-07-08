let texto = document.getElementById('txtRpta').value;
function copyText(){

    //let texto = document.getElementById('txtRpta').innerHTML;
    alert(`Esto se supone que esta en texto ${texto} `);
    const copiarContenido = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }
}


async function copiarContenido() {
    try {
      //await navigator.clipboard.writeText('Este es el texto a copiar');
      await navigator.clipboard.writeText(texto);
      console.log('Contenido copiado al portapapeles');
      /* Resuelto - texto copiado al portapapeles con éxito */
    } catch (err) {
      console.error('Error al copiar: ', err);
      /* Rechazado - fallo al copiar el texto al portapapeles */
    }
  }
