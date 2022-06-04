/**
 * Color picker control JS to handle color picker rendering within customize control.
 *
 * File `color.js`.
 *
 * @package Online_Education
 */
(
	function ( $ ) {

		$( window ).on( 'load', function () {
			$( 'html' ).addClass( 'colorpicker-ready' );
		} );

		wp.customize.controlConstructor[ 'online-education-color' ] = wp.customize.Control.extend( {

			ready : function () {

				'use strict';

				var control = this,
					isHueSlider = ( this.params.mode === 'hue' ),
					picker = this.container.find( '.online-education-color-picker-alpha' ),
					color = picker.val().replace( /\s+/g, '' );

				picker.wpColorPicker( {

					change : function ( event, ui ) {
						var current = ( isHueSlider ? ui.color.h() : picker.iris( 'color' ) );

						if ( jQuery( 'html' ).hasClass( 'colorpicker-ready' ) && color !== current.replace( /\s+/g, '' ) ) {
							control.setting.set( current );
						}
					},

					clear: function() {

						if ( ! control.setting.get() ) {
							control.setting.set( '' );
						}

						control.setting.set( '' );
					}

				} );

			}

		} );

	}
)( jQuery );
