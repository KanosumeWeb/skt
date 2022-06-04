/**
 * Dropdown categories control JS to handle the dropdown categories customize control.
 *
 * File `dropdown-categorie.js`.
 *
 * @package Online_Education
 */
wp.customize.controlConstructor[ 'online-education-dropdown-categories' ] = wp.customize.Control.extend( {

	ready : function () {

		'use strict';

		var control = this;

		// Change the value.
		this.container.on( 'change', 'select', function () {
			control.setting.set( jQuery( this ).val() );
		} );

	}

} );
