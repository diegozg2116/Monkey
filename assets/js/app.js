/*
 * MY LITTLE PLUSHIE - conexión entre la interfaz y el personaje.
 * El SVG del monito solo se define en monkey.js.
 */
(function () {
  'use strict';

  var bubble = document.getElementById('speech-bubble');
  var statePill = document.getElementById('state-pill');
  var bubbleTimer = null;

  var STATE_LABELS = {
    idle: 'REPOSO',
    hug: 'ABRAZANDO',
    dance: 'BAILANDO',
    wave: 'SALUDANDO',
    sleep: 'DORMIDO',
    wake: 'DESPERTANDO',
    joy: 'FELIZ',
    tilt: 'CURIOSO'
  };

  function showBubble(message, duration) {
    if (!bubble || !message) return;
    bubble.textContent = message;
    bubble.classList.add('is-visible');
    if (bubbleTimer) window.clearTimeout(bubbleTimer);
    if (duration && duration > 0) {
      bubbleTimer = window.setTimeout(function () {
        bubble.classList.remove('is-visible');
      }, duration);
    }
  }

  var monkey = new PlushMonkey('#monkey-stage', {
    onMessage: showBubble,
    onStateChange: function (state) {
      if (statePill) statePill.textContent = STATE_LABELS[state] || state.toUpperCase();
      document.querySelectorAll('.action-btn').forEach(function (button) {
        var action = button.getAttribute('data-action');
        button.classList.toggle('is-active', action === state);
      });
    }
  });

  /* Botones de animación */
  document.getElementById('action-buttons').addEventListener('click', function (event) {
    var button = event.target.closest('[data-action]');
    if (!button) return;
    var action = button.getAttribute('data-action');
    if (typeof monkey[action] === 'function') monkey[action]();
  });

  /* ---------------- Reproductor de MP3 ---------------- */
  var audio = new Audio();
  audio.preload = 'metadata';
  audio.volume = 0.7;

  var fileInput = document.getElementById('mp3-file');
  var fileLabel = document.querySelector('.file-label');
  var trackName = document.getElementById('track-name');
  var playBtn = document.getElementById('play-btn');
  var stopBtn = document.getElementById('stop-btn');
  var volumeInput = document.getElementById('volume');
  var seekInput = document.getElementById('seek');
  var timeCurrent = document.getElementById('time-current');
  var timeTotal = document.getElementById('time-total');
  var playerStatus = document.getElementById('player-status');
  var objectUrl = null;

  function formatTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    var minutes = Math.floor(seconds / 60);
    var rest = Math.floor(seconds % 60);
    return minutes + ':' + (rest < 10 ? '0' + rest : rest);
  }

  function updatePlayButton() {
    playBtn.setAttribute('data-playing', String(!audio.paused && !audio.ended));
  }

  function setMusicAnimation(active) {
    monkey.setMusicActive(active && !audio.paused && !audio.ended);
  }

  function loadFile(file) {
    if (!file) return;
    var isMp3 = /\.mp3$/i.test(file.name) || file.type === 'audio/mpeg' || file.type === 'audio/mp3';
    if (!isMp3) {
      playerStatus.textContent = 'Por favor elige un archivo MP3.';
      showBubble('NECESITO UN ARCHIVO MP3.', 2200);
      return;
    }

    if (objectUrl) URL.revokeObjectURL(objectUrl);
    objectUrl = URL.createObjectURL(file);
    audio.src = objectUrl;
    audio.load();
    trackName.textContent = file.name;
    trackName.title = file.name;
    playerStatus.textContent = 'Archivo cargado. Pulsa reproducir.';
    showBubble('¡YA TENGO MÚSICA!', 2200);
    updatePlayButton();
    setMusicAnimation(false);
  }

  fileInput.addEventListener('change', function () {
    loadFile(fileInput.files && fileInput.files[0]);
  });

  /* Arrastrar y soltar un MP3 sobre la etiqueta del archivo */
  if (fileLabel) {
    fileLabel.addEventListener('dragover', function (event) {
      event.preventDefault();
      fileLabel.style.borderColor = '#EFA6B5';
    });
    fileLabel.addEventListener('dragleave', function () {
      fileLabel.style.borderColor = '';
    });
    fileLabel.addEventListener('drop', function (event) {
      event.preventDefault();
      fileLabel.style.borderColor = '';
      loadFile(event.dataTransfer.files && event.dataTransfer.files[0]);
    });
  }

  playBtn.addEventListener('click', function () {
    if (!audio.src) {
      playerStatus.textContent = 'Primero elige un archivo MP3.';
      showBubble('ELIGE UN MP3 PRIMERO.', 2200);
      return;
    }

    if (audio.paused || audio.ended) {
      var promise = audio.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(function () {
          playerStatus.textContent = 'No se pudo reproducir ese archivo.';
        });
      }
    } else {
      audio.pause();
    }
  });

  stopBtn.addEventListener('click', function () {
    audio.pause();
    try { audio.currentTime = 0; } catch (ignore) { /* archivo aún no cargado */ }
    playerStatus.textContent = 'Reproducción detenida.';
    updatePlayButton();
    setMusicAnimation(false);
  });

  volumeInput.addEventListener('input', function () {
    audio.volume = Number(volumeInput.value);
  });

  seekInput.addEventListener('input', function () {
    if (!isFinite(audio.duration) || audio.duration <= 0) return;
    audio.currentTime = (Number(seekInput.value) / 100) * audio.duration;
  });

  audio.addEventListener('play', function () {
    playerStatus.textContent = 'Sonando... el monito te acompaña.';
    showBubble('¡A BAILAR!', 1800);
    updatePlayButton();
    setMusicAnimation(true);
  });

  audio.addEventListener('pause', function () {
    playerStatus.textContent = 'Música en pausa.';
    updatePlayButton();
    setMusicAnimation(false);
  });

  audio.addEventListener('ended', function () {
    playerStatus.textContent = 'La canción terminó.';
    updatePlayButton();
    setMusicAnimation(false);
  });

  audio.addEventListener('loadedmetadata', function () {
    timeTotal.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', function () {
    timeCurrent.textContent = formatTime(audio.currentTime);
    if (isFinite(audio.duration) && audio.duration > 0) {
      seekInput.value = String((audio.currentTime / audio.duration) * 100);
    }
  });

  audio.addEventListener('error', function () {
    playerStatus.textContent = 'Ese archivo no se pudo leer como MP3.';
    setMusicAnimation(false);
  });

  window.addEventListener('beforeunload', function () {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  });

  /* Exponer la instancia para depuración / pruebas desde la consola */
  window.plushie = monkey;
})();
