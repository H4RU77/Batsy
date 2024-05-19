document.addEventListener('DOMContentLoaded', () => {
    const leerBtn = document.getElementById("leerBtn");
    const textoInput = document.getElementById("texto");


    //lee el texto ingresado
    leerBtn.addEventListener("click", () => {
      const texto = textoInput.value;
      chrome.runtime.sendMessage({ action: "leerTexto", texto: texto }, response => {
        if (response && response.status) {
          console.log(response.status);
        } else {
          console.error('No se recibió una respuesta válida del background script');
        }
      });
    });
  });
  