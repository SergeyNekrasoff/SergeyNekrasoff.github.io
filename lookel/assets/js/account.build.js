'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	// Modules
	__webpack_require__(2);
	__webpack_require__(3);

	$(function () {
		'use strict';

		function changeView(e) {
			var $target = $(e.currentTarget).data('val');
			var $settingsBox = $('.js-settings');
			var $subsBox = $('.js-subscriptions');

			if ($target === 'settings') {
				$settingsBox.addClass('flag-active');
				$subsBox.removeClass('flag-active');
			} else {
				$settingsBox.removeClass('flag-active');
				$subsBox.addClass('flag-active');
			}

			return false;
		}

		$(document).on('click', '.js-select-account', changeView);
	});

	/***/
},
/* 2 */
/***/function (module, exports) {

	;(function ($) {
		'use strict';

		/**
   *  Get in touch form settings
   */

		var SettingsForm = function (_FormValidation) {
			_inherits(SettingsForm, _FormValidation);

			function SettingsForm() {
				_classCallCheck(this, SettingsForm);

				return _possibleConstructorReturn(this, (SettingsForm.__proto__ || Object.getPrototypeOf(SettingsForm)).apply(this, arguments));
			}

			_createClass(SettingsForm, [{
				key: 'init',


				/**
     *  Form initialize
     */
				value: function init() {
					var _this2 = this;

					_get(SettingsForm.prototype.__proto__ || Object.getPrototypeOf(SettingsForm.prototype), 'init', this).call(this);

					// Validate Options
					this.optionsValidate = {
						fullMessages: false
					};

					this.$form.find(this.inputs).on('focus', function () {
						return _this2.clearErrors();
					});
				}

				/**
     * Get constraints form
     * @returns {{username: {presence: {message: string}, email: {message: (function(*=))}}, password: {presence: {message: string}}}}
     */

			}, {
				key: 'getConstraints',
				value: function getConstraints() {
					return {
						'username': {
							presence: {
								message: 'Required field'
							}
						},

						'firstname': {
							presence: {
								message: 'Required field'
							}
						},

						'lastname': {
							presence: {
								message: 'Required field'
							}
						},

						'useremail': {
							presence: {
								message: 'Required field'
							},

							email: {
								message: 'Please type correct e-mail'
							}
						}
					};
				}

				/**
     * Clear all errors
     */

			}, {
				key: 'clearErrors',
				value: function clearErrors() {
					_get(SettingsForm.prototype.__proto__ || Object.getPrototypeOf(SettingsForm.prototype), 'clearErrors', this).call(this);
					this.$form.find('.js-error-form').html('');
				}

				/**
     * Send form
     */

			}, {
				key: 'submit',
				value: function submit() {
					var data = {};
					var formData = this.$form.serializeArray();
					// const qtyItems = $('.js-input-qty').val();
					// const total = parseInt($('.js-price').html().toString());
					// const radioType = $('.js-radio-type');
					//
					// formData.push(
					//   {
					//     'name': 'items',
					//     'value': qtyItems.length === 0 ? 1 : qtyItems
					//   },
					//   {
					//     'name': 'price',
					//     'value': total
					//   },
					//   {
					//     'name': 'type',
					//     'value': radioType.length ? radioItem.attr('id') : ''
					//   }
					// );


					for (var index in formData) {
						data[formData[index].name] = formData[index].value;
					}

					this.setSaveButtonEnabled(false);

					// Check is pending login ajax request
					if (typeof this.xhr == 'undefined' || this.xhr.state() != 'pending') {
						this.xhr = this._sendAjax(data);
					}
				}

				/**
     * Send ajax to controller
     *
     * @param {object} data
     * @returns {promise}
     */

			}, {
				key: '_sendAjax',
				value: function _sendAjax(data) {
					window.Loader.show();

					console.log('data: ' + JSON.stringify(data));
				}

				/**
     * Show message from controller
     *
     * @param message
     */

			}, {
				key: '_showErrorForm',
				value: function _showErrorForm(message) {
					this.$form.find('.js-error-form').html(message);
				}
			}]);

			return SettingsForm;
		}(FormValidation);

		$(function () {
			new SettingsForm($('.js-form-settings-user'));
		});
	})(jQuery);

	/***/
},
/* 3 */
/***/function (module, exports) {

	// $(() => {
	//   document.getElementById('photo-file').addEventListener('change', readURL, true);
	//
	//   function readURL() {
	//     var file = document.getElementById('photo-file').files[0];
	//     var reader = new FileReader();
	//     reader.onloadend = function() {
	//       document.querySelector('.js-place-photo').style.backgroundImage = "url(" + reader.result + ")";
	//     }
	//     if (file) {
	//       reader.readAsDataURL(file);
	//     } else {
	//       return false;
	//     }
	//   }
	// });


	/***/}]
/******/);