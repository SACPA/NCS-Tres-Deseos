document.addEventListener("DOMContentLoaded", () => {
  const gifts = document.querySelectorAll(".gift");

  // Revisa si ya se eligió un regalo
  const chosenGift = localStorage.getItem("chosenGift");

  if (chosenGift) {
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

  // Revisar si el usuario regresa desde preview.html
  window.onpageshow = function(event) {
    // Verificar si el usuario ha vuelto desde preview.html (es decir, usando el botón de retroceso)
    const chosenGift = localStorage.getItem("chosenGift");

    if (chosenGift) {
      alert("🎁 GRACIAS POR ELEGIR, \nDejemos los otros para alguien mas 🙇🏽");
      gifts.forEach((gift) => {
        gift.style.pointerEvents = "none"; // Desactiva todos los regalos
      });
    }
  };

  // Esto es para manejar el retroceso en la navegación (evitar que el usuario vuelva)
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    location.replace(window.location.href);  // Reemplaza la URL actual para evitar el retroceso
  };
});
