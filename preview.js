document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const audioFile = urlParams.get("audio");

  // Esto reemplaza la URL sin agregarla al historial del navegador.
  window.history.replaceState(null, null, window.location.href);
  window.onpopstate = function () {
    location.replace(window.location.href);  // Previene el retroceso.
  };

  // Evitar retroceder y mostrar la capa bloqueadora
  window.history.pushState(null, null, window.location.href);  // Añade un nuevo estado al historial

  window.onpopstate = function () {
    // Muestra la capa bloqueadora cuando el usuario intente retroceder
    document.getElementById("back-blocker").style.display = "block";
  };

  // Ocultar la capa bloqueadora si se realiza otra acción (ej. cuando se hace un clic en la capa)
  document.getElementById("back-blocker").addEventListener("click", function () {
    document.getElementById("back-blocker").style.display = "none";
  });

  // Si no hay archivo de audio, redirige al usuario a la página principal
  if (!audioFile) {
    window.location.href = "index.html";
  }

  // Muestra el reproductor de audio
  const audioPlayer = document.getElementById("audio-player");
  audioPlayer.src = audioFile;

  // Muestra la portada de la canción según el archivo de audio
  const cover = document.getElementById("cover");
  if (audioFile === "preview1.mp3") {
    cover.src = "cover1.jpg";  // Asegúrate de tener las imágenes adecuadas
  } else if (audioFile === "preview2.mp3") {
    cover.src = "cover2.jpg";
  } else if (audioFile === "preview3.mp3") {
    cover.src = "cover3.jpg";
  }
  // Reproduce la canción
  audioPlayer.play();

});


