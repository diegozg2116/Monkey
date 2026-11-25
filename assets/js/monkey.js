/*
 * MY LITTLE PLUSHIE - monito de peluche 100% generado por código.
 *
 * Este archivo es la ÚNICA definición del personaje. El SVG se construye una
 * sola vez y las animaciones se controlan cambiando el atributo data-state.
 * No se usan imágenes, GIF, emojis ni modelos externos.
 */
(function (global) {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';

  var HEART_PATH =
    'M0 8 C-16 -3 -14 -16 -5 -16 C-1 -16 0 -12 0 -10 ' +
    'C0 -12 1 -16 5 -16 C14 -16 16 -3 0 8 Z';

  var STATES = ['idle', 'hug', 'dance', 'wave', 'sleep', 'wake', 'joy', 'tilt'];

  var MESSAGES = {
    idle: '¡Hola! Soy tu monito peluche.',
    hug: '¡VEN, QUE TE DOY UN ABRAZO!',
    dance: '¡A BAILAR, A BAILAR!',
    wave: '¡HOLA, HOLA! QUÉ GUSTO VERTE.',
    sleep: 'Zzz... SOÑANDO CON ABRAZOS...',
    wake: '¡BUENOS DÍAS! YA ESTOY DESPIERTO.',
    joy: '¡QUÉ ALEGRÍA! ¡SALTEMOS!',
    tilt: '¿EH? ¿ME ESTABAS HABLANDO?'
  };

  /* SVG completo del personaje: formas vectoriales, gradientes, filtros y
     grupos independientes para cada parte animable. */
  var MONKEY_SVG = [
    '<svg class="plush" id="monkey-svg" viewBox="0 0 420 480" role="img"',
    ' aria-label="Monito de peluche marrón con ojos brillantes, mejillas rosadas y barriguita crema"',
    ' data-state="idle" xmlns="http://www.w3.org/2000/svg">',
    '  <defs>',
    '    <radialGradient id="g-head" cx="34%" cy="25%" r="78%">',
    '      <stop offset="0%" stop-color="#DDB08D"/>',
    '      <stop offset="42%" stop-color="#C99C78"/>',
    '      <stop offset="74%" stop-color="#A87959"/>',
    '      <stop offset="100%" stop-color="#76513E"/>',
    '    </radialGradient>',
    '    <radialGradient id="g-body" cx="38%" cy="22%" r="85%">',
    '      <stop offset="0%" stop-color="#D7AB88"/>',
    '      <stop offset="55%" stop-color="#A87959"/>',
    '      <stop offset="100%" stop-color="#76513E"/>',
    '    </radialGradient>',
    '    <radialGradient id="g-ear" cx="35%" cy="30%" r="75%">',
    '      <stop offset="0%" stop-color="#C99C78"/>',
    '      <stop offset="70%" stop-color="#A87959"/>',
    '      <stop offset="100%" stop-color="#76513E"/>',
    '    </radialGradient>',
    '    <radialGradient id="g-ear-inner" cx="42%" cy="35%" r="70%">',
    '      <stop offset="0%" stop-color="#F8CBD3"/>',
    '      <stop offset="60%" stop-color="#EFA6B5"/>',
    '      <stop offset="100%" stop-color="#D98599"/>',
    '    </radialGradient>',
    '    <radialGradient id="g-belly" cx="40%" cy="30%" r="75%">',
    '      <stop offset="0%" stop-color="#FFF9EF"/>',
    '      <stop offset="65%" stop-color="#F6E5CF"/>',
    '      <stop offset="100%" stop-color="#E5CBA9"/>',
    '    </radialGradient>',
    '    <radialGradient id="g-muzzle" cx="42%" cy="30%" r="78%">',
    '      <stop offset="0%" stop-color="#FFF6E8"/>',
    '      <stop offset="58%" stop-color="#F1D5B5"/>',
    '      <stop offset="100%" stop-color="#C99C78"/>',
    '    </radialGradient>',
    '    <linearGradient id="g-limb" x1="0%" y1="0%" x2="100%" y2="100%">',
    '      <stop offset="0%" stop-color="#C99C78"/>',
    '      <stop offset="58%" stop-color="#A87959"/>',
    '      <stop offset="100%" stop-color="#76513E"/>',
    '    </linearGradient>',
    '    <radialGradient id="g-paw" cx="36%" cy="30%" r="72%">',
    '      <stop offset="0%" stop-color="#D8AD8A"/>',
    '      <stop offset="70%" stop-color="#A87959"/>',
    '      <stop offset="100%" stop-color="#76513E"/>',
    '    </radialGradient>',
    '    <linearGradient id="g-shine" x1="0%" y1="0%" x2="0%" y2="100%">',
    '      <stop offset="0%" stop-color="#FFFFFF" stop-opacity=".55"/>',
    '      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>',
    '    </linearGradient>',

    '    <filter id="f-shadow" x="-35%" y="-35%" width="170%" height="180%">',
    '      <feDropShadow dx="0" dy="7" stdDeviation="7" flood-color="#4A2D20" flood-opacity=".28"/>',
    '    </filter>',
    '    <filter id="f-soft" x="-25%" y="-25%" width="150%" height="150%">',
    '      <feGaussianBlur stdDeviation="1.4"/>',
    '    </filter>',
    '    <filter id="f-blur" x="-30%" y="-30%" width="160%" height="160%">',
    '      <feGaussianBlur stdDeviation="7"/>',
    '    </filter>',

    '    <pattern id="p-fur" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">',
    '      <path d="M3 4 l4 -2 M11 8 l5 -2 M5 13 l4 -2 M14 16 l3 -1"',
    '            stroke="#F6E5CF" stroke-width="1.3" stroke-linecap="round" opacity=".24" fill="none"/>',
    '      <path d="M2 10 l3 -1 M9 2 l4 -1 M8 16 l4 -1"',
    '            stroke="#76513E" stroke-width="1" stroke-linecap="round" opacity=".20" fill="none"/>',
    '    </pattern>',

    '    <clipPath id="clip-head"><circle cx="210" cy="178" r="106"/></clipPath>',
    '    <clipPath id="clip-body"><ellipse cx="210" cy="333" rx="91" ry="80"/></clipPath>',
    '  </defs>',

    '  <g id="group-bounce">',
    '    <ellipse class="ground-shadow" cx="210" cy="451" rx="122" ry="16"',
    '             fill="#4A2D20" opacity=".17" filter="url(#f-soft)"/>',

    '    <g id="group-figure">',

    /* ---- Cola: sale detrás del cuerpo y gira desde su base ---- */
    '      <g id="group-tail">',
    '        <path d="M252 386 C292 398 320 379 318 349 C317 326 301 318 290 330 C282 339 287 350 299 348"',
    '              fill="none" stroke="#76513E" stroke-width="30" stroke-linecap="round"',
    '              opacity=".42" filter="url(#f-soft)"/>',
    '        <path d="M252 386 C292 398 320 379 318 349 C317 326 301 318 290 330 C282 339 287 350 299 348"',
    '              fill="none" stroke="url(#g-limb)" stroke-width="25" stroke-linecap="round"',
    '              filter="url(#f-shadow)"/>',
    '        <path d="M260 383 C291 391 310 373 309 350 C308 334 299 328 292 335"',
    '              fill="none" stroke="#F6E5CF" stroke-width="6" stroke-linecap="round" opacity=".30"/>',
    '        <circle cx="299" cy="348" r="5.5" fill="#C99C78" opacity=".85"/>',
    '      </g>',

    /* ---- Patitas: rotan desde la cadera ---- */
    '      <g id="group-left-leg">',
    '        <path d="M175 389 C166 410 159 427 159 438" fill="none" stroke="#76513E"',
    '              stroke-width="36" stroke-linecap="round" opacity=".35" filter="url(#f-soft)"/>',
    '        <path d="M175 389 C166 410 159 427 159 438" fill="none" stroke="url(#g-limb)"',
    '              stroke-width="32" stroke-linecap="round"/>',
    '        <ellipse cx="157" cy="441" rx="32" ry="21" fill="url(#g-paw)" filter="url(#f-shadow)"/>',
    '        <ellipse cx="157" cy="444" rx="18" ry="11" fill="url(#g-belly)" opacity=".92"/>',
    '        <ellipse cx="150" cy="437" rx="9" ry="5" fill="#FFFFFF" opacity=".22" filter="url(#f-soft)"/>',
    '      </g>',
    '      <g id="group-right-leg">',
    '        <path d="M245 389 C254 410 261 427 261 438" fill="none" stroke="#76513E"',
    '              stroke-width="36" stroke-linecap="round" opacity=".35" filter="url(#f-soft)"/>',
    '        <path d="M245 389 C254 410 261 427 261 438" fill="none" stroke="url(#g-limb)"',
    '              stroke-width="32" stroke-linecap="round"/>',
    '        <ellipse cx="263" cy="441" rx="32" ry="21" fill="url(#g-paw)" filter="url(#f-shadow)"/>',
    '        <ellipse cx="263" cy="444" rx="18" ry="11" fill="url(#g-belly)" opacity=".92"/>',
    '        <ellipse cx="256" cy="437" rx="9" ry="5" fill="#FFFFFF" opacity=".22" filter="url(#f-soft)"/>',
    '      </g>',

    /* ---- Cuerpo esponjoso y barriguita crema ---- */
    '      <g id="group-body">',
    '        <ellipse cx="210" cy="333" rx="91" ry="80" fill="url(#g-body)" filter="url(#f-shadow)"/>',
    '        <g clip-path="url(#clip-body)">',
    '          <rect x="115" y="248" width="190" height="175" fill="url(#p-fur)"/>',
    '          <ellipse cx="170" cy="288" rx="72" ry="48" fill="#FFF6E8" opacity=".17" filter="url(#f-soft)"/>',
    '          <ellipse cx="258" cy="382" rx="70" ry="38" fill="#5A3B2E" opacity=".14" filter="url(#f-soft)"/>',
    '        </g>',
    '        <ellipse cx="210" cy="347" rx="59" ry="55" fill="url(#g-belly)" filter="url(#f-shadow)"/>',
    '        <ellipse cx="196" cy="327" rx="35" ry="30" fill="url(#g-shine)" opacity=".55" filter="url(#f-soft)"/>',
    '        <path d="M187 365 Q210 379 233 365" fill="none" stroke="#D9BDA0"',
    '              stroke-width="2.4" stroke-linecap="round" opacity=".7"/>',
    '        <path d="M210 330 C205 322 194 326 195 335 C196 342 210 350 210 350',
    '                 C210 350 224 342 225 335 C226 326 215 322 210 330 Z"',
    '              fill="#EFA6B5" opacity=".45"/>',
    '      </g>',

    /* ---- Cabeza grande: orejas, textura, ojos, mejillas y hocico ---- */
    '      <g id="group-head">',
    '        <g id="ears">',
    '          <circle cx="119" cy="102" r="42" fill="url(#g-ear)" filter="url(#f-shadow)"/>',
    '          <ellipse cx="119" cy="104" rx="25" ry="28" fill="url(#g-ear-inner)" transform="rotate(-12 119 104)"/>',
    '          <ellipse cx="112" cy="96" rx="10" ry="7" fill="#FFFFFF" opacity=".25" filter="url(#f-soft)"/>',
    '          <circle cx="301" cy="102" r="42" fill="url(#g-ear)" filter="url(#f-shadow)"/>',
    '          <ellipse cx="301" cy="104" rx="25" ry="28" fill="url(#g-ear-inner)" transform="rotate(12 301 104)"/>',
    '          <ellipse cx="294" cy="96" rx="10" ry="7" fill="#FFFFFF" opacity=".25" filter="url(#f-soft)"/>',
    '        </g>',

    '        <circle cx="210" cy="178" r="106" fill="url(#g-head)" filter="url(#f-shadow)"/>',
    '        <g clip-path="url(#clip-head)">',
    '          <rect x="100" y="68" width="220" height="225" fill="url(#p-fur)"/>',
    '          <ellipse cx="168" cy="118" rx="96" ry="66" fill="#FFF6E8" opacity=".16" filter="url(#f-soft)"/>',
    '          <ellipse cx="265" cy="245" rx="88" ry="42" fill="#5A3B2E" opacity=".13" filter="url(#f-soft)"/>',
    '        </g>',
    '        <path d="M168 87 Q183 58 197 83 Q209 54 224 84 Q239 61 251 92"',
    '              fill="none" stroke="#76513E" stroke-width="9" stroke-linecap="round" opacity=".7"/>',
    '        <path d="M174 84 Q188 66 198 87 Q210 65 222 88 Q236 72 246 94"',
    '              fill="none" stroke="#C99C78" stroke-width="4" stroke-linecap="round" opacity=".75"/>',

    '        <g class="cheeks">',
    '          <ellipse cx="139" cy="211" rx="24" ry="14" fill="#EFA6B5" opacity=".72" filter="url(#f-blur)"/>',
    '          <ellipse cx="281" cy="211" rx="24" ry="14" fill="#EFA6B5" opacity=".72" filter="url(#f-blur)"/>',
    '        </g>',

    '        <g id="group-eyes">',
    '          <g id="eyes-open">',
    '            <ellipse cx="173" cy="171" rx="15" ry="17" fill="#30231F"/>',
    '            <ellipse cx="247" cy="171" rx="15" ry="17" fill="#30231F"/>',
    '            <circle cx="168" cy="165" r="5.4" fill="#FFFFFF" opacity=".96"/>',
    '            <circle cx="242" cy="165" r="5.4" fill="#FFFFFF" opacity=".96"/>',
    '            <circle cx="179" cy="177" r="2.4" fill="#FFFFFF" opacity=".65"/>',
    '            <circle cx="253" cy="177" r="2.4" fill="#FFFFFF" opacity=".65"/>',
    '          </g>',
    '          <g id="eyes-closed" opacity="0">',
    '            <path d="M158 173 Q173 187 188 173" fill="none" stroke="#30231F"',
    '                  stroke-width="4.6" stroke-linecap="round"/>',
    '            <path d="M232 173 Q247 187 262 173" fill="none" stroke="#30231F"',
    '                  stroke-width="4.6" stroke-linecap="round"/>',
    '          </g>',
    '        </g>',

    '        <g id="muzzle">',
    '          <ellipse cx="210" cy="226" rx="62" ry="44" fill="url(#g-muzzle)" filter="url(#f-shadow)"/>',
    '          <ellipse cx="194" cy="210" rx="36" ry="22" fill="#FFFFFF" opacity=".34" filter="url(#f-soft)"/>',
    '          <path d="M199 207 Q210 200 221 207 Q223 216 210 220 Q197 216 199 207 Z" fill="#30231F"/>',
    '          <ellipse cx="205" cy="208" rx="4" ry="2.4" fill="#FFFFFF" opacity=".6"/>',
    '        </g>',

    '        <g id="group-mouth">',
    '          <path d="M210 220 L210 230" stroke="#5A3B2E" stroke-width="3.2" stroke-linecap="round"/>',
    '          <path d="M187 233 Q210 256 233 233" fill="none" stroke="#5A3B2E"',
    '                stroke-width="4.6" stroke-linecap="round"/>',
    '          <path d="M199 244 Q210 252 221 244" fill="none" stroke="#EFA6B5"',
    '                stroke-width="3" stroke-linecap="round" opacity=".8"/>',
    '        </g>',
    '      </g>',

    /* ---- Brazos delante de la cabeza: la mano al saludar queda visible ---- */
    '      <g id="group-left-arm">',
    '        <path d="M143 300 C119 311 102 329 96 349" fill="none" stroke="#76513E"',
    '              stroke-width="36" stroke-linecap="round" opacity=".38" filter="url(#f-soft)"/>',
    '        <path d="M143 300 C119 311 102 329 96 349" fill="none" stroke="url(#g-limb)"',
    '              stroke-width="31" stroke-linecap="round"/>',
    '        <path d="M136 303 C119 315 107 328 102 342" fill="none" stroke="#F6E5CF"',
    '              stroke-width="6" stroke-linecap="round" opacity=".34"/>',
    '        <circle cx="95" cy="351" r="21" fill="url(#g-paw)" filter="url(#f-shadow)"/>',
    '        <ellipse cx="88" cy="345" rx="8" ry="5.5" fill="#FFFFFF" opacity=".28" filter="url(#f-soft)"/>',
    '      </g>',
    '      <g id="group-right-arm">',
    '        <path d="M277 300 C301 311 318 329 324 349" fill="none" stroke="#76513E"',
    '              stroke-width="36" stroke-linecap="round" opacity=".38" filter="url(#f-soft)"/>',
    '        <path d="M277 300 C301 311 318 329 324 349" fill="none" stroke="url(#g-limb)"',
    '              stroke-width="31" stroke-linecap="round"/>',
    '        <path d="M284 303 C301 315 313 328 318 342" fill="none" stroke="#F6E5CF"',
    '              stroke-width="6" stroke-linecap="round" opacity=".34"/>',
    '        <circle cx="325" cy="351" r="21" fill="url(#g-paw)" filter="url(#f-shadow)"/>',
    '        <ellipse cx="318" cy="345" rx="8" ry="5.5" fill="#FFFFFF" opacity=".28" filter="url(#f-soft)"/>',
    '      </g>',

    '      <g id="effects-layer" pointer-events="none"></g>',
    '    </g>',
    '  </g>',
    '</svg>'
  ].join('\n');

  function makeSvgElement(tag, attributes) {
    var element = document.createElementNS(SVG_NS, tag);
    if (attributes) {
      Object.keys(attributes).forEach(function (key) {
        element.setAttribute(key, attributes[key]);
      });
    }
    return element;
  }

  function PlushMonkey(container, options) {
    options = options || {};
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    if (!this.container) {
      throw new Error('PlushMonkey: no se encontró el contenedor del personaje.');
    }

    this.state = 'idle';
    this.timers = [];
    this.sleepTimer = null;
    this.messageTimer = null;
    this.onMessage = options.onMessage || null;
    this.onStateChange = options.onStateChange || null;
    this.messageDuration = options.messageDuration || 2600;
    this.reducedMotion = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.render();
    this.bindEvents();
    return this;
  }

  PlushMonkey.prototype.render = function () {
    this.container.innerHTML = MONKEY_SVG;
    this.root = this.container.querySelector('.plush');
    this.effects = this.container.querySelector('#effects-layer');
    this.root.tabIndex = 0;
    this.root.setAttribute('aria-live', 'off');
    this.say(MESSAGES.idle, 3200);
  };

  PlushMonkey.prototype.bindEvents = function () {
    var self = this;

    this.root.addEventListener('click', function () {
      if (self.state === 'sleep') {
        self.wake();
      } else {
        self.reactRandom();
      }
    });

    this.root.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (self.state === 'sleep') {
          self.wake();
        } else {
          self.reactRandom();
        }
      }
    });
  };

  PlushMonkey.prototype.clearTimers = function () {
    var self = this;
    this.timers.forEach(function (id) { global.clearTimeout(id); });
    this.timers = [];
    if (this.sleepTimer) {
      global.clearInterval(this.sleepTimer);
      this.sleepTimer = null;
    }
    if (this.messageTimer) {
      global.clearTimeout(this.messageTimer);
      this.messageTimer = null;
    }
    if (self.effects) {
      while (self.effects.firstChild) {
        self.effects.removeChild(self.effects.firstChild);
      }
    }
  };

  PlushMonkey.prototype.schedule = function (callback, delay) {
    var id = global.setTimeout(callback, delay);
    this.timers.push(id);
    return id;
  };

  PlushMonkey.prototype.setState = function (state, duration) {
    if (STATES.indexOf(state) === -1) return this;

    this.clearTimers();
    this.state = state;
    this.root.setAttribute('data-state', state);
    if (this.onStateChange) this.onStateChange(state);
    this.say(MESSAGES[state], state === 'sleep' ? 0 : Math.min(duration || 2600, 4200));

    if (state === 'hug') this.spawnHearts(7, 165, 235);
    if (state === 'joy') this.spawnHearts(11, 190, 245);
    if (state === 'dance') this.spawnHearts(5, 150, 250);

    if (state === 'sleep') {
      this.spawnLetters(3, 'z', 265, 145);
      var self = this;
      this.sleepTimer = global.setInterval(function () {
        self.spawnLetters(2, 'z', 265, 145);
      }, 1800);
    }

    if (state === 'wake') {
      this.spawnHearts(4, 210, 150);
    }

    if (duration && state !== 'sleep') {
      this.schedule(function () {
        this.setState('idle');
      }.bind(this), duration);
    }
    return this;
  };

  PlushMonkey.prototype.say = function (message, duration) {
    if (this.onMessage) this.onMessage(message, duration || this.messageDuration);
  };

  PlushMonkey.prototype.spawnHearts = function (count, x, y) {
    if (this.reducedMotion) return;
    for (var i = 0; i < count; i += 1) {
      var heart = makeSvgElement('path', {
        d: HEART_PATH,
        'class': 'effect effect-heart',
        fill: i % 3 === 0 ? '#F6E5CF' : (i % 2 === 0 ? '#EFA6B5' : '#F3B9C7')
      });
      this.positionEffect(heart, x + (Math.random() - 0.5) * 110, y + (Math.random() - 0.5) * 60, 1.5 + Math.random() * 0.7);
      this.effects.appendChild(heart);
      this.removeAfter(heart, 2600);
    }
  };

  PlushMonkey.prototype.spawnLetters = function (count, letter, x, y) {
    if (this.reducedMotion) return;
    for (var i = 0; i < count; i += 1) {
      var text = makeSvgElement('text', {
        'class': 'effect effect-z',
        x: 0,
        y: 0
      });
      text.textContent = letter;
      this.positionEffect(text, x + (Math.random() - 0.5) * 70, y + (Math.random() - 0.5) * 30, 2 + Math.random() * 0.8);
      this.effects.appendChild(text);
      this.removeAfter(text, 3100);
    }
  };

  PlushMonkey.prototype.positionEffect = function (element, x, y, duration) {
    element.style.setProperty('--x', Math.round(x) + 'px');
    element.style.setProperty('--y', Math.round(y) + 'px');
    element.style.setProperty('--dx', Math.round((Math.random() - 0.5) * 110) + 'px');
    element.style.setProperty('--dur', duration.toFixed(2) + 's');
    element.style.setProperty('--delay', (Math.random() * 0.3).toFixed(2) + 's');
  };

  PlushMonkey.prototype.removeAfter = function (element, delay) {
    global.setTimeout(function () {
      if (element.parentNode) element.parentNode.removeChild(element);
    }, delay);
  };

  /* API pública: un método por animación */
  PlushMonkey.prototype.hug = function () { return this.setState('hug', 2700); };
  PlushMonkey.prototype.dance = function () { return this.setState('dance', 3800); };
  PlushMonkey.prototype.wave = function () { return this.setState('wave', 2700); };
  PlushMonkey.prototype.sleep = function () { return this.setState('sleep'); };
  PlushMonkey.prototype.wake = function () { return this.setState('wake', 1800); };
  PlushMonkey.prototype.joy = function () { return this.setState('joy', 1500); };
  PlushMonkey.prototype.tilt = function () { return this.setState('tilt', 1900); };

  PlushMonkey.prototype.reactRandom = function () {
    var reactions = ['wave', 'joy', 'tilt'];
    var choice = reactions[Math.floor(Math.random() * reactions.length)];
    return this[choice]();
  };

  PlushMonkey.prototype.setMusicActive = function (active) {
    if (active) this.root.classList.add('music-on');
    else this.root.classList.remove('music-on');
    return this;
  };

  PlushMonkey.prototype.destroy = function () {
    this.clearTimers();
    this.root.remove();
  };

  PlushMonkey.MESSAGES = MESSAGES;
  PlushMonkey.STATES = STATES;

  global.PlushMonkey = PlushMonkey;
})(window);
