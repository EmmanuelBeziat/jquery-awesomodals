/*!
 * Simple collapse/spoilers system
 * Version : 1.0
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/jquery-spoilers
 **/


;(function($, window, document, undefined) {
	'use strict';

	var pluginName = 'awesomodals';

	/**
	 * Constructor
	 */
	function Plugin(element, options) {
		this.element = element;
		this._name = pluginName;
		this._defaults = $.fn[pluginName].defaults;
		this.options = $.extend( {}, this._defaults, options );

		this.init();
	}

	/**
	 * Methods
	 */
	$.extend(Plugin.prototype, {

		// Initialization logic
		init: function() {
			this.buildCache();
			this.bindEvents();

			this.debug('[init] ' + this._name, 'info');
		},

		/**
		 * Remove plugin instance
		 * Example: $('selector').data('tabs').destroy();
		 */
		destroy: function() {
			this.unbindEvents();
			this.$element.removeData();
		},

		/**
		 * Create variables that can be accessed by other functions
		 * Useful for DOM performances
		 */
		buildCache: function() {
			this.$element = $(this.element);
			this.$modal = null;
		},

		/**
		 * Attach actions to events
		 */
		bindEvents: function() {
			var plugin = this;

			plugin.$element
				.on('click' + '.' + plugin._name, plugin.options.selectorOpen, function(event) {
					plugin.modalOpen.call(plugin, $(this));
				})
				.on('click' + '.' + plugin._name, plugin.options.selectorClose, function(event) {
					plugin.modalClose.call(plugin, $(this));
				})
				.on('click' + '.' + plugin._name, plugin.options.itemOverlay, function(event) {
					if (plugin.options.optionOverlayActive) {
						plugin.modalClose.call(plugin, $(this));
					}
				});
		},

		/**
		 * Remove actions from events
		 */
		unbindEvents: function() {
			this.$element.off('.' + this._name);
		},

		/**
		 * Open modal method
		 * Call callback on complete
		 */
		modalOpen: function($element) {
			this.debug('[action] Open modal call');
			this.debug('Modal ID: ' + $element.attr('data-modal'));

			// If button is a link, prevent following it
			event.preventDefault();

			var $modal = $($element.attr('data-modal'));

			$modal.addClass(this.options.classActive);
			this.$modal = $modal;

			/**
			 * Allow callback after open
			 */
			this.callbackOpen();
		},

		/**
		 * Close modal method
		 * Call callback on complete
		 */
		modalClose: function() {
			this.debug('[action] Close modal call');
			this.$modal.removeClass(this.options.classActive);
			this.$modal = null;

			/**
			 * Allow callback after close
			 */
			this.callbackClose();
		},

		/**
		 * Ger the action on overlay click
		 *//* TODO
		overlayAction: function(plugin, $this) {
			this.debug('[action] Overlay method call');

			console.log(this.options.optionOverlayActive);

			if (this.options.optionOverlayActive) {
				plugin.modalClose.call(plugin, $this);
			}
		},

		/**
		 * When opening modal is complete
		 */
		callbackOpen: function() {
			// Cache option
			var onModalOpened = this.options.onModalOpened;

			this.debug('[callback] On Modal Opened');

			if (typeof onModalOpened === 'function') {
				onModalOpened.call(this.element);
			}
		},

		/**
		 * When closing modal is complete
		 */
		callbackClose: function() {
			// Cache option
			var onModalClosed = this.options.onModalClosed;

			this.debug('[callback] On Modal Closed');


			if (typeof onModalClosed === 'function') {
				onModalClosed.call(this.element);
			}
		},

		debug: function(instruction, type) {
			if (this.options.debug) {
				switch (type) {
					case 'warn': console.warn(instruction); break;
					case 'info': console.info(instruction); break;
					case 'error': console.error(instruction); break;
					default: console.log(instruction);
				}
			}
		}

	});

	/**
	 * jQuery plugin wrapper
	 */
	$.fn[pluginName] = function(options) {
		this.each(function() {
			if (!$.data( this, "plugin_" + pluginName)) {
				$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			}
		});
		return this;
	};

	/**
	 * Plugin options and their default values
	 */
	$.fn[pluginName].defaults = {
		debug: false,
		selectorOpen: '[data-modal-init]',
		selectorClose: '[data-modal-close]',
		selectorModal: '[data-modal-item]',
		itemOverlay: '.dialog-overlay',
		classActive: 'dialog--active',
		optionOverlayActive: true,
		onModalOpened: null,
		onModalClosed: null
	};

})( jQuery, window, document );