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
    displaySongName("MARI");
  } else if (audioFile === "preview2.mp3") {
    cover.src = "cover2.jpg";
    displaySongName("NADA QUE OCULTAR");
  } else if (audioFile === "preview3.mp3") {
    cover.src = "cover3.jpg";
    displaySongName("BBY NO SEAS ASI");
  }
  
  // Reproduce la canción
  audioPlayer.play();

  // Función para mostrar el nombre de la canción
  function displaySongName(songName) {
    const songNameElement = document.createElement("h2");  // Crea un nuevo elemento <h2>
    songNameElement.textContent = songName;  // Asigna el nombre de la canción
    songNameElement.classList.add("song-name");  // Agrega la clase CSS para el estilo
    document.querySelector(".preview-container").insertBefore(songNameElement, cover);  // Inserta el nombre antes del cover
  }
});
