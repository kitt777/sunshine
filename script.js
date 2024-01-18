function CambiaMensaje() {
    var loadingMessage = document.getElementById("loading-message");
    if (loadingMessage.innerText === "Cargando...") {
      loadingMessage.innerText = "¡Enviado!";
      
      // Notificación
      var notification = document.createElement("div");
      notification.classList.add("notification");
      notification.innerText = "Recibiste un abrazo...";
      document.body.appendChild(notification);
    
      // Eliminar la notificación después de 6 segundos
      setTimeout(function() {
        document.body.removeChild(notification);
      }, 3000);
    }
  }
  setTimeout(CambiaMensaje, 5900);

  var musicPlaying = true;
var audio = new Audio('what would i do.mp3'); // Reemplaza 'ruta-de-tu-archivo-de-audio.mp3' con la ruta correcta a tu archivo de audio

var musicToggleBtn = document.getElementById('music-toggle-btn');
var iconElement = document.querySelector("#music-toggle-btn img");

musicToggleBtn.addEventListener('click', function() {
  if (musicPlaying) {
    audio.pause();
    musicPlaying = false;
    iconElement.src = 'volumen off.svg';
    iconElement.classList.remove('icon-on');
  } else {
    audio.play();
    musicPlaying = true;
    iconElement.src = 'volumen up.svg';
    iconElement.classList.add('icon-on');
  }
});

window.addEventListener('load', function() {
  audio.play()
});
  var loveLetterModal = document.getElementById("love-letter-modal");
  var loveLetterBtn = document.getElementById("love-letter-btn");
  var closeBtn = document.querySelector(".close");

  loveLetterBtn.addEventListener("click", function() {
    loveLetterModal.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
    loveLetterModal.style.display = "none";
  });