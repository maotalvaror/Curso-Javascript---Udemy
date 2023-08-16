/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square */ \"./src/Square.js\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snake */ \"./src/Snake.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default(idCanvasElement) {\n    var standardSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n    _classCallCheck(this, _default);\n    this.myCanvas = document.getElementById(idCanvasElement);\n    this.context = myCanvas.getContext('2d');\n    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.SIZE = standardSize;\n    this.food = null;\n    this.dx = 0;\n    this.dy = 0;\n    this.lastAxis; // 'Y' , 'X'\n\n    document.addEventListener('keydown', this.moveSnake.bind(this));\n  }\n  _createClass(_default, [{\n    key: \"update\",\n    value: function update() {\n      if (this.snakeHasCollided()) {\n        this.gameOver();\n        return;\n      }\n      //Salvar su posición previa del ultimo elemento de la serpiente \n      var lastElement = this.snake.getLastElement();\n      var prevX = lastElement.x;\n      var prevY = lastElement.y;\n\n      //Hacer que la snake avance\n      this.snake.move(dx, dy);\n\n      // determina en que eje ha ocurrido el ultimo movimiento\n      if (this.dx !== 0) {\n        this.lastAxis = 'X';\n      } else if (this.dy !== 0) {\n        this.lastAxis = 'Y';\n      }\n\n      // detectar si la serpiente ha consumido el alimento\n      if (this.food && this.snake.head.checkCollision(this.food)) {\n        this.food = null;\n        // aumentar el tamaño de la serpiente\n        this.snake.addElement(new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](prevX, prevY));\n      }\n\n      // generar el alimento en caso de que no exista\n      this.generateFoodIfNeeded();\n    }\n  }, {\n    key: \"snakeHasCollided\",\n    value: function snakeHasCollided() {\n      // Coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo\n      if (this.snake.hasCollided()) return true;\n\n      // Verificar que la serpiente no se salga de los limites permitidos\n      if (this.snake.hasBrokenTheLimits(0, 380, 0, 440)) return true;\n      return false;\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      alert('Haz perdido');\n      this.dy = 0, this.dx = 0;\n      this.snake.reset();\n    }\n  }, {\n    key: \"generateFoodIfNeeded\",\n    value: function generateFoodIfNeeded() {\n      if (this.food) return;\n      do {\n        this.food = new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getRandomX(), this.getRandomY());\n      } while (this.snake.checkFoodCollision(this.food));\n    }\n  }, {\n    key: \"getRandomX\",\n    value: function getRandomX() {\n      // 0, 20, 40 ..., 380\n      // 0, 1, 2 ..., 19    x20\n      return this.SIZE * parseInt(Math.random() * 20);\n    }\n  }, {\n    key: \"getRandomY\",\n    value: function getRandomY() {\n      // 0, 20, 40 ..., 440\n      // 0, 1, 2 ..., 22\n      return this.SIZE * parseInt(Math.random() * 23);\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this = this;\n      // definir un fondo de color verde\n      this.context.fillStyle = '#078848e5';\n      this.context.fillRect(0, 0, this.myCanvas.width, this.myCanvas.height);\n\n      // cabeza\n      this.drawObject(this.snake.head, '#000000e5');\n\n      // cuerpo\n      this.snake.body.forEach(function (elem) {\n        return _this.drawObject(elem, '#2c2c2ce5');\n      });\n\n      // alimento\n      this.drawObject(this.food, '#ff0015e5');\n    }\n  }, {\n    key: \"drawObject\",\n    value: function drawObject(obj, color) {\n      this.context.fillStyle = color;\n      this.context.fillRect(obj.x, obj.y, this.SIZE, this.SIZE);\n    }\n  }, {\n    key: \"moveSnake\",\n    value: function moveSnake(event) {\n      switch (event.key) {\n        case 'ArrowUp':\n        case 'w':\n          if (this.lastAxis !== 'Y') {\n            this.dx = 0;\n            this.dy = -this.SIZE;\n            console.log('Mover hacia arriba');\n          }\n          break;\n        case 'ArrowDown':\n        case 's':\n          if (this.lastAxis !== 'Y') {\n            this.dx = 0;\n            this.dy = +this.SIZE;\n            console.log('Mover hacia abajo');\n          }\n          break;\n        case 'ArrowRight':\n        case 'd':\n          if (this.lastAxis !== 'X') {\n            this.dx = +this.SIZE;\n            this.dy = 0;\n            console.log('Mover hacia la derecha');\n          }\n          break;\n        case 'ArrowLeft':\n        case 'a':\n          if (this.lastAxis !== 'X') {\n            this.dx = -this.SIZE;\n            this.dy = 0;\n            console.log('Mover hacia la izquierda');\n          }\n          break;\n      }\n    }\n  }]);\n  return _default;\n}();\n\n\n//# sourceURL=webpack://snake-modules/./src/Game.js?");

/***/ }),

/***/ "./src/Snake.js":
/*!**********************!*\
  !*** ./src/Snake.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square */ \"./src/Square.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n    this.head = new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0);\n    this.body = [];\n  }\n  _createClass(_default, [{\n    key: \"addElement\",\n    value: function addElement(element) {\n      this.body.push(element);\n    }\n  }, {\n    key: \"move\",\n    value: function move(dx, dy) {\n      // el cuerpo de la serpiente siga a la cabeza de la \n      for (var i = this.snake.body.length - 1; i >= 1; i--) {\n        this.snake.body[i].x = this.snake.body[i - 1].x; // (elemento 3 <- elemento 2) O (elemento 2 <- elemento 1);\n        this.snake.body[i].y = this.snake.body[i - 1].y;\n      }\n      if (this.snake.body.length >= 1) {\n        this.snake.body[0].x = this.snake.head.x;\n        this.snake.body[0].y = this.snake.head.y;\n      }\n      //Hacer que la snake avance\n      this.head.move(dx, dy);\n    }\n  }, {\n    key: \"getLastElement\",\n    value: function getLastElement() {\n      if (this.snake.body.length >= 1) {\n        return this.body[this.body.length - 1];\n      } else {\n        return this.head;\n      }\n    }\n  }, {\n    key: \"hasCollided\",\n    value: function hasCollided() {\n      for (var i = 0; i < this.body.length; i++) {\n        if (this.body[i].checkCollision(this.head)) {\n          return true;\n        }\n      }\n    }\n  }, {\n    key: \"hasBrokenTheLimits\",\n    value: function hasBrokenTheLimits(x1, x2, y1, y2) {\n      var topCollision = this.head.y < y1;\n      var bottomCollision = this.head.y > y2;\n      var leftCollision = this.head.x < x1;\n      var rightCollision = this.head.x > x2;\n      if (topCollision || bottomCollision || leftCollision || rightCollision) {\n        return true;\n      }\n    }\n  }, {\n    key: \"checkFullCollision\",\n    value: function checkFullCollision(position) {\n      for (var i = 0; i < this.body.length; i++) {\n        if (this.body[i].checkCollision(position)) {\n          return true;\n        }\n      }\n      if (this.head.checkCollision(position)) {\n        return true;\n      }\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.head.x = 0;\n      this.head.y = 0;\n      this.body.length = 0;\n    }\n  }]);\n  return _default;\n}();\n\n\n//# sourceURL=webpack://snake-modules/./src/Snake.js?");

/***/ }),

/***/ "./src/Square.js":
/*!***********************!*\
  !*** ./src/Square.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar _default = /*#__PURE__*/function () {\n  function _default(x, y) {\n    _classCallCheck(this, _default);\n    this.x = x;\n    this.y = y;\n  }\n\n  // Desplazarse\n  _createClass(_default, [{\n    key: \"move\",\n    value: function move(dx, dy) {\n      this.x += dx;\n      this.y += dy;\n    }\n\n    //Detectar una collision\n  }, {\n    key: \"checkCollision\",\n    value: function checkCollision(obj) {\n      return this.x == obj.x && this.y == obj.y;\n    }\n  }]);\n  return _default;\n}();\n\n\n//# sourceURL=webpack://snake-modules/./src/Square.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n\nconsole.log('Iniciando juego...');\nsetInterval(main, 150);\nvar game = new _Game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('myCanvas');\nfunction main() {\n  game.update(); // actualizar las variables del juego\n  game.draw(); // dibujar todos los objetos del juego\n}\n\nfunction update() {\n  var collisionDetected = checkSnakeCollision();\n  if (collisionDetected) {\n    gameOver();\n    return;\n  }\n  //Salvar su posición previa del ultimo elemento de la serpiente \n  var prevX, prevY;\n  var lastElement = snake.getLastElement();\n  prevX = lastElement.x;\n  prevY = lastElement.y;\n\n  //Hacer que la snake avance\n  snake.move(dx, dy);\n\n  // actualizar las coordenadas de la cabeza  la serpiente\n  snake.head.move(dx, dy);\n  // determina en que eje ha ocurrido el ultimo movimiento\n  if (dx !== 0) {\n    lastAxis = 'X';\n  } else if (dy !== 0) {\n    lastAxis = 'Y';\n  }\n\n  // detectar si la serpiente ha consumido el alimento\n  if (food && snake.head.checkCollision(food)) {\n    food = null;\n    // aumentar el tamaño de la serpiente\n    snake.addElement(new Square(prevX, prevY));\n  }\n\n  // generar el alimento en caso de que no exista\n  if (!food) {\n    food = generateFood();\n  }\n}\n\n//# sourceURL=webpack://snake-modules/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;