/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/ceiling.js":
/*!************************!*\
  !*** ./lib/ceiling.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Ceiling {
  constructor(ctx, x, y, width) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = 50;
    this.draw();
    this.dx = 0;
  }

  draw() {
    let cloud = new Image();
    cloud.src = "./images/cloud2.png";
    cloud.onload = () => {
      this.ctx.drawImage(cloud, this.x, this.y, this.width, this.length);
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Ceiling);


/***/ }),

/***/ "./lib/chicken.js":
/*!************************!*\
  !*** ./lib/chicken.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const XSTART = 90;
const YSTART = 260;
const SPRITESIZE = 40;

class Chicken {
  constructor(ctx) {
    this.x = XSTART;
    this.y = YSTART;
    this.sx = SPRITESIZE;
    this.sy = SPRITESIZE;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./images/chicken.png";
    this.swing = true;
    this.dx = 0;
    this.dy = 0;
  }

  draw() {
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x, this.y, this.sx, this.sy);
    };
  }

  animate() {
    this.ctx.drawImage(this.image, this.x, this.y, this.sx, this.sy);
  }

  updateSwing(hook) {
    this.x = hook.xEnd - Math.sin(hook.radian) * hook.length;
    this.y = hook.yEnd + Math.cos(hook.radian) * hook.length;
    this.dx = Math.sin(hook.radian) * -1 * hook.length;
    this.dy = Math.cos(hook.radian) * hook.length;
    this.animate();
  }

  lose() {
    return this.y + this.sy >= this.ctx.canvas.height - 45;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Chicken);


/***/ }),

/***/ "./lib/chicken_coop.js":
/*!*****************************!*\
  !*** ./lib/chicken_coop.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SPRITESIZE = 125;

class ChickenCoop {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./images/chicken_coop.png";
    this.sx = SPRITESIZE;
    this.sy = SPRITESIZE;
    this.x = this.ctx.canvas.width - 200;
    this.y = ctx.canvas.height / 2 + 50;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.sx, this.sy);
  }

  checkWin(chicken) {
    if (
      chicken.x < this.x + this.sx &&
      chicken.x + chicken.sx > this.x &&
      chicken.y < this.y + this.sy &&
      chicken.y + chicken.sy > this.y
    ) {
      return 1;
    }
    return null;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ChickenCoop);


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chicken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chicken */ "./lib/chicken.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./lib/map.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ "./lib/hook.js");
/* harmony import */ var _chicken_coop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chicken_coop */ "./lib/chicken_coop.js");





const SPRITESIZE = 80;
const font = "Oswald";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.map = new _map__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    this.chicken = new _chicken__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.chickenCoop = new _chicken_coop__WEBPACK_IMPORTED_MODULE_3__["default"](ctx);
    this.mouseDown = false;
    this.loseImage = new Image();
    this.loseImage.src = "./images/roasted_chicken.png";
    this.animate = this.animate.bind(this);
    this.score = 0;
    this.music = true;
    this.start = false;
  }

  init() {
    this.map.makeCeiling();
    this.chicken.draw();
    this.map.makePlatform();
    this.map.makeFire();
    this.ctx.font = `1.5vw ${font}`;
    this.ctx.fillStyle = "red";
    this.ctx.fillText(
      "Tip: Click and hold the mouse down near/at the ceiling and release before it swings backwards.",
      150,
      500
    );
  }

  checkCollision() {
    if (this.hook) {
      return this.hook.checkCollision(this.map.ceiling);
    } else {
      return null;
    }
  }

  update() {
    if (this.chickenCoop.checkWin(this.chicken)) {
      this.ctx.font = `6vw ${font}`;
      this.ctx.fillStyle = "#f4a142";
      this.ctx.fillText(
        "CONGRATS YOU WIN!",
        this.ctx.canvas.width * 0.88,
        this.ctx.canvas.height / 2
      );
      this.ctx.font = `6vw ${font}`;
      this.ctx.fillText(
        "Press R to Restart",
        this.ctx.canvas.width * 0.88,
        this.ctx.canvas.height / 2 + 200
      );
    } else if (this.chicken.lose()) {
      let textPlace =
        this.score < (this.ctx.canvas.width * 0.85) / 100
          ? this.chicken.x + 75
          : this.ctx.canvas.width * 0.88;
      this.ctx.drawImage(
        this.loseImage,
        this.chicken.x,
        this.chicken.y,
        SPRITESIZE,
        SPRITESIZE
      );
      this.ctx.font = `9vw ${font}`;
      this.ctx.fillStyle = "red";
      this.ctx.fillText(
        "BBQ Chicken",
        textPlace < 0 ? 200 : textPlace,
        this.ctx.canvas.height / 2
      );
      this.ctx.font = `6vw ${font}`;
      this.ctx.fillText(
        "Press R to Restart",
        textPlace < 0 ? 200 : textPlace,
        this.ctx.canvas.height / 2 + 200
      );
    } else {
      if (this.mouseDown) {
        if (!this.checkCollision()) {
          this.hook.draw();
        }
      }
      if (this.checkCollision()) {
        this.chicken.updateSwing(this.hook);
        this.hook.setPos(this.chicken.x + this.chicken.sx, this.chicken.y);
        this.hook.update();
      } else if (!this.checkCollision()) {
        this.chicken.x += this.chicken.dx / 50;
        this.chicken.y += 0.6;
        this.chicken.animate();
      }
      this.map.makeAnimatedFire();
      this.chickenCoop.draw();
      this.updateScore();
    }
  }

  updateScore() {
    this.score = Math.floor((this.chicken.x - 90) / 100);
    if (this.score < 0) this.score = 0;
    this.ctx.font = "2vw Courier";
    this.ctx.fillStyle = "black";
    const xPos = this.chicken.x - 50 < 50 ? 50 : this.chicken.x - 50;
    this.ctx.fillText(`Score: ${this.score}`, xPos, 80);
  }

  panUser() {
    let canvasHolder = document.getElementById("canvas-holder");
    canvasHolder.scrollLeft = this.chicken.x - 100;
  }

  animate() {
    this.frame = requestAnimationFrame(this.animate);
    this.start = true;
    this.ctx.clearRect(0, 50, this.ctx.canvas.width, this.ctx.canvas.height);
    this.panUser();
    this.update();
  }

  stopGame() {
    if (this.frame) {
      cancelAnimationFrame(this.frame);
      this.start = false;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./lib/hook.js":
/*!*********************!*\
  !*** ./lib/hook.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Hook {
  constructor(ctx) {
    this.ctx = ctx;
    this.yEnd = 50;
    this.aVel = 0;
  }

  checkCollision(otherObj) {
    let collision = Object.values(otherObj).filter(ceiling => {
      return this.xEnd >= ceiling.x && this.xEnd <= ceiling.x + ceiling.width;
    });

    return collision[0];
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
    this.radian =
      this.radian || Math.atan((this.xEnd - x) / Math.abs(this.yEnd - y));
    this.length =
      this.length ||
      Math.sqrt(Math.pow(this.xEnd - x, 2) + Math.pow(this.yEnd - y, 2));
  }

  update() {
    let aAcc = -0.01 * Math.sin(this.radian);
    this.radian += this.aVel;
    this.aVel += aAcc;
    this.aVel *= 0.99;

    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.xEnd, this.yEnd);
    this.ctx.stroke();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Hook);


/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./lib/game.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook */ "./lib/hook.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound */ "./lib/sound.js");




document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let canvasHolder = document.getElementById("canvas-holder");

  canvas.width = window.innerWidth * 5;
  canvas.height = window.innerHeight;
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  game.init();
  const audioPlayer = document.getElementById("audio");
  const instructions = document.getElementById("instruction");
  document.addEventListener("keypress", event => {
    if (event.keyCode === 32) {
      instructions.id = "hidden";
      if (!game.start) {
        game.animate();
      }
      if (!audioPlayer.hasAttribute("muted")) {
        audioPlayer.play();
      }
    } else if (event.keyCode === 114) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.stopGame();
      game.chicken.x = 90;
      game.chicken.y = 260;
      game.chicken.dx = 0;
      game.chicken.dy = 0;
      game.chicken.animate();
      canvasHolder.scrollLeft = 0;
      game.init();
      document.getElementById("hidden").id = "instruction";
    }
  });

  document.addEventListener("mousedown", event => {
    let eventx = event.x - canvas.getBoundingClientRect().left;
    let hook = new _hook__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    hook.xEnd = eventx;
    hook.setPos(game.chicken.x + game.chicken.sx, game.chicken.y - 2);
    if (event.x > window.innerWidth / 4) {
      const sound = new _sound__WEBPACK_IMPORTED_MODULE_2__["default"]("./sound/launch.wav");
      sound.play();
    }
    game.hook = hook;
    game.mouseDown = true;
  });

  document.addEventListener("mouseup", event => {
    game.mouseDown = false;
    game.hook = null;
  });

  document.addEventListener("click", event => {
    if (
      event.target.id === "audio-play" ||
      event.target.id === "audio-pause" ||
      event.target.className === "fas fa-pause" ||
      event.target.className === "fas fa-play"
    ) {
      const audioPlay = document.getElementById("audio-play");
      const audioPause = document.getElementById("audio-pause");
      if (game.music === true) {
        audioPlayer.pause();
        audioPause.className = "hidden";
        audioPlay.classList.remove("hidden");
        game.music = false;
        audioPlayer.setAttribute("muted", "");
      } else {
        audioPlayer.play();
        audioPlay.className = "hidden";
        audioPause.classList.remove("hidden");
        game.music = true;
      }
    }
  });
});


/***/ }),

/***/ "./lib/map.js":
/*!********************!*\
  !*** ./lib/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ceiling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ceiling */ "./lib/ceiling.js");

const RADIUS = 50;

class Map {
  constructor(ctx) {
    this.ctx = ctx;
    this.ceiling = {};
  }

  makeCeiling() {
    let ceilingCount = Math.round(this.ctx.canvas.width / 363);
    let x = 0;
    let y = 0;
    let width = (Math.random() + 0.5) * 300;
    for (let i = 0; i < ceilingCount; i++) {
      this.ceiling[i] = new _ceiling__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, x, y, width);
      x = x + width + (Math.random() + 0.5) * 100;
      width = (Math.random() + 0.5) * 300;
      if (x + width > this.ctx.canvas.width) {
        width = this.ctx.canvas.width - x;
      }
    }
  }

  makePlatform() {
    let startX = 50;
    let startY = 300;
    let size = 100;
    let cage = new Image();
    cage.src = "./images/cage.png";
    cage.onload = () => {
      this.ctx.drawImage(cage, startX, startY, size, size);
    };
  }

  makeAnimatedFire() {
    let fire = new Image();
    fire.src = "./images/fire.png";
    let sx2 = 50;
    let sy2 = 50;
    let cx2 = -5;
    let cy2 = this.ctx.canvas.height - sy2;
    while (cx2 < this.ctx.canvas.width - sx2) {
      this.ctx.drawImage(fire, cx2, cy2, sx2, sy2);
      cx2 += sx2 - 5;
    }
  }

  makeFire() {
    let fire = new Image();
    fire.src = "./images/fire.png";
    let sx2 = 50;
    let sy2 = 50;
    let cx2 = -5;
    let cy2 = this.ctx.canvas.height - sy2;
    fire.onload = () => {
      while (cx2 < this.ctx.canvas.width - sx2) {
        this.ctx.drawImage(fire, cx2, cy2, sx2, sy2);
        cx2 += sx2 - 5;
      }
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "./lib/sound.js":
/*!**********************!*\
  !*** ./lib/sound.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class Sound {
  constructor(src){
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  play(){
    this.sound.play();
  }

  stop(){
    this.sound.pause();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Sound);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map