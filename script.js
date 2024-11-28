document.addEventListener("DOMContentLoaded", () => {
  const gifts = document.querySelectorAll(".gift");


  // Revisa si ya se eligió un regalo
  const chosenGift = localStorage.getItem("chosenGift");

  if (chosenGift) {
    alert("🎁 Ya seleccionaste tu regalo. No puedes elegir otro.");
    gifts.forEach((gift) => {
      gift.style.pointerEvents = "none"; // Desactiva todos los regalos
    });
  } else {
    gifts.forEach((gift) => {
      gift.addEventListener("click", (event) => {
        const selectedGift = event.currentTarget;
        const audioSrc = selectedGift.getAttribute("data-audio");

        // Guarda la elección en localStorage
        localStorage.setItem("chosenGift", audioSrc);

        // Redirige al usuario a la página de preview
        window.location.href = `preview.html?audio=${audioSrc}`;
      });
    });
  }

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

    // Espera un momento y recarga la página
    setTimeout(function () {
      location.reload(); // Recarga la página
    }, 500);  // 500 ms de retraso antes de recargar
  };

  // Ocultar la capa bloqueadora si se realiza otra acción (ej. cuando se hace un clic en la capa)
  document.getElementById("back-blocker").addEventListener("click", function () {
    document.getElementById("back-blocker").style.display = "none";
  });


});
