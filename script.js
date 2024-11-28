document.addEventListener("DOMContentLoaded", () => {
  const gifts = document.querySelectorAll(".gift");

  // Espera un momento y recarga la página
  setTimeout(function () {
    location.reload(); // Recarga la página
  }, 200);  // 500 ms de retraso antes de recargar

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

});
