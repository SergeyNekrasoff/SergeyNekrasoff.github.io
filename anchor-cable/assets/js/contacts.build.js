'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

	module.exports = __webpack_require__(10);

	/***/
},,
/* 1 */
/* 2 */
/***/function (module, exports, __webpack_require__) {

	// Custom plugins
	__webpack_require__(3);

	;(function ($) {
		'use strict';

		var validate = __webpack_require__(4);

		/**
   * Class for validation html form
   *
   * @Abstract
   */

		var FormValidation = function () {
			function FormValidation(form, options) {
				_classCallCheck(this, FormValidation);

				this.options = $.extend({
					isAjax: true
				}, options);

				// Validate Options
				this.optionsValidate = {};

				// Selectors
				this.submitBtn = '.js-submit-form';
				this.inputs = '.js-input-form';
				this.checkbox = '.js-checkbox-form';
				this.file = '.js-file-form';
				this.checkboxGroup = '.js-checkbox-group';
				this.formMessage = '.js-error-message';
				this.clearInput = '.js-form-input-clear';
				this.checkPolicy = '.js-checkbox-policy';

				// Constants
				this.maxFileSize = 10485760; // 10 MB (size is also in bytes)

				// Validate messages
				this.messages = {
					oneCheckbox: 'should be selected',
					groupCheckbox: 'Do not select any items',
					fileValidate: 'is not valid',
					fileRequired: 'is required'
				};

				this.$form = $(form);

				this.addDefaultValidateRules();

				this.init();
			}

			/**
    * Initial, for events
    */


			_createClass(FormValidation, [{
				key: 'init',
				value: function init() {
					var _this = this;

					this.$form.on('submit', function () {
						return !_this.options.isAjax;
					});

					this.$form.find(this.clearInput).on('click', function (e) {
						var $target = $(e.target);

						$target.parent().find(_this.inputs).val('');
					});
					this.$form.find(this.submitBtn).on('click', function () {
						return _this.beforeSubmit();
					});
					this.$form.find(this.inputs).on('keyup', function () {
						return _this.clearErrors();
					});
					this.$form.find(this.checkbox).on('change', function () {
						return _this.clearErrors();
					});
					this.$form.find(this.checkboxGroup + ' input[type="checkbox"]').on('change', function () {
						return _this.clearErrors();
					});
					this.$form.find(this.checkPolicy).on('change', function () {
						if ($(_this).is(':checked')) {
							_this.setSaveButtonEnabled(false);
							$(_this).prop('checked', false);
						} else {
							_this.setSaveButtonEnabled(true);
							$(_this).prop('checked', true);
						}
					});
				}

				/**
     * Add custom validation rules example (http://validatejs.org/#custom-validator)
     *
     * @rule checkbox
     *  params:
     *      - message {string}
     *
     * @rule checkboxGroup
     *  params:
     *      - message {string}
     *      - minChecked {number}
     *
     * @rule file
     *  params:
     *      - message {string} - Message show if file is not valid
     *      - required {boolean}
     *      - maxFileSize {number}
     *
     */

			}, {
				key: 'addDefaultValidateRules',
				value: function addDefaultValidateRules() {
					var _this2 = this;

					if (window.validate) {
						// Single checkbox
						window.validate.validators.checkbox = function (value, options) {
							if (!!_this2.$form.find(_this2.checkbox).length) {
								var message = options.message || _this2.messages.oneCheckbox;

								return _this2.$form.find(_this2.checkbox + ':checked').length < 1 ? message : null;
							}
						};

						// Group checkbox
						window.validate.validators.checkboxGroup = function (value, options) {
							if (!!_this2.$form.find(_this2.checkboxGroup).length) {
								var message = options.message || _this2.messages.groupCheckbox;
								var minChecked = options.minChecked || 1;

								return _this2.$form.find(_this2.checkboxGroup + ' input[type="checkbox"]:checked').length < minChecked ? message : null;
							}
						};

						// File
						window.validate.validators.file = function (value, options) {
							var $file = _this2.$form.find(_this2.file);

							if (!!$file.length) {
								var message = options.message || _this2.messages.fileValidate;
								var maxFileSize = options.maxFileSize || _this2.maxFileSize;
								var required = options.required || false;

								var file = $file.get(0).files[0];
								var isValid = file && file.size < maxFileSize ? null : message;

								return required ? file ? isValid : _this2.messages.fileRequired : file ? isValid : null;
							}
						};
					}
				}

				/**
     * Return default constraints
     *
     * @returns {object}
     */

			}, {
				key: 'getDefaultConstraints',
				value: function getDefaultConstraints() {
					var fileName = this.$form.find(this.file).attr('name');
					var result = {};

					this.$form.find(this.checkbox).each(function (indx, checkbox) {
						result[checkbox.name] = {
							checkbox: {}
						};
					});

					this.$form.find(this.checkboxGroup + ' input[type="checkbox"]').each(function (indx, checkbox) {
						result[checkbox.name] = {
							checkboxGroup: {}
						};
					});

					if (fileName) {
						result[fileName] = {
							file: {}
						};
					}

					return result;
				}

				/**
     * Get constraints for form
     */

			}, {
				key: 'getConstraints',
				value: function getConstraints() {}

				/**
     * Is for data valid
     *
     * @returns {boolean}
     */

			}, {
				key: 'isValid',
				value: function isValid() {
					var constraints = $.extend(this.getDefaultConstraints(), this.getConstraints());
					var errors = validate(this.$form, constraints, this.optionsValidate);

					this.clearErrors();

					if (errors) {
						this.renderErrors(errors);
					}

					return !errors;
				}

				/**
     * Is for policy checkbox is checked
     *
     * @returns {boolean}
     */

			}, {
				key: 'isCheckedPolicy',
				value: function isCheckedPolicy() {
					return this.$form.find(this.checkPolicy).is(':checked') ? true : false;
				}

				/**
     * Render errors
     *
     * @param error {object}
     */

			}, {
				key: 'renderErrors',
				value: function renderErrors(error) {
					var _this3 = this;

					$.each(error, function (i, val) {
						var $error = _this3.$form.find('[data-error="' + i + '"]');
						var $field = _this3.$form.find('[name="' + i + '"]');

						// validate.js set errors as arrays...
						$error.text((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? val[0] : val).addClass('error-active');
						$field.addClass('flag-error');
					});

					if (this.$form.find('.error-active').length) {
						this.setSaveButtonEnabled(false);
					}
				}

				/**
     * Clear all errors
     */

			}, {
				key: 'clearErrors',
				value: function clearErrors() {
					this.$form.find('.error-text').removeClass('error-active').empty();
					this.$form.find('.flag-error').removeClass('flag-error');
					this.$form.find(this.clearInput).addClass('flag-active');
				}

				/**
     * Disable save button
     * @param value {boolean}
     */

			}, {
				key: 'setSaveButtonEnabled',
				value: function setSaveButtonEnabled(value) {
					this.$form.find(this.submitBtn).prop('disabled', !value);
				}

				/**
     * Before submit form to server
     */

			}, {
				key: 'beforeSubmit',
				value: function beforeSubmit() {
					if (this.isValid() && this.isCheckedPolicy()) {
						this.submit();
					}
				}

				/**
     * Submit form to server
     */

			}, {
				key: 'submit',
				value: function submit() {}
			}]);

			return FormValidation;
		}();

		window.FormValidation = FormValidation;
	})(jQuery);

	/***/
},
/* 3 */
/***/function (module, exports) {

	;(function ($) {
		'use strict';

		var cssSelector = {
			wrapper: '.js-wrap-field',
			input: '.js-input-form, .js-form-textarea',
			closeButton: '.js-form-input-clear'
		};

		/**
   * Initialization validate mode for all inputs
   */
		function initValidateMod() {
			$(cssSelector.wrapper).filter('.flag-important').find(cssSelector.input).addClass('flag-important');

			$(cssSelector.wrapper).each(function () {
				$(this).addClass('active');

				$(this).parent().removeClass('field-error');

				var $input = $(this).find('.js-input-form'),
				    $textarea = $(this).find('.js-form-textarea');

				if ($input.val()) {
					$input.addClass('active');
				}
				if ($textarea.val()) {
					$textarea.addClass('active');
				}
				showAsterix($input);
			});
		}

		/**
   * Show asterix in required fields
   */
		function showAsterix($input) {
			if (!$input.val() && $input.parent().hasClass('wrap-field-required')) {
				$input.parent().addClass('show-asterisk');
			}
		}

		/**
   * Call initValidateMod()
   */
		$(initValidateMod);

		$(document).on('focus', cssSelector.input, function (e) {
			$(e.currentTarget).removeClass('flag-error');
			$(e.currentTarget).parent().removeClass('field-error show-asterisk');
		}).on('keyup', cssSelector.input, function (e) {
			var input = e.currentTarget;

			if (input.value) {
				$(input).addClass('active');
				$(input).parent().removeClass('field-error');
			} else {
				$(input).removeClass('active');
			}
		}).on('blur', cssSelector.input, function (e) {
			var input = e.currentTarget;

			if ($(input).hasClass('flag-important') && !input.value) {
				$(input).addClass('flag-error');
				$(input).parent().addClass('field-error');
			} else {
				$(input).removeClass('flag-error');
				$(input).parent().removeClass('field-error');
			}
			showAsterix($(input));
		}).on('click', cssSelector.closeButton, function (e) {
			var $input = $(e.currentTarget).closest(cssSelector.wrapper).find(cssSelector.input);

			if ($input.val()) {
				$input.val('').removeClass('flag-error, active').parent().removeClass('field-error');

				//Safari focus fix
				setTimeout(function () {
					$input.get(0).focus();
				}, 50);
			}
		});
	})(jQuery);

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (module) {
		/*!
  * validate.js 0.12.0
  *
  * (c) 2013-2017 Nicklas Ansman, 2013 Wrapp
  * Validate.js may be freely distributed under the MIT license.
  * For all details and documentation:
  * http://validatejs.org/
  */

		(function (exports, module, define) {
			"use strict";

			// The main function that calls the validators specified by the constraints.
			// The options are the following:
			//   - format (string) - An option that controls how the returned value is formatted
			//     * flat - Returns a flat array of just the error messages
			//     * grouped - Returns the messages grouped by attribute (default)
			//     * detailed - Returns an array of the raw validation data
			//   - fullMessages (boolean) - If `true` (default) the attribute name is prepended to the error.
			//
			// Please note that the options are also passed to each validator.

			var validate = function validate(attributes, constraints, options) {
				options = v.extend({}, v.options, options);

				var results = v.runValidations(attributes, constraints, options),
				    attr,
				    validator;

				if (results.some(function (r) {
					return v.isPromise(r.error);
				})) {
					throw new Error("Use validate.async if you want support for promises");
				}
				return validate.processValidationResults(results, options);
			};

			var v = validate;

			// Copies over attributes from one or more sources to a single destination.
			// Very much similar to underscore's extend.
			// The first argument is the target object and the remaining arguments will be
			// used as sources.
			v.extend = function (obj) {
				[].slice.call(arguments, 1).forEach(function (source) {
					for (var attr in source) {
						obj[attr] = source[attr];
					}
				});
				return obj;
			};

			v.extend(validate, {
				// This is the version of the library as a semver.
				// The toString function will allow it to be coerced into a string
				version: {
					major: 0,
					minor: 12,
					patch: 0,
					metadata: null,
					toString: function toString() {
						var version = v.format("%{major}.%{minor}.%{patch}", v.version);
						if (!v.isEmpty(v.version.metadata)) {
							version += "+" + v.version.metadata;
						}
						return version;
					}
				},

				// Below is the dependencies that are used in validate.js

				// The constructor of the Promise implementation.
				// If you are using Q.js, RSVP or any other A+ compatible implementation
				// override this attribute to be the constructor of that promise.
				// Since jQuery promises aren't A+ compatible they won't work.
				Promise: typeof Promise !== "undefined" ? Promise : /* istanbul ignore next */null,

				EMPTY_STRING_REGEXP: /^\s*$/,

				// Runs the validators specified by the constraints object.
				// Will return an array of the format:
				//     [{attribute: "<attribute name>", error: "<validation result>"}, ...]
				runValidations: function runValidations(attributes, constraints, options) {
					var results = [],
					    attr,
					    validatorName,
					    value,
					    validators,
					    validator,
					    validatorOptions,
					    error;

					if (v.isDomElement(attributes) || v.isJqueryElement(attributes)) {
						attributes = v.collectFormValues(attributes);
					}

					// Loops through each constraints, finds the correct validator and run it.
					for (attr in constraints) {
						value = v.getDeepObjectValue(attributes, attr);
						// This allows the constraints for an attribute to be a function.
						// The function will be called with the value, attribute name, the complete dict of
						// attributes as well as the options and constraints passed in.
						// This is useful when you want to have different
						// validations depending on the attribute value.
						validators = v.result(constraints[attr], value, attributes, attr, options, constraints);

						for (validatorName in validators) {
							validator = v.validators[validatorName];

							if (!validator) {
								error = v.format("Unknown validator %{name}", { name: validatorName });
								throw new Error(error);
							}

							validatorOptions = validators[validatorName];
							// This allows the options to be a function. The function will be
							// called with the value, attribute name, the complete dict of
							// attributes as well as the options and constraints passed in.
							// This is useful when you want to have different
							// validations depending on the attribute value.
							validatorOptions = v.result(validatorOptions, value, attributes, attr, options, constraints);
							if (!validatorOptions) {
								continue;
							}
							results.push({
								attribute: attr,
								value: value,
								validator: validatorName,
								globalOptions: options,
								attributes: attributes,
								options: validatorOptions,
								error: validator.call(validator, value, validatorOptions, attr, attributes, options)
							});
						}
					}

					return results;
				},

				// Takes the output from runValidations and converts it to the correct
				// output format.
				processValidationResults: function processValidationResults(errors, options) {
					errors = v.pruneEmptyErrors(errors, options);
					errors = v.expandMultipleErrors(errors, options);
					errors = v.convertErrorMessages(errors, options);

					var format = options.format || "grouped";

					if (typeof v.formatters[format] === 'function') {
						errors = v.formatters[format](errors);
					} else {
						throw new Error(v.format("Unknown format %{format}", options));
					}

					return v.isEmpty(errors) ? undefined : errors;
				},

				// Runs the validations with support for promises.
				// This function will return a promise that is settled when all the
				// validation promises have been completed.
				// It can be called even if no validations returned a promise.
				async: function async(attributes, constraints, options) {
					options = v.extend({}, v.async.options, options);

					var WrapErrors = options.wrapErrors || function (errors) {
						return errors;
					};

					// Removes unknown attributes
					if (options.cleanAttributes !== false) {
						attributes = v.cleanAttributes(attributes, constraints);
					}

					var results = v.runValidations(attributes, constraints, options);

					return new v.Promise(function (resolve, reject) {
						v.waitForResults(results).then(function () {
							var errors = v.processValidationResults(results, options);
							if (errors) {
								reject(new WrapErrors(errors, options, attributes, constraints));
							} else {
								resolve(attributes);
							}
						}, function (err) {
							reject(err);
						});
					});
				},

				single: function single(value, constraints, options) {
					options = v.extend({}, v.single.options, options, {
						format: "flat",
						fullMessages: false
					});
					return v({ single: value }, { single: constraints }, options);
				},

				// Returns a promise that is resolved when all promises in the results array
				// are settled. The promise returned from this function is always resolved,
				// never rejected.
				// This function modifies the input argument, it replaces the promises
				// with the value returned from the promise.
				waitForResults: function waitForResults(results) {
					// Create a sequence of all the results starting with a resolved promise.
					return results.reduce(function (memo, result) {
						// If this result isn't a promise skip it in the sequence.
						if (!v.isPromise(result.error)) {
							return memo;
						}

						return memo.then(function () {
							return result.error.then(function (error) {
								result.error = error || null;
							});
						});
					}, new v.Promise(function (r) {
						r();
					})); // A resolved promise
				},

				// If the given argument is a call: function the and: function return the value
				// otherwise just return the value. Additional arguments will be passed as
				// arguments to the function.
				// Example:
				// ```
				// result('foo') // 'foo'
				// result(Math.max, 1, 2) // 2
				// ```
				result: function result(value) {
					var args = [].slice.call(arguments, 1);
					if (typeof value === 'function') {
						value = value.apply(null, args);
					}
					return value;
				},

				// Checks if the value is a number. This function does not consider NaN a
				// number like many other `isNumber` functions do.
				isNumber: function isNumber(value) {
					return typeof value === 'number' && !isNaN(value);
				},

				// Returns false if the object is not a function
				isFunction: function isFunction(value) {
					return typeof value === 'function';
				},

				// A simple check to verify that the value is an integer. Uses `isNumber`
				// and a simple modulo check.
				isInteger: function isInteger(value) {
					return v.isNumber(value) && value % 1 === 0;
				},

				// Checks if the value is a boolean
				isBoolean: function isBoolean(value) {
					return typeof value === 'boolean';
				},

				// Uses the `Object` function to check if the given argument is an object.
				isObject: function isObject(obj) {
					return obj === Object(obj);
				},

				// Simply checks if the object is an instance of a date
				isDate: function isDate(obj) {
					return obj instanceof Date;
				},

				// Returns false if the object is `null` of `undefined`
				isDefined: function isDefined(obj) {
					return obj !== null && obj !== undefined;
				},

				// Checks if the given argument is a promise. Anything with a `then`
				// function is considered a promise.
				isPromise: function isPromise(p) {
					return !!p && v.isFunction(p.then);
				},

				isJqueryElement: function isJqueryElement(o) {
					return o && v.isString(o.jquery);
				},

				isDomElement: function isDomElement(o) {
					if (!o) {
						return false;
					}

					if (!o.querySelectorAll || !o.querySelector) {
						return false;
					}

					if (v.isObject(document) && o === document) {
						return true;
					}

					// http://stackoverflow.com/a/384380/699304
					/* istanbul ignore else */
					if ((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === "object") {
						return o instanceof HTMLElement;
					} else {
						return o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
					}
				},

				isEmpty: function isEmpty(value) {
					var attr;

					// Null and undefined are empty
					if (!v.isDefined(value)) {
						return true;
					}

					// functions are non empty
					if (v.isFunction(value)) {
						return false;
					}

					// Whitespace only strings are empty
					if (v.isString(value)) {
						return v.EMPTY_STRING_REGEXP.test(value);
					}

					// For arrays we use the length property
					if (v.isArray(value)) {
						return value.length === 0;
					}

					// Dates have no attributes but aren't empty
					if (v.isDate(value)) {
						return false;
					}

					// If we find at least one property we consider it non empty
					if (v.isObject(value)) {
						for (attr in value) {
							return false;
						}
						return true;
					}

					return false;
				},

				// Formats the specified strings with the given values like so:
				// ```
				// format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
				// ```
				// If you want to write %{...} without having it replaced simply
				// prefix it with % like this `Foo: %%{foo}` and it will be returned
				// as `"Foo: %{foo}"`
				format: v.extend(function (str, vals) {
					if (!v.isString(str)) {
						return str;
					}
					return str.replace(v.format.FORMAT_REGEXP, function (m0, m1, m2) {
						if (m1 === '%') {
							return "%{" + m2 + "}";
						} else {
							return String(vals[m2]);
						}
					});
				}, {
					// Finds %{key} style patterns in the given string
					FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
				}),

				// "Prettifies" the given string.
				// Prettifying means replacing [.\_-] with spaces as well as splitting
				// camel case words.
				prettify: function prettify(str) {
					if (v.isNumber(str)) {
						// If there are more than 2 decimals round it to two
						if (str * 100 % 1 === 0) {
							return "" + str;
						} else {
							return parseFloat(Math.round(str * 100) / 100).toFixed(2);
						}
					}

					if (v.isArray(str)) {
						return str.map(function (s) {
							return v.prettify(s);
						}).join(", ");
					}

					if (v.isObject(str)) {
						return str.toString();
					}

					// Ensure the string is actually a string
					str = "" + str;

					return str
					// Splits keys separated by periods
					.replace(/([^\s])\.([^\s])/g, '$1 $2')
					// Removes backslashes
					.replace(/\\+/g, '')
					// Replaces - and - with space
					.replace(/[_-]/g, ' ')
					// Splits camel cased words
					.replace(/([a-z])([A-Z])/g, function (m0, m1, m2) {
						return "" + m1 + " " + m2.toLowerCase();
					}).toLowerCase();
				},

				stringifyValue: function stringifyValue(value, options) {
					var prettify = options && options.prettify || v.prettify;
					return prettify(value);
				},

				isString: function isString(value) {
					return typeof value === 'string';
				},

				isArray: function isArray(value) {
					return {}.toString.call(value) === '[object Array]';
				},

				// Checks if the object is a hash, which is equivalent to an object that
				// is neither an array nor a function.
				isHash: function isHash(value) {
					return v.isObject(value) && !v.isArray(value) && !v.isFunction(value);
				},

				contains: function contains(obj, value) {
					if (!v.isDefined(obj)) {
						return false;
					}
					if (v.isArray(obj)) {
						return obj.indexOf(value) !== -1;
					}
					return value in obj;
				},

				unique: function unique(array) {
					if (!v.isArray(array)) {
						return array;
					}
					return array.filter(function (el, index, array) {
						return array.indexOf(el) == index;
					});
				},

				forEachKeyInKeypath: function forEachKeyInKeypath(object, keypath, callback) {
					if (!v.isString(keypath)) {
						return undefined;
					}

					var key = "",
					    i,
					    escape = false;

					for (i = 0; i < keypath.length; ++i) {
						switch (keypath[i]) {
							case '.':
								if (escape) {
									escape = false;
									key += '.';
								} else {
									object = callback(object, key, false);
									key = "";
								}
								break;

							case '\\':
								if (escape) {
									escape = false;
									key += '\\';
								} else {
									escape = true;
								}
								break;

							default:
								escape = false;
								key += keypath[i];
								break;
						}
					}

					return callback(object, key, true);
				},

				getDeepObjectValue: function getDeepObjectValue(obj, keypath) {
					if (!v.isObject(obj)) {
						return undefined;
					}

					return v.forEachKeyInKeypath(obj, keypath, function (obj, key) {
						if (v.isObject(obj)) {
							return obj[key];
						}
					});
				},

				// This returns an object with all the values of the form.
				// It uses the input name as key and the value as value
				// So for example this:
				// <input type="text" name="email" value="foo@bar.com" />
				// would return:
				// {email: "foo@bar.com"}
				collectFormValues: function collectFormValues(form, options) {
					var values = {},
					    i,
					    j,
					    input,
					    inputs,
					    option,
					    value;

					if (v.isJqueryElement(form)) {
						form = form[0];
					}

					if (!form) {
						return values;
					}

					options = options || {};

					inputs = form.querySelectorAll("input[name], textarea[name]");
					for (i = 0; i < inputs.length; ++i) {
						input = inputs.item(i);

						if (v.isDefined(input.getAttribute("data-ignored"))) {
							continue;
						}

						name = input.name.replace(/\./g, "\\\\.");
						value = v.sanitizeFormValue(input.value, options);
						if (input.type === "number") {
							value = value ? +value : null;
						} else if (input.type === "checkbox") {
							if (input.attributes.value) {
								if (!input.checked) {
									value = values[name] || null;
								}
							} else {
								value = input.checked;
							}
						} else if (input.type === "radio") {
							if (!input.checked) {
								value = values[name] || null;
							}
						}
						values[name] = value;
					}

					inputs = form.querySelectorAll("select[name]");
					for (i = 0; i < inputs.length; ++i) {
						input = inputs.item(i);
						if (v.isDefined(input.getAttribute("data-ignored"))) {
							continue;
						}

						if (input.multiple) {
							value = [];
							for (j in input.options) {
								option = input.options[j];
								if (option && option.selected) {
									value.push(v.sanitizeFormValue(option.value, options));
								}
							}
						} else {
							var _val = typeof input.options[input.selectedIndex] !== 'undefined' ? input.options[input.selectedIndex].value : '';
							value = v.sanitizeFormValue(_val, options);
						}
						values[input.name] = value;
					}

					return values;
				},

				sanitizeFormValue: function sanitizeFormValue(value, options) {
					if (options.trim && v.isString(value)) {
						value = value.trim();
					}

					if (options.nullify !== false && value === "") {
						return null;
					}
					return value;
				},

				capitalize: function capitalize(str) {
					if (!v.isString(str)) {
						return str;
					}
					return str[0].toUpperCase() + str.slice(1);
				},

				// Remove all errors who's error attribute is empty (null or undefined)
				pruneEmptyErrors: function pruneEmptyErrors(errors) {
					return errors.filter(function (error) {
						return !v.isEmpty(error.error);
					});
				},

				// In
				// [{error: ["err1", "err2"], ...}]
				// Out
				// [{error: "err1", ...}, {error: "err2", ...}]
				//
				// All attributes in an error with multiple messages are duplicated
				// when expanding the errors.
				expandMultipleErrors: function expandMultipleErrors(errors) {
					var ret = [];
					errors.forEach(function (error) {
						// Removes errors without a message
						if (v.isArray(error.error)) {
							error.error.forEach(function (msg) {
								ret.push(v.extend({}, error, { error: msg }));
							});
						} else {
							ret.push(error);
						}
					});
					return ret;
				},

				// Converts the error mesages by prepending the attribute name unless the
				// message is prefixed by ^
				convertErrorMessages: function convertErrorMessages(errors, options) {
					options = options || {};

					var ret = [],
					    prettify = options.prettify || v.prettify;
					errors.forEach(function (errorInfo) {
						var error = v.result(errorInfo.error, errorInfo.value, errorInfo.attribute, errorInfo.options, errorInfo.attributes, errorInfo.globalOptions);

						if (!v.isString(error)) {
							ret.push(errorInfo);
							return;
						}

						if (error[0] === '^') {
							error = error.slice(1);
						} else if (options.fullMessages !== false) {
							error = v.capitalize(prettify(errorInfo.attribute)) + " " + error;
						}
						error = error.replace(/\\\^/g, "^");
						error = v.format(error, {
							value: v.stringifyValue(errorInfo.value, options)
						});
						ret.push(v.extend({}, errorInfo, { error: error }));
					});
					return ret;
				},

				// In:
				// [{attribute: "<attributeName>", ...}]
				// Out:
				// {"<attributeName>": [{attribute: "<attributeName>", ...}]}
				groupErrorsByAttribute: function groupErrorsByAttribute(errors) {
					var ret = {};
					errors.forEach(function (error) {
						var list = ret[error.attribute];
						if (list) {
							list.push(error);
						} else {
							ret[error.attribute] = [error];
						}
					});
					return ret;
				},

				// In:
				// [{error: "<message 1>", ...}, {error: "<message 2>", ...}]
				// Out:
				// ["<message 1>", "<message 2>"]
				flattenErrorsToArray: function flattenErrorsToArray(errors) {
					return errors.map(function (error) {
						return error.error;
					}).filter(function (value, index, self) {
						return self.indexOf(value) === index;
					});
				},

				cleanAttributes: function cleanAttributes(attributes, whitelist) {
					function whitelistCreator(obj, key, last) {
						if (v.isObject(obj[key])) {
							return obj[key];
						}
						return obj[key] = last ? true : {};
					}

					function buildObjectWhitelist(whitelist) {
						var ow = {},
						    lastObject,
						    attr;
						for (attr in whitelist) {
							if (!whitelist[attr]) {
								continue;
							}
							v.forEachKeyInKeypath(ow, attr, whitelistCreator);
						}
						return ow;
					}

					function cleanRecursive(attributes, whitelist) {
						if (!v.isObject(attributes)) {
							return attributes;
						}

						var ret = v.extend({}, attributes),
						    w,
						    attribute;

						for (attribute in attributes) {
							w = whitelist[attribute];

							if (v.isObject(w)) {
								ret[attribute] = cleanRecursive(ret[attribute], w);
							} else if (!w) {
								delete ret[attribute];
							}
						}
						return ret;
					}

					if (!v.isObject(whitelist) || !v.isObject(attributes)) {
						return {};
					}

					whitelist = buildObjectWhitelist(whitelist);
					return cleanRecursive(attributes, whitelist);
				},

				exposeModule: function exposeModule(validate, root, exports, module, define) {
					if (exports) {
						if (module && module.exports) {
							exports = module.exports = validate;
						}
						exports.validate = validate;
					} else {
						root.validate = validate;
						if (validate.isFunction(define) && define.amd) {
							define([], function () {
								return validate;
							});
						}
					}
				},

				warn: function warn(msg) {
					if (typeof console !== "undefined" && console.warn) {
						console.warn("[validate.js] " + msg);
					}
				},

				error: function error(msg) {
					if (typeof console !== "undefined" && console.error) {
						console.error("[validate.js] " + msg);
					}
				}
			});

			validate.validators = {
				// Presence validates that the value isn't empty
				presence: function presence(value, options) {
					options = v.extend({}, this.options, options);
					if (options.allowEmpty !== false ? !v.isDefined(value) : v.isEmpty(value)) {
						return options.message || this.message || "can't be blank";
					}
				},
				length: function length(value, options, attribute) {
					// Empty values are allowed
					if (!v.isDefined(value)) {
						return;
					}

					options = v.extend({}, this.options, options);

					var is = options.is,
					    maximum = options.maximum,
					    minimum = options.minimum,
					    tokenizer = options.tokenizer || function (val) {
						return val;
					},
					    err,
					    errors = [];

					value = tokenizer(value);
					var length = value.length;
					if (!v.isNumber(length)) {
						v.error(v.format("Attribute %{attr} has a non numeric value for `length`", { attr: attribute }));
						return options.message || this.notValid || "has an incorrect length";
					}

					// Is checks
					if (v.isNumber(is) && length !== is) {
						err = options.wrongLength || this.wrongLength || "is the wrong length (should be %{count} characters)";
						errors.push(v.format(err, { count: is }));
					}

					if (v.isNumber(minimum) && length < minimum) {
						err = options.tooShort || this.tooShort || "is too short (minimum is %{count} characters)";
						errors.push(v.format(err, { count: minimum }));
					}

					if (v.isNumber(maximum) && length > maximum) {
						err = options.tooLong || this.tooLong || "is too long (maximum is %{count} characters)";
						errors.push(v.format(err, { count: maximum }));
					}

					if (errors.length > 0) {
						return options.message || errors;
					}
				},
				numericality: function numericality(value, options, attribute, attributes, globalOptions) {
					// Empty values are fine
					if (!v.isDefined(value)) {
						return;
					}

					options = v.extend({}, this.options, options);

					var errors = [],
					    name,
					    count,
					    checks = {
						greaterThan: function greaterThan(v, c) {
							return v > c;
						},
						greaterThanOrEqualTo: function greaterThanOrEqualTo(v, c) {
							return v >= c;
						},
						equalTo: function equalTo(v, c) {
							return v === c;
						},
						lessThan: function lessThan(v, c) {
							return v < c;
						},
						lessThanOrEqualTo: function lessThanOrEqualTo(v, c) {
							return v <= c;
						},
						divisibleBy: function divisibleBy(v, c) {
							return v % c === 0;
						}
					},
					    prettify = options.prettify || globalOptions && globalOptions.prettify || v.prettify;

					// Strict will check that it is a valid looking number
					if (v.isString(value) && options.strict) {
						var pattern = "^-?(0|[1-9]\\d*)";
						if (!options.onlyInteger) {
							pattern += "(\\.\\d+)?";
						}
						pattern += "$";

						if (!new RegExp(pattern).test(value)) {
							return options.message || options.notValid || this.notValid || this.message || "must be a valid number";
						}
					}

					// Coerce the value to a number unless we're being strict.
					if (options.noStrings !== true && v.isString(value) && !v.isEmpty(value)) {
						value = +value;
					}

					// If it's not a number we shouldn't continue since it will compare it.
					if (!v.isNumber(value)) {
						return options.message || options.notValid || this.notValid || this.message || "is not a number";
					}

					// Same logic as above, sort of. Don't bother with comparisons if this
					// doesn't pass.
					if (options.onlyInteger && !v.isInteger(value)) {
						return options.message || options.notInteger || this.notInteger || this.message || "must be an integer";
					}

					for (name in checks) {
						count = options[name];
						if (v.isNumber(count) && !checks[name](value, count)) {
							// This picks the default message if specified
							// For example the greaterThan check uses the message from
							// this.notGreaterThan so we capitalize the name and prepend "not"
							var key = "not" + v.capitalize(name);
							var msg = options[key] || this[key] || this.message || "must be %{type} %{count}";

							errors.push(v.format(msg, {
								count: count,
								type: prettify(name)
							}));
						}
					}

					if (options.odd && value % 2 !== 1) {
						errors.push(options.notOdd || this.notOdd || this.message || "must be odd");
					}
					if (options.even && value % 2 !== 0) {
						errors.push(options.notEven || this.notEven || this.message || "must be even");
					}

					if (errors.length) {
						return options.message || errors;
					}
				},
				datetime: v.extend(function (value, options) {
					if (!v.isFunction(this.parse) || !v.isFunction(this.format)) {
						throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
					}

					// Empty values are fine
					if (!v.isDefined(value)) {
						return;
					}

					options = v.extend({}, this.options, options);

					var err,
					    errors = [],
					    earliest = options.earliest ? this.parse(options.earliest, options) : NaN,
					    latest = options.latest ? this.parse(options.latest, options) : NaN;

					value = this.parse(value, options);

					// 86400000 is the number of milliseconds in a day, this is used to remove
					// the time from the date
					if (isNaN(value) || options.dateOnly && value % 86400000 !== 0) {
						err = options.notValid || options.message || this.notValid || "must be a valid date";
						return v.format(err, { value: arguments[0] });
					}

					if (!isNaN(earliest) && value < earliest) {
						err = options.tooEarly || options.message || this.tooEarly || "must be no earlier than %{date}";
						err = v.format(err, {
							value: this.format(value, options),
							date: this.format(earliest, options)
						});
						errors.push(err);
					}

					if (!isNaN(latest) && value > latest) {
						err = options.tooLate || options.message || this.tooLate || "must be no later than %{date}";
						err = v.format(err, {
							date: this.format(latest, options),
							value: this.format(value, options)
						});
						errors.push(err);
					}

					if (errors.length) {
						return v.unique(errors);
					}
				}, {
					parse: null,
					format: null
				}),
				date: function date(value, options) {
					options = v.extend({}, options, { dateOnly: true });
					return v.validators.datetime.call(v.validators.datetime, value, options);
				},
				format: function format(value, options) {
					if (v.isString(options) || options instanceof RegExp) {
						options = { pattern: options };
					}

					options = v.extend({}, this.options, options);

					var message = options.message || this.message || "is invalid",
					    pattern = options.pattern,
					    match;

					// Empty values are allowed
					if (!v.isDefined(value)) {
						return;
					}
					if (!v.isString(value)) {
						return message;
					}

					if (v.isString(pattern)) {
						pattern = new RegExp(options.pattern, options.flags);
					}
					match = pattern.exec(value);
					if (!match || match[0].length != value.length) {
						return message;
					}
				},
				inclusion: function inclusion(value, options) {
					// Empty values are fine
					if (!v.isDefined(value)) {
						return;
					}
					if (v.isArray(options)) {
						options = { within: options };
					}
					options = v.extend({}, this.options, options);
					if (v.contains(options.within, value)) {
						return;
					}
					var message = options.message || this.message || "^%{value} is not included in the list";
					return v.format(message, { value: value });
				},
				exclusion: function exclusion(value, options) {
					// Empty values are fine
					if (!v.isDefined(value)) {
						return;
					}
					if (v.isArray(options)) {
						options = { within: options };
					}
					options = v.extend({}, this.options, options);
					if (!v.contains(options.within, value)) {
						return;
					}
					var message = options.message || this.message || "^%{value} is restricted";
					return v.format(message, { value: value });
				},
				email: v.extend(function (value, options) {
					options = v.extend({}, this.options, options);
					var message = options.message || this.message || "is not a valid email";
					// Empty values are fine
					if (!v.isDefined(value)) {
						return;
					}
					if (!v.isString(value)) {
						return message;
					}
					if (!this.PATTERN.exec(value)) {
						return message;
					}
				}, {
					PATTERN: /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i
				}),
				equality: function equality(value, options, attribute, attributes, globalOptions) {
					if (!v.isDefined(value)) {
						return;
					}

					if (v.isString(options)) {
						options = { attribute: options };
					}
					options = v.extend({}, this.options, options);
					var message = options.message || this.message || "is not equal to %{attribute}";

					if (v.isEmpty(options.attribute) || !v.isString(options.attribute)) {
						throw new Error("The attribute must be a non empty string");
					}

					var otherValue = v.getDeepObjectValue(attributes, options.attribute),
					    comparator = options.comparator || function (v1, v2) {
						return v1 === v2;
					},
					    prettify = options.prettify || globalOptions && globalOptions.prettify || v.prettify;

					if (!comparator(value, otherValue, options, attribute, attributes)) {
						return v.format(message, { attribute: prettify(options.attribute) });
					}
				},

				// A URL validator that is used to validate URLs with the ability to
				// restrict schemes and some domains.
				url: function url(value, options) {
					if (!v.isDefined(value)) {
						return;
					}

					options = v.extend({}, this.options, options);

					var message = options.message || this.message || "is not a valid url",
					    schemes = options.schemes || this.schemes || ['http', 'https'],
					    allowLocal = options.allowLocal || this.allowLocal || false;

					if (!v.isString(value)) {
						return message;
					}

					// https://gist.github.com/dperini/729294
					var regex = "^" +
					// protocol identifier
					"(?:(?:" + schemes.join("|") + ")://)" +
					// user:pass authentication
					"(?:\\S+(?::\\S*)?@)?" + "(?:";

					var tld = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))';

					if (allowLocal) {
						tld += "?";
					} else {
						regex +=
						// IP address exclusion
						// private & local networks
						"(?!(?:10|127)(?:\\.\\d{1,3}){3})" + "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})";
					}

					regex +=
					// IP address dotted notation octets
					// excludes loopback network 0.0.0.0
					// excludes reserved space >= 224.0.0.0
					// excludes network & broacast addresses
					// (first & last IP address of each class)
					"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" +
					// host name
					'(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
					// domain name
					'(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' + tld + ")" +
					// port number
					"(?::\\d{2,5})?" +
					// resource path
					"(?:[/?#]\\S*)?" + "$";

					var PATTERN = new RegExp(regex, 'i');
					if (!PATTERN.exec(value)) {
						return message;
					}
				}
			};

			validate.formatters = {
				detailed: function detailed(errors) {
					return errors;
				},
				flat: v.flattenErrorsToArray,
				grouped: function grouped(errors) {
					var attr;

					errors = v.groupErrorsByAttribute(errors);
					for (attr in errors) {
						errors[attr] = v.flattenErrorsToArray(errors[attr]);
					}
					return errors;
				},
				constraint: function constraint(errors) {
					var attr;
					errors = v.groupErrorsByAttribute(errors);
					for (attr in errors) {
						errors[attr] = errors[attr].map(function (result) {
							return result.validator;
						}).sort();
					}
					return errors;
				}
			};

			validate.exposeModule(validate, this, exports, module, __webpack_require__(6));
		}).call(this, true ? /* istanbul ignore next */exports : null, true ? /* istanbul ignore next */module : null, __webpack_require__(6));

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(5)(module));

	/***/
},
/* 5 */
/***/function (module, exports) {

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

	/***/
},
/* 6 */
/***/function (module, exports) {

	module.exports = function () {
		throw new Error("define cannot be used indirect");
	};

	/***/
},,,,
/* 7 */
/* 8 */
/* 9 */
/* 10 */
/***/function (module, exports, __webpack_require__) {

	// Custom plugins
	__webpack_require__(2);

	// Includes
	__webpack_require__(11);

	/***/
},
/* 11 */
/***/function (module, exports) {

	;(function ($) {
		'use strict';

		/**
   *  Get in touch form settings
   */

		var FormFeedback = function (_FormValidation) {
			_inherits(FormFeedback, _FormValidation);

			function FormFeedback() {
				_classCallCheck(this, FormFeedback);

				return _possibleConstructorReturn(this, (FormFeedback.__proto__ || Object.getPrototypeOf(FormFeedback)).apply(this, arguments));
			}

			_createClass(FormFeedback, [{
				key: 'init',


				/**
     *  Form initialize
     */
				value: function init() {
					var _this5 = this;

					_get(FormFeedback.prototype.__proto__ || Object.getPrototypeOf(FormFeedback.prototype), 'init', this).call(this);

					// Validate Options
					this.optionsValidate = {
						fullMessages: false
					};

					this.$form.find(this.inputs).on('focus', function () {
						return _this5.clearErrors();
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
						'name': {
							presence: {
								message: 'Необходимо заполнить это поле'
							}
						},

						'email': {
							presence: {
								message: 'Пожалуйста, введите e-mail'
							},

							email: {
								message: 'Введите корректный e-mail'
							}
						},

						'subject': {
							presence: {
								message: 'Необходимо заполнить это поле'
							}
						},

						'feedback': {
							presence: {
								message: 'Необходимо заполнить это поле'
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
					_get(FormFeedback.prototype.__proto__ || Object.getPrototypeOf(FormFeedback.prototype), 'clearErrors', this).call(this);
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
					var _this6 = this;

					window.Loader.show();

					$.ajax({
						url: '/scripts/feedback.php',
						type: 'POST',
						data: data,
						dataType: 'json'
					}).done(function (response) {
						console.log('response: ' + response.message);
					}).fail(function (response) {
						_this6._showErrorForm(response.message);
					}).always(function () {
						_this6.$form[0].reset();
						_this6.$form.find('.input-field').removeClass('is-dirty');
						window.Loader.hide();
					});
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

			return FormFeedback;
		}(FormValidation);

		$(function () {
			new FormFeedback($('.js-form-feedback'));
		});
	})(jQuery);

	/***/
}]
/******/);