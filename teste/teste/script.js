  // Seleciona o elemento de áudio
  const audio = document.getElementById("meuAudio");

  // Tenta tocar o áudio automaticamente
  window.addEventListener('load', () => {
      audio.play().catch(error => {
          console.log("Autoplay bloqueado pelo navegador:", error);
          // Opcional: coloca o áudio em mute e tenta tocar de novo
          audio.muted = true;
          audio.play();
      });
  });