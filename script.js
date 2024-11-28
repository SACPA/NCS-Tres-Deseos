document.addEventListener("DOMContentLoaded", () => {
    const gifts = document.querySelectorAll(".gift");
  

    window.history.pushState(null, null, window.location.href); // Evita que se retroceda
    window.onpopstate = function () {
      // Al detectar retroceso, recarga la página
      location.reload();
    };
    

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
  