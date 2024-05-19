chrome.runtime.onInstalled.addListener(() => {
    console.log("Extensión instalada");
  });
  
  // Función para leer el texto utilizando la API TTS de Chrome
  function leerTexto(texto) {
    chrome.tts.speak(texto, { enqueue: true }, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log("Texto leído");
      }
    });
  }
  
  // Escucha mensajes desde el popup o content script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "leerTexto") {
      leerTexto(message.texto);
      sendResponse({ status: "leyendo" });
    }
    // Indicamos que vamos a enviar una respuesta de forma asincrónica
    return true;
  });
  
