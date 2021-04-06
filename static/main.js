/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./assets/scss/styles.scss\");\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoPlayer */ \"./assets/js/videoPlayer.js\");\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_videoPlayer__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\n\n//# sourceURL=webpack://ninjatube/./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/videoPlayer.js":
/*!**********************************!*\
  !*** ./assets/js/videoPlayer.js ***!
  \**********************************/
/***/ (() => {

eval("const videoContainer = document.getElementById(\"jsVideoPlayer\");\r\nconst videoPlayer = document.querySelector(\"#jsVideoPlayer video\");\r\nconst playBtn = document.getElementById(\"jsPlayButton\");\r\nconst volumeBtn = document.getElementById(\"jsVolumeBtn\");\r\nconst fullScrnBtn = document.getElementById(\"jsFullScreen\");\r\nconst currentTime = document.getElementById(\"currentTime\");\r\nconst totalTime = document.getElementById(\"totalTime\");\r\nconst volumeRange = document.getElementById(\"jsVolume\");\r\n\r\nfunction handlePlayClick() {\r\n  if (videoPlayer.paused) {\r\n    videoPlayer.play();\r\n    playBtn.innerHTML = '<i class=\"fas fa-pause\"></i>';\r\n  } else {\r\n    videoPlayer.pause();\r\n    playBtn.innerHTML = '<i class=\"fas fa-play\"></i>';\r\n  }\r\n}\r\n\r\nfunction handleVolumeClick() {\r\n  if (videoPlayer.muted) {\r\n    videoPlayer.muted = false;\r\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-up\"></i>';\r\n    volumeRange.value = videoPlayer.volume;\r\n  } else {\r\n    volumeRange.value = 0;\r\n    videoPlayer.muted = true;\r\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-mute\"></i>';\r\n  }\r\n}\r\n\r\nfunction exitFullScreen() {\r\n  fullScrnBtn.innerHTML = '<i class=\"fas fa-expand\"></i>';\r\n  fullScrnBtn.addEventListener(\"click\", goFullScreen);\r\n  if (document.exitFullscreen) {\r\n    document.exitFullscreen();\r\n  } else if (document.mozCancelFullScreen) {\r\n    document.mozCancelFullScreen();\r\n  } else if (document.webkitExitFullscreen) {\r\n    document.webkitExitFullscreen();\r\n  } else if (document.msExitFullscreen) {\r\n    document.msExitFullscreen();\r\n  }\r\n}\r\n\r\nfunction goFullScreen() {\r\n  if (videoContainer.requestFullscreen) {\r\n    videoContainer.requestFullscreen();\r\n  } else if (videoContainer.mozRequestFullScreen) {\r\n    videoContainer.mozRequestFullScreen();\r\n  } else if (videoContainer.webkitRequestFullscreen) {\r\n    videoContainer.webkitRequestFullscreen();\r\n  } else if (videoContainer.msRequestFullscreen) {\r\n    videoContainer.msRequestFullscreen();\r\n  }\r\n  fullScrnBtn.innerHTML = '<i class=\"fas fa-compress\"></i>';\r\n  fullScrnBtn.removeEventListener(\"click\", goFullScreen);\r\n  fullScrnBtn.addEventListener(\"click\", exitFullScreen);\r\n}\r\n\r\nconst formatDate = (seconds) => {\r\n  const secondsNumber = parseInt(seconds, 10);\r\n  let hours = Math.floor(secondsNumber / 3600);\r\n  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);\r\n  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;\r\n\r\n  if (hours < 10) {\r\n    hours = `0${hours}`;\r\n  }\r\n  if (minutes < 10) {\r\n    minutes = `0${minutes}`;\r\n  }\r\n  if (totalSeconds < 10) {\r\n    totalSeconds = `0${totalSeconds}`;\r\n  }\r\n  return `${hours}:${minutes}:${totalSeconds}`;\r\n};\r\n\r\nfunction getCurrentTime() {\r\n  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));\r\n}\r\n\r\nfunction setTotalTime() {\r\n  const totalTimeString = formatDate(videoPlayer.duration);\r\n  totalTime.innerHTML = totalTimeString;\r\n  setInterval(getCurrentTime, 1000);\r\n}\r\n\r\nfunction handleEnded() {\r\n  videoPlayer.currentTime = 0;\r\n  playBtn.innerHTML = '<i class=\"fas fa-play\"></i>';\r\n}\r\n\r\nfunction handleDrag(event) {\r\n  const {\r\n    target: { value },\r\n  } = event;\r\n  videoPlayer.volume = value;\r\n  if (value >= 0.6) {\r\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-up\"></i>';\r\n  } else if (value >= 0.2) {\r\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-down\"></i>';\r\n  } else {\r\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-off\"></i>';\r\n  }\r\n}\r\n\r\n//--------------------------------------------------------------------------------------------\r\n\r\nfunction init() {\r\n  videoPlayer.volume = 0.5;\r\n  playBtn.addEventListener(\"click\", handlePlayClick);\r\n  volumeBtn.addEventListener(\"click\", handleVolumeClick);\r\n  fullScrnBtn.addEventListener(\"click\", goFullScreen);\r\n  videoPlayer.addEventListener(\"timeupdate\", setTotalTime);\r\n  videoPlayer.addEventListener(\"ended\", handleEnded);\r\n  volumeRange.addEventListener(\"input\", handleDrag);\r\n  videoPlayer.addEventListener(\"click\", handlePlayClick);\r\n}\r\n\r\nif (videoContainer) {\r\n  init();\r\n}\r\n\n\n//# sourceURL=webpack://ninjatube/./assets/js/videoPlayer.js?");

/***/ }),

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ninjatube/./assets/scss/styles.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/main.js");
/******/ 	
/******/ })()
;