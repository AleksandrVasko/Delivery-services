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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n/* harmony import */ var _modules_questionAnswer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/questionAnswer */ \"./modules/questionAnswer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_questionAnswer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carousel = () => {\r\n    const serviceCarouselBlock = document.querySelector('.services-carousel');\r\n    const arrowRight = document.querySelector('.arrow-right');\r\n    const arrowLeft = document.querySelector('.arrow-left');\r\n    \r\n    const turnRight = () =>{\r\n        const itemList = serviceCarouselBlock.querySelectorAll('.col-sm-6');\r\n        itemList[5].toggleAttribute('hidden');\r\n        itemList[2].toggleAttribute('hidden');\r\n        itemList[5].remove();\r\n        itemList[0].before(itemList[5]);\r\n    };\r\n\r\n    const turnLeft = () =>{\r\n        const itemList = serviceCarouselBlock.querySelectorAll('.col-sm-6');\r\n        itemList[0].toggleAttribute('hidden');\r\n        itemList[3].toggleAttribute('hidden');\r\n        itemList[0].remove();\r\n        itemList[5].after(itemList[0]);\r\n    };\r\n\r\n    arrowRight.addEventListener('click', turnRight);\r\n    arrowLeft.addEventListener('click', turnLeft);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({\r\n    timing,\r\n    draw,\r\n    duration\r\n}) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) { timeFraction = 1; }\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\n\r\nconst modal = () => {\r\n    const serviceBlock = document.querySelector('.services-elements');\r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const modal = document.querySelector('.modal-callback');\r\n    const closeBtn = document.querySelector('.modal-close');\r\n    const header = document.querySelector('.header');\r\n    const callbackBtn = header.querySelector('.callback-btn');\r\n    const buttonServices = document.querySelector('.button-services');\r\n    let bounceEaseOut;\r\n\r\n    const animation = () => {\r\n        modalOverlay.style.display = 'block';\r\n        modal.style.display = 'block';\r\n        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 1500,\r\n            timing: bounceEaseOut,\r\n            draw: function (progress) {\r\n                modal.style.left = progress * 50 + '%';\r\n            }\r\n        });\r\n    };\r\n\r\n    const makeEaseOut = (timing) => {\r\n        return function (timeFraction) {\r\n            return 1 - timing(1 - timeFraction);\r\n        };\r\n    };\r\n\r\n    const bounce = (timeFraction) => {\r\n        for (let a = 0, b = 1; 1; a += b, b /= 2) {\r\n            if (timeFraction >= (7 - 4 * a) / 11) {\r\n                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);\r\n            }\r\n        }\r\n    };\r\n\r\n    const showModal = () => {\r\n        callbackBtn.addEventListener('click', (e) => {\r\n            bounceEaseOut = makeEaseOut(bounce);\r\n            if (e.target.classList.contains('fancyboxModal')) {\r\n                animation();\r\n            } else if (e.target.classList.contains('modal-close')) {\r\n\r\n            }\r\n        });\r\n        serviceBlock.addEventListener('click', (e) => {\r\n            bounceEaseOut = makeEaseOut(bounce);\r\n            if (e.target.classList.contains('fancyboxModal')) {\r\n                animation();\r\n            } else if (e.target.classList.contains('modal-close')) {\r\n\r\n            }\r\n        });\r\n        buttonServices.addEventListener('click', (e) => {\r\n            bounceEaseOut = makeEaseOut(bounce);\r\n            if (e.target.classList.contains('fancyboxModal')) {\r\n                animation();\r\n            } else if (e.target.classList.contains('modal-close')) {\r\n\r\n            }\r\n        });\r\n    };\r\n\r\n    const closeModal = () => {\r\n        modalOverlay.addEventListener('click', (e) => {\r\n            if (!e.target.closest('.modal-callback')) {\r\n                modal.style.display = 'none';\r\n                modalOverlay.style.display = 'none';\r\n            }\r\n        });\r\n        closeBtn.addEventListener('click', (e) => {\r\n            modal.style.display = 'none';\r\n            modalOverlay.style.display = 'none';\r\n        });\r\n    };\r\n\r\n\r\n    showModal();\r\n    closeModal();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/questionAnswer.js":
/*!***********************************!*\
  !*** ./modules/questionAnswer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst questionAnswer = () => {\r\n    const accordeon = document.querySelector('.accordeon');\r\n    const elementsList = accordeon.querySelectorAll('.element-content');\r\n    const elements = accordeon.querySelectorAll('.element');\r\n    \r\n\r\n    accordeon.addEventListener('click', (e) => {\r\n        if(e.target.closest('.element')){\r\n            const content = e.target.closest('.element').querySelector('.element-content');\r\n\r\n        if (content.style.getPropertyValue(\"display\") === \"block\") {\r\n            content.style.display = \"none\";\r\n        } else {\r\n            elements.forEach(el => {\r\n                if(el.classList.contains('active')) {\r\n                    el.classList.toggle('active');\r\n                    el.querySelector('.element-content').style.display =\"none\";\r\n                }\r\n            });\r\n\r\n            content.style.display = \"block\";\r\n        }\r\n        e.target.closest('.element').classList.toggle('active');\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questionAnswer);\n\n//# sourceURL=webpack:///./modules/questionAnswer.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n    const form = document.querySelector('form');\r\n    const statusBlock = document.createElement('div');\r\n    const loadText = 'Загрузка...';\r\n    const errorText = 'Ошибка';\r\n    let successText = 'Спасибо! Наш менеджер свяжется с вами!';\r\n\r\n    const sendData = async (data)  => {\r\n        if (data.fio.length > 1 && data.tel.length > 6) {\r\n            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {\r\n                method: 'POST',\r\n                body: JSON.stringify(data),\r\n                headers: {\r\n                    'Content-Type': 'application/json'\r\n                }\r\n            });\r\n            return await res.json();\r\n        } else {\r\n            successText = 'Данные не подходят, для отправки';\r\n        }\r\n    };\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('.form-group>input');\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n        statusBlock.textContent = loadText;\r\n        form.append(statusBlock);\r\n\r\n        formData.forEach((val, key) => {\r\n            if (val != '') {\r\n                formBody[key] = val;\r\n            }\r\n        });\r\n\r\n        sendData(formBody)\r\n            .then(data => {\r\n                statusBlock.textContent = successText;\r\n                formElements.forEach(input => {\r\n                    console.log(input);\r\n                    input.value = '';\r\n                });\r\n            })\r\n            .catch(error => {\r\n                statusBlock.textContent = errorText;\r\n            });\r\n    };\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        submitForm();\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;