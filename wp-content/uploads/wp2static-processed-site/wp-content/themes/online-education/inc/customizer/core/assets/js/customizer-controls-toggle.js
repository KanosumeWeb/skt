/**
 * Customizer controls toggle.
 */

(
	function ( $ ) {

		/* Internal shorthand */
		var api = wp.customize;

		/**
		 * Trigger hooks
		 */
		OnlineEducationControlTrigger = {

			/**
			 * Trigger a hook.
			 *
			 * @method triggerHook
			 * @param {String} hook The hook to trigger.
			 * @param {Array} args An array of args to pass to the hook.
			 */
			triggerHook : function ( hook, args ) {
				$( 'body' ).trigger( 'online-education-control-trigger.' + hook, args );
			},

			/**
			 * Add a hook.
			 *
			 * @method addHook
			 * @param {String} hook The hook to add.
			 * @param {Function} callback A function to call when the hook is triggered.
			 */
			addHook : function ( hook, callback ) {
				$( 'body' ).on( 'online-education-control-trigger.' + hook, callback );
			},

			/**
			 * Remove a hook.
			 *
			 * @method removeHook
			 * @param {String} hook The hook to remove.
			 * @param {Function} callback The callback function to remove.
			 */
			removeHook : function ( hook, callback ) {
				$( 'body' ).off( 'online-education-control-trigger.' + hook, callback );
			}

		};

		/**
		 * Helper class that contains data for showing and hiding controls.
		 *
		 * @class Online_EducationCustomizerToggles
		 */
		Online_EducationCustomizerToggles = {

			'online_education_header_image_link' : [],

		};

	}
)( jQuery );
