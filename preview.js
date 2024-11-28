document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const audioFile = urlParams.get("audio");


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
  
  window.history.pushState(null, null, window.location.href); // Evita que se retroceda
  window.onpopstate = function () {
    // Al detectar retroceso, recarga la página
    location.reload();
  };
  