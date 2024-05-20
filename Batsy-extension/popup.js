document.addEventListener('DOMContentLoaded', () => {
  const leerBtn = document.getElementById("leerBtn");
  const textoInput = document.getElementById("texto");

  // Función para leer el texto en español
  const leerTexto = (texto) => {
      // Crear una instancia de SpeechSynthesisUtterance
      const utterance = new SpeechSynthesisUtterance(texto);
      
      // Configurar el idioma a español
      utterance.lang = 'es-ES';

      // Opcional: Configurar otros parámetros de la voz
      utterance.pitch = 1; // Tono
      utterance.rate = 1; // Velocidad
      utterance.volume = 1; // Volumen

      // Hablar el texto
      window.speechSynthesis.speak(utterance);
  };

  // Lee el texto ingresado cuando se hace clic en el botón
  leerBtn.addEventListener("click", () => {
      const texto = textoInput.value;
      leerTexto(texto);
  });
});
