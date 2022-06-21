/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/common.js":
/*!**********************!*\
  !*** ./js/common.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pauseDecorator": () => (/* binding */ pauseDecorator)
/* harmony export */ });
function pauseDecorator(func, ms) {
  var isCooldown = false;
  return function (e) {
    if (isCooldown) return;
    func.call(this, e);
    isCooldown = true;
    setTimeout(function () {
      return isCooldown = false;
    }, ms);
  };
}

/***/ }),

/***/ "./modules/accordion/accordion.js":
/*!****************************************!*\
  !*** ./modules/accordion/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accordion)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Accordion = /*#__PURE__*/function () {
  function Accordion() {
    _classCallCheck(this, Accordion);

    _defineProperty(this, "titles", document.querySelectorAll('.accordion__title'));

    _defineProperty(this, "accordionBlock", document.querySelector('.accordion'));
  }

  _createClass(Accordion, [{
    key: "setEventListenerClick",
    value: function setEventListenerClick() {
      var _this = this;

      this.titles.forEach(function (item) {
        item.addEventListener('click', function (e) {
          _this.toggleClassActive(e);

          _this.setMaxHeight(e);
        });
      });
    }
  }, {
    key: "toggleClassActive",
    value: function toggleClassActive(e) {
      e.target.classList.toggle('active');
      e.target.nextElementSibling.classList.toggle('active');
    }
  }, {
    key: "setMaxHeight",
    value: function setMaxHeight(e) {
      var description = e.target.nextElementSibling;

      if (this.isMaxHeight(description)) {
        description.style.maxHeight = '0';
      } else {
        description.style.maxHeight = "".concat(description.scrollHeight, "px");
      }
    }
  }, {
    key: "isMaxHeight",
    value: function isMaxHeight(item) {
      if (parseInt(getComputedStyle(item).maxHeight)) return true;
      return false;
    }
  }, {
    key: "init",
    value: function init() {
      this.accordionBlock.addEventListener('wheel', function (e) {
        e.stopPropagation();
      });
      this.accordionBlock.addEventListener('keydown', function (e) {
        e.stopPropagation();
      });
      this.accordionBlock.addEventListener('mouseenter', function (e) {
        e.target.focus();
      });
      this.accordionBlock.addEventListener('mouseleave', function (e) {
        e.target.blur();
      });
      this.setEventListenerClick();
    }
  }]);

  return Accordion;
}();



/***/ }),

/***/ "./modules/background_music/background_music.js":
/*!******************************************************!*\
  !*** ./modules/background_music/background_music.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackgroundMusic)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BackgroundMusic = /*#__PURE__*/function () {
  function BackgroundMusic() {
    _classCallCheck(this, BackgroundMusic);

    _defineProperty(this, "backgroundMusic", document.querySelector('.background-music'));

    _defineProperty(this, "audio", document.querySelector('.background-music audio'));

    _defineProperty(this, "audioItems", document.querySelectorAll('.background-music__item'));
  }

  _createClass(BackgroundMusic, [{
    key: "isPaused",
    value: function isPaused() {
      if (this.audio.paused) return true;
      return false;
    }
  }, {
    key: "setOpacityAudio",
    value: function setOpacityAudio() {
      if (this.isPaused()) {
        this.backgroundMusic.style.opacity = '0.5';
      } else {
        this.backgroundMusic.style.opacity = '1';
      }
    }
  }, {
    key: "toggleAnimationPause",
    value: function toggleAnimationPause() {
      if (this.isPaused()) {
        this.audioItems.forEach(function (item) {
          item.style.animationPlayState = 'paused';
        });
      } else {
        this.audioItems.forEach(function (item) {
          item.style.animationPlayState = 'running';
        });
      }
    }
  }, {
    key: "toggleAudioPause",
    value: function toggleAudioPause() {
      if (this.isPaused()) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.audio.pause();
      this.setOpacityAudio();
      this.toggleAnimationPause();
      this.backgroundMusic.addEventListener('click', function () {
        _this.toggleAudioPause.bind(_this)();

        _this.toggleAnimationPause.bind(_this)();

        _this.setOpacityAudio.bind(_this)();
      });
    }
  }]);

  return BackgroundMusic;
}();



/***/ }),

/***/ "./modules/calculator/calculator.js":
/*!******************************************!*\
  !*** ./modules/calculator/calculator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calculator)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);

    _defineProperty(this, "inputDisplay", document.querySelector('.calculator__history'));

    _defineProperty(this, "outputDisplay", document.querySelector('.calculator__result'));

    _defineProperty(this, "allClearButton", document.querySelector("[data-all-clear]"));

    _defineProperty(this, "backspaceButton", document.querySelector("[data-backspace]"));

    _defineProperty(this, "percentButton", document.querySelector("[data-percent]"));

    _defineProperty(this, "operationButtons", document.querySelectorAll("[data-operator]"));

    _defineProperty(this, "numberButtons", document.querySelectorAll("[data-number]"));

    _defineProperty(this, "negationButton", document.querySelector("[data-negation]"));

    _defineProperty(this, "decimalButton", document.querySelector("[data-decimal]"));

    _defineProperty(this, "equalsButton", document.querySelector("[data-equals]"));

    _defineProperty(this, "inputHistory", []);
  }

  _createClass(Calculator, [{
    key: "clearAllHistory",
    value: function clearAllHistory() {
      this.inputHistory = [];
      this.updateInputDisplay();
      this.updateOutputDisplay('0');
    }
  }, {
    key: "backspace",
    value: function backspace() {
      switch (this.getLastInputType()) {
        case 'number':
          if (this.getLastInputValue().length > 1) {
            this.editLastInput(this.getLastInputValue().slice(0, -1), 'number');
          } else {
            this.deleteLastInput();
          }

          break;

        case 'operator':
          this.deleteLastInput();
          break;

        default:
          return;
      }
    }
  }, {
    key: "changePercentToDecimal",
    value: function changePercentToDecimal() {
      if (this.getLastInputType() === 'number') {
        this.editLastInput(this.getLastInputValue() / 100, 'number');
      }
    }
  }, {
    key: "insertNumber",
    value: function insertNumber(value) {
      if (this.getLastInputType() === 'number') {
        this.appendToLastInput(value);
      } else if (this.getLastInputType() === 'operator' || this.getLastInputType() === null) {
        this.addNewInput(value, 'number');
      }
    }
  }, {
    key: "insertOperation",
    value: function insertOperation(value) {
      switch (this.getLastInputType()) {
        case 'number':
          this.addNewInput(value, 'operator');
          break;

        case 'operator':
          this.editLastInput(value, 'operator');
          break;

        case 'equals':
          var output = this.getOutputValue();
          this.clearAllHistory();
          this.addNewInput(output, 'number');
          this.addNewInput(value, 'operator');
          break;

        default:
          return;
      }
    }
  }, {
    key: "negateNumber",
    value: function negateNumber() {
      if (this.getLastInputType() === 'number') {
        this.editLastInput(parseFloat(this.getLastInputValue()) * -1, 'number');
      }
    }
  }, {
    key: "insertDecimalPoint",
    value: function insertDecimalPoint() {
      if (this.getLastInputType() === 'number' && !this.getLastInputValue().includes('.')) {
        this.appendToLastInput('.');
      } else if (this.getLastInputType() === 'operator' || this.getLastInputType() === null) {
        this.addNewInput('0.', 'number');
      }
    }
  }, {
    key: "generateResult",
    value: function generateResult() {
      if (this.getLastInputType() === 'number') {
        var self = this;

        var simplifyExpression = function simplifyExpression(currentExpression, operator) {
          if (currentExpression.findIndex(function (token) {
            return operator.includes(token);
          }) === -1) {
            return currentExpression;
          } else {
            var operatorIdx = currentExpression.findIndex(function (token) {
              return operator.includes(token);
            });
            var leftOperandIdx = operatorIdx - 1;
            var rightOperandIdx = operatorIdx + 1;
            var partialSolution = self.performOperation.apply(self, _toConsumableArray(currentExpression.slice(leftOperandIdx, rightOperandIdx + 1)));
            currentExpression.splice(leftOperandIdx, 3, partialSolution.toString());
            return simplifyExpression(currentExpression, operator);
          }
        };

        var result = [['x', '/'], ['-', '+']].reduce(simplifyExpression, this.getAllInputValues());
        this.addNewInput('=', 'equals');
        this.updateOutputDisplay(result.toString());
      }
    }
  }, {
    key: "getLastInputType",
    value: function getLastInputType() {
      return this.inputHistory.length === 0 ? null : this.inputHistory[this.inputHistory.length - 1].type;
    }
  }, {
    key: "getLastInputValue",
    value: function getLastInputValue() {
      return this.inputHistory.length === 0 ? null : this.inputHistory[this.inputHistory.length - 1].value;
    }
  }, {
    key: "getAllInputValues",
    value: function getAllInputValues() {
      return this.inputHistory.map(function (entry) {
        return entry.value;
      });
    }
  }, {
    key: "getOutputValue",
    value: function getOutputValue() {
      return this.outputDisplay.value;
    }
  }, {
    key: "addNewInput",
    value: function addNewInput(value, type) {
      this.inputHistory.push({
        'type': type,
        'value': value.toString()
      });
      this.updateInputDisplay();
    }
  }, {
    key: "appendToLastInput",
    value: function appendToLastInput(value) {
      this.inputHistory[this.inputHistory.length - 1].value += value.toString();
      this.updateInputDisplay();
    }
  }, {
    key: "editLastInput",
    value: function editLastInput(value, type) {
      this.inputHistory.pop();
      this.addNewInput(value, type);
    }
  }, {
    key: "deleteLastInput",
    value: function deleteLastInput() {
      this.inputHistory.pop();
      this.updateInputDisplay();
    }
  }, {
    key: "updateInputDisplay",
    value: function updateInputDisplay() {
      this.inputDisplay.value = this.getAllInputValues().join('');
    }
  }, {
    key: "updateOutputDisplay",
    value: function updateOutputDisplay(value) {
      this.outputDisplay.value = value;
    }
  }, {
    key: "performOperation",
    value: function performOperation(leftOperand, operation, rightOperand) {
      leftOperand = parseFloat(leftOperand);
      rightOperand = parseFloat(rightOperand);

      if (Number.isNaN(leftOperand) || Number.isNaN(rightOperand)) {
        return;
      }

      switch (operation) {
        case 'x':
          return leftOperand * rightOperand;

        case '/':
          return leftOperand / rightOperand;

        case '-':
          return leftOperand - rightOperand;

        case '+':
          return leftOperand + rightOperand;

        default:
          return;
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.allClearButton.addEventListener('click', function () {
        _this.clearAllHistory();
      });
      this.backspaceButton.addEventListener('click', function () {
        _this.backspace();
      });
      this.percentButton.addEventListener('click', function () {
        _this.changePercentToDecimal();
      });
      this.operationButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          var target = e.target;

          _this.insertOperation(target.dataset.operator);
        });
      });
      this.numberButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          var target = e.target;

          _this.insertNumber(target.dataset.number);
        });
      });
      this.negationButton.addEventListener('click', function () {
        _this.negateNumber();
      });
      this.decimalButton.addEventListener('click', function () {
        _this.insertDecimalPoint();
      });
      this.equalsButton.addEventListener('click', function () {
        _this.generateResult();
      });
    }
  }]);

  return Calculator;
}();



/***/ }),

/***/ "./modules/contact_me/contact_me.js":
/*!******************************************!*\
  !*** ./modules/contact_me/contact_me.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactMe)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ContactMe = /*#__PURE__*/function () {
  function ContactMe() {
    _classCallCheck(this, ContactMe);

    _defineProperty(this, "contactMe", document.querySelector('.contact-me'));

    _defineProperty(this, "contactMeText", document.querySelector('.contact-me__text'));

    _defineProperty(this, "contactMeLinks", document.querySelector('.contact-me__links'));
  }

  _createClass(ContactMe, [{
    key: "calculateWidthPseudoElement",
    value: function calculateWidthPseudoElement() {
      return "".concat(this.contactMeText.offsetWidth, "px");
    }
  }, {
    key: "calculateHeightPseudoElement",
    value: function calculateHeightPseudoElement() {
      return "".concat(this.contactMe.offsetHeight, "px");
    }
  }, {
    key: "calculateBottomPosition",
    value: function calculateBottomPosition() {
      return "-".concat(this.contactMe.offsetHeight - this.contactMeText.offsetHeight, "px");
    }
  }, {
    key: "setStartSizesContactBlock",
    value: function setStartSizesContactBlock() {
      this.contactMe.style.setProperty('--heightBorder', this.calculateHeightPseudoElement());
      this.contactMe.style.setProperty('--width', this.calculateWidthPseudoElement());
      this.contactMe.style.bottom = this.calculateBottomPosition();
    }
  }, {
    key: "toggleHeightContactMeBlock",
    value: function toggleHeightContactMeBlock() {
      this.contactMe.classList.toggle('active');

      if (this.contactMe.classList.contains('active')) {
        this.contactMe.style.bottom = 0;
      } else {
        this.contactMe.style.bottom = this.calculateBottomPosition();
      }
    }
  }, {
    key: "hideContactMeBlock",
    value: function hideContactMeBlock() {
      this.contactMe.classList.remove('active');
      this.contactMe.style.bottom = this.calculateBottomPosition();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      window.onload = function () {
        return _this.setStartSizesContactBlock();
      };

      this.contactMeLinks.addEventListener('click', function (e) {
        e.stopPropagation();
      });
      this.contactMe.addEventListener('click', function () {
        _this.toggleHeightContactMeBlock();
      });
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.contact-me')) {
          _this.hideContactMeBlock();
        }
      });
      window.addEventListener('resize', function () {
        _this.contactMe.style.setProperty('--heightBorder', _this.calculateHeightPseudoElement());

        _this.contactMe.style.setProperty('--width', _this.calculateWidthPseudoElement());

        _this.contactMe.style.bottom = _this.calculateBottomPosition();
      });
    }
  }]);

  return ContactMe;
}();



/***/ }),

/***/ "./modules/scroll_bar_top/scroll_bar_top.js":
/*!**************************************************!*\
  !*** ./modules/scroll_bar_top/scroll_bar_top.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollBarTop)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScrollBarTop = /*#__PURE__*/function () {
  function ScrollBarTop() {
    _classCallCheck(this, ScrollBarTop);

    _defineProperty(this, "frameSlides", document.querySelectorAll('.frame'));

    _defineProperty(this, "unprogressScroll", document.querySelector('.scrollBarTop-unprogress'));

    _defineProperty(this, "allWidthPercent", 100);

    _defineProperty(this, "widthPercent", 0);

    _defineProperty(this, "scrollCounter", 1);

    _defineProperty(this, "leftRange", 1);

    _defineProperty(this, "rightRange", this.frameSlides.length);

    _defineProperty(this, "countOfScrolls", this.frameSlides.length - 1);

    _defineProperty(this, "onePartOfWidthPercent", this.allWidthPercent / this.countOfScrolls);
  }

  _createClass(ScrollBarTop, [{
    key: "setPercentProgress",
    value: function setPercentProgress(e) {
      if (e.deltaY > 0 || this.isKeyArrowUp(e)) {
        this.widthPercent += this.onePartOfWidthPercent;
      } else if (e.deltaY < 0 || this.isKeyArrowDown(e)) {
        this.widthPercent += -this.onePartOfWidthPercent;
      }

      this.unprogressScroll.style.left = "".concat(this.widthPercent, "%");
    }
  }, {
    key: "setScrollCounter",
    value: function setScrollCounter(e) {
      if (e.deltaY > 0 || this.isKeyArrowUp(e)) {
        this.scrollCounter++;
      } else if (e.deltaY < 0 || this.isKeyArrowDown(e)) {
        this.scrollCounter--;
      }
    }
  }, {
    key: "isEndOfRangeSlides",
    value: function isEndOfRangeSlides(e) {
      if (this.scrollCounter <= this.leftRange && (e.deltaY < 0 || this.isKeyArrowDown(e)) || this.scrollCounter >= this.rightRange && (e.deltaY > 0 || this.isKeyArrowUp(e))) {
        return true;
      }

      return false;
    }
  }, {
    key: "isKeyArrowUp",
    value: function isKeyArrowUp(e) {
      if (e.code === 'ArrowUp') return true;
      return false;
    }
  }, {
    key: "isKeyArrowDown",
    value: function isKeyArrowDown(e) {
      if (e.code === 'ArrowDown') return true;
      return false;
    }
  }, {
    key: "scrollSlide",
    value: function scrollSlide(e) {
      if (this.isEndOfRangeSlides(e)) return;
      this.setPercentProgress(e);
      this.setScrollCounter(e);
    }
  }, {
    key: "init",
    value: function init() {
      document.addEventListener('wheel', this.scrollSlide.bind(this));
      document.addEventListener('keydown', this.scrollSlide.bind(this));
    }
  }]);

  return ScrollBarTop;
}();



/***/ }),

/***/ "./modules/slider_3d/slider_3d.js":
/*!****************************************!*\
  !*** ./modules/slider_3d/slider_3d.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider3D)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Slider3D = /*#__PURE__*/function () {
  function Slider3D() {
    _classCallCheck(this, Slider3D);

    _defineProperty(this, "perspectiveValue", -1000);

    _defineProperty(this, "zValues", []);

    _defineProperty(this, "frames", document.querySelectorAll('.frame'));

    _defineProperty(this, "stepZValueKey", 1000);
  }

  _createClass(Slider3D, [{
    key: "setBeginZValues",
    value: function setBeginZValues() {
      var _this = this;

      this.frames.forEach(function (item, index) {
        var zValue = index * _this.perspectiveValue;

        _this.zValues.push(zValue);

        item.style.transform = "translateZ(".concat(zValue, "px)");
      });
    }
  }, {
    key: "setOpacitySlides",
    value: function setOpacitySlides(item, index) {
      if (this.zValues[index] > 0) {
        item.style.opacity = '0';
      } else {
        item.style.opacity = '1';
      }
    }
  }, {
    key: "isEndOfSlidesRange",
    value: function isEndOfSlidesRange(e) {
      if (this.zValues[0] <= 0 && (e.deltaY < 0 || this.isKeyArrowDown(e)) || this.zValues[this.zValues.length - 1] >= 0 && (e.deltaY > 0 || this.isKeyArrowUp(e))) {
        return true;
      }

      return false;
    }
  }, {
    key: "changeZValue",
    value: function changeZValue(item, index, e) {
      if (this.isWheelEvent(e)) {
        if (e.deltaY > 0) this.zValues[index] += this.stepZValueKey;
        if (e.deltaY < 0) this.zValues[index] += -this.stepZValueKey;
      }

      if (this.isKeydownEvent(e)) {
        if (this.isKeyArrowUp(e)) this.zValues[index] += this.stepZValueKey;
        if (this.isKeyArrowDown(e)) this.zValues[index] += -this.stepZValueKey;
      }

      item.style.transform = "translateZ(".concat(this.zValues[index], "px)");
    }
  }, {
    key: "isWheelEvent",
    value: function isWheelEvent(e) {
      if (e.type === 'wheel') return true;
      return false;
    }
  }, {
    key: "isKeydownEvent",
    value: function isKeydownEvent(e) {
      if (e.type === 'keydown') return true;
      return false;
    }
  }, {
    key: "isKeyArrowUp",
    value: function isKeyArrowUp(e) {
      if (e.code === 'ArrowUp') return true;
      return false;
    }
  }, {
    key: "isKeyArrowDown",
    value: function isKeyArrowDown(e) {
      if (e.code === 'ArrowDown') return true;
      return false;
    }
  }, {
    key: "scroll",
    value: function scroll(e) {
      var _this2 = this;

      if (this.isEndOfSlidesRange(e)) return;
      this.frames.forEach(function (item, index) {
        _this2.changeZValue(item, index, e);

        _this2.setOpacitySlides(item, index);
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.setBeginZValues();
      document.addEventListener('wheel', this.scroll.bind(this));
      document.addEventListener('keydown', this.scroll.bind(this));
    }
  }]);

  return Slider3D;
}();



/***/ }),

/***/ "./modules/stopwatch/stopwatch.js":
/*!****************************************!*\
  !*** ./modules/stopwatch/stopwatch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stopwatch)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Stopwatch = /*#__PURE__*/function () {
  function Stopwatch() {
    _classCallCheck(this, Stopwatch);

    _defineProperty(this, "startStopButton", document.querySelector('.stopwatch__start-stop'));

    _defineProperty(this, "pauseContinueButton", document.querySelector('.stopwatch__pause-continue'));

    _defineProperty(this, "timesBlock", document.querySelectorAll('.stopwatch__times span'));

    _defineProperty(this, "startTime", 0);

    _defineProperty(this, "intervalId", 0);

    _defineProperty(this, "active", false);

    _defineProperty(this, "pause", false);

    _defineProperty(this, "stop", true);

    _defineProperty(this, "times", [{
      hr: this.startTime
    }, {
      min: this.startTime
    }, {
      sec: this.startTime
    }, {
      ms: this.startTime
    }]);
  }

  _createClass(Stopwatch, [{
    key: "increaseTime",
    value: function increaseTime(timeArr, index, timeKey) {
      timeArr[index][timeKey]++;
    }
  }, {
    key: "isActive",
    value: function isActive() {
      if (this.active === true) return true;
      return false;
    }
  }, {
    key: "isPause",
    value: function isPause() {
      if (this.pause === true) return true;
      return false;
    }
  }, {
    key: "isEndRangeTime",
    value: function isEndRangeTime(time, timeValue) {
      if (time === 'ms' && timeValue === 100) return true;
      if ((time === 'sec' || time === 'min') && timeValue === 60) return true;
      return false;
    }
  }, {
    key: "isSingleDigit",
    value: function isSingleDigit(number) {
      if (number >= 0 && number < 10) return true;
      return false;
    }
  }, {
    key: "clearCurrentTime",
    value: function clearCurrentTime(arr, index, time) {
      arr[index][time] = this.startTime;
    }
  }, {
    key: "clearAllTime",
    value: function clearAllTime(arr) {
      for (var i = 0; i < arr.length; i++) {
        arr[i][this.getKeyItem(arr, i)] = this.startTime;
      }
    }
  }, {
    key: "getKeyItem",
    value: function getKeyItem(arr, index) {
      return Object.keys(arr[index]).toString();
    }
  }, {
    key: "getValueItem",
    value: function getValueItem(arr, index) {
      return parseInt(Object.values(arr[index]));
    }
  }, {
    key: "showTime",
    value: function showTime(arr) {
      var str = "";

      for (var i = 0; i < arr.length; i++) {
        if (!this.isSingleDigit(this.getValueItem(arr, i))) {
          str = "".concat(this.getValueItem(arr, i));
        } else {
          str = "0".concat(this.getValueItem(arr, i));
        }

        this.timesBlock[i].innerHTML = str;
      }
    }
  }, {
    key: "nextTime",
    value: function nextTime(timeArr) {
      this.showTime(timeArr);
      this.increaseTime(timeArr, timeArr.length - 1, this.getKeyItem(timeArr, timeArr.length - 1));

      for (var i = timeArr.length - 1; i > 0; i--) {
        if (this.isEndRangeTime(this.getKeyItem(timeArr, i), this.getValueItem(timeArr, i))) {
          this.clearCurrentTime(timeArr, i, this.getKeyItem(timeArr, i));
          this.increaseTime(timeArr, i - 1, this.getKeyItem(timeArr, i - 1));
        }
      }
    }
  }, {
    key: "startStopwatch",
    value: function startStopwatch(e) {
      var _this = this;

      this.intervalId = setInterval(function () {
        _this.nextTime(_this.times);
      }, 10);
      this.activateButton(this.pauseContinueButton);
      this.changeTextButton(e.target, 'Stop');

      if (this.isPause()) {
        this.changeTextButton(e.target, 'Pause');
      }

      this.active = true;
      this.pause = false;
      this.stop = false;
    }
  }, {
    key: "changeTextButton",
    value: function changeTextButton(el, txt) {
      el.textContent = txt;
    }
  }, {
    key: "disableButton",
    value: function disableButton(el) {
      el.disabled = true;
    }
  }, {
    key: "activateButton",
    value: function activateButton(el) {
      el.disabled = false;
    }
  }, {
    key: "stopStopwatch",
    value: function stopStopwatch(e) {
      clearInterval(this.intervalId);
      this.clearAllTime(this.times);
      this.showTime(this.times);
      this.changeTextButton(e.target, 'Start');
      this.changeTextButton(this.pauseContinueButton, 'Pause');
      this.disableButton(this.pauseContinueButton);
      this.active = false;
      this.stop = true;
      this.pause = false;
    }
  }, {
    key: "pauseStopwatch",
    value: function pauseStopwatch(e) {
      clearInterval(this.intervalId);
      this.changeTextButton(e.target, 'Continue');
      this.pause = true;
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.disableButton(this.pauseContinueButton);
      this.startStopButton.addEventListener('click', function (e) {
        if (_this2.isActive()) {
          _this2.stopStopwatch(e);
        } else {
          _this2.startStopwatch(e);
        }
      });
      this.pauseContinueButton.addEventListener('click', function (e) {
        if (!_this2.isPause()) {
          _this2.pauseStopwatch(e);
        } else {
          _this2.startStopwatch(e);
        }
      });
    }
  }]);

  return Stopwatch;
}();



/***/ }),

/***/ "./modules/tabs/tabs.js":
/*!******************************!*\
  !*** ./modules/tabs/tabs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tabs)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tabs = /*#__PURE__*/function () {
  function Tabs() {
    _classCallCheck(this, Tabs);

    _defineProperty(this, "tabsItems", document.querySelectorAll('.tabs__item'));

    _defineProperty(this, "contents", document.querySelectorAll('.tabs__content'));

    _defineProperty(this, "firstTab", this.tabsItems[0]);

    _defineProperty(this, "tabScale", 1.2);

    _defineProperty(this, "tabScalePercent", (this.tabScale - 1) * 100);

    _defineProperty(this, "countOppositeSidesOfElement", 2);
  }

  _createClass(Tabs, [{
    key: "hideContent",
    value: function hideContent(index) {
      for (var i = 0; i < this.contents.length; i++) {
        if (i === index) continue;
        this.contents[i].style.display = 'none';
      }
    }
  }, {
    key: "showContent",
    value: function showContent(index) {
      this.contents[index].style.display = 'block';
    }
  }, {
    key: "isOneTab",
    value: function isOneTab() {
      if (this.tabsItems.length === 1) return true;
      return false;
    }
  }, {
    key: "isFirstActiveTab",
    value: function isFirstActiveTab(item, index) {
      if (index === 0 && item.hasAttribute('active')) return true;
      return false;
    }
  }, {
    key: "isLastActiveTab",
    value: function isLastActiveTab(item, index) {
      if (index === this.tabsItems.length - 1 && item.hasAttribute('active')) return true;
      return false;
    }
  }, {
    key: "setSelectedStyleTab",
    value: function setSelectedStyleTab(item, index) {
      item.style.borderBottom = 'none';
      item.style.borderColor = 'rgb(83, 32, 97)';
      item.style.borderTopLeftRadius = '4px';
      item.style.borderTopRightRadius = '4px';
      item.style.zIndex = '1';
      item.setAttribute('active', 'active');

      if (this.isOneTab()) {
        item.style.height = "".concat(parseInt(item.offsetHeight) * this.tabScale, "px");
      } else if (this.isFirstActiveTab(item, index)) {
        item.style.transform = "translate(".concat(this.tabScalePercent / this.countOppositeSidesOfElement, "%, -").concat(this.tabScalePercent / this.countOppositeSidesOfElement, "%) scale(").concat(this.tabScale, ")");
      } else if (this.isLastActiveTab(item, index)) {
        item.style.transform = "translate(-".concat(this.tabScalePercent / this.countOppositeSidesOfElement, "%, -").concat(this.tabScalePercent / this.countOppositeSidesOfElement, "%) scale(").concat(this.tabScale, ")");
      } else {
        item.style.transform = "translateY(-".concat(this.tabScalePercent / this.countOppositeSidesOfElement, "%) scale(").concat(this.tabScale, ")");
      }
    }
  }, {
    key: "setBeginStyleTabs",
    value: function setBeginStyleTabs(tab) {
      this.tabsItems.forEach(function (item) {
        item.style.border = '1px solid rgba(83, 32, 97, 0.5)';
        item.style.borderBottomColor = 'rgba(83, 32, 97, 1)';
        item.style.transform = 'scale(1)';
        item.style.zIndex = '0';
        item.removeAttribute('active');
      });
    }
  }, {
    key: "changeTab",
    value: function changeTab() {
      var _this = this;

      this.tabsItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
          _this.setBeginStyleTabs(item);

          _this.setSelectedStyleTab(item, index);

          _this.hideContent(index);

          _this.showContent(index);
        });
      });
    }
  }, {
    key: "selectTabFirst",
    value: function selectTabFirst(tab, index) {
      this.setSelectedStyleTab(tab, index);
      this.showContent(index);
    }
  }, {
    key: "init",
    value: function init() {
      this.selectTabFirst(this.firstTab, 0);
      this.changeTab();
    }
  }]);

  return Tabs;
}();



/***/ }),

/***/ "./modules/timer/timer.js":
/*!********************************!*\
  !*** ./modules/timer/timer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);

    _defineProperty(this, "startStopButton", document.querySelector('.timer__start-stop'));

    _defineProperty(this, "pauseContinueButton", document.querySelector('.timer__pause-continue'));

    _defineProperty(this, "timesBlock", document.querySelector('.timer__times').children);

    _defineProperty(this, "intervalId", 0);

    _defineProperty(this, "indexNotZeroValue", -1);

    _defineProperty(this, "active", false);

    _defineProperty(this, "pause", false);

    _defineProperty(this, "stop", true);

    _defineProperty(this, "times", [{
      hr: 0
    }, {
      min: 0
    }, {
      sec: 15
    }, {
      ms: 0
    }]);

    _defineProperty(this, "selectedTimes", []);
  }

  _createClass(Timer, [{
    key: "decreaseTime",
    value: function decreaseTime(timeArr, index, timeKey) {
      timeArr[index][timeKey]--;
    }
  }, {
    key: "isActive",
    value: function isActive() {
      if (this.active === true) return true;
      return false;
    }
  }, {
    key: "isPause",
    value: function isPause() {
      if (this.pause === true) return true;
      return false;
    }
  }, {
    key: "isEndRangeTime",
    value: function isEndRangeTime(timeValue) {
      if (timeValue < 0) return true;
      return false;
    }
  }, {
    key: "isSingleDigit",
    value: function isSingleDigit(number) {
      if (number >= 0 && number < 10) return true;
      return false;
    }
  }, {
    key: "setNextTime",
    value: function setNextTime(arr, index, time) {
      if (time === 'ms') {
        arr[index][time] = 99;
      } else {
        arr[index][time] = 59;
      }
    }
  }, {
    key: "isOutOfRangeTime",
    value: function isOutOfRangeTime(value, classTime) {
      if (value > 59 && classTime !== 'timer__hours' || value > 23 && classTime === 'timer__hours') {
        return true;
      }

      return false;
    }
  }, {
    key: "isZeroAllTime",
    value: function isZeroAllTime(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (this.getValueItem(arr, i) !== 0) return false;
      }

      return true;
    }
  }, {
    key: "isExitKey",
    value: function isExitKey(e) {
      if (e.code === 'Escape' || e.code === 'Enter') return true;
      return false;
    }
  }, {
    key: "setZeroAllTime",
    value: function setZeroAllTime(arr) {
      var _this = this;

      arr.forEach(function (item, index) {
        item[_this.getKeyItem(arr, index)] = 0;
      });
    }
  }, {
    key: "getClassTime",
    value: function getClassTime(classNames) {
      return classNames.replace(/\s*timer__input\s*/g, '');
    }
  }, {
    key: "setInputValue",
    value: function setInputValue(e) {
      if (this.isOutOfRangeTime(e.target.value, this.getClassTime(e.target.className)) && this.getClassTime(e.target.className) !== 'timer__hours') {
        e.target.value = 59;
      } else if (this.isOutOfRangeTime(e.target.value, this.getClassTime(e.target.className)) && this.getClassTime(e.target.className) === 'timer__hours') {
        e.target.value = 23;
      }
    }
  }, {
    key: "setArrayItem",
    value: function setArrayItem(arrGiving, arrReceiving) {
      for (var i = 0; i < arrGiving.length; i++) {
        arrReceiving[i] = Object.assign({}, arrGiving[i]);
      }
    }
  }, {
    key: "setSelectedTime",
    value: function setSelectedTime(value, index) {
      this.selectedTimes[index][this.getKeyItem(this.selectedTimes, index)] = value;
    }
  }, {
    key: "getSelectedTime",
    value: function getSelectedTime() {
      return this.selectedTimes;
    }
  }, {
    key: "getKeyItem",
    value: function getKeyItem(arr, index) {
      return Object.keys(arr[index]).toString();
    }
  }, {
    key: "getValueItem",
    value: function getValueItem(arr, index) {
      return parseInt(Object.values(arr[index]));
    }
  }, {
    key: "setEventListenerForTimes",
    value: function setEventListenerForTimes(arr, eventType, func) {
      for (var i = 0; i < arr.length - 1; i++) {
        arr[i].addEventListener(eventType, func);
      }

      ;
    }
  }, {
    key: "showTime",
    value: function showTime(arr) {
      var str = "";

      for (var i = 0; i < arr.length; i++) {
        if (!this.isSingleDigit(this.getValueItem(arr, i))) {
          str = "".concat(this.getValueItem(arr, i));
        } else {
          str = "0".concat(this.getValueItem(arr, i));
        }

        if (i !== arr.length - 1) {
          this.timesBlock[i].value = str;
        } else {
          this.timesBlock[i].innerText = str;
        }
      }
    }
  }, {
    key: "nextTime",
    value: function nextTime(timeArr) {
      this.showTime(timeArr);
      this.decreaseTime(timeArr, timeArr.length - 1, this.getKeyItem(timeArr, timeArr.length - 1));

      for (var i = timeArr.length - 1; i > 0; i--) {
        if (this.isEndRangeTime(this.getValueItem(timeArr, i))) {
          this.setNextTime(timeArr, i, this.getKeyItem(timeArr, i));
          this.decreaseTime(timeArr, i - 1, this.getKeyItem(timeArr, i - 1));
        }
      }
    }
  }, {
    key: "startTimer",
    value: function startTimer(e) {
      var _this2 = this;

      this.intervalId = setInterval(function () {
        if (_this2.isZeroAllTime(_this2.times)) {
          _this2.stopTimer(e);

          _this2.setArrayItem(_this2.getSelectedTime(), _this2.times);

          _this2.showTime(_this2.times);
        } else {
          _this2.nextTime(_this2.times);
        }
      }, 10);

      if (!this.isZeroAllTime(this.times)) {
        this.activateButton(this.pauseContinueButton);
      }

      this.changeTextButton(e.target, 'Stop');

      if (this.isPause()) {
        this.changeTextButton(e.target, 'Pause');
      }

      this.active = true;
      this.pause = false;
      this.stop = false;
    }
  }, {
    key: "changeTextButton",
    value: function changeTextButton(el, txt) {
      el.textContent = txt;
    }
  }, {
    key: "disableButton",
    value: function disableButton(el) {
      el.disabled = true;
    }
  }, {
    key: "activateButton",
    value: function activateButton(el) {
      el.disabled = false;
    }
  }, {
    key: "stopTimer",
    value: function stopTimer(e) {
      clearInterval(this.intervalId);
      this.showTime(this.times);
      this.changeTextButton(e.target, 'Start');
      this.changeTextButton(this.pauseContinueButton, 'Pause');
      this.disableButton(this.pauseContinueButton);
      this.active = false;
      this.stop = true;
      this.pause = false;
    }
  }, {
    key: "pauseTimer",
    value: function pauseTimer(e) {
      clearInterval(this.intervalId);
      this.changeTextButton(e.target, 'Continue');
      this.pause = true;
    }
  }, {
    key: "setStartState",
    value: function setStartState() {
      var _this3 = this;

      for (var i = 0; i < this.timesBlock.length; i++) {
        if (i < this.timesBlock.length - 2) {
          this.timesBlock[i].value = '00';
        }

        if (i === this.timesBlock.length - 2) {
          this.timesBlock[i].value = '15';
        }
      }

      this.setEventListenerForTimes(this.timesBlock, 'keydown', function (e) {
        if (_this3.isExitKey(e)) e.target.blur();
      });
      this.setEventListenerForTimes(this.timesBlock, 'input', function (e) {
        e.target.value = e.target.value.replace(/[^\d]/g, '');
      });
      this.setEventListenerForTimes(this.timesBlock, 'change', function (e) {
        _this3.setInputValue(e);

        for (var _i = 0; _i < _this3.timesBlock.length - 1; _i++) {
          _this3.setSelectedTime(Number(_this3.timesBlock[_i].value), _i);
        }

        _this3.setArrayItem(_this3.getSelectedTime(), _this3.times);

        _this3.showTime(_this3.times);
      });
      this.disableButton(this.pauseContinueButton);
      this.setArrayItem(this.times, this.selectedTimes);
      this.showTime(this.times);
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;

      this.setStartState();
      this.startStopButton.addEventListener('click', function (e) {
        if (_this4.isActive()) {
          _this4.setArrayItem(_this4.getSelectedTime(), _this4.times);

          _this4.stopTimer(e);
        } else {
          _this4.startTimer(e);
        }
      });
      this.pauseContinueButton.addEventListener('click', function (e) {
        if (!_this4.isPause()) {
          _this4.pauseTimer(e);
        } else {
          _this4.startTimer(e);
        }
      });
    }
  }]);

  return Timer;
}();



/***/ }),

/***/ "./modules/welcome_screen/welcome_screen.js":
/*!**************************************************!*\
  !*** ./modules/welcome_screen/welcome_screen.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WelcomeScreen)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WelcomeScreen = /*#__PURE__*/function () {
  function WelcomeScreen() {
    _classCallCheck(this, WelcomeScreen);

    _defineProperty(this, "screen", document.querySelector('.welcome-screen'));

    _defineProperty(this, "transitionTimeSec", 0.5);

    _defineProperty(this, "transitionTimeMs", this.transitionTimeSec * 1000);
  }

  _createClass(WelcomeScreen, [{
    key: "setTransition",
    value: function setTransition() {
      this.screen.style.transition = "".concat(this.transitionTimeSec, "s all");
    }
  }, {
    key: "setOpacity",
    value: function setOpacity() {
      this.screen.style.opacity = '0';
    }
  }, {
    key: "clickToContinue",
    value: function clickToContinue() {
      var _this = this;

      this.screen.addEventListener('click', function () {
        _this.setTransition();

        _this.setOpacity();

        setTimeout(function () {
          _this.screen.style.display = 'none';
        }, _this.transitionTimeMs);
      });
    }
  }, {
    key: "stopKeyDown",
    value: function stopKeyDown() {
      this.screen.addEventListener('keydown', function (e) {
        e.stopPropagation();
      });
    }
  }, {
    key: "stopWheelEvent",
    value: function stopWheelEvent() {
      this.screen.addEventListener('wheel', function (e) {
        e.stopPropagation();
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.stopWheelEvent();
      this.clickToContinue();
    }
  }]);

  return WelcomeScreen;
}();



/***/ }),

/***/ "./modules/accordion/accordion.scss":
/*!******************************************!*\
  !*** ./modules/accordion/accordion.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./modules/background_music/background_music.scss":
/*!********************************************************!*\
  !*** ./modules/background_music/background_music.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./modules/calculator/calculator.scss":
/*!********************************************!*\
  !*** ./modules/calculator/calculator.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./modules/contact_me/contact_me.scss":
/*!********************************************!*\
  !*** ./modules/contact_me/contact_me.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./modules/scroll_bar_top/scroll_bar_top.scss":
/*!****************************************************!*\
  !*** ./modules/scroll_bar_top/scroll_bar_top.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./modules/slider_3d/slider_3d.scss":
/*!******************************************!*\
  !*** ./modules/slider_3d/slider_3d.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./modules/stopwatch/stopwatch.scss":
/*!******************************************!*\
  !*** ./modules/stopwatch/stopwatch.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./modules/tabs/tabs.scss":
/*!********************************!*\
  !*** ./modules/tabs/tabs.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./modules/timer/timer.scss":
/*!**********************************!*\
  !*** ./modules/timer/timer.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./modules/welcome_screen/welcome_screen.scss":
/*!****************************************************!*\
  !*** ./modules/welcome_screen/welcome_screen.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_3d_slider_3d_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/slider_3d/slider_3d.scss */ "./modules/slider_3d/slider_3d.scss");
/* harmony import */ var _modules_slider_3d_slider_3d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/slider_3d/slider_3d.js */ "./modules/slider_3d/slider_3d.js");
/* harmony import */ var _modules_scroll_bar_top_scroll_bar_top_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/scroll_bar_top/scroll_bar_top.scss */ "./modules/scroll_bar_top/scroll_bar_top.scss");
/* harmony import */ var _modules_scroll_bar_top_scroll_bar_top_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/scroll_bar_top/scroll_bar_top.js */ "./modules/scroll_bar_top/scroll_bar_top.js");
/* harmony import */ var _modules_background_music_background_music_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/background_music/background_music.scss */ "./modules/background_music/background_music.scss");
/* harmony import */ var _modules_background_music_background_music__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/background_music/background_music */ "./modules/background_music/background_music.js");
/* harmony import */ var _modules_welcome_screen_welcome_screen_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/welcome_screen/welcome_screen.scss */ "./modules/welcome_screen/welcome_screen.scss");
/* harmony import */ var _modules_welcome_screen_welcome_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/welcome_screen/welcome_screen */ "./modules/welcome_screen/welcome_screen.js");
/* harmony import */ var _modules_accordion_accordion_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/accordion/accordion.scss */ "./modules/accordion/accordion.scss");
/* harmony import */ var _modules_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/accordion/accordion.js */ "./modules/accordion/accordion.js");
/* harmony import */ var _modules_tabs_tabs_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/tabs/tabs.scss */ "./modules/tabs/tabs.scss");
/* harmony import */ var _modules_tabs_tabs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/tabs/tabs.js */ "./modules/tabs/tabs.js");
/* harmony import */ var _modules_stopwatch_stopwatch_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modules/stopwatch/stopwatch.scss */ "./modules/stopwatch/stopwatch.scss");
/* harmony import */ var _modules_stopwatch_stopwatch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modules/stopwatch/stopwatch */ "./modules/stopwatch/stopwatch.js");
/* harmony import */ var _modules_timer_timer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modules/timer/timer */ "./modules/timer/timer.js");
/* harmony import */ var _modules_timer_timer_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modules/timer/timer.scss */ "./modules/timer/timer.scss");
/* harmony import */ var _modules_contact_me_contact_me_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modules/contact_me/contact_me.scss */ "./modules/contact_me/contact_me.scss");
/* harmony import */ var _modules_contact_me_contact_me__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modules/contact_me/contact_me */ "./modules/contact_me/contact_me.js");
/* harmony import */ var _modules_calculator_calculator_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../modules/calculator/calculator.scss */ "./modules/calculator/calculator.scss");
/* harmony import */ var _modules_calculator_calculator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../modules/calculator/calculator */ "./modules/calculator/calculator.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common */ "./js/common.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
// import Slider_3D

 // import Scroll_Bar_Top


 // import Bacgkround_Music


 // import Welcome Screen


 // import Accordion


 // import Tabs


 // import Stopwatch


 // import Timer


 // import Contact Me


 // import Calculator


 // import Common



var timePause = 700;
var slider3d = new _modules_slider_3d_slider_3d_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
slider3d.scroll = (0,_common__WEBPACK_IMPORTED_MODULE_20__.pauseDecorator)(slider3d.scroll, timePause);
slider3d.init();
var scrollBarTop = new _modules_scroll_bar_top_scroll_bar_top_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
scrollBarTop.scrollSlide = (0,_common__WEBPACK_IMPORTED_MODULE_20__.pauseDecorator)(scrollBarTop.scrollSlide, timePause);
scrollBarTop.init();
var backgroundMusic = new _modules_background_music_background_music__WEBPACK_IMPORTED_MODULE_5__["default"]();
backgroundMusic.init();
var welcomeScreen = new _modules_welcome_screen_welcome_screen__WEBPACK_IMPORTED_MODULE_7__["default"]();
welcomeScreen.init();
var accordion = new _modules_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
accordion.init();
var tabs = new _modules_tabs_tabs_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
tabs.init();
var stopwatch = new _modules_stopwatch_stopwatch__WEBPACK_IMPORTED_MODULE_13__["default"]();
stopwatch.init();
var timer = new _modules_timer_timer__WEBPACK_IMPORTED_MODULE_14__["default"]();
timer.init();
var contactMe = new _modules_contact_me_contact_me__WEBPACK_IMPORTED_MODULE_17__["default"]();
contactMe.init();
var calculator = new _modules_calculator_calculator__WEBPACK_IMPORTED_MODULE_19__["default"]();
calculator.init();
})();

/******/ })()
;