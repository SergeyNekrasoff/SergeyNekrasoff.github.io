'use strict';

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
/******/{

	/***/0:
	/***/function _(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(5);

		/***/
	},

	/***/5:
	/***/function _(module, exports) {

		// mobile filter
		$(function () {
			function showFilters() {
				var $hideElems = $('.header, .footer, .mobile-filter, .catalog');
				var $sidebar = $('.sidebar');

				$hideElems.hide();
				$sidebar.addClass('flag-visible');
			}

			function hideFilters() {
				var $hideElems = $('.header, .footer, .mobile-filter, .catalog');
				var $sidebar = $('.sidebar');

				$hideElems.show();
				$sidebar.removeClass('flag-visible');
			}

			$(document).on('click', '.js-switch-filter', showFilters).on('click', '.js-close-filters', hideFilters);

			// custom scroll
			$('.custom__scroll').mCustomScrollbar({
				theme: "dark"
			});
		});

		/***/
	}

	/******/ });