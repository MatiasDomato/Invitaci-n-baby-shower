document.addEventListener("DOMContentLoaded", function () {
  // Espera a que el DOM esté completamente cargado

  const jsConfetti = new JSConfetti();

  // Obtén el botón por su ID
  var congratsButton = document.getElementById("congrats");

  // Agrega un event listener al botón
  congratsButton.addEventListener("click", function () {
    // Lanza la lluvia de confeti
    jsConfetti.addConfetti();

    // Espera 2200 ms (2.2 segundos) antes de mostrar la alerta
    setTimeout(function () {
      // Muestra una alerta interactiva
      Swal.fire({
        title: '¡Gracias por confirmar tu asistencia!',
        text: 'Te redirigimos a WhatsApp para que confirmes tu asistencia 😎',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        // Redirige a WhatsApp si hacen clic en "Aceptar"
        if (result.isConfirmed) {
          window.location.href = 'https://api.whatsapp.com/send?phone=+5491132620544&text=Hola,%20quiero%20confirmar%20mi%20asistencia%20al%20Baby%20Shower.';
        }
      });
    }, 2200); // 2200 ms de retraso
  });
});

  
  
  