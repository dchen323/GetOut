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
  constructor(ctx,x,y,width){
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = 50;
    this.draw();
    this.dx = 0;
  }

  draw(){
    this.ctx.fillRect(this.x,this.y,this.width,this.length);
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
  constructor(ctx){
    this.x = XSTART;
    this.y = YSTART;
    this.sx = SPRITESIZE;
    this.sy = SPRITESIZE;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./images/chicken.png";
    this.animate = this.animate.bind(this);
    this.swing = true;
    this.dx = 0;
    this.dy = 0;
  }

  draw(){
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x, this.y, this.sx,this.sy);
    };

  }

  animate(){
    this.ctx.drawImage(this.image,this.x,this.y,this.sx,this.sy);
  }

  updateSwing(hook){
    this.x = hook.xEnd - Math.sin(hook.radian) * hook.length;
    this.y = hook.yEnd + Math.cos(hook.radian) * hook.length;
    this.dx = Math.sin(hook.radian) * -1 * hook.length;
    this.dy = Math.cos(hook.radian) * hook.length;
    this.animate();
  }

  lose(){
    return (this.y + this.sy
        >= this.ctx.canvas.height - 45) ;
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
  constructor(ctx){
    this.ctx = ctx;
    this.image = new Image();
    this.image.src= "./images/chicken_coop.png";
    this.sx = SPRITESIZE;
    this.sy = SPRITESIZE;
    this.x = this.ctx.canvas.width - 200;
    this.y = ctx.canvas.height / 2 + 50;
    this.draw = this.draw.bind(this);
  }

  draw(){
    this.ctx.drawImage(this.image,this.x,this.y,this.sx,this.sy);
  }

  checkWin(chicken){
    if (chicken.x < this.x + this.sx &&
        chicken.x + chicken.sx > this.x &&
        chicken.y < this.y + this.sy &&
        chicken.y + chicken.sy > this.y){
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

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.map = new _map__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    this.chicken = new _chicken__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.chickenCoop = new _chicken_coop__WEBPACK_IMPORTED_MODULE_3__["default"](ctx);
    this.mouseDown = false;
    this.loseImage = new Image();
    this.loseImage.src = './images/roasted_chicken.png';
    this.animate = this.animate.bind(this);
    this.update = this.update.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.score = 0;

  }


  init(){
    this.map.makeCeiling();
    this.chicken.draw();
    this.map.makePlatform();
    this.map.makeFire();
    this.ctx.font = "6vw Courier";
    const gradient= this.ctx.createLinearGradient(0,0,800,150);
    gradient.addColorStop("0.33","#F0CB35");
    gradient.addColorStop("0.66","#fe8c00");
    gradient.addColorStop("0.99","#C02425");
    this.ctx.fillStyle= gradient;
    this.ctx.fillText("Press Spacebar",150, 150);
    this.ctx.fillText("to", 400, 250);
    this.ctx.fillText("Start!", 320, 350);
  }

  checkCollision(){
    if (this.hook){
      return this.hook.checkCollision(this.map.ceiling);
    }else {
      return null;
    }
  }



  update(){
    if(this.chickenCoop.checkWin(this.chicken)){
      this.ctx.font = "6vw Courier";
      this.ctx.fillStyle="#f4a142";
      this.ctx.fillText("CONGRATS YOU WIN!",
        this.ctx.canvas.width * 0.87, this.ctx.canvas.height /2);
    }else if (this.chicken.lose()){
      let textPlace = this.score < this.ctx.canvas.width * 0.85/100 ?
        this.chicken.x : this.ctx.canvas.width * 0.88;
      this.ctx.drawImage(this.loseImage,this.chicken.x,this.chicken.y,SPRITESIZE,SPRITESIZE);
      this.ctx.font = "8vw Courier";
      this.ctx.fillStyle="red";
      this.ctx.fillText("BBQ Chicken",
        textPlace, this.ctx.canvas.height /2);
    }else{
      if(this.mouseDown){
        if(!this.checkCollision()){
          this.hook.draw();
        }
      }
      if(this.checkCollision()){
        this.chicken.updateSwing(this.hook);
        this.hook.setPos(this.chicken.x + this.chicken.sx, this.chicken.y);
        this.hook.update();
      }else if(!this.checkCollision()){
        this.chicken.x += this.chicken.dx/50;
        this.chicken.y += + 0.80;
        this.chicken.animate();
      }
      this.map.makeAnimatedFire();
      this.chickenCoop.draw();
      this.updateScore();
    }
  }

  updateScore(){
    this.score = Math.floor((this.chicken.x - 90)/100);
    this.ctx.font = "2vw Courier";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${this.score}`, this.chicken.x - 50, 80);
  }

  panUser(){
    let canvasHolder = document.getElementById("canvas-holder");
    canvasHolder.scrollLeft = this.chicken.x - 100;
  }

  animate(){
    requestAnimationFrame(this.animate);
    this.ctx.clearRect(0,50,this.ctx.canvas.width, this.ctx.canvas.height);
    this.panUser();
    this.update();
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
  constructor(ctx){
    this.ctx = ctx;
    this.yEnd = 50;
    this.draw = this.draw.bind(this);
    this.aVel = 0;
  }

  checkCollision(otherObj){
    let collision = Object.values(otherObj).filter(ceiling => {
        return(
          this.xEnd >= ceiling.x && this.xEnd <= (ceiling.x + ceiling.width)
        );

      });

      return collision[0];
    }

  setPos(x,y){
    this.x = x;
    this.y = y;
    this.radian= this.radian || Math.atan((this.xEnd-x)/Math.abs(this.yEnd-y));
    this.length = this.length || Math.sqrt(Math.pow((this.xEnd-x),2)+Math.pow((this.yEnd-y),2));

  }

  update(){
    let aAcc = -0.01 * Math.sin(this.radian);
    this.radian += this.aVel;
    this.aVel += aAcc;
    this.aVel *= 0.99;

    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.xEnd,this.yEnd);
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
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth * 5;
  canvas.height = window.innerHeight;
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  game.init();

  document.addEventListener('keypress', (event) => {
    if (event.keyCode === 32){
      game.animate();
      document.getElementById('audio').play();
    }
  });


  document.addEventListener('mousedown', (event) => {
    let eventx = event.x - canvas.getBoundingClientRect().left;
    let hook = new _hook__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    hook.xEnd = eventx;
    hook.setPos(game.chicken.x + game.chicken.sx,game.chicken.y - 2);
    if (event.x > window.innerWidth/ 4){
      const sound = new _sound__WEBPACK_IMPORTED_MODULE_2__["default"]("./sound/launch.wav");
      sound.play();
    }
    game.hook = hook;
    game.mouseDown = true;

  });

  document.addEventListener('mouseup', (event) => {
    game.mouseDown = false;
    game.hook = null;
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
  constructor(ctx){
    this.ctx = ctx;
    this.ceiling = {};
    this.makeCeiling = this.makeCeiling.bind(this);
  }

  makeCeiling(){
    let ceilingCount = Math.round(this.ctx.canvas.width /363);
    let x = 0;
    let y = 0;
    let width = (Math.random() + 0.5) * 300;
    for(let i = 0; i < ceilingCount; i++) {
      this.ceiling[i] = new _ceiling__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx,x,y,width);
      x = x + width + (Math.random() + 0.5) * 100;
      width = (Math.random()+ 0.5) * 300;
      if(x + width > this.ctx.canvas.width){
        width = this.ctx.canvas.width - x;
      }
    }
  }

  makePlatform(){
    let startX = 50;
    let startY = 300;
    let platformWidth = 100;
    this.ctx.fillRect(startX,startY,platformWidth, startX);
  }

  makeAnimatedFire(){
    let fire = new Image();
    fire.src = "./images/fire.png";
    let sx2 = 50;
    let sy2 = 50;
    let cx2 = -5;
    let cy2 = this.ctx.canvas.height - sy2;
    while(cx2 < this.ctx.canvas.width - sx2){
      this.ctx.drawImage(fire, cx2,cy2, sx2,sy2);
      cx2 += sx2 - 5;
    }
  }

  makeFire(){
    let fire = new Image();
    fire.src = "./images/fire.png";
    let sx2 = 50;
    let sy2 = 50;
    let cx2 = -5;
    let cy2 = this.ctx.canvas.height - sy2;
    fire.onload = () => {
      while(cx2 < this.ctx.canvas.width - sx2){
        this.ctx.drawImage(fire, cx2,cy2, sx2,sy2);
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